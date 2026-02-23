# Solid UI unstyled and styled components

Unstyled components: In the `packages/core` directory.

- Mostly forked from [Kobalte](https://kobalte.dev) and others adapted from [Base UI](https://base-ui.com/)

Styled components: In the `packages/ui` directory.

- Use the headless components and adapted the [shadcn](https://ui.shadcn.com/) based on the Nova theme.

Other libraries source are available in:

- kobalte: ../kobalte
- base-ui: ../base-ui
- shadcn: ../shadcn-ui

## Docs

The docs are in the `packages/docs` directory.

Unstyled demos copy the styles from base-ui and the examples are a combination of Kobalte and Base UI.

Styled demos copy the shadcn examples from their source: apps/v4/registry/bases/base/examples/<component>-example.tsx
And copy the nova theme from the shadcn package.

## Coding Conventions

For Coding Style see [STYLE_GUIDE.md](STYLE_GUIDE.md).

- Use Bun instead of Node and npm.

## TypeScript

- Strict: No `any`. Use specific types or Generics.
- Imports: Import directly from source (e.g., `@/lib/hooks/useData`).

## Components

- Functional components only.
- Reuse components in the components/ui directory, for example buttons, checkboxes, etc.
- Use `useEffect` sparingly; prefer derived state or event handlers.
- Co-locate small, specific components in the same file if they aren't reused elsewhere.

## Linting

- Only fix errors, not warnings.
- Do not add `eslint-ignore` comments.

## Debugging

- NEVER try to restart the app, or the server process, EVER.

## Tool Calling

ALWAYS USE PARALLEL TOOLS WHEN APPLICABLE.
