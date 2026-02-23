import { Card, CardContent, CardHeader } from "@danielfrg/solid-ui/card"
import { Skeleton } from "@danielfrg/solid-ui/skeleton"

export function SkeletonShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Avatar</h3>
        <div class="flex items-center gap-4">
          <Skeleton class="size-10 shrink-0 rounded-full" />
          <div class="grid gap-2">
            <Skeleton class="h-4 w-[150px]" />
            <Skeleton class="h-4 w-[100px]" />
          </div>
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Card</h3>
        <Card class="w-full max-w-sm">
          <CardHeader class="gap-2">
            <Skeleton class="h-4 w-2/3" />
            <Skeleton class="h-4 w-1/2" />
          </CardHeader>
          <CardContent>
            <Skeleton class="aspect-square w-full" />
          </CardContent>
        </Card>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Text</h3>
        <div class="flex w-full flex-col gap-2">
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-3/4" />
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Form</h3>
        <div class="flex w-full flex-col gap-7">
          <div class="flex flex-col gap-3">
            <Skeleton class="h-4 w-20" />
            <Skeleton class="h-10 w-full" />
          </div>
          <div class="flex flex-col gap-3">
            <Skeleton class="h-4 w-24" />
            <Skeleton class="h-10 w-full" />
          </div>
          <Skeleton class="h-9 w-24" />
        </div>
      </section>

      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold">Table</h3>
        <div class="flex w-full flex-col gap-2">
          <div class="flex gap-4">
            <Skeleton class="h-4 flex-1" />
            <Skeleton class="h-4 w-24" />
            <Skeleton class="h-4 w-20" />
          </div>
          <div class="flex gap-4">
            <Skeleton class="h-4 flex-1" />
            <Skeleton class="h-4 w-24" />
            <Skeleton class="h-4 w-20" />
          </div>
          <div class="flex gap-4">
            <Skeleton class="h-4 flex-1" />
            <Skeleton class="h-4 w-24" />
            <Skeleton class="h-4 w-20" />
          </div>
        </div>
      </section>
    </div>
  )
}
