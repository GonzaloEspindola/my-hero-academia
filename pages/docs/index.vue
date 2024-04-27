<script setup>
import { docsData, baseUrl } from '../../utils/data'
</script>

<template>
  <main class="main-docs">
    <DocsAside :docsData="docsData" />
    <DocsMain :docsData="docsData" :baseUrl="baseUrl" />
  </main>
</template>

<style scoped>
.main-docs {
  font-family: 'Space Mono';
}

.main-docs {
  display: grid;
  grid-template-columns: 270px 1fr;
}
</style>
