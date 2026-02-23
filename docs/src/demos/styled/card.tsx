import { Button } from "@danielfrg/solid-ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@danielfrg/solid-ui/card"
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@danielfrg/solid-ui/avatar"
import { Captions, Plus } from "lucide-solid"

export function CardDefault() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Default Card</CardTitle>
        <CardDescription>This card uses the default size variant.</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          The card component supports a size prop that defaults to "default" for standard spacing and sizing.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" class="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}

export function CardSmall() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Small Card</CardTitle>
        <CardDescription>This card uses the small size variant.</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          The card component supports a size prop that can be set to "sm" for a more compact appearance.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" class="w-full">
          Action
        </Button>
      </CardFooter>
    </Card>
  )
}

export function CardHeaderWithBorder() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader class="border-b">
        <CardTitle>Header with Border</CardTitle>
        <CardDescription>This is a card with a header that has a bottom border.</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          The header has a border-b class applied, creating a visual separation between the header and content sections.
        </p>
      </CardContent>
    </Card>
  )
}

export function CardFooterWithBorder() {
  return (
    <Card class="w-full max-w-sm">
      <CardContent>
        <p class="text-sm text-muted-foreground">
          The footer has a border-t class applied, creating a visual separation between the content and footer sections.
        </p>
      </CardContent>
      <CardFooter class="border-t">
        <Button variant="outline" class="w-full">
          Footer with Border
        </Button>
      </CardFooter>
    </Card>
  )
}

export function CardWithImage() {
  return (
    <Card class="relative w-full max-w-sm overflow-hidden pt-0">
      <div class="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
      <img
        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Photo by mymind on Unsplash"
        class="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
      />
      <CardHeader>
        <CardTitle>Beautiful Landscape</CardTitle>
        <CardDescription>A stunning view that captures the essence of natural beauty.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button class="w-full">
          <Plus class="size-4" />
          Button
        </Button>
      </CardFooter>
    </Card>
  )
}

export function CardLogin() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium" for="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              class="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex items-center">
              <label class="text-sm font-medium" for="password">
                Password
              </label>
              <a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                Forgot your password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              class="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter class="flex-col gap-2">
        <Button type="submit" class="w-full">
          Login
        </Button>
        <Button variant="outline" class="w-full">
          Login with Google
        </Button>
        <div class="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="#" class="underline underline-offset-4">
            Sign up
          </a>
        </div>
      </CardFooter>
    </Card>
  )
}

export function CardMeetingNotes() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Meeting Notes</CardTitle>
        <CardDescription>Transcript from the meeting with the client.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            <Captions class="size-4" />
            Transcribe
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          Client requested dashboard redesign with focus on mobile responsiveness.
        </p>
        <ol class="mt-4 flex list-decimal flex-col gap-2 pl-6 text-sm text-muted-foreground">
          <li>New analytics widgets for daily/weekly metrics</li>
          <li>Simplified navigation menu</li>
          <li>Dark mode support</li>
          <li>Timeline: 6 weeks</li>
          <li>Follow-up meeting scheduled for next Tuesday</li>
        </ol>
      </CardContent>
      <CardFooter>
        <AvatarGroup>
          <Avatar class="size-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback class="text-xs">CN</AvatarFallback>
          </Avatar>
          <Avatar class="size-8">
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
            <AvatarFallback class="text-xs">LR</AvatarFallback>
          </Avatar>
          <Avatar class="size-8">
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
            <AvatarFallback class="text-xs">ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount class="size-8 text-xs">+8</AvatarGroupCount>
        </AvatarGroup>
      </CardFooter>
    </Card>
  )
}
