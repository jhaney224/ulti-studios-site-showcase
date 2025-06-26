<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  freelancers: {
    type: Array,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: false
  },
  caseStudy: {
    type: Object,
    required: false,
    default: () => null
  }
});

const showModal = ref(false);
</script>

<template>
  <div class="portfolio-item bg-white dark:bg-secondary-button-dark rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
    <NuxtImg 
      :src="image" 
      :alt="imageAlt"
      class="w-full h-48 object-cover"
      format="webp"
    />
    <div class="p-6">
      <h3 role="heading" aria-level="3" class="text-xl font-bold text-zinc-800 dark:text-white mb-2">{{ title }}</h3>
      <p role="paragraph" class="text-gray-600 dark:text-gray-300 mb-4">{{ description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span class="px-3 py-1 bg-primary-button-light text-primary-button-light-text dark:bg-primary-button-dark dark:text-primary-button-dark-text rounded-full text-sm">
          {{ category }}
        </span>
      </div>
      <div class="flex flex-wrap gap-2 mb-4">
        <a v-if="link" :href="link" target="_blank">
          <span class="px-3 py-1 bg-primary-button-light text-primary-button-light-text dark:bg-primary-button-dark dark:text-primary-button-dark-text rounded-full text-sm">
            Preview
          </span>
        </a>
        <button 
          v-if="caseStudy"
          @click="showModal = true"
          class="px-3 py-1 bg-secondary-button-light text-secondary-button-light-text hover:bg-secondary-button-light-hover dark:bg-secondary-button-dark dark:text-secondary-button-dark-text dark:hover:bg-secondary-button-dark-hover rounded-full text-sm"
        >
          View Case Study
        </button>
      </div>
      <div class="border-t dark:border-gray-700 pt-4">
        <p role="paragraph" class="text-sm text-gray-500 dark:text-gray-400 mb-2">Developed by:</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="freelancer in freelancers" :key="freelancer" 
            class="px-2 py-1 bg-secondary-button-light text-secondary-button-light-text dark:bg-secondary-button-dark dark:text-secondary-button-dark-text rounded text-sm">
            {{ freelancer }}
          </span>
        </div>
      </div>
    </div>

    <Modal :show="showModal" @close="showModal = false" v-if="caseStudy">
      <div class="case-study">
        <h2 role="heading" aria-level="2" class="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">{{ caseStudy.title }}</h2>
        <div class="space-y-4">
          <div v-if="caseStudy.goal">
            <h3 role="heading" aria-level="3" class="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">Goal</h3>
            <p role="paragraph" class="text-gray-600 dark:text-gray-300">{{ caseStudy.goal }}</p>
          </div>
          <div v-if="caseStudy.techUsed">
            <h3 role="heading" aria-level="3" class="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">Tech Used</h3>
            <p role="paragraph" class="text-gray-600 dark:text-gray-300">{{ caseStudy.techUsed }}</p>
          </div>
          <div v-if="caseStudy.challenge">
            <h3 role="heading" aria-level="3" class="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">The Challenge</h3>
            <p role="paragraph" class="text-gray-600 dark:text-gray-300">{{ caseStudy.challenge }}</p>
          </div>
          <div v-if="caseStudy.results">
            <h3 role="heading" aria-level="3" class="text-xl font-semibold mb-2 text-zinc-800 dark:text-white">Results</h3>
            <p role="paragraph" class="text-gray-600 dark:text-gray-300">{{ caseStudy.results }}</p>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>