import zButton from './button/ZButton.vue'

const components = {
  install(Vue: any) {
    Vue.component('ZButton', zButton)
  }
}

export { components as default, zButton }
