<script setup lang='ts'>
import MovieCard from './components/_MovieCard.vue';
import { useMovieStore } from '@/stores/movie';
const $store = useMovieStore()
</script>

<template>
  <ul id='movie-list'>
    <MovieCard v-for='(movie, index) in $store.movies' :key='`movie-${index}`' :movie @select='$emit("select", $event)'
      @deleted='$emit("deleted", $event)' />
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

  &>* {
    flex: 1;
  }
}
</style>