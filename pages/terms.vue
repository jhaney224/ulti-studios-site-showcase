<script setup>
import Hero from '~/components/Hero.vue';
import Section from '~/components/Section.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Terms",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Our Terms of Service explains guidelines we have in place regarding how you use our services."
      }
    ],
});

const { data: page } = await useAsyncData("terms", () =>
  queryContent("/terms").findOne()
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
      <Section :title="page.age_requirement.title" :sections="page.age_requirement.sections"></Section>
      <Section :title="page.language_policy.title" :sections="page.language_policy.sections"></Section>
      <Section :title="page.fraud_transactions.title" :sections="page.fraud_transactions.sections"></Section>
      <Section :title="page.commission_process.title" :sections="page.commission_process.sections"></Section>
      <Section :title="page.response_times.title" :sections="page.response_times.sections"></Section>
      <Section :title="page.project_closing.title" :sections="page.project_closing.sections"></Section>
      <Section :title="page.project_ownership_and_usage.title" :sections="page.project_ownership_and_usage.sections"></Section>
      <Section :title="page.project_cancellations.title" :sections="page.project_cancellations.sections"></Section>
      <Section :title="page.portfolio_usage.title" :sections="page.portfolio_usage.sections"></Section>
      <Section :title="page.refund_policy.title" :sections="page.refund_policy.sections"></Section>
      <Section :title="page.extra_charges.title" :sections="page.extra_charges.sections"></Section>
      <Section :title="page.changes_to_terms.title" :sections="page.changes_to_terms.sections"></Section>
      <DarkModeButton/>
    </main>
  </Container>
</template>