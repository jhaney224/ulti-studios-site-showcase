<script setup>
import Gallery from '~/components/Gallery.vue';
import Features from '~/components/Features.vue';
import Hero from '~/components/Hero.vue';
import Cta from '~/components/Cta.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Minecraft Service Team",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Ulti Studios is a Minecraft service team that offers unique, high-quality services that enhance Minecraft servers."
      }
    ],
});

const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
definePageMeta({
  layout: "default",
});
</script>

<template>
  <Container>
    <Hero :title="page.hero.title" :description="page.hero.description" :buttons="page.hero.buttons"/>
    <main>
      <div class="text-center mt-20">
        <h2 role="heading" aria-level="2" class="text-3xl font-bold sm:text-4xl text-zinc-800 dark:text-white">
          {{ page.our_partners.title }}
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
          <div class="button" v-for="(item, index) of page.our_partners.items" :key="index">
            <a v-if="item.link" :href="item.link" target="_blank"><img :src="item.img" :alt="item.alt_text" class="inline-block self-center"></a>
            <h3 role="heading" aria-level="3" class="text-2xl font-semibold text-zinc-800 dark:text-white" v-if="item.title">{{ item.title }}</h3>
          </div>
        </div>
      </div>

      <Features :title="page.our_offerings.title" :items="page.our_offerings.items"/>
      <Gallery :title="page.creations.title" :items="page.creations.items"/>
      <Features :title="page.features.title" :description="page.features.description" :items="page.features.items"/>
      <Features :title="page.stats.title" :description="page.stats.description" :items="page.stats.items"/>
      <Cta :title="page.cta.title" :description="page.cta.description" :buttons="page.cta.buttons"/>
      <DarkModeButton/>
    </main>
  </Container>
</template>