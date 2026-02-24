import { type ParentProps } from "solid-js"

import {
  TooltipProviderContext,
  type TooltipProviderContextValue,
  type TooltipProviderStore,
} from "./tooltip-provider-context"

export interface TooltipProviderOptions {
  /** Default open delay (ms) for tooltips within the provider. */
  delay?: number

  /** Default close delay (ms) for tooltips within the provider. */
  closeDelay?: number

  /** Default skip delay duration (ms) when moving between tooltips. */
  skipDelayDuration?: number
}

export interface TooltipProviderProps extends ParentProps<TooltipProviderOptions> {}

function createStore(): TooltipProviderStore {
  return {
    tooltips: {},
    warmedUp: false,
  }
}

/**
 * Provides shared delay grouping for tooltips.
 */
export function TooltipProvider(props: TooltipProviderProps) {
  const store = createStore()

  const context: TooltipProviderContextValue = {
    delay: () => props.delay,
    closeDelay: () => props.closeDelay,
    skipDelayDuration: () => props.skipDelayDuration,
    store,
  }

  return <TooltipProviderContext.Provider value={context}>{props.children}</TooltipProviderContext.Provider>
}
