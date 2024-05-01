<script setup lang="ts">
const route = useRouter()

const navItems = [
  {
    name: 'Inicio',
    route: '/',
  },
  {
    name: 'Documentación',
    route: '/docs',
  },
  {
    name: 'Acerca de',
    route: '/about',
  },
]
</script>

<template>
  <header class="w-full h-[50px]">
    <nav
      class="flex items-center justify-center bg-[#0f1729] fixed p-4 w-full z-50 border-b-[1px] border-gray-700"
    >
      <ul class="flex gap-4 text-white">
        <li v-for="item in navItems">
          <NuxtLink
            :to="item.route"
            class="link opacity-90 px-2"
            :class="[
              route.currentRoute.value.fullPath === item.route ? 'active' : '',
            ]"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.active {
  background-color: #e70007;
}
</style>
