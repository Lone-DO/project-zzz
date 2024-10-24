<script setup>
/** General */
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute();
/** Components */
import MovieList from './MovieList.vue';
import MovieDetails from './MovieDetails.vue';
/** Setup */
const movieId = ref();
watch(
  () => route.params.id,
  newId => (movieId.value = newId)
)

</script>

<template>
  <section id='movies'>
    <header>
      <h1>Movies</h1>
    </header>
    <div id='movies__content'>
      <MovieDetails v-if="movieId" />
      <MovieList v-else />
    </div>
  </section>
</template>