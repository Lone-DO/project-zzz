import config from '../assets/common/config'

const routes = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/views/AboutView.vue')
  // },
  // {
  //   path: '/character',
  //   name: 'characters',
  //   component: () => import('@/views/character/CharacterIndex.vue')
  // },
  // {
  //   path: '/bangboo',
  //   name: 'bangboo',
  //   component: () => import('@/views/bangboo/BangbooIndex.vue')
  // },
  // {
  //   path: '/',
  //   name: 'home',
  //   meta: { internalOnly: true },
  //   component: () => import('@/components/MockTemplate.vue'),
  //   beforeEnter: () => {
  //     if (import.meta.env.VITE_PLUGIN !== 'true') return { name: 'movies' }
  //     // reject the navigation
  //     return true
  //   }
  // },
  {
    path: '/movie',
    name: 'movies',
    component: () => import('@/views/movie/MovieIndex.vue'),
    children: [
      {
        path: '/movie/new',
        name: 'movieNew',
        component: () => import('@/views/movie/MovieDetails.vue'),
      },
      {
        path: '/movie/:id',
        name: 'movie',
        component: () => import('@/views/movie/MovieDetails.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    meta: { internalOnly: true },
    component: () => import('@/components/MockTemplate.vue'),
    beforeEnter: () => {
      if (config.isPlugin) {
        return window.location.pathname.includes(config.baseUrl) ? { name: 'movies' } : true
      }
      return { name: 'movies' }
    },
  },
]
export default routes
