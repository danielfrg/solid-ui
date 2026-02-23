import { Skeleton } from "@danielfrg/solid-ui/skeleton"

export function SkeletonShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Card</h3>
        <div class="flex items-center gap-4">
          <Skeleton class="size-12 rounded-full" />
          <div class="flex flex-col gap-2">
            <Skeleton class="h-4 w-[200px]" />
            <Skeleton class="h-4 w-[160px]" />
          </div>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Text Block</h3>
        <div class="flex flex-col gap-2">
          <Skeleton class="h-4 w-[300px]" />
          <Skeleton class="h-4 w-[260px]" />
          <Skeleton class="h-4 w-[220px]" />
          <Skeleton class="h-4 w-[180px]" />
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Image + Text</h3>
        <div class="flex flex-col gap-3">
          <Skeleton class="h-[125px] w-[250px] rounded-xl" />
          <div class="flex flex-col gap-2">
            <Skeleton class="h-4 w-[250px]" />
            <Skeleton class="h-4 w-[200px]" />
          </div>
        </div>
      </section>
    </div>
  )
}
