<template>
  <div class="flex m-5">
    <button class="w-20 h-10 bg-dark-50 text-cool-gray-50" @click="--abc">-</button>
    <p class="font-bold">{{ abc }}</p>
    <button class="w-20 h-10 bg-dark-50 text-cool-gray-50" @click="++abc">+</button>
    <div class="fixed w-100vw left-0 bottom-50px text-center bg-dark-100 text-cyan-100">btn</div>
  </div>
</template>

<script setup lang="ts">
console.log('123')
const a = {
  abc: 1,
  b: 3
}
const abc = ref(123213)
console.log(dataLayer)
</script>
