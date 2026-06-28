import ZButton from './button/ZButton.vue'
export * as MockTemplate from './MockTemplate.vue'
import { createApp } from 'vue'
export function plugin(GivenVue: ReturnType<typeof createApp> | null) {
  if (!GivenVue) return null
  GivenVue.component('ZButton', ZButton)
}

export default {
  install: plugin,
  ZButton
}
