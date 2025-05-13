// eslint-disable no-unused-vars
/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

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
  sanitizeRoute(path: string) {
    if (!path.includes(this.baseUrl)) return false
    const sanitized = isPlugin ? path.replace(this.baseUrl, '') : ''
    return sanitized
  },
}
