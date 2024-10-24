<script setup>
import data from '@/assets/data';
import MovieCard from './_MovieCard.vue';

</script>

<template>
  <div id='movie-list'>
    <MovieCard v-for='(movie, index) in data.movies' :key='`movie-${index}`' :movie='movie' />
  </div>
</template>