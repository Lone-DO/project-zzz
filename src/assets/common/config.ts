// eslint-disable no-unused-vars
/// <reference types="vite/client" />
/// <reference types="vite/types/importMeta.d.ts" />

let isPlugin: boolean = false

try {
  console.log({ isPlugin, import: import.meta.env.PROD })
  isPlugin = import.meta?.env?.VITE_PLUGIN === 'true'
} catch (error) {
  console.error(error)
  try {
    isPlugin = process.env.VITE_PLUGIN === 'true'
  } catch (error) {
    console.error(error)
  }
}

export default {
  baseUrl: isPlugin ? '/projects/zzz' : '/',
  isPlugin,
  name: 'project-zzz',
  sanitizeRoute(path: string) {
    if (!path.includes(this.baseUrl)) return false
    const sanitized = isPlugin ? path.replace(this.baseUrl, '') : ''
    return sanitized
  },
}
