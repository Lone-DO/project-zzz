import defaultRoutes from './routes'
import config from '@/assets/common/config'

function routeFactory() {
  const context = import.meta.glob('../modules/**/*/routes.js', { eager: true, import: 'default' })
  const routes = Object.keys(context).reduce((routes, filePath) => {
    const module = (context[filePath] as []) || []
    return routes.concat(module)
  }, defaultRoutes)
  if (config.isPlugin) {
    // return routes.map((item) => ({ ...item, path: `${config.baseUrl}${item?.path}`, meta: { ...item.meta, preParsed: true } }))
    return routes.map((item) => ({ ...item, meta: { ...item.meta, preParsed: true } }))
  }
  if (import.meta.env.VITE_PLUGIN === 'true') return routes
  return routes
}

export default routeFactory
