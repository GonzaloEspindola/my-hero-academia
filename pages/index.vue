<script setup>
definePageMeta({
  layout: 'default',
  auth: false,
})
</script>

<template>
  <main
    class="flex items-center justify-center max-w-screen-xl w-full z-10 grow p-6"
  >
    <article class="flex flex-col gap-10 w-2/4">
      <section>
        <div class="flex flex- col gap-2 text-6xl">
          <h1 class="text-white">
            <span class="bg-[#e70007] px-4">MY HERO ACADEMIA</span>
            <span class="text-shadow pr-4">API</span>
          </h1>
        </div>
      </section>

      <section>
        <p class="text-white text-pretty">
          ¡Bienvenido a la API de My Hero Academia! Sumérgete en el vibrante
          universo de héroes y villanos con nuestra completa base de datos.
          <br />
          <br />
          My Hero Academia es un emocionante anime y manga que sigue la historia
          de Izuku Midoriya, un joven sin poderes en un mundo donde la mayoría
          de las personas nacen con habilidades especiales. Con una narrativa
          llena de acción, emociones y un elenco diverso de personajes, esta
          serie ha cautivado a audiencias de todo el mundo.
          <br />
          <br />
          Nuestra API ofrece acceso a una amplia gama de información sobre la
          serie, incluyendo detalles de personajes, episodios, escenarios y
          mucho más. Ya sea que estés buscando datos para desarrollar una
          aplicación, crear contenido o simplemente explorar el mundo de My Hero
          Academia, nuestra API es tu recurso definitivo. ¡Únete a nosotros y
          explora el universo de My Hero Academia como nunca antes lo has hecho!
        </p>
      </section>

      <section class="flex gap-4">
        <div class="flex flex-col border-r border-r-gray-300 pl-0 px-4">
          <span>60</span>
          <span class="opacity-50">Personajes</span>
        </div>

        <div class="flex flex-col border-r border-r-gray-300 pl-0 px-4">
          <span>6</span>
          <span class="opacity-50">Temporadas</span>
        </div>

        <div class="flex flex-col border-r-gray-300 pl-0 px-4">
          <span>150</span>
          <span class="opacity-50">Capítulos</span>
        </div>
      </section>

      <section>
        <NuxtLink
          to="/docs"
          class="px-10 py-2 bg-[#fcf800] w-[300px] border-2 border-black hover:bg-[#ffc600] hover:transition"
        >
          Documentación
        </NuxtLink>
      </section>
    </article>

    <article class="w-2/4">
      <img src="/assets/img/example.png" alt="Imagen de la landing" />
    </article>
  </main>
</template>

<style>
.text-shadow {
  position: relative;
  filter: drop-shadow(4px 4px black);
  background: linear-gradient(45deg, #fcf800, #ffc600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
