<script setup>
import Hero from '~/components/Hero.vue';
import Section from '~/components/Section.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Privacy",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "We have different policies in place to protect your privacy and activity on our site."
      }
    ],
});

const { data: page } = await useAsyncData("privacy", () =>
  queryContent("/privacy").findOne()
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
    <Hero :title="page.hero.title" :description="page.hero.description"></Hero>
    <main>
      <Section :title="page.preamble.title" :sections="page.preamble.sections"></Section>
      <Section :title="page.cookies.title" :sections="page.cookies.sections"></Section>
      <Section :title="page.forms.title" :sections="page.forms.sections"></Section>
      <Section :title="page.commission_invoicing.title" :sections="page.commission_invoicing.sections"></Section>
      <Section :title="page.purchases_and_other_things.title" :sections="page.purchases_and_other_things.sections"></Section>
      <Section :title="page.who_we_share_your_data_with.title" :sections="page.who_we_share_your_data_with.sections"></Section>
      <Section :title="page.how_long_we_retain_your_data.title" :sections="page.how_long_we_retain_your_data.sections"></Section>
      <Section :title="page.how_we_protect_your_data.title" :sections="page.how_we_protect_your_data.sections"></Section>
      <Section :title="page.what_rights_you_have.title" :sections="page.what_rights_you_have.sections"></Section>
      <Section :title="page.where_your_data_is_sent.title" :sections="page.where_your_data_is_sent.sections"></Section>
      <DarkModeButton/>
    </main>
  </Container>
</template>