<script setup lang='ts'>
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute()

function isActive(type: string) {
  if (!type) return false;
  return type === 'home' ? route.fullPath === '/' : route.fullPath.includes(type)
}
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" :data-active='isActive("home")'>Home</RouterLink>
      <RouterLink to="/about" :data-active='isActive("about")'>About</RouterLink>
      <RouterLink to="/bangboo" :data-active='isActive("bangboo")'>Bangboo</RouterLink>
      <RouterLink to="/character" :data-active='isActive("character")'>Characters</RouterLink>
      <RouterLink to="/movie" :data-active='isActive("movie")'>Movies</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <i>This Project is not affiliated with HoYoverse and all assets are the property of their respective owners.</i>
  </footer>
</template>

<style lang='scss' scoped>
header {
  width: 100%;

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
main {
  padding: 16px 32px;
  background-color: black;
}
</style>