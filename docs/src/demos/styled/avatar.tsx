import { Avatar, AvatarFallback, AvatarImage } from "@danielfrg/solid-ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@danielfrg/solid-ui/dropdown-menu"
import { For } from "solid-js"
import { LogOut, Settings, User } from "lucide-solid"

const urls = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face",
]

export function AvatarBasic() {
  return (
    <div class="flex items-center gap-6">
      <Avatar>
        <AvatarImage src={urls[0]} alt="User" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>DR</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarBadge() {
  return (
    <div class="flex items-center gap-6">
      <div class="relative">
        <Avatar>
          <AvatarImage src={urls[0]} alt="Online" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-green-500" />
      </div>
      <div class="relative">
        <Avatar>
          <AvatarImage src={urls[1]} alt="Away" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-yellow-500" />
      </div>
      <div class="relative">
        <Avatar>
          <AvatarFallback>OF</AvatarFallback>
        </Avatar>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-muted" />
      </div>
    </div>
  )
}

export function AvatarBadgeIcon() {
  return (
    <div class="relative inline-flex">
      <Avatar>
        <AvatarImage src={urls[0]} alt="Verified" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span class="absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="size-2.5"><polyline points="20 6 9 17 4 12" /></svg>
      </span>
    </div>
  )
}

export function AvatarGroup() {
  return (
    <div class="flex -space-x-3">
      <For each={urls}>
        {(url, i) => (
          <Avatar class="ring-2 ring-background">
            <AvatarImage src={url} alt={`Member ${i() + 1}`} />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
        )}
      </For>
    </div>
  )
}

export function AvatarGroupCount() {
  return (
    <div class="flex -space-x-3">
      <For each={urls}>
        {(url, i) => (
          <Avatar class="ring-2 ring-background">
            <AvatarImage src={url} alt={`Member ${i() + 1}`} />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
        )}
      </For>
      <Avatar class="ring-2 ring-background">
        <AvatarFallback class="text-xs">+3</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarGroupIcon() {
  return (
    <div class="flex -space-x-3">
      <For each={urls.slice(0, 2)}>
        {(url, i) => (
          <Avatar class="ring-2 ring-background">
            <AvatarImage src={url} alt={`Member ${i() + 1}`} />
            <AvatarFallback>TM</AvatarFallback>
          </Avatar>
        )}
      </For>
      <Avatar class="ring-2 ring-background">
        <AvatarFallback>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="size-4"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarSizes() {
  return (
    <div class="flex items-center gap-4">
      <Avatar class="size-7">
        <AvatarImage src={urls[0]} alt="Small" />
        <AvatarFallback class="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={urls[0]} alt="Default" />
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>
      <Avatar class="size-14">
        <AvatarImage src={urls[0]} alt="Large" />
        <AvatarFallback class="text-lg">LG</AvatarFallback>
      </Avatar>
      <Avatar class="size-20">
        <AvatarImage src={urls[0]} alt="XL" />
        <AvatarFallback class="text-xl">XL</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger class="cursor-pointer rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <Avatar>
          <AvatarImage src={urls[0]} alt="User menu" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-48">
        <DropdownMenuItem>
          <User class="size-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings class="size-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut class="size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
