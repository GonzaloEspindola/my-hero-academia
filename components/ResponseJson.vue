<script setup lang="ts">
interface Props {
  method: string
  baseUrl: string
  url: string
  jsonValue: any
}

const props = defineProps<Props>()
</script>

<template>
  <section class="flex flex-col bg-[#1d293b] p-4 rounded-md">
    <div class="flex flex-col gap-x-2">
      <div class="border-b-2 pb-4 mb-2">
        <p class="flex px-2">
          <span class="text-green-500 pr-4">{{ props.method }}</span>
          <span class="text-white">{{ props.baseUrl }}</span>
          <span class="text-green-500">{{ props.url }}</span>
        </p>
      </div>

      <JsonViewer :value="props.jsonValue" />
    </div>
  </section>
</template>
