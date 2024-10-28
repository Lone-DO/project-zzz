<script setup lang='ts'>
import data from '@/assets/data'
import MovieCard from './components/_MovieCard.vue';
// import { useMovieStore } from '@/stores/movie';
// const $store = useMovieStore()
</script>

<template>
  <ul id='movie-list'>
    <MovieCard v-for='(movie, index) in data.movies' :key='`movie-${index}`' :movie='movie' />
  </ul>
</template>

<style lang='scss'>
$MAX_HEIGHT: calc(100vh - var(--main-height-offset));

#movie-list {
  gap: 16px;
  margin: 0;
  padding: 16px;
  display: flex;
  height: $MAX_HEIGHT;
  overflow-y: auto;
  flex-wrap: wrap;
}
</style>