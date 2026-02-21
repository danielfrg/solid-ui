import { Button } from "@danielfrg/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@danielfrg/ui/card"

export function CardShowcase() {
  return (
    <div class="flex flex-col gap-8">
      <section class="flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-semibold tracking-tight text-foreground">Basic Card</h2>
          <p class="text-sm text-muted-foreground mt-1">A card with header, content, and footer sections.</p>
        </div>
        <div class="grid gap-6 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description with supporting text.</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm">This is the main content area of the card.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
              <Button size="sm" class="ml-auto">
                Save
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-col gap-2 text-sm">
                <div class="flex items-center gap-2">
                  <div class="size-2 rounded-full bg-primary" />
                  <span>Your call has been confirmed.</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="size-2 rounded-full bg-primary" />
                  <span>You have a new message!</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="size-2 rounded-full bg-muted" />
                  <span>Your subscription is expiring soon.</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
