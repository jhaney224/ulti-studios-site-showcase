<script setup>
import { ref } from "vue";
import DynamicHTML from "./DynamicHTML.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const isExpanded = ref(false);
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
<template>
  <div class="border rounded p-2 shadow">
    <div class="flex gap-4 mb-6 justify-items-start items-center">
      <h2 role="heading" aria-level="2" class="text-secondary-button-light-text dark:text-secondary-button-dark-text">{{ title }}</h2>
      <button @click="toggleExpanded">
        <span v-if="isExpanded">-</span>
        <span v-else>+</span>
      </button>
    </div>

    <div v-show="isExpanded" class="mt-4 text-secondary-button-light-text dark:text-secondary-button-dark-text">
      <p role="paragraph" v-for="(descriptionPart, index) of description.split('\n')" :key="index"><DynamicHTML :html="descriptionPart"></DynamicHTML></p>
    </div>
  </div>
</template>