<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, inject } from 'vue'
import type { PropType } from 'vue'
import type { IMovie } from '@/assets/common/interfaces'

const route = useRoute()
/** General */
const props = defineProps({
  movie: { type: Object as PropType<IMovie>, required: true },
})

const getCover = <(src: string) => string | unknown>inject('getCover')
const getImgCover = (src = '') => (getCover instanceof Function ? getCover(src) : src)

const isActive = computed(() => route.params.id === props.movie.name)
const isOriginal = computed(() => /^\/src\/assets/gm.test(props.movie.imgSource))
</script>

<template>
  <article class="movie-card">
    <h3>{{ movie.name }}</h3>
    <div v-if="!isOriginal" class="movie-card__close" @click.stop="$emit('deleted', movie.name)">
      <i class="fa-solid fa-close" />
    </div>
    <div class="movie-card__vhs" :data-active="isActive" :data-no-cover="Boolean(movie.imgSource)" @click.stop="$emit('select', movie.name)">
      <img class="movie-card__vhs-tape" src="@/assets/img/vhs.svg" />
      <img v-if="movie.imgSource" class="movie-card__vhs-cover" :src="getImgCover(movie.imgSource)" :alt="`${movie.name}-img`" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
$HEIGHT: 292px;

.movie-card {
  text-align: center;

  &,
  &__vhs {
    min-height: $HEIGHT;
    min-width: 220px;
    max-width: 240px;
  }

  h3 {
    color: #fff;
    font-weight: $FONT_WEIGHT;
    text-transform: capitalize;
  }

  &__close {
    bottom: calc($HEIGHT - 32px);
    left: 8px;
    z-index: 2;
    width: 20px;
    height: 20px;
    display: flex;
    cursor: pointer;
    font-size: 12px;
    background: brown;
    border-radius: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    transition:
      transform 100ms ease-in,
      background-color 100ms ease-in;

    &:hover {
      transform: scale(1.2);
      background-color: red;
    }
  }

  &__vhs {
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: flex-end;

    &:not([data-no-cover='false']) {
      padding-right: calc($COVER_WIDTH / 2.25);
    }

    &,
    & > * {
      border-radius: 6px;
    }

    &:hover,
    &[data-active='true'] {
      outline: $HIGHLIGHT_BORDER;
    }

    &:hover &-cover {
      border-right: $HIGHLIGHT_BORDER;
      right: -20px;
      z-index: 1;
    }

    &-tape {
      top: 0;
      left: 0;
      position: absolute;
      height: 292px;
    }

    &-cover {
      top: 0;
      right: 0;
      position: absolute;
      transition: right 250ms ease-in-out;
      clip-path: polygon(0 30%, 0 0, 100% 0, 100% 100%, 0 100%, 0 70%, 14% 60%, 14% 40%);
    }
  }
}
</style>
