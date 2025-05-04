// utils file
import RootRouter from '../router'
import { type Router } from 'vue-router'
import { getCurrentInstance } from 'vue'
// import Vuex from 'vuex';

// export const useStore = () => {
//   const vm = getCurrentInstance();
//   const $store = RootStore instanceof Vuex.Store ? RootStore : RootStore?.instance;
//   if (!vm && !$store) throw new Error('must be called in setup');
//   return vm?.proxy?.$store || $store;
// };

export const useRoute = () => {
  const vm = getCurrentInstance()
  const $router = RootRouter
  if (!vm && !$router) throw new Error('must be called in setup')
  return vm?.proxy?.$route || $router?.currentRoute?.value
}

export const useRouter = () => {
  const vm = getCurrentInstance()
  const $router = RootRouter
  if (!vm && !$router) throw new Error('must be called in setup')
  return vm?.proxy?.$router || $router
}
