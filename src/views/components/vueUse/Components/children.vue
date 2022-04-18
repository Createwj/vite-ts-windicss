<script lang="ts" setup>
import { useVModels } from '@vueuse/core'

const props = defineProps<{
  dec: number
}>()

const emit = defineEmits(['update:dec'])

const { dec } = useVModels(props, emit)
</script>
<template>
  <button class="btn-green mt-3" @click="emit('update:dec', 2)">
    children-count(no-useVModal)
  </button>

  <hr />
  <p>{{ dec }}</p>
  <button class="btn-green m-3" @click="++dec">data++</button>
</template>
