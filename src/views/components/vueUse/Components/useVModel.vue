<script lang="ts" setup>
import children from './children.vue'

const dec = ref(3)
const updateDec = (e: number) => {
  dec.value = dec.value + e
}
</script>
<template>
  <p>{{ dec }}</p>
  <children :dec="dec" @update:dec="updateDec"></children>
  <br />
  <button class="btn-green mt-3" @click="++dec">parent-add</button>
</template>
