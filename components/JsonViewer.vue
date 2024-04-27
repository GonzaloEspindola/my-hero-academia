<script setup lang="ts">
import JsonViewer from '~/utils/jsonViewer'

interface Props {
  value: any
}

const props = defineProps<Props>()
const treeContainer = ref<any>()

watch(
  treeContainer,
  () => {
    if (treeContainer.value) {
      new JsonViewer({
        container: treeContainer.value,
        data: props.value,
        theme: 'dark',
        expand: true,
      })
    }
  },
  {
    immediate: true,
    deep: true,
  },
)
</script>

<template>
  <code class="json-view">
    <div ref="treeContainer"></div>
  </code>
</template>
