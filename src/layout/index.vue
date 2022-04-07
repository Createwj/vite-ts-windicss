<script setup lang="ts">
const routerList = ['/my/index', '/my/about', '/my/center']
</script>

<template>
  <router-view />
  <footer class="flex flex-row justify-between fixed bottom-0 w-96 divide-x border-top">
    <router-link
      v-for="(item, index) in routerList"
      :key="index"
      v-slot="{ route, isActive }"
      :to="item"
      class="w-1/3 text-center"
    >
      <div class="btn flex justify-center items-center p-10px" :class="isActive && 'btn-blue'">
        {{ route.fullPath }}
      </div>
    </router-link>
  </footer>
</template>

<style lang="scss">
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
</style>
