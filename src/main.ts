/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'
import { createRouter, createWebHistory, type Router } from 'vue-router'
import { createPinia } from 'pinia'
/** General */
import App from '@/App.vue'
import config from '@/assets/common/config'
/** Register component version to Global State */
import def from '../package.json'
const { name, version } = def
/** Assets */
import requiredStyles from '@/assets/styles/main.css?raw'
// ZZZ/src/assets/styles/main.css
import Components from '@/components'
/** Plugins */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
// import { type iRouter, default as $router, plugin as routerPlugin } from './router'
/** Generate Route Factory before initializing Plugins */
import _routeFactory from './router'
const routes = _routeFactory()
// export const routeFactory = _routeFactory
/** Interfaces */
// interface iOptions {
//   router: Router | undefined
//   config: iConfig | undefined
// }
// interface iConfig {
//   appVersions: [
//     {
//       name: String
//       version: String
//       description: String
//     }?
//   ]
// }
// export interface iSelf {
//   baseUrl?: String
//   config: iConfig | null
//   component: Component
//   components: {}
//   create?: Function
//   router: Router | null
//   name: String
//   instance: Component | null
//   install: (app: any, options?: iOptions) => void
// }

const baseUrl = import.meta.env.VITE_PLUGIN === 'true' ? '/zzz' : '/'

const self = {
  router: createRouter({
    history: createWebHistory(baseUrl),
    routes,
  }),
  baseUrl,
  name: 'zzz',
  config: null,
  instance: null,
  component: App,
  components: Components,
  install(Vue: any) {
    /** Vue Pinia */
    Vue.use(createPinia())
    /** Vue Router */
    Vue.use(this.router)
    /** Global Components Registry */
    Vue.use(Components)
    this.instance = Vue

    console.log(name, version, Vue)
  },
}

try {
  if (config.isPlugin) {
    createWebComponent({
      rootComponent: App,
      elementName: 'project-zzz',
      plugins: self,
      cssFrameworkStyles: requiredStyles,
      VueDefineCustomElement,
      h,
      createApp: (...args: unknown[]) => createApp({ name, ...args }),
      getCurrentInstance,
      disableShadowDOM: true,
      replaceRootWithHostInCssFramework: true,
    })
  } else {
    const app = createApp({ name, ...App })
    self.install(app)
    app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
  }
} catch (error: any) {
  if (error?.name !== 'NotSupportedError') console.error(error)
}

export default self
