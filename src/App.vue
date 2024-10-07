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
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <i>insert copyright message</i>
  </footer>
</template>

<style lang='scss'></style>