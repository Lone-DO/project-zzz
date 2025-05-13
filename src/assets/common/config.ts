// eslint-disable no-unused-vars
/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

import { getCurrentInstance } from 'vue'

let isPlugin: null | boolean = localStorage.getItem('VITE_PLUGIN') === 'true'
if (!isPlugin) {
  try {
    isPlugin = import.meta?.env?.VITE_PLUGIN === 'true'
  } catch (error) {
    console.error(error)
    try {
      isPlugin = process.env.VITE_PLUGIN === 'true'
    } catch (error) {
      console.error(error)
    }
  }
}

export default {
  isPlugin,
  name: 'project-zzz',
  baseUrl: isPlugin ? '/projects/zzz' : '/',
  enableDevTools() {
    const App = getCurrentInstance()?.appContext?.app
    if (!App) return false
    try {
      const version = App.version
      const devtools = window.__VUE_DEVTOOLS_GLOBAL_HOOK__
      devtools.enabled = true
      // devtools.emit('app:init', App, version, {})
    } catch (error) {
      console.error(error)
    }
  },
  sanitizeRoute(path: string) {
    if (!path.includes(this.baseUrl)) return false
    const sanitized = isPlugin ? path.replace(this.baseUrl, '') : ''
    return sanitized
  },
}
