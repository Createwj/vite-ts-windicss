<script setup lang="ts">
import { globalState } from '@/store'
</script>
<template>
  <div class="border-dark-100 border-2 border-solid">
    <h4>cont 组件</h4>
    <div class="w-full text-center">{{ globalState }}</div>
  </div>
</template>
