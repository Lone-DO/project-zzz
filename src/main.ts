import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  type Component
} from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'
import type { Router } from 'vue-router'
import { createPinia } from 'pinia'
/** General */
import { type iRouter, default as router, plugin as routerPlugin } from './router'
import components, { plugin as componentPlugin } from './components'
import requiredStyles from './assets/styles/main.css?raw'
import def from '../package.json'
import App from './App.vue'
/** Interfaces */
interface iOptions {
  router: Router | undefined
  config: iConfig | undefined
}
interface iConfig {
  appVersions: [
    {
      name: String
      version: String
      description: String
    }?
  ]
}
export interface iSelf {
  config: iConfig | null
  component: Component
  components: {}
  create: Function
  router: iRouter
  name: String
  instance: Component | null
  install: (app: any, options?: iOptions) => void
}

const self: iSelf = {
  router,
  name: 'zzz',
  config: null,
  instance: null,
  component: App,
  components: components,
  install(GivenVue, options) {
    /** Register component version to Global State */
    const { name, version, description } = def
    console.log(name, version)
    if (options) {
      /** PLUGIN MODE */
      const { router, config } = options
      self.config = config || null
      routerPlugin(router)
      /** Bind components/ to global Vue components; */
      componentPlugin(GivenVue)
      if (config) {
        if (!config.appVersions) config.appVersions = []
        config.appVersions.push({ name, version, description })
      }
      self.instance = GivenVue
    } else {
      /** INDEPENDENT MODE */
      const Vue = createApp(App)
      /** Vue Pinia */
      const pinia = createPinia()
      Vue.use(pinia)
      Vue.use(router)
      Vue.use(components)
      self.instance = Vue
    }
  },
  create() {
    console.log('create', self.instance)
    if (self.instance) return null
    createWebComponent({
      rootComponent: App,
      elementName: 'project-zzz',
      plugins: this,
      cssFrameworkStyles: requiredStyles,
      VueDefineCustomElement,
      h,
      createApp,
      getCurrentInstance,
      // disableStyleRemoval: false, // default is false
      disableShadowDOM: false, // default is false
      replaceRootWithHostInCssFramework: true // default is false
    })
  }
}

export default self
