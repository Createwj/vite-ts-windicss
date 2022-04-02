<script setup lang="ts">
const routerList = ['/my/index', '/my/about', '/my/center']
</script>

<template>
  <router-view />
  <footer class="flex flex-row justify-between fixed bottom-0 w-96">
    <router-link
      v-for="(item, index) in routerList"
      :key="index"
      v-slot="{ route, isActive }"
      :to="item"
      class="w-1/3 text-center"
    >
      <div class="flex">{{ route.fullPath }} --- {{ isActive }}</div>
    </router-link>
  </footer>
</template>
