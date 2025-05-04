import defaultRoutes from './routes'

function routeFactory() {
  const context = import.meta.glob('../modules/**/*/routes.js', { eager: true, import: 'default' })
  const routes = Object.keys(context).reduce((routes, filePath) => {
    const module = (context[filePath] as []) || []
    return routes.concat(module)
  }, defaultRoutes)
  if (import.meta.env.VITE_PLUGIN === 'true') return routes
  return routes.concat([])
}

export default routeFactory
