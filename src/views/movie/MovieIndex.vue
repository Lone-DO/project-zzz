<script setup lang='ts'>
/** General */
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
const route = useRoute();
const router = useRouter();
/** Components */
import MovieList from './MovieList.vue';
import MovieDetails from './MovieDetails.vue';
import type Movie from '@/assets/models/Movie';
/** Setup */
const movieId = computed(() => {
  return route.name === 'movieNew' ? 'new' : route.params.id as string
});

function create() {
  console.log('emit:create')
  router.push({ name: 'movieNew' })
}
function cancel() {
  console.log('emit:cancel')
  if (movieId.value === 'new') router.push({ name: 'movies' })
}
function submit(movie: Movie) {
  console.log('emit:submit', movie)
}
</script>

<template>
  <section id='movies'>
    <aside>
      <MovieDetails :movieId @create='create()' @cancel='cancel()' @submit='submit($event)' />
    </aside>
    <MovieList />
  </section>
</template>

<style lang='scss' scoped>
#movies {
  gap: 16px;
  width: 100%;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 6px;
  justify-content: space-between;
  background: repeating-linear-gradient(45deg, rgba(222, 199, 1, .1), transparent 10px);

  header {
    flex: 100%;
  }

  aside {
    flex: 100%;

    @media (min-width:600px) {
      flex: 40%;
      min-width: 300px;
      max-width: 500px;
    }
  }

  &>*:last-child {
    flex: 50%;
  }
}
</style>