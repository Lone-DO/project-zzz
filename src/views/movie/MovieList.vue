<script setup lang='ts'>
import data from '@/assets/data/index';
import MovieCard from './components/_MovieCard.vue';

</script>

<template>
  <ul id='movie-list'>
    <MovieCard v-for='(movie, index) in data.movies' :key='`movie-${index}`' :movie='movie' />
  </ul>
</template>

<style lang='scss'>
#movie-list {
  gap: 16px;
  margin: 0;
  padding: 0 16px;
  display: flex;
  height: 1000px;
  overflow-y: auto;
  flex-wrap: wrap;
}
</style>