<script setup>
import Cta from '~/components/Cta.vue';
import Features from '~/components/Features.vue';
import Hero from '~/components/Hero.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Commission Services",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "We also offer commission-based services to help servers stand out."
      }
    ],
});

const { data: page } = await useAsyncData("commissions", () =>
  queryContent("/commissions").findOne()
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
    <Hero class="mb-20" :title="page.hero.title"></Hero>
    <main>
      <p role="paragraph" class="text-center leading-relaxed" v-if="page.description" v-for="(descriptionPart, index) of page.description.split('\n')" :key="index">
        {{ descriptionPart }}
      </p>
      <Features :title="page.our_process.title" :items="page.our_process.items"></Features>
      <Cta :title="page.cta.title" :description="page.cta.description" :buttons="page.cta.buttons"></Cta>
      <DarkModeButton/>
    </main>
  </Container>
</template>