<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/icons/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/bangboo">Bangboo</RouterLink>
        <RouterLink to="/character">Characters</RouterLink>
        <RouterLink to="/movie">Movies</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <i>This Project is not affiliated with HoYoverse and all assets are the property of their respective owners.</i>
  </footer>
</template>

<style lang='scss' scoped>
main {
  padding: 16px;
}
</style>