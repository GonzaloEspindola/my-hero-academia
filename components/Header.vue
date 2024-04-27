<template>
  <header class="w-full h-[50px]">
    <nav
      class="flex items-center justify-center fixed shadow-sm bg-white p-4 w-full z-50"
    >
      <ul class="flex gap-4">
        <li><NuxtLink to="/" class="link opacity-90">Inicio</NuxtLink></li>
        <li>
          <NuxtLink to="/docs" class="link opacity-90">Documentación</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="link opacity-90">Acerca de</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
