const config = {
  /** Set during during initialization, see "../../../vite.config.ts" */
  mode: '',
  baseUrl: '/',
  isPlugin: false,
  name: 'project-zzz',
  logo: 'https://upload-os-bbs.hoyolab.com/upload/2022/06/13/100427891/e8dd8dccf42ef711a7636f8acb2e88a1_1247066826655080311.png',
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
