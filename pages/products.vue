<script setup>
import Gallery from '~/components/Gallery.vue';
import Hero from '~/components/Hero.vue';
import Section from '~/components/Section.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Our Excellent Minecraft Products",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "We have different kinds of Minecraft products that are tested, compatible with a variety of versions, and have customization in-mind."
      }
    ],
});

const { data: page } = await useAsyncData("products", () =>
  queryContent("/products").findOne()
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
      <Hero :title="page.hero.title"></Hero>
      <main>
        <p role="paragraph" class="mt-20 text-center leading-relaxed" v-if="page.description">{{ page.description }}</p>
        <Gallery :items="page.products.items"></Gallery>
        <Section :title="page.more_to_come.title" :sections="page.more_to_come.sections"></Section>
        <DarkModeButton/>
      </main>
    </Container>
</template>