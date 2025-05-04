import { createRouter, createWebHashHistory, createWebHistory, type Router } from 'vue-router'
import routes from './routes'

export interface iRouter {
  instance: Router | null
  load: Function
  plugin: Function
}

export const self: iRouter = {
  instance: null,
  load,
  plugin
}

const component = () =>
  Promise.resolve({ name: 'mock-template', displayName: 'Mock Template', render: () => '' })
const homeRedirect = {
  path: '/',
  name: 'home',
  // component: () => import('@/views/HomeView.vue'),
  redirect: () => ({ name: 'movies' }),
  meta: {
    internalOnly: true
  }
}
const fallbackRoute = {
  path: '/:pathMatch(.*)*',
  redirect: () => ({ name: 'home' }),
  meta: { internalOnly: true }
}

export function plugin($router?: Router) {
  if ($router) {
    self.instance = $router
    for (const route of routes) {
      try {
        $router.addRoute({ children: [], ...route, component })
      } catch (error) {
        console.info(error)
      }
    }
  }
  return $router
}

export function load($router?: Router) {
  if ($router) {
    self.instance = $router
    return routes
  }
  return [homeRedirect, ...routes, fallbackRoute]
}

self.instance = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: load()
})

export default self.instance
