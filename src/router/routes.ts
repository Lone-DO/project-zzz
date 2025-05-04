// interface iRoute {
//   path: String
//   name: String
//   redirect
// }

// import { type RouteRecordSingleView, type RouteRecordRedirect } from 'vue-router'

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
  {
    path: '/movie',
    name: 'movies',
    component: () => import('@/views/movie/MovieIndex.vue')
  },
  {
    path: '/movie/new',
    name: 'movieNew',
    component: () => import('@/views/movie/MovieIndex.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('@/views/movie/MovieIndex.vue')
  }
]
export default routes
