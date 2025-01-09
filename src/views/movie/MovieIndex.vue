<script setup lang='ts'>
/** General */
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, onUnmounted, watch } from 'vue'
const route = useRoute();
const router = useRouter();
/** Pinia */
import { useMovieStore } from '@zzz/stores/movie';
const $store = useMovieStore()
/** Components */
import MovieList from './MovieList.vue';
import MovieDetails from './MovieDetails.vue';
import type Movie from '@zzz/assets/models/Movie';
/** Setup */
$store.unpack()
onUnmounted(() => $store.pack())

const movieId = computed(() => {
  return route.name === 'movieNew' ? 'new' : route.params.id as string
});

watch(movieId, id => {
  /** WHEN MovieId is NOT found in database, clear selection */
  const data = id === 'new' ? true : $store.getMovieById(String(id));
  return !data ? router.push({ name: 'movies' }) : null
}, { immediate: true })

function goto(type: string, id?: string | boolean) {
  if (type === 'new') return router.push({ name: 'movieNew' })
  if (type === 'all') return ['new', true].includes(id || movieId.value) && router.push({ name: 'movies' })
  if (type === 'single' && typeof id === 'string') return id !== movieId.value && router.push({ name: 'movie', params: { id } })
}
function submit(movie: Movie, id: string) {
  $store.update(movie, id);
  goto('single', movie.name);
}

function deleted(movie: Movie) {
  $store.remove(movie);
  goto('all', true)
}
</script>

<template>
  <section id='movies'>
    <div id='movies__content'>
      <aside :data-active='movieId'>
        <div v-if='movieId' id='movies__close-icon'>
          <button @click='goto("all", true)'>
            <i class='fa-solid fa-close' />
          </button>
        </div>
        <MovieDetails :movieId @create='goto("new")' @cancel='goto("all", $event)'
          @submit='(data, id) => submit(data, id)' />
      </aside>
      <MovieList :movieId @select='goto("single", $event)' @deleted='deleted($event)' />
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
    gap: 16px;
    width: 100%;
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

  &__close-icon {
    display: flex;
    justify-content: flex-end;
    padding: 6px 1rem 0;

    @include Tablet {
      display: none;
    }
  }

  header {
    flex: 100%;
  }

  aside {
    flex: 100%;
    z-index: 1;
    min-height: 100%;

    &[data-active] {
      @include Mobile {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(1, 1, 1, 0.7);
      }
    }

    &:not([data-active]) {
      @include Mobile {
        display: none;
      }
    }

    @include TabletHeight {
      min-height: 500px;
    }

    @include Tablet {
      flex: 40%;
      min-width: 300px;
      max-width: 500px;
    }
  }


}
</style>
