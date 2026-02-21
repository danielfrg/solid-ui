import { Skeleton } from "@danielfrg/ui/skeleton"

export function SkeletonShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Loading States</h2>
          <p class="text-sm text-muted-foreground mt-1">Skeletons provide a placeholder while content is loading.</p>
        </div>
        <div class="flex flex-col gap-6">
          {/* Card skeleton */}
          <div class="flex items-center gap-4">
            <Skeleton class="size-12 rounded-full" />
            <div class="flex flex-col gap-2">
              <Skeleton class="h-4 w-[200px]" />
              <Skeleton class="h-4 w-[150px]" />
            </div>
          </div>

          {/* Text block skeleton */}
          <div class="flex flex-col gap-2">
            <Skeleton class="h-4 w-full" />
            <Skeleton class="h-4 w-[80%]" />
            <Skeleton class="h-4 w-[60%]" />
          </div>

          {/* Image + text skeleton */}
          <div class="flex flex-col gap-3">
            <Skeleton class="h-[125px] w-[250px] rounded-xl" />
            <Skeleton class="h-4 w-[250px]" />
            <Skeleton class="h-4 w-[200px]" />
          </div>
        </div>
      </section>
    </div>
  )
}
