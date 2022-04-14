<script setup lang="ts">
const routerList = [
  { name: 'index', val: '/my/index' },
  { name: 'vue-use', val: '/my/use' },
  { name: 'about', val: '/my/about' }
]
</script>

<template>
  <div class="w-full h-screen overflow-y-scroll overflow-x-hidden pb-40px">
    <router-view />
  </div>
  <footer
    class="w-full flex flex-row justify-between fixed bottom-0 divide-x border-top z-10 bg-light-50"
  >
    <router-link
      v-for="(item, index) in routerList"
      :key="index"
      v-slot="{ isActive }"
      :to="item.val"
      class="w-1/3 text-center"
    >
      <div class="btn flex justify-center items-center p-10px" :class="isActive && 'btn-blue'">
        {{ item.name }}
      </div>
    </router-link>
  </footer>
</template>
