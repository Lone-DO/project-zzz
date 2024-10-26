<script setup lang='ts'>
import type { PropType } from 'vue'
import type { IMovie } from '@/assets/common/interfaces'


/** General */
defineProps({
  movie: { type: Object as PropType<IMovie>, required: true },
})

</script>

<template>
  <article class='movie-card'>
    <h3>{{ movie.name }}</h3>
    <div class='movie-card__vhs'>
      <img class='movie-card__vhs-tape' src='@/assets/img/vhs.svg' />
      <img class='movie-card__vhs-cover' :src="movie.imgSource" :alt='`${movie.name}-img`'>
    </div>
  </article>
</template>

<style lang='scss' scoped>
$COVER_WIDTH: 182px;
$HIGHLIGHT_BORDER: #DEC701 2px solid;

.movie-card {
  text-align: center;

  h3 {
    color: #FFF;
    font-weight: 700;
    text-transform: capitalize;
  }

  &__vhs {
    display: flex;
    cursor: pointer;
    position: relative;
    justify-content: flex-end;
    padding-right: calc($COVER_WIDTH / 2.25);

    &,
    &>* {
      border-radius: 6px;
    }

    &:hover {
      outline: $HIGHLIGHT_BORDER
    }

    &:hover &-cover {
      // border-top: $HIGHLIGHT_BORDER;
      border-right: $HIGHLIGHT_BORDER;
      // border-bottom: $HIGHLIGHT_BORDER;
      right: -20px;
      z-index: 1;
    }

    &-tape {

      // width: 182px;
      height: 292px;
    }

    &-cover {
      transition: right 250ms ease-in-out;
      top: 0;
      right: 0;
      position: absolute;
      clip-path: polygon(0 30%, 0 0, 100% 0, 100% 100%, 0 100%, 0 70%, 14% 60%, 14% 40%)
    }
  }
}
</style>