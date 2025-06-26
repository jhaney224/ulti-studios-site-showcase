<script setup>
import DynamicHTML from './DynamicHTML.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  items: [
    {
      icon: {
        type: String,
        require: true,
      }, 
      title: {
        type: String,
        required: false,
      },
      description: {
        type: String,
        required: false,
      },
    },
  ],
});
</script>

<template>
  <div class="text-center mt-20">
    <h2 role="heading" aria-level="2" :role="title" class="text-3xl font-bold sm:text-4xl text-zinc-800 dark:text-white" v-if="title">
      {{ title }}
    </h2>
    <p role="paragraph" class="max-w-3xl mx-auto mt-4 text-lg text-center" v-if="description">
      {{ description }}
    </p>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
      <div class="button" v-for="(item, index) of items" :key="index">
        <Icon class="inline-block" :name="item.icon" size="2em"></Icon>
        <h3 role="heading" aria-level="3" class="text-2xl font-semibold text-zinc-800 dark:text-white" v-if="item.title">{{ item.title }}</h3>
        <p role="paragraph" class="mt-2 leading-relaxed" v-if="item.description" v-for="(descriptionPart, index) of item.description.split('\n')" :key="index">
          <DynamicHTML :html="descriptionPart"></DynamicHTML>
        </p>
      </div>
    </div>
  </div>
</template>
