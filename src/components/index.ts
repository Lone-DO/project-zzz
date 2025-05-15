import ZButton from './button/ZButton.vue'
export * as MockTemplate from './MockTemplate.vue'

export function plugin(GivenVue: any) {
  if (!GivenVue) return null
  GivenVue.component('ZButton', ZButton)
}

export default {
  install: plugin,
  ZButton
}
