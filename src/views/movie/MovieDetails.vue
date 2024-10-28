<script setup lang='ts'>
import { ref, watch, defineEmits, computed } from 'vue';
import data from '@/assets/data';
import Movie from '@/assets/models/Movie';
import MovieGenre from './components/_MovieGenre.vue';
import MovieDescription from './components/_MovieDescription.vue';

/** General */
const emit = defineEmits(['create', 'cancel', 'submit'])
const props = defineProps({
  movieId: { type: String, default: '' }
})

const movie = ref();

/** Watchers */
watch(
  () => data.movies.find(({ name = '' }) => name === props.movieId),
  (newData) => (movie.value = new Movie(newData)),
  { immediate: true }
)

watch(() => props.movieId, (id) => (isEditing.value = Boolean(id === 'new')))

/** Form Setup */
const isNew = computed(() => props.movieId === 'new')
let isEditing = ref(Boolean(isNew))
function submit() {
  emit('submit', movie.value)
  cancel()
}
function cancel() {
  isEditing.value = false
  emit('cancel')
}
</script>

<template>
  <form id='movie-details' action="submit" @submit.prevent="submit">
    <h2 class='movie-details__title'>{{ movie.name }}</h2>
    <MovieGenre v-model='movie.genre' label='Video Genre' :readonly='!isEditing'>
      <template #affix>
        <span>Lv.{{ movie.level }}</span>
      </template>
    </MovieGenre>
    <MovieDescription v-model='movie.description' label='Video Description' :readonly='!isEditing' />
    <div id='movie-details__controller'>
      <z-button v-show='!isEditing && !isNew && props.movieId' icon='pencil' mode='info'
        @click='isEditing = true'>Edit</z-button>
      <z-button v-show='!isEditing' icon='plus' mode='save' @click='$emit("create")'>Add</z-button>
      <z-button v-show='isEditing' icon='close' mode='danger' @click='cancel()'>Cancel</z-button>
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
  padding: 0 16px;
  flex-direction: column;
  position: relative;

  h2,
  &__description {
    font-weight: $FONT_WEIGHT;
  }

  &__controller {
    position: absolute;
    bottom: 0;
    gap: 16px;
    display: flex;
  }
}
</style>