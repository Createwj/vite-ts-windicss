<template>
  <div class="flex m-5 items-center justify-center">
    <button class="w-20 h-10 bg-dark-50 text-cool-gray-50 rounded-5px" @click="--globalState">
      -
    </button>
    <p class="font-bold mx-10px text-base-26px decoration-green-500">{{ globalState }}</p>
    <button class="w-20 h-10 text-cool-gray-50 rounded-5px bg-danger" @click="++globalState">
      +
    </button>
  </div>
</template>

<script setup lang="ts">
import { globalState } from '@/store'
const aIndex = {
  abc: 1,
  b: 3
}
onMounted(() => {
  console.log(globalState.value)
})
const abc = ref(123213)
</script>
