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
    <div id='movies__content'>
      <aside>
        <MovieDetails :movieId @create='create()' @cancel='cancel()' @submit='submit($event)' />
      </aside>
      <MovieList />
    </div>
  </section>
</template>

<style lang='scss' scoped>
#movies {
  width: 100%;
  border-radius: 6px;
  background-image: url('/src/assets/img/movie-background.webp');
  background-repeat: no-repeat;
  background-size: cover;

  &__content {
    width: 100%;
    gap: 16px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 6px;
    justify-content: space-between;
    backdrop-filter: brightness(0.25);
    background: repeating-linear-gradient(45deg, rgba(222, 199, 1, .1), transparent 10px);

    &>*:last-child {
      flex: 50%;
    }
  }

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


}
</style>