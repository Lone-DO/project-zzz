/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineCustomElement as VueDefineCustomElement, h, createApp, getCurrentInstance } from 'vue'
import { createWebComponent } from 'vue-web-component-wrapper'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
/** General */
import App from '@/App.vue'
import config from '@/assets/common/config'
/** Register component version to Global State */
import def from '../package.json'
const { name, version } = def
/** Assets */
import Components from '@/components'
/** Generate Route Factory before initializing Plugins */
import _routeFactory from './router'
const routes = _routeFactory()

const self = {
  router: createRouter({
    history: config.isPlugin ? createWebHistory(config.baseUrl) : createWebHashHistory(config.baseUrl),
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

    this.instance = Vue

    if (process.env.NODE_ENV !== 'production') {
      console.log(name, version, this.instance)
    }
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
