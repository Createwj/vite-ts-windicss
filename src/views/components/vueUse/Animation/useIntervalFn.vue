<script setup lang="ts">
const greetings = ['Hello', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', '你好']
const word = ref('Hello')
const interval = ref(500)
const { pause, resume, isActive } = useIntervalFn(() => {
  word.value = greetings[Math.round(Math.random() * (greetings.length - 1))]
}, interval)
</script>

<template>
  <p class="p-3">{{ word }}</p>
  <p class="p-3 bg-dark-900 text-white">
    interval:
    <input v-model="interval" type="number" class="text-primary" placeholder="interval" />
  </p>
  <button v-if="isActive" class="btn-green p-3 mt-3" @click="pause">Pause</button>
  <button v-if="!isActive" class="btn-green p-3 mt-3" @click="resume">Resume</button>
</template>
