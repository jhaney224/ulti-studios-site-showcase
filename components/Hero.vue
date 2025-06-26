<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  buttons: {
    type: Array,
    required: false,
    default: () => [],
  },
});

</script>

<template>
  <div class="relative min-h-[70vh] flex items-center justify-center">
    <!-- Dynamic Gradient Background -->
    <div class="absolute inset-0 bg-animated-gradient z-0" />
    
    <div class="relative z-10 flex flex-col items-center justify-center">
      <h1 v-if="title" class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-zinc-800 dark:text-white">
        {{ title }}
      </h1>
      
      <p v-if="description" class="text-xl mb-8 max-w-2xl mx-auto text-zinc-600 dark:text-zinc-300">
        {{ description }}
      </p>

      <div v-if="buttons && buttons.length" class="flex flex-wrap justify-center gap-4">
        <NuxtLink 
          v-for="(button, index) in buttons" :key="index" :to="button.url"
          class="button inline-flex px-6 py-3 text-primary-button-light-text bg-primary-button-light hover:bg-primary-button-light-hover 
          dark:bg-primary-button-dark dark:hover:bg-primary-button-dark-hover dark:text-primary-button-dark-text rounded-lg 
          transition-colors duration-300">
          {{ button.label }}
        </NuxtLink>
      </div>
    </div>

    <!-- Scroll Prompt -->
    <div class="absolute bottom-6 z-10 animate-bounce">
      <svg class="w-6 h-6 text-white opacity-80" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>

<style scoped>
/* Animated background using keyframes */
.bg-animated-gradient {
  background: linear-gradient(-45deg, #f7ba2c, #ea5459, #9b59b6, #3498db);
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>