<script setup lang="ts">
import { type DocData } from '~/utils/data'

interface Props {
  docsData: DocData[]
}

const props = defineProps<Props>()
</script>

<template>
  <aside class="bg-white shadow-sm border-r-2 pt-12 px-6">
    <nav class="flex h-full fixed">
      <ul class="flex flex-col gap-y-8">
        <div v-for="doc in props.docsData" :key="doc.title">
          <li class="text-[#1b1b1b] font-bold w-[250px]">
            <a :href="`#${doc.title}`" class="text-xl">{{ doc.title }}</a>
          </li>
          <li
            v-for="sub in doc.subtitle"
            :key="sub.title"
            class="text-[#616161] w-[250px]"
          >
            <a :href="`#${sub.title}`" class="pl-2">- {{ sub.title }}</a>
          </li>
        </div>
      </ul>
    </nav>
  </aside>
</template>
