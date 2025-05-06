const isPlugin = import.meta.env.VITE_PLUGIN === 'true'
export default {
  baseUrl: isPlugin ? '/zzz' : '/',
  isPlugin
}
