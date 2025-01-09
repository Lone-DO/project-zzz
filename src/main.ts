import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance
} from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import components from './components'

import requiredStyles from './assets/styles/main.css?raw'
// const app = createApp(App)
console.log('build:ZZZ')
export const pluginsWrapper = {
  install(GivenVue: any) {
    const Vue = GivenVue
    /** Vue Pinia */
    const pinia = createPinia()
    Vue.use(pinia)
    /** Vue Router */
    Vue.use(router)
    /** Custom Components */
    Vue.use(components)
  }
}

createWebComponent({
  rootComponent: App,
  elementName: 'project-zzz',
  plugins: pluginsWrapper,
  cssFrameworkStyles: requiredStyles,
  VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  // disableStyleRemoval: false, // default is false
  disableShadowDOM: false, // default is false
  replaceRootWithHostInCssFramework: true // default is false
})

// app.use(createPinia())
// app.use(router)

// // Bind components/ to global Vue components;
// app.use(components)

// app.mount('#app')
