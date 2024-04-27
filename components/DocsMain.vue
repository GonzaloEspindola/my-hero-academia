<script setup lang="ts">
import { type DocData } from '~/utils/data'
import ResponseJson from './ResponseJson.vue'

interface Props {
  docsData: DocData[]
  baseUrl: string
}

const props = defineProps<Props>()
</script>

<template>
  <article class="flex flex-col items-center py-12 px-36 gap-24">
    <article
      v-for="doc in props.docsData"
      :key="doc.title"
      :id="doc.title"
      class="flex flex-col gap-2 min-w-full"
    >
      <h2 class="bg-[#e70007] text-white text-3xl px-6 w-fit">
        {{ doc.title }}
      </h2>
      <p class="text-[#616161] mb-4">{{ doc.description }}</p>

      <article
        v-for="sub in doc.subtitle"
        :key="sub.title"
        :id="sub.title"
        class="flex flex-col gap-2"
      >
        <h2 class="bg-[#e70007] text-white text-lg px-6 w-fit">
          - {{ sub.title }}
        </h2>
        <p class="text-[#616161]">{{ sub.description }}</p>
        <ResponseJson
          v-if="sub.response"
          :baseUrl="baseUrl"
          :method="sub.response.method"
          :url="sub.response.url"
          :jsonValue="sub.response.value"
        />
      </article>
    </article>
  </article>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
