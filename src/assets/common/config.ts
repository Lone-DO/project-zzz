const config = {
  /** Set during during initialization, see "../../../vite.config.ts" */
  mode: '',
  baseUrl: '/',
  isPlugin: false,
  name: 'project-zzz',
  init(mode: string) {
    this.mode = mode
    this.baseUrl = mode === 'plugin' ? '/projects/zzz' : '/'
    return this.baseUrl
  },
  sanitizeRoute(path: string) {
    if (!path.includes(this.baseUrl)) return false
    const sanitized = this.isPlugin ? path.replace(this.baseUrl, '') : ''
    return sanitized
  },
}

export default config
