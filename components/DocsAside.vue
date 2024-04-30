<script setup lang="ts">
import { type DocData } from '~/utils/data'

interface Props {
  docsData: DocData[]
}

const props = defineProps<Props>()
</script>

<template>
  <aside class="bg-[#0f1729] border-r-[1px] border-gray-700 pt-12 px-6">
    <nav class="flex h-full fixed">
      <ul class="flex flex-col gap-y-8">
        <li
          v-for="doc in props.docsData"
          :key="doc.title"
          class="flex flex-col"
        >
          <a
            :href="`#${doc.title}`"
            class="text-xl text-white font-bold w-[250px] hover:bg-red-500"
            >{{ doc.title }}</a
          >
          <a
            v-for="sub in doc.subtitle"
            :key="sub.title"
            :href="`#${sub.title}`"
            class="text-white opacity-60 w-[250px]"
          >
            {{ sub.title }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>
