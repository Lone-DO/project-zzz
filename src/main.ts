import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
  type Component
} from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { createPinia } from 'pinia'
/** General */
import App from '@/App.vue'
import def from '../package.json'
/** Assets */
import requiredStyles from '@/assets/styles/main.css?raw'
// ZZZ/src/assets/styles/main.css
import Components from '@/components'
/** Plugins */
// import { type iRouter, default as $router, plugin as routerPlugin } from './router'
/** Generate Route Factory before initializing Plugins */
import _routeFactory from './router'
const routes = _routeFactory()
// export const routeFactory = _routeFactory
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
  create?: Function
  router: Router | null
  name: String
  instance: Component | null
  install: (app: any, options?: iOptions) => void
}

const self: iSelf = {
  router: createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  }),
  name: 'zzz',
  config: null,
  instance: null,
  component: App,
  components: Components,
  install(Vue) {
    /** Vue Pinia */
    Vue.use(createPinia())
    /** Vue Router */
    Vue.use(this.router)
    /** Global Components Registry */
    Vue.use(Components)
    this.instance = Vue
    /** Register component version to Global State */
    const { name, version } = def
    console.log(name, version, Vue)
  }
}

try {
  createWebComponent({
    rootComponent: App,
    elementName: 'project-zzz',
    plugins: self,
    cssFrameworkStyles: requiredStyles,
    VueDefineCustomElement,
    h,
    createApp: (...args: any) => createApp({ name: 'ZenlessZoneZero', ...args }),
    getCurrentInstance,
    disableShadowDOM: true,
    replaceRootWithHostInCssFramework: true
  })
} catch (error: any) {
  if (error?.name !== 'NotSupportedError') console.error(error)
}

export default self
