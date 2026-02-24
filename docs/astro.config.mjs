import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import solid from "@astrojs/solid-js"

const copyButtonTransformer = {
  name: "copy-button",
  pre(node) {
    node.properties["data-code"] = this.source
  },
}

// ---------------------------------------------------------------------------
// Custom integration: export cleaned .md files alongside HTML pages
// ---------------------------------------------------------------------------

/** Resolve the src/ root from the content directory. */
const srcRoot = path.join(process.cwd(), "src")

/**
 * Map a Vite/Astro import path (with @/ alias) to an absolute file path.
 * Strips the ?raw query suffix.
 */
function resolveImportPath(importPath) {
  const cleaned = importPath.replace(/\?raw$/, "")
  if (cleaned.startsWith("@/")) {
    return path.join(srcRoot, cleaned.slice(2))
  }
  return cleaned
}

/**
 * Infer a fenced code block language tag from a file extension.
 */
function langFromExt(filePath) {
  const ext = path.extname(filePath).slice(1)
  const map = { tsx: "tsx", ts: "ts", jsx: "jsx", js: "js" }
  return map[ext] || ext
}

/**
 * Strip MDX-specific syntax (imports, JSX component blocks) from raw .mdx
 * content and return clean Markdown suitable for standalone reading.
 *
 * When `sourceFilePath` is provided, ?raw imports are resolved from disk and
 * DemoBlock / StyledDemoBlock tags are replaced with fenced code blocks
 * containing the actual component source (CSS files are skipped).
 */
function cleanMdx(raw, sourceFilePath) {
  // 1. Remove frontmatter
  let content = raw.replace(/^---\n[\s\S]*?\n---\n*/, "")

  // 2. Build a map of ?raw imports: varName -> absolute file path
  const rawImports = new Map()
  for (const match of content.matchAll(/^import\s+(\w+)\s+from\s+["'](.+\?raw)["']\s*$/gm)) {
    rawImports.set(match[1], resolveImportPath(match[2]))
  }

  // 3. Protect existing code blocks: temporarily replace with placeholders
  const codeBlocks = []
  content = content.replace(/(```[\s\S]*?```|`[^`\n]+`)/g, (match) => {
    codeBlocks.push(match)
    return `__CODE_BLOCK_${codeBlocks.length - 1}__`
  })

  // 4. Remove all import lines (only outside code blocks now)
  content = content.replace(/^import\s+.+$/gm, "")

  // 5. Replace DemoBlock / StyledDemoBlock with fenced code blocks
  //    Match: <DemoBlock ...files={[...]}>...</DemoBlock>
  //    and:   <StyledDemoBlock ...files={[...]}>...</StyledDemoBlock>
  content = content.replace(/<(DemoBlock|StyledDemoBlock)\b[\s\S]*?<\/\1>\s*/g, (blockMatch) => {
    const codeBlockParts = []

    // Extract each { label: "...", code: varName } entry from the files prop
    const fileEntries = [...blockMatch.matchAll(/\{\s*label:\s*["']([^"']+)["']\s*,\s*code:\s*(\w+)\s*\}/g)]

    for (const [, label, varName] of fileEntries) {
      // Skip CSS files — only include component source (.tsx, .ts, .jsx, .js)
      if (/\.css$/i.test(label)) continue

      const absPath = rawImports.get(varName)
      if (!absPath) continue

      try {
        const source = fs.readFileSync(absPath, "utf-8").trimEnd()
        const lang = langFromExt(absPath)
        // Protect the new code block with a placeholder so steps 6-7 don't
        // strip JSX inside the source code
        const fenced = "```" + lang + "\n" + source + "\n```"
        codeBlocks.push(fenced)
        codeBlockParts.push(`__CODE_BLOCK_${codeBlocks.length - 1}__`)
      } catch {
        // File not found — skip silently
      }
    }

    return codeBlockParts.length > 0 ? codeBlockParts.join("\n\n") + "\n\n" : ""
  })

  // 6. Remove any remaining multi-line JSX blocks: <Component ...>...</Component>
  content = content.replace(/<([A-Z]\w*)\b[\s\S]*?<\/\1>\s*/g, "")

  // 7. Remove remaining self-closing JSX tags: <Component ... />
  content = content.replace(/<[A-Z]\w*\b[^>]*\/>\s*/g, "")

  // 8. Restore code blocks
  content = content.replace(/__CODE_BLOCK_(\d+)__/g, (_, i) => codeBlocks[i])

  // 9. Collapse 3+ consecutive blank lines into 2
  content = content.replace(/\n{3,}/g, "\n\n")

  return content.trim() + "\n"
}

/**
 * Recursively collect all files matching an extension under a directory.
 */
function walkDir(dir, ext, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkDir(full, ext, results)
    } else if (entry.name.endsWith(ext)) {
      results.push(full)
    }
  }
  return results
}

function markdownExport() {
  const contentDir = path.join(process.cwd(), "src/content/docs")

  return {
    name: "markdown-export",
    hooks: {
      // --- Production build: write .md files into dist/ ---
      "astro:build:done": async ({ dir }) => {
        const outRoot = fileURLToPath(dir)
        const mdxFiles = walkDir(contentDir, ".mdx")

        console.log(`\n[markdown-export] Generating ${mdxFiles.length} markdown files...`)

        for (const filePath of mdxFiles) {
          const raw = fs.readFileSync(filePath, "utf-8")
          const cleaned = cleanMdx(raw, filePath)

          // Compute output path to match Astro's HTML output structure:
          //   src/content/docs/ui/toast.mdx      -> dist/ui/toast/index.md
          //   src/content/docs/index.mdx          -> dist/index.md
          //   src/content/docs/nova/index.mdx     -> dist/nova/index.md
          //   src/content/docs/examples/index.mdx -> dist/examples/index.md
          const rel = path.relative(contentDir, filePath)
          const slug = rel.replace(/\.mdx?$/, "")

          let outPath
          if (slug === "index") {
            // Root index
            outPath = path.join(outRoot, "index.md")
          } else if (slug.endsWith("/index")) {
            // Subdirectory index (e.g. nova/index, examples/index)
            const dir = slug.replace(/\/index$/, "")
            outPath = path.join(outRoot, dir, "index.md")
          } else {
            // Regular page (e.g. ui/toast)
            outPath = path.join(outRoot, slug, "index.md")
          }

          fs.mkdirSync(path.dirname(outPath), { recursive: true })
          fs.writeFileSync(outPath, cleaned)
          console.log(`[markdown-export]   ${path.relative(outRoot, outPath)}`)
        }

        console.log("[markdown-export] Done.\n")
      },

      // --- Dev server: serve .md on the fly ---
      "astro:server:setup": async ({ server }) => {
        server.middlewares.use((req, res, next) => {
          if (!req.url?.endsWith("/index.md") && !req.url?.endsWith(".md")) {
            return next()
          }

          // Map URL to source file:
          //   /ui/toast/index.md  -> src/content/docs/ui/toast.mdx
          //   /index.md           -> src/content/docs/index.mdx
          let slug = req.url
            .replace(/^\//, "")
            .replace(/\/index\.md$/, "")
            .replace(/\.md$/, "")
          if (slug === "") slug = "index"

          const candidates = [
            path.join(contentDir, slug + ".mdx"),
            path.join(contentDir, slug + ".md"),
            path.join(contentDir, slug, "index.mdx"),
            path.join(contentDir, slug, "index.md"),
          ]

          const found = candidates.find((c) => fs.existsSync(c))
          if (!found) return next()

          const raw = fs.readFileSync(found, "utf-8")
          const cleaned = cleanMdx(raw, found)

          res.setHeader("Content-Type", "text/markdown; charset=utf-8")
          res.end(cleaned)
        })
      },
    },
  }
}

// https://astro.build/config
export default defineConfig({
  site: "https://ui.danielfrg.com",
  integrations: [solid(), mdx(), markdownExport()],
  markdown: {
    shikiConfig: {
      themes: {
        light: "min-light",
        dark: "github-dark",
      },
      transformers: [copyButtonTransformer],
    },
  },
})
