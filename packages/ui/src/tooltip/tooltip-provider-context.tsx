import { type Accessor, createContext, useContext } from "solid-js"

export interface TooltipProviderStore {
  tooltips: Record<string, (immediate?: boolean) => void>
  warmedUp: boolean
  warmUpTimeout?: number
  coolDownTimeout?: number
  skipDelayTimeout?: number
}

export interface TooltipProviderContextValue {
  delay: Accessor<number | undefined>
  closeDelay: Accessor<number | undefined>
  skipDelayDuration: Accessor<number | undefined>
  store: TooltipProviderStore
}

export const TooltipProviderContext = createContext<TooltipProviderContextValue>()

export function useTooltipProviderContext() {
  return useContext(TooltipProviderContext)
}
