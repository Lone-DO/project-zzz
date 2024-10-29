<script setup lang='ts'>
import { useAttrs } from 'vue';
const attr = useAttrs();

defineProps({
  label: { type: String, default: '' },
  readonly: { type: Boolean, default: false }
})

const value = defineModel<string>()
</script>

<template>
  <div id='movie-title'>
    <p v-if='readonly' readonly>{{ value }}</p>
    <template v-else>
      <label v-if='label' for="title" class='subLabel'>{{ label }}</label>
      <input v-model='value' id='title' type='text' v-bind='attr' />
    </template>
  </div>
</template>

<style lang='scss'>
#movie-title {
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

}
</style>