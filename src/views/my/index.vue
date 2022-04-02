<template>
  <h1 class="mt-6 text-2xl font-bold text-gray-900 leading-tight w-48 h-1/2">hello</h1>
  <div class="flex m-5">
    <button class="w-20 h-10 bg-dark-50 text-cool-gray-50" @click="--abc">-</button>
    <p class="font-bold">{{ abc }}</p>
    <button class="w-20 h-10 bg-dark-50 text-cool-gray-50" @click="++abc">+</button>
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
