<script setup lang="ts">
const el = ref(null)
const rect = reactive(useElementBounding(el))

const stringify = reactify(JSON.stringify)

const text = stringify(rect)
</script>

<template>
  <div style="min-height: 300px">
    <note class="mb-2"> Resize the box to see changes </note>
    <textarea ref="el" readonly class="resizer bg-dark-50 text-white" :value="text" />
  </div>
</template>
