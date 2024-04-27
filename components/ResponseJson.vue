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
  <section class="flex flex-col bg-[#202329] p-4 rounded-md">
    <div class="flex flex-col gap-x-2">
      <div class="border-b-2 pb-2 mb-2">
        <p class="flex px-2">
          <span class="text-green-500 pr-4">{{ props.method }}</span>
          <span class="text-white opacity-90">{{ props.baseUrl }}</span>
          <span class="text-white">{{ props.url }}</span>
        </p>
      </div>

      <JsonViewer :value="props.jsonValue" />
    </div>
  </section>
</template>
