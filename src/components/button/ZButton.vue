<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
  icon: { type: String, default: '' },
  mode: { type: String, default: 'info' },
  styles: { type: Object, default: () => ({}) }
})

const injectedStyles = computed(() => ({
  '--width': props.styles.width || '125px',
}))
</script>

<template>
  <button class='z-button' type='button' :style='injectedStyles' :data-mode='mode'>
    <div v-if='icon' class='z-button__icon'>
      <i :class='`fa-solid fa-${icon}`' />
    </div>
    <span>
      <slot />
    </span>
  </button>
</template>

<style lang='scss' scoped>
.z-button {
  width: var(--width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  border: #afafaf46 solid 1px;
  border-radius: 50px;
  padding: 16px;

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
    min-width: 1.5rem;
    min-height: 1.5rem;
    background-color: green;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
  }
}
</style>