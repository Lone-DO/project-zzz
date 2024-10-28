<script setup lang='ts'>
import { ref, watch } from 'vue';
import data from '@/assets/data';
import Movie from '@/assets/models/Movie';
import MovieGenre from './components/_MovieGenre.vue';
import MovieDescription from './components/_MovieDescription.vue';

const props = defineProps({
  movieId: { type: String, default: '' }
})

const movie = ref();

watch(
  () => data.movies.find(({ name = '' }) => name === props.movieId),
  (newData) => (movie.value = new Movie(newData)),
  { immediate: true }
)

let isEditing = ref(false)
function submit() {
  console.log('updated', movie)
  isEditing.value = false;
}

watch(movie, () => (isEditing.value = false))
</script>

<template>
  <form v-show='props.movieId' id='movie-details' action="submit" @submit.prevent="submit">
    <h2 class='movie-details__title'>{{ movie.name }}</h2>
    <MovieGenre :value='movie.genre' label='Video Genre' :readonly='!isEditing'>
      <template #affix>
        <span>Lv.{{ movie.level }}</span>
      </template>
    </MovieGenre>
    <MovieDescription :value='movie.description' label='Video Description' :readonly='!isEditing' />
    <div id='movie-details__controller'>
      <z-button v-show='!isEditing' icon='pencil' mode='info' @click='isEditing = true'>Edit</z-button>
      <z-button v-show='isEditing' icon='close' mode='danger' @click='isEditing = false'>Cancel</z-button>
      <z-button v-show='isEditing' icon='check' mode='save' type='submit'>Save</z-button>
    </div>
  </form>
</template>

<style lang='scss' scoped>
#movie-details {
  gap: 8px;
  height: 100%;
  color: #FFF;
  display: flex;
  flex-direction: column;

  h2,
  &__description {
    font-weight: $FONT_WEIGHT;
  }

  &__controller {
    gap: 16px;
    display: flex;
  }
}
</style>