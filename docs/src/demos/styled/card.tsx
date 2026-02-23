import { Button } from "@danielfrg/solid-ui/button"
import { Badge } from "@danielfrg/solid-ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@danielfrg/solid-ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter } from "@danielfrg/solid-ui/card"

export function CardSize() {
  return (
    <div class="flex flex-wrap gap-6">
      <Card class="w-full max-w-xs">
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>A compact card for quick info.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">Brief summary content goes here.</p>
        </CardContent>
      </Card>
      <Card class="w-full max-w-md">
        <CardHeader>
          <CardTitle>Larger Card</CardTitle>
          <CardDescription>More room for detailed content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            This card has more space for longer descriptions, form fields, or other interactive elements.
          </p>
        </CardContent>
        <CardFooter class="justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export function CardImage() {
  return (
    <Card class="w-full max-w-sm overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&h=400&fit=crop"
        alt="Workspace"
        class="h-48 w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Modern Workspace</CardTitle>
        <CardDescription>Explore our curated collection of workspace setups.</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          Find inspiration for your home office with minimalist designs and ergonomic furniture recommendations.
        </p>
      </CardContent>
      <CardFooter>
        <Button class="w-full">Browse Collection</Button>
      </CardFooter>
    </Card>
  )
}

export function CardLogin() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>Enter your credentials to access your account.</CardDescription>
        <CardAction>
          <Button variant="link" size="sm">Sign up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium" for="login-email">Email</label>
            <input id="login-email" type="email" placeholder="name@example.com" class="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium" for="login-password">Password</label>
            <input id="login-password" type="password" placeholder="Enter your password" class="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button class="w-full">Log in</Button>
      </CardFooter>
    </Card>
  )
}

export function CardMeetingNotes() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Team Meeting</CardTitle>
        <CardDescription>Weekly standup - Jan 15, 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="text-sm text-muted-foreground">
          Discussed Q1 roadmap priorities, reviewed sprint progress, and aligned on release timeline for the new
          dashboard feature.
        </p>
      </CardContent>
      <CardFooter class="justify-between">
        <div class="flex -space-x-2">
          <Avatar class="size-7 ring-2 ring-background">
            <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face" />
            <AvatarFallback class="text-xs">A</AvatarFallback>
          </Avatar>
          <Avatar class="size-7 ring-2 ring-background">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" />
            <AvatarFallback class="text-xs">B</AvatarFallback>
          </Avatar>
          <Avatar class="size-7 ring-2 ring-background">
            <AvatarFallback class="text-xs">+2</AvatarFallback>
          </Avatar>
        </div>
        <Badge variant="secondary">Completed</Badge>
      </CardFooter>
    </Card>
  )
}

export function CardWithAction() {
  return (
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium" for="project-name">Name</label>
            <input id="project-name" placeholder="My project" class="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm font-medium" for="project-framework">Framework</label>
            <select id="project-framework" class="h-9 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
              <option>SolidJS</option>
              <option>React</option>
              <option>Svelte</option>
              <option>Vue</option>
            </select>
          </div>
        </form>
      </CardContent>
      <CardFooter class="justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
