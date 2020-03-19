import { createHook } from 'overmind-react'
import { state } from './state'
import { onInitialize } from './onInitialize'
import * as actions from './actions'
import effects from './effects'
import { IConfig, createOvermind } from 'overmind'

export const config = {
  onInitialize,
  state,
  actions,
  effects,
}

export const useApp = createHook<typeof config>()

export const overmind = createOvermind(config, {
  devtools: false,
})

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}
