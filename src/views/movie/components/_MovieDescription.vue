<script setup lang='ts'>
import { useAttrs } from 'vue'

const attr = useAttrs();
defineProps({
  label: { type: String, default: '' },
  readonly: { type: Boolean, default: false }
})

const value = defineModel<string>()
</script>

<template>
  <div id='movie-description'>
    <label v-if='label' for="description" class='subLabel'>{{ label }}</label>
    <textarea v-model='value' v-bind="attr" id='description' :readonly />
  </div>
</template>


<style lang='scss'>
#movie-description {
  display: flex;
  flex-direction: column;

  textarea {
    font-size: 1rem;
    min-width: 100%;
    max-width: 100%;
    min-height: 100px;
    margin-bottom: 1rem;

    @include TabletHeight {
      margin-bottom: 0;
      min-height: 300px;
      max-height: 600px;
    }

    &[readonly] {
      color: #FFF;
      border: none;
      font-weight: $FONT_WEIGHT;

      background-color: transparent;
    }
  }
}
</style>