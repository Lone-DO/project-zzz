<script setup lang='ts'>
import { onMounted, onUnmounted, useTemplateRef, ref, computed, onErrorCaptured } from 'vue'
import { RouterLink, RouterView, useRoute, } from 'vue-router'

const route = useRoute()

/** Event Lister */
const header = useTemplateRef('header')
const footer = useTemplateRef('footer')
const headerHeight = ref(0);
const footerHeight = ref(0);

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
const injectedStyles = computed(() => ({ '--main-height-offset': `${headerHeight.value + footerHeight.value}px` }))
const isPlugin = computed(() => import.meta.env.VITE_PLUGIN === 'true')
/** Helpers */
function isActive(type: string) {
  if (!type) return false;
  return type === 'home' ? route?.fullPath === '/' : route?.fullPath.includes(type)
}
</script>

<template>
  <section id='project-zzz'>
    <main :style='injectedStyles'>
      <RouterView />
    </main>
    <header v-show='false' ref='header'>
      <nav>
        <template v-if="!isPlugin">
          <RouterLink to="/" :data-active='isActive("home")'>Home</RouterLink>
          <RouterLink to="/about" :data-active='isActive("about")'>About</RouterLink>
          <RouterLink to="/bangboo" :data-active='isActive("bangboo")'>Bangboo</RouterLink>
          <RouterLink to="/character" :data-active='isActive("character")'>Characters</RouterLink>
        </template>
        <RouterLink to="/movie" :data-active='isActive("movie")'>Movies</RouterLink>
      </nav>
    </header>
    <footer ref='footer'>
      <i>This Project is not affiliated with HoYoverse and all assets are the property of their respective owners.</i>
    </footer>
  </section>
</template>

<style lang='scss' scoped>
$MAX_HEIGHT: calc(100vh - var(--main-height-offset));

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

      &[data-active="true"] {
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
}

footer {
  text-align: center;
}

main {
  width: 100%;
  height: $MAX_HEIGHT;
}
</style>
