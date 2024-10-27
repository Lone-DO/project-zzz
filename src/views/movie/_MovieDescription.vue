<script setup>

defineProps({
  value: { type: String, default: '' },
  label: { type: String, default: '' },
  readonly: { type: Boolean, default: false }
})
</script>

<template>
  <div id='movie-description'>
    <label v-if='label' for="description" class='subLabel'>{{ label }}</label>
    <textarea id='description' :readonly :value />
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
    min-height: 300px;
    max-height: 600px;

    &[readonly] {
      color: #FFF;
      border: none;
      font-weight: $FONT_WEIGHT;

      background-color: transparent;
    }
  }
}
</style>