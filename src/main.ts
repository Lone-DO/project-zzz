/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defineCustomElement as VueDefineCustomElement,
  h,
  createApp,
  getCurrentInstance,
} from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
/** General */
import App from '@/App.vue'
import config from '@/assets/common/config'
/** Register component version to Global State */
import def from '../package.json'
const { name, version } = def
/** Assets */
import Components from '@/components'
/** Plugins */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)
/** Generate Route Factory before initializing Plugins */
import _routeFactory from './router'
const routes = _routeFactory()

const self = {
  router: createRouter({
    history: createWebHistory(config.baseUrl),
    routes,
  }),
  baseUrl: config.baseUrl,
  name: 'zzz',
  config,
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
    Vue.component('font-awesome-icon', FontAwesomeIcon)

    this.instance = Vue

    console.log(name, version, this)
  },
}

try {
  createWebComponent({
    rootComponent: App,
    elementName: 'project-zzz',
    plugins: self,
    VueDefineCustomElement,
    h,
    createApp: (...args: unknown[]) => createApp({ ...args, name }),
    getCurrentInstance,
    disableShadowDOM: true,
    replaceRootWithHostInCssFramework: false,
  })
} catch (error: any) {
  if (error?.name !== 'NotSupportedError') console.error(error)
}

export default self
