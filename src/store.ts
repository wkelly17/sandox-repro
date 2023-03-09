import { createSignal } from "solid-js"
const [playerLoader, setPlayerLoaderModule] = createSignal<{
  loaded: boolean
  module: undefined | ((parameters: Object) => Promise<any> | undefined)
}>({
  loaded: false,
  module: undefined
})

export { setPlayerLoaderModule, playerLoader }
