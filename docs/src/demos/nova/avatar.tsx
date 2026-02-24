import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@danielfrg/solid-ui-nova/avatar"
import { Button } from "@danielfrg/solid-ui-nova/button"
import { Check, Plus } from "lucide-solid"
import { ExampleWrapper, Example } from "@/components/example"

export default function AvatarExample() {
  return (
    <ExampleWrapper>
      <AvatarSizes />
      <AvatarWithBadge />
      <AvatarWithBadgeIcon />
      <AvatarGroupExample />
      <AvatarGroupWithCount />
      <AvatarGroupWithIconCount />
      <AvatarInEmpty />
    </ExampleWrapper>
  )
}

function AvatarSizes() {
  return (
    <Example title="Sizes">
      <div class="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </Example>
  )
}

function AvatarWithBadge() {
  return (
    <Example title="Badge">
      <div class="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/jorgezreik.png" alt="@jorgezreik" />
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/jorgezreik.png" alt="@jorgezreik" />
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/jorgezreik.png" alt="@jorgezreik" />
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar>
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>JZ</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      </div>
    </Example>
  )
}

function AvatarWithBadgeIcon() {
  return (
    <Example title="Badge with Icon">
      <div class="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <Plus />
          </AvatarBadge>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <Plus />
          </AvatarBadge>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <Plus />
          </AvatarBadge>
        </Avatar>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <Avatar size="sm">
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <Check />
          </AvatarBadge>
        </Avatar>
        <Avatar>
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <Check />
          </AvatarBadge>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>PP</AvatarFallback>
          <AvatarBadge>
            <Check />
          </AvatarBadge>
        </Avatar>
      </div>
    </Example>
  )
}

function AvatarGroupExample() {
  return (
    <Example title="Group">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>
    </Example>
  )
}

function AvatarGroupWithCount() {
  return (
    <Example title="Group with Count">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>
    </Example>
  )
}

function AvatarInEmpty() {
  return (
    <Example title="In Empty">
      <div class="w-full flex-none rounded-xl border flex flex-col items-center justify-center gap-4 py-10 px-6 text-center">
        <AvatarGroup>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" class="grayscale" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" class="grayscale" />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" class="grayscale" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>
            <Plus />
          </AvatarGroupCount>
        </AvatarGroup>
        <div class="flex flex-col gap-1">
          <p class="text-sm font-semibold">No Team Members</p>
          <p class="text-muted-foreground text-sm">Invite your team to collaborate on this project.</p>
        </div>
        <Button>
          <Plus />
          Invite Members
        </Button>
      </div>
    </Example>
  )
}

function AvatarGroupWithIconCount() {
  return (
    <Example title="Group with Icon Count">
      <AvatarGroup>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <Plus />
        </AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <Plus />
        </AvatarGroupCount>
      </AvatarGroup>
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" class="grayscale" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" class="grayscale" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" class="grayscale" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>
          <Plus />
        </AvatarGroupCount>
      </AvatarGroup>
    </Example>
  )
}
