const isPlugin = import.meta.env.VITE_PLUGIN === 'true'
export default {
  baseUrl: isPlugin ? '/zzz' : '/',
  isPlugin,
  sanitizeRoute(path: string) {
    if (!path.includes(this.baseUrl)) return false
    const sanitized = isPlugin ? path.replace(this.baseUrl, '') : ''
    return sanitized
  },
}
