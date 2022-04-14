<script setup lang="ts">
import { globalState } from '@/store'
</script>

<template>
  <div class="inner-box">
    <h1>about</h1>
    <h2>{{ globalState }}</h2>
  </div>
</template>
