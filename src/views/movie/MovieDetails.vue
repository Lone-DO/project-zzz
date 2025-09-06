<script setup lang="ts">
import { ref, watch, computed } from 'vue'
/** Pinia */
import { useMovieStore } from '@/stores/movie'
const $store = useMovieStore()
/** Components */
import MovieGenre from './components/_MovieGenre.vue'
import MovieDescription from './components/_MovieDescription.vue'
import MovieTitle from './components/_MovieTitle.vue'
/** General */
const emit = defineEmits(['create', 'cancel', 'submit'])
const props = defineProps({
  movieId: { type: String, default: '' },
})

const movie = ref()
const isNew = computed(() => props.movieId === 'new')
const isEditing = ref(!!isNew.value)

/** Watchers */
watch(
  () => props.movieId as string,
  (id: string) => (movie.value = $store.getMovieById(id, true)),
  { immediate: true },
)

watch(isNew, (bool) => (isEditing.value = bool))

/** Form Setup */
function submit() {
  isEditing.value = false
  return emit('submit', movie.value, props.movieId)
}
function cancel() {
  isEditing.value = false
  return emit('cancel')
}
</script>

<template>
  <form id="movie-details" action="submit" @submit.prevent="submit">
    <template v-if="isEditing || props.movieId">
      <MovieTitle v-model="movie.name" label="Title" :readonly="!isEditing" required />
      <MovieGenre v-model="movie.genre" label="Video Genre" :readonly="!isEditing" required>
        <template v-if="movie.level" #affix>
          <span>Lv.{{ movie.level }}</span>
        </template>
      </MovieGenre>
      <MovieDescription v-model="movie.description" label="Video Description" :readonly="!isEditing" required />
    </template>
    <div id="movie-details__controller">
      <z-button v-show="!isEditing && !isNew && props.movieId" icon="pencil" mode="info" @click="isEditing = true">Edit</z-button>
      <z-button v-show="!isEditing" icon="plus" mode="save" @click="$emit('create')">Add</z-button>
      <z-button v-show="isEditing" icon="close" mode="danger" @click="cancel()">Cancel</z-button>
      <z-button v-show="isEditing" icon="check" mode="save" type="submit">Save</z-button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
#movie-details {
  gap: 8px;
  height: 100%;
  color: #fff;
  display: flex;
  padding: 16px;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
  height: var(--max-height);

  h2,
  &__description {
    font-weight: $FONT_WEIGHT;
  }

  &__controller {
    position: fixed;
    bottom: 16px;
    gap: 16px;
    display: flex;
  }
}
</style>
