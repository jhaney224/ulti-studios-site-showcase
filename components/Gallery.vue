<script setup>
import DynamicHTML from './DynamicHTML.vue';

const props = defineProps({
    title: {
      type: String,
      required: false,
    },
    items: [
        {
            title: {
              type: String,
              required: true,
            },
            image: {
                type: String,
                required: false,
            },
            image_alt: {
                type: String,
                required: false,
            },
            description: {
                type: String,
                required: false,
            },
            button_label: {
                type: String,
                required: false,
            },
            button_url: {
                type: String,
                required: false,
            },
            button_open_new_tab: {
              type: Boolean,
              required: false,
            }
        },
    ],
});

// Reactive state for current item
const currentIndex = ref(0);

// Navigation methods
const goToNextItem = () => {
  currentIndex.value = (currentIndex.value + 1) % props.items.length; // Loop to first item
};

const goToPreviousItem = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.items.length) % props.items.length; // Loop to last item
};

</script>

<template>
    <div class="gallery items-center mt-20">
      <h2 role="heading" aria-level="2" v-if="title" class="text-3xl text-center font-bold text-zinc-800 sm:text-4x dark:text-white">{{ title }}</h2>
    
      <div class="gallery-content">
        <button class="arrow left bg-secondary-button-light hover:bg-secondary-button-light-hover dark:bg-secondary-button-dark 
        dark:hover:bg-secondary-button-dark-hover" @click="goToPreviousItem">←</button>
          
        <div class="gallery-item gallery-image-wrapper">
          <NuxtImg v-if="items[currentIndex].image" :src="items[currentIndex].image" :alt="items[currentIndex].image_alt || 'Gallery Image'"
              class="button gallery-image" format="webp"/>
          <h3 role="heading" aria-level="3" class="text-2xl font-semibold text-zinc-800 dark:text-white" v-if="items[currentIndex].title">
            {{ items[currentIndex].title }}
          </h3>
          <DynamicHTML v-for="(description, index) in items[currentIndex].description.split('\n')" :key="index" class="gallery-description dark:text-white"
          :html="description"/>
          <a v-if="items[currentIndex].button_url" :href="items[currentIndex].button_url" :target="items[currentIndex].button_open_new_tab ? '_blank' : '_self'">
            <button class="gallery-button bg-secondary-button-light text-secondary-button-light-text hover:bg-secondary-button-light-hover 
                  dark:bg-secondary-button-dark dark:hover:bg-secondary-button-dark-hover dark:text-secondary-button-dark-text" 
                  aria-label="Go to {{ items[currentIndex].button_label }}">
              {{ items[currentIndex].button_label }}
            </button>
          </a>
        </div>
          
        <button class="arrow right bg-secondary-button-light hover:bg-secondary-button-light-hover dark:bg-secondary-button-dark 
        dark:hover:bg-secondary-button-dark-hover" @click="goToNextItem">→</button>
      </div>
    </div>
</template>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
}

.gallery-content {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 6rem;
}

.gallery-item {
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.gallery-image-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 400px;
}

.gallery-image {
  width: 100%;
  height: 400px;
  object-fit: contain;
  margin-bottom: 1rem;
}

.gallery-description {
  margin-top: .75em;
  font-size: 1rem;
}

.gallery-button {
  margin-top: .75em;
  padding: .5em 1em;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.gallery-button a {
  text-decoration: none;
}

.arrow {
  position: absolute;
  top: 200px;
  font-size: 2rem;
  padding: 1rem;
  border: none;
  cursor: pointer;
  user-select: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.left {
  left: 1rem;
}

.right {
  right: 1rem;
}

@media (max-width: 768px) {
  .gallery-content {
    padding: 0 4rem;
  }

  .gallery-image {
    height: 300px;
  }

  .arrow {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }
}
</style>