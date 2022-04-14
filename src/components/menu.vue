<script lang="ts">
export default {
  name: 'Menu'
}
</script>
<script setup lang="ts">
import { mdiArrowRight } from '@quasar/extras/mdi-v6'
const useRoute = useRouter()

interface useApiType {
  name: string
  components?: string
  children?: useApiType[]
}

defineProps<{
  vueUseApi: useApiType[]
}>()

let emits = defineEmits<{ (e: 'updateSelectItem', item: any): void }>()

const onSelectItem = (item: any) => {
  emits('updateSelectItem', item)
}
</script>

<template>
  <ul v-for="(item, index) in vueUseApi" :key="index" class="text-white">
    <li class="py-2 px-3 flex justify-between" @click="onSelectItem(item)">
      {{ item.name }} <c-icon v-if="item.children" :content="mdiArrowRight" />
    </li>
    <li v-if="item.children" class="py-2 pl-5">
      <Menu :vue-use-api="item.children" @update-select-item="onSelectItem" />
    </li>
  </ul>
</template>
