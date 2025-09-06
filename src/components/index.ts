import ZButton from './button/ZButton.vue'
export * as MockTemplate from './MockTemplate.vue'

/** @ts-expect-error - Intentional any */
export function plugin(GivenVue) {
  if (!GivenVue) return null
  GivenVue.component('ZButton', ZButton)
}

export default {
  install: plugin,
  ZButton,
}
