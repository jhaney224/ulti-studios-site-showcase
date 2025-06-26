<script setup>
import Cta from '~/components/Cta.vue';
import Features from '~/components/Features.vue';
import Hero from '~/components/Hero.vue';
import Expandable from '~/components/Expandable.vue';
import OpenStaffPositions from '~/components/OpenStaffPositions.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Openings - Join Something Great",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "We're always looking to expand our team and for people who want to help our clients! Check out our current openings to see how you can help!"
      }
    ],
});

const { data: page } = await useAsyncData("openings", () =>
  queryContent("/openings").findOne()
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
      <Expandable :title="page.general_requirements.title" :description="page.general_requirements.description"></Expandable>
      <OpenStaffPositions :title="page.openings.title" :openings="page.openings.positions"></OpenStaffPositions>
      <Features :title="page.why_join_us.title" :items="page.why_join_us.items"></Features>
      <Cta :title="page.cta.title" :description="page.cta.description" :buttons="page.cta.buttons"></Cta>
      <DarkModeButton/>
    </main>
  </Container>
</template>