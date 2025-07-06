<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef, ref, computed, onErrorCaptured, watch } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import config from './assets/common/config'

const route = useRoute()
const router = useRouter()

/** Event Lister */
const header = useTemplateRef('header')
const footer = useTemplateRef('footer')
const headerHeight = ref(0)
const footerHeight = ref(0)

const props = defineProps({ path: { type: String, default: null }, styles: { type: Object, default: null } })

watch(
  () => props.path,
  (path) => {
    try {
      const sanitized = config.sanitizeRoute(path)
      if (sanitized) router.replace(sanitized)
    } catch (err) {
      console.error(err)
    }
  },
)

function onResize(): void {
  headerHeight.value = header.value?.clientHeight || 0
  footerHeight.value = footer.value?.clientHeight || 0
}

onErrorCaptured((err, vm) => {
  console.error({ err, vm })
})

onMounted(() => {
  window.addEventListener('resize', onResize)
  onResize()
})
onUnmounted(() => window.removeEventListener('resize', onResize))

/** General */
const injectedStyles = computed(() => {
  const opts = {
    '--main-height-offset': `${headerHeight.value + footerHeight.value}px`,
    '--view-height-override': props.styles?.maxHeight ? props.styles.maxHeight : '100vh',
  }
  return { ...opts, '--max-height': `calc(${opts['--view-height-override']} - ${opts['--main-height-offset']})` }
})
const isPlugin = computed(() => import.meta.env.VITE_PLUGIN === 'true')
/** Helpers */
function isActive(type: string) {
  if (!type) return false
  return type === 'home' ? route?.fullPath === '/' : route?.fullPath.includes(type)
}
</script>

<template>
  <section id="project-zzz">
    <main :style="injectedStyles">
      <RouterView />
    </main>
    <header v-if="false" ref="header">
      <nav>
        <template v-if="!isPlugin">
          <RouterLink to="/" :data-active="isActive('home')">Home</RouterLink>
          <RouterLink to="/about" :data-active="isActive('about')">About</RouterLink>
          <RouterLink to="/bangboo" :data-active="isActive('bangboo')">Bangboo</RouterLink>
          <RouterLink to="/character" :data-active="isActive('character')">Characters</RouterLink>
        </template>
        <RouterLink to="/movie" :data-active="isActive('movie')">Movies</RouterLink>
      </nav>
    </header>
    <footer ref="footer">
      <i>This Project is not affiliated with HoYoverse and all assets are the property of their respective owners.</i>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
header {
  padding: 16px 32px;

  nav {
    gap: 16px;
    display: flex;

    * {
      color: white;
      padding: 4px;
      border-radius: 8px;
      font-weight: $FONT_WEIGHT;

      &[data-active='true'] {
        outline: $HIGHLIGHT_BORDER;
      }
    }
  }
}

header,
main,
footer {
  width: 100%;
  background-color: black;
  color: white;
}

footer {
  text-align: left;
  position: relative;
  padding: 8px;
}

main {
  width: 100%;
  height: var(--max-height);
}
</style>
