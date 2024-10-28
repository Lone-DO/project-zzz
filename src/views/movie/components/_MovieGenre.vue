<script setup lang='ts'>
import data from '@/assets/data'

defineProps({
  value: { type: String, default: '' },
  label: { type: String, default: '' },
  readonly: { type: Boolean, default: false }
})
</script>

<template>
  <div id='movie-genre'>
    <label v-if='label' for="genre-select" class='subLabel'>{{ label }}</label>

    <p v-if='readonly' readonly>
      <span id='movie-genre__value'>{{ value }}</span>
      <span v-if='$slots.affix' id='movie-genre__affix'>
        <slot name='affix' />
      </span>
    </p>
    <select v-else name="genre" id="genre-select">
      <option value="">--Please choose an option--</option>
      <option v-for='genre in data.genres' :key='genre' :value='genre' :selected='genre === value'>{{ genre }}</option>
    </select>
  </div>
</template>

<style lang='scss'>
#movie-genre {
  display: flex;
  flex-direction: column;

  *:nth-child(2) {
    height: 32px;
  }

  p[readonly] {
    display: flex;
    padding: 4px 8px;
    border-radius: 50px;
    background-color: #000;

    &,
    * {
      color: #FFF;
      font-weight: 700;
    }
  }

  &__affix {
    margin-left: auto;
  }
}
</style>