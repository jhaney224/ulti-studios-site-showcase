<script setup>
import Hero from '~/components/Hero.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Documentation",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "A landing space to allow you to learn more about our public products."
      }
    ],
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <Container>
    <Hero class="mb-20" title="Documentation" description="Learn more about our products here."></Hero>
    <main>
      <p role="paragraph" class="max-w-3xl mx-auto mt-4 text-lg">Whether you're starting a new project or fine-tuning an existing one, we've compiled everything you need to make the process as smooth as possible.</p>

      <div class="text-center mt-20">
        <h2 role="heading" aria-level="2" class="text-3xl font-bold sm:text-4xl text-zinc-800 dark:text-white">Our Products</h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-center mt-20">
          <div id="ucpro">
            <Icon class="inline-block" name="carbon:paint-brush" size="2em"></Icon>
            <h3 role="heading" aria-level="3" class="text-2xl font-semibold text-zinc-800 dark:text-white">UltraColorPro</h3>
            <button class="bg-secondary-button-light text-secondary-button-light-text hover:bg-secondary-button-light-hover 
            dark:bg-secondary-button-dark dark:hover:bg-secondary-button-dark-hover dark:text-secondary-button-dark-text">
              <a class="montserrat text-secondary-button-light-text dark:text-secondary-button-dark-text" href="https://github.com/Ulti-Studios/UltraColorPro/wiki"
              target="_blank">SEE WIKI</a>
            </button>
          </div>

          <div id="chunkdr">
            <Icon class="inline-block" name="map:doctor" size="2em"></Icon>
            <h3 role="heading" aria-level="3" class="text-2xl font-semibold text-zinc-800 dark:text-white">ChunkDr</h3>
            <button class="bg-secondary-button-light text-secondary-button-light-text hover:bg-secondary-button-light-hover 
            dark:bg-secondary-button-dark dark:hover:bg-secondary-button-dark-hover dark:text-secondary-button-dark-text">
              <a class="montserrat text-secondary-button-light-text dark:text-secondary-button-dark-text" href="https://github.com/Ulti-Studios/ChunkDr/wiki"
              target="_blank">SEE WIKI</a>
            </button>
          </div>

          <div id="ultieconomy">
            <Icon class="inline-block" name="fluent-mdl2:currency" size="2em"></Icon>
            <h3 role="heading" aria-level="3" class="text-2xl font-semibold text-zinc-800 dark:text-white">UltiEconomy</h3>
            <button class="bg-secondary-button-light text-secondary-button-light-text hover:bg-secondary-button-light-hover 
            dark:bg-secondary-button-dark dark:hover:bg-secondary-button-dark-hover dark:text-secondary-button-dark-text">
              <a class="montserrat text-secondary-button-light-text dark:text-secondary-button-dark-text" href="https://github.com/Ulti-Studios/UltiEconomy/wiki"
              target="_blank">SEE WIKI</a>
            </button>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex flex-col items-center mx-auto text-center mt-20">
        <h2 role="heading" aria-level="2" class="text-4xl font-bold text-balance text-zinc-800 dark:text-white sm:text-5xl">Need help setting things up or run into issues?</h2>
        <p role="paragraph" class="mt-4 text-lg dark:text-white sm:text-xl mb-5">Get in touch and we can help!</p>

        <div class="flex flex-wrap justify-center items-center gap-4 w-full max-w-xl mx-auto mb-5">
          <NuxtLink class="button montserrat uppercase inline-flex px-6 py-3 text-primary-button-light-text duration-300 bg-primary-button-light rounded 
            hover:bg-primary-button-light-hover transition-color dark:bg-primary-button-dark dark:hover:bg-primary-button-dark-hover
            dark:text-primary-button-dark-text" href="https://ultistudios.co/contact">Contact Us</NuxtLink>
          <NuxtLink class="button montserrat uppercase inline-flex px-6 py-3 text-primary-button-light-text duration-300 bg-primary-button-light rounded 
            hover:bg-primary-button-light-hover transition-color dark:bg-primary-button-dark dark:hover:bg-primary-button-dark-hover
            dark:text-primary-button-dark-text" href="https://ultistudios.co/commissions/">See Our Commission Services</NuxtLink>
        </div>
      </div>

      <DarkModeButton/>
    </main>
  </Container>
</template>