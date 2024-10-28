<script setup lang='ts'>
import { ref, watch } from 'vue';
import data from '@/assets/data';
import Movie from '@/assets/models/Movie';
import MovieGenre from './_MovieGenre.vue';
import MovieDescription from './_MovieDescription.vue';

const props = defineProps({
  movieId: { type: String, default: '' }
})

const movie = ref();
const readonly = ref(true);

watch(
  () => data.movies.find(({ name = '' }) => name === props.movieId),
  (newData) => (movie.value = new Movie(newData)),
  { immediate: true }
)

function submit() {
  console.log('updated', movie)
}
</script>

<template>
  <form v-show='props.movieId' id='movie-details' action="submit" @submit.prevent="submit">
    <h2 class='movie-details__title'>{{ movie.name }}</h2>
    <MovieGenre :value='movie.genre' label='Video Genre' :readonly>
      <template #affix>
        <span>Lv.{{ movie.level }}</span>
      </template>
    </MovieGenre>
    <MovieDescription :value='movie.description' label='Video Description' :readonly />
  </form>
</template>

<style lang='scss' scoped>
#movie-details {
  gap: 8px;
  color: #FFF;
  display: flex;
  flex-direction: column;

  h2,
  &__description {
    font-weight: $FONT_WEIGHT;
  }
}
</style>