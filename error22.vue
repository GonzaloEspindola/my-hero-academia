<template>
  <section
    class="flex flex-col items-center justify-center min-h-screen mx-auto z-10"
  >
    <Header />
    <main class="flex flex-col items-center justify-center grow">
      <h2 class="bg-[#e70007] px-4 text-white text-6xl">OOPS</h2>
      <h1 class="text-[12rem] text-shadow">404</h1>
      <p class="opacity-90">
        Parece que la pagina que estas intentando visitar no existe o fue
        eliminada recientemente.
      </p>
    </main>
    <Footer />
  </section>
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
