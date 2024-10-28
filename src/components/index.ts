import zButton from './button/zButton.vue'

const components = {
  install(Vue: any) {
    Vue.component('ZButton', zButton)
  }
}

export { components as default, zButton }
