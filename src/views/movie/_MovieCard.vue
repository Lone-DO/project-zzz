<script setup lang='ts'>
import type { PropType } from 'vue'
import type { IMovie } from '@/assets/common/interfaces'


/** General */
defineProps({
  movie: { type: Object as PropType<IMovie>, required: true },
})

</script>

<template>
  <article>
    <h3>{{ movie.name }}</h3>
  </article>
</template>