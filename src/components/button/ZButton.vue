<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
  icon: { type: String, default: '' },
  mode: { type: String, default: 'info' },
  styles: { type: Object, default: () => ({}) }
})

const injectedStyles = computed(() => ({
  '--width': props.styles.width || '125px',
  '--height': props.styles.height || '40px',
}))
</script>

<template>
  <button class='z-button' type='button' :style='injectedStyles' :data-mode='mode'>
    <div v-if='icon' class='z-button__icon-container'>
      <div class='z-button__icon'>
        <i :class='`fa-solid fa-${icon}`' />
      </div>
    </div>
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang='scss' scoped>
.z-button {
  position: relative;
  width: var(--width);
  height: var(--height);
  border-radius: 50px;
  background-color: black;
  border: grey solid 1px;
  text-align: right;
  padding: 0 16px;

  &[data-mode="info"] &__icon {
    background-color: #2d7effc0;
  }

  &[data-mode="danger"] &__icon {
    background-color: #ff2d2dc0;
  }

  &[data-mode="save"] &__icon {
    background-color: #2dff99c0;
  }

  &>* {
    color: white;
    font-size: 1rem;
    font-weight: 700;
    font-style: italic;
  }

  &__icon {
    color: black;
    background-color: green;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    &,
    &-container {
      border: grey 1px solid;
      border-radius: 100%;
    }

    &-container {
      width: var(--height);
      height: var(--height);
      top: -1px;
      left: -1px;
      padding: 8px;
      min-width: 1.5rem;
      min-height: 1.5rem;
      position: absolute;
    }
  }
}
</style>