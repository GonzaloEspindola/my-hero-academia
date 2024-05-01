<script setup lang="ts">
import { type DocData } from '~/utils/data'

interface Props {
  docsData: DocData[]
}

const props = defineProps<Props>()
</script>

<template>
  <aside
    class="bg-[#0f1729] border-r-[1px] border-gray-700 py-12 p-4 w-[270px]"
  >
    <nav class="flex fixed h-full overflow-hidden">
      <ul class="flex flex-col gap-y-6 h-full">
        <div
          v-for="doc in props.docsData"
          :key="doc.title"
          class="flex flex-col gap-y-2"
        >
          <li class="text-white text-xl hover:bg-[#e70007] cursor-pointer">
            <a :href="`#${doc.title}`">{{ doc.title }}</a>
          </li>
          <li
            v-for="sub in doc.subtitle"
            :key="sub.title"
            class="text-white text-sm opacity-60 hover:bg-[#e70007] cursor-pointer overflow-hidden"
          >
            <a :href="`#${sub.title}`">{{ sub.title }}</a>
          </li>
        </div>
      </ul>
    </nav>
  </aside>
</template>
