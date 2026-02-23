import { Avatar, AvatarImage, AvatarFallback } from "@danielfrg/solid-ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@danielfrg/solid-ui/dropdown-menu"
import { Check, LogOut, Settings, UserPlus } from "lucide-solid"

const avatarUrl = (id: number) => `https://i.pravatar.cc/128?img=${id}`

export function AvatarBasic() {
  return (
    <div class="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={avatarUrl(10)} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatarUrl(32)} />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarBadge() {
  return (
    <div class="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={avatarUrl(5)} />
        <AvatarFallback>ER</AvatarFallback>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-emerald-500" />
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
        <span class="absolute bottom-0 right-0 size-3 rounded-full border-2 border-background bg-amber-500" />
      </Avatar>
    </div>
  )
}

export function AvatarBadgeIcon() {
  return (
    <div class="flex items-center gap-4">
      <Avatar>
        <AvatarImage src={avatarUrl(16)} />
        <AvatarFallback>OK</AvatarFallback>
        <span class="absolute bottom-0 right-0 flex size-4 items-center justify-center rounded-full border-2 border-background bg-emerald-500 text-white">
          <Check class="size-2.5" />
        </span>
      </Avatar>
      <Avatar>
        <AvatarFallback>MV</AvatarFallback>
        <span class="absolute bottom-0 right-0 flex size-4 items-center justify-center rounded-full border-2 border-background bg-sky-500 text-white">
          <Check class="size-2.5" />
        </span>
      </Avatar>
    </div>
  )
}

export function AvatarGroup() {
  return (
    <div class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      <Avatar>
        <AvatarImage src={avatarUrl(10)} />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatarUrl(32)} />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatarUrl(5)} />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarGroupCount() {
  return (
    <div class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
      <Avatar>
        <AvatarImage src={avatarUrl(10)} />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatarUrl(32)} />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback class="bg-muted text-xs font-semibold">+3</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarGroupIcon() {
  return (
    <div class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
      <Avatar>
        <AvatarImage src={avatarUrl(45)} />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatarUrl(20)} />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback class="bg-muted text-xs font-semibold">+2</AvatarFallback>
        <span class="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
          <UserPlus class="size-3" />
        </span>
      </Avatar>
    </div>
  )
}

export function AvatarSizes() {
  return (
    <div class="flex items-center gap-4">
      <Avatar class="size-7">
        <AvatarImage src={avatarUrl(10)} />
        <AvatarFallback class="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={avatarUrl(10)} />
        <AvatarFallback>DF</AvatarFallback>
      </Avatar>
      <Avatar class="size-14">
        <AvatarImage src={avatarUrl(10)} />
        <AvatarFallback class="text-lg">LG</AvatarFallback>
      </Avatar>
      <Avatar class="size-20">
        <AvatarImage src={avatarUrl(10)} />
        <AvatarFallback class="text-xl">XL</AvatarFallback>
      </Avatar>
    </div>
  )
}

export function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger as={Avatar} class="cursor-pointer">
        <AvatarImage src={avatarUrl(24)} />
        <AvatarFallback>JD</AvatarFallback>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-48">
        <DropdownMenuItem>
          <Settings class="mr-2 size-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <UserPlus class="mr-2 size-4" />
          Invite team
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem class="text-destructive">
          <LogOut class="mr-2 size-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
