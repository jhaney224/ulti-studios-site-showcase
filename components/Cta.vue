<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  buttons: [
    {
      label: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
  ],
});
</script>

<template>
  <div class="flex flex-col items-center mx-auto text-center mt-20">
    <h2 role="heading" aria-level="2" class="text-4xl font-bold text-balance text-zinc-800 dark:text-white sm:text-5xl" v-if="title">{{title}}</h2>
    <p role="paragraph" class="mt-4 text-lg dark:text-white sm:text-xl mb-5" v-for="(descriptionPart, index) of description.split('\n')" :key="index">
      {{ descriptionPart.trim() }}
    </p>
    <div class="flex flex-wrap justify-center items-center gap-4 w-full max-w-xl mx-auto mb-5">
      <div v-for="(button, index) of buttons" :key="index">
        <NuxtLink v-if="button.label && button.url" :href="button.url" 
        class="button montserrat uppercase inline-flex px-6 py-3 text-primary-button-light-text duration-300 bg-primary-button-light rounded 
        hover:bg-primary-button-light-hover transition-color dark:bg-primary-button-dark dark:hover:bg-primary-button-dark-hover
        dark:text-primary-button-dark-text">{{button.label}}</NuxtLink>
      </div>
    </div>
  </div>
</template>