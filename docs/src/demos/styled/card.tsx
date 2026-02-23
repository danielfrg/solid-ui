import { Button } from "@danielfrg/ui/button"
import { Badge } from "@danielfrg/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@danielfrg/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@danielfrg/ui/card"

function avatarUrl(seed: number) {
  return `https://avatar.vercel.sh/${seed}`
}

export function CardSize() {
  return (
    <div class="grid gap-6 sm:grid-cols-2">
      <Card class="max-w-sm">
        <CardHeader>
          <CardTitle>Small card</CardTitle>
          <CardDescription>Compact layout for tight spaces.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Perfect for quick summaries and status updates.</p>
        </CardContent>
      </Card>
      <Card class="max-w-lg">
        <CardHeader>
          <CardTitle>Large card</CardTitle>
          <CardDescription>More room for details and actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Use larger cards when you need to show additional context.</p>
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
    </div>
  )
}

export function CardImage() {
  return (
    <Card class="max-w-lg overflow-hidden pt-0">
      <div class="relative">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
          alt="Landscape"
          class="h-48 w-full object-cover"
        />
        <div class="absolute inset-0 bg-black/35" />
      </div>
      <CardHeader>
        <CardTitle>Card with image</CardTitle>
        <CardDescription>Use media to add context to your card content.</CardDescription>
        <CardAction>
          <Badge variant="outline">Featured</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">A simple image header pairs well with shorter summaries.</p>
      </CardContent>
      <CardFooter>
        <Button class="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}

export function CardLogin() {
  return (
    <Card class="max-w-sm w-full">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
        <CardAction>
          <Button variant="link" class="p-0 h-auto text-sm">
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <label class="text-sm font-medium leading-none" for="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="m@example.com"
              class="h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-sm"
            />
          </div>
          <div class="grid gap-2">
            <label class="text-sm font-medium leading-none" for="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              class="h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-sm"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter class="flex-col gap-2">
        <Button class="w-full">Login</Button>
        <Button variant="outline" class="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

export function CardMeetingNotes() {
  return (
    <Card class="max-w-sm w-full">
      <CardHeader>
        <CardTitle>Meeting Notes</CardTitle>
        <CardDescription>Review and manage your meeting transcripts.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Transcribe
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          Discussed Q4 roadmap priorities, assigned action items for the design system migration, and reviewed the
          latest user research findings.
        </p>
      </CardContent>
      <CardFooter class="gap-2">
        <div class="flex -space-x-2">
          <Avatar class="size-7 border-2 border-background">
            <AvatarImage src={avatarUrl(1)} />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <Avatar class="size-7 border-2 border-background">
            <AvatarImage src={avatarUrl(2)} />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <Avatar class="size-7 border-2 border-background">
            <AvatarImage src={avatarUrl(3)} />
            <AvatarFallback>C</AvatarFallback>
          </Avatar>
        </div>
        <span class="text-xs text-muted-foreground ml-1">+3 participants</span>
      </CardFooter>
    </Card>
  )
}

export function CardWithAction() {
  return (
    <Card class="max-w-sm w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4">
          <div class="grid gap-2">
            <label class="text-sm font-medium leading-none" for="project-name">
              Name
            </label>
            <input
              id="project-name"
              placeholder="My Project"
              class="h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-sm"
            />
          </div>
          <div class="grid gap-2">
            <label class="text-sm font-medium leading-none" for="framework">
              Framework
            </label>
            <select id="framework" class="h-9 w-full rounded-md border bg-transparent px-3 text-sm shadow-sm">
              <option>Next.js</option>
              <option>SvelteKit</option>
              <option>Astro</option>
              <option>Nuxt.js</option>
            </select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" class="w-full">
          Cancel
        </Button>
        <Button class="w-full">Deploy</Button>
      </CardFooter>
    </Card>
  )
}
