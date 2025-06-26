<script setup>
import Features from '~/components/Features.vue';
import Hero from '~/components/Hero.vue';
import Section from '~/components/Section.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | About",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Want to hear what Ulti Studios is all about? We tell our vision, mission, principles, and who's on our team."
      }
    ],
});

const { data: page } = await useAsyncData("about", () =>
  queryContent("/about").findOne()
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
    <Hero :title="page.hero.title"/>
    
    <main>
      <Section :title="page.our_vision_and_mission.title" :sections="page.our_vision_and_mission.sections" />
      <Features :title="page.principles.title" :description="page.principles.description" :items="page.principles.items"/>

      <section class="text-center mt-20">
        <h2 role="heading" aria-level="2" class="text-3xl font-bold text-zinc-800 sm:text-4xl dark:text-white">{{ page.team.title }}</h2>
        <p role="paragraph" class="mt-2 leading-relaxed" v-if="page.team.description">{{ page.team.description }}</p>

        <div class="grid grid-cols-1 gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3 items-center">
          <div class="button" v-for="(member, index) in page.team.members" :key="index">
            <img class="inline-block" v-if="member.icon" :src="member.icon" alt=""/>
            <h3 role="heading" aria-level="3" class="text-2xl font-bold text-zinc-800 sm:text-3xl dark:text-white" v-if="member.title">{{ member.title }}</h3>
            <p role="paragraph" class="mt-2 leading-relaxed" v-if="member.position">{{ member.position }}</p>
          </div>
        </div>
      </section>
      <DarkModeButton/>
    </main>
  </Container>
</template>