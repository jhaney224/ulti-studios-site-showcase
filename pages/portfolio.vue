<script setup>
import Hero from '~/components/Hero.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';
import PortfolioItem from '~/components/PortfolioItem.vue';
import Cta from '~/components/Cta.vue';

useHead({
  title: "Ulti Studios | Portfolio",
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: "Explore our portfolio of successful projects across Minecraft plugin development, Discord server setups, and plugin configurations."
    }
  ],
});

const { data: page } = await useAsyncData("portfolio", () =>
  queryContent("/portfolio").findOne()
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const selectedCategory = ref('all');

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return page.value.projects;
  }
  return page.value.projects.filter(project => project.category === selectedCategory.value);
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <Container>
    <Hero :title="page.hero.title" :description="page.hero.description" />
    <main>
      <h2 v-if="page.category_title">{{ page.category_title }}</h2>
      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 my-8">
        <button @click="selectedCategory = 'all'"
          :class="['px-4 py-2 rounded-full transition-colors duration-300',
            selectedCategory === 'all' 
              ? 'bg-primary-button-light text-primary-button-light-text dark:bg-primary-button-dark dark:text-primary-button-dark-text' 
              : 'bg-secondary-button-light text-secondary-button-light-text hover:bg-secondary-button-light-hover dark:bg-secondary-button-dark dark:text-secondary-button-dark-text dark:hover:bg-secondary-button-dark-hover'
          ]">
          All Projects
        </button>
        <button v-for="category in page.categories" :key="category.title"
          @click="selectedCategory = category.title"
          :class="['px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2',
            selectedCategory === category.title 
              ? 'bg-primary-button-light text-primary-button-light-text dark:bg-primary-button-dark dark:text-primary-button-dark-text' 
              : 'bg-secondary-button-light text-secondary-button-light-text hover:bg-secondary-button-light-hover dark:bg-secondary-button-dark dark:text-secondary-button-dark-text dark:hover:bg-secondary-button-dark-hover'
          ]">
          <Icon :name="category.icon" />
          {{ category.title }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        <PortfolioItem v-for="project in filteredProjects" :key="project.title" v-bind="project"/>
      </div>

      <Cta :title="page.cta.title" :description="page.cta.description" :buttons="page.cta.buttons"></Cta>
      <DarkModeButton/>
    </main>
  </Container>
</template>