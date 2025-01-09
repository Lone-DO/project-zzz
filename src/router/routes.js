const routes = [
  {
    path: '/',
    name: 'home',
    // component: () => import('@/views/HomeView.vue'),
    redirect: () => ({ name: 'movies' })
  },
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
    component: () => import('@zzz/views/movie/MovieIndex.vue')
  },
  {
    path: '/movie/new',
    name: 'movieNew',
    component: () => import('@zzz/views/movie/MovieIndex.vue')
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('@zzz/views/movie/MovieIndex.vue')
  }
  // { path: '/:pathMatch(.*)*', redirect: () => ({ name: 'home' }) }
]
export default routes
