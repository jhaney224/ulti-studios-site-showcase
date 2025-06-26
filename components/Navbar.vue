<script setup>
import { ref } from 'vue';

const menuitems = [
  {
    title: "About",
    url: "https://ultistudios.co/about",
  },
  {
    title: "Our Minecraft Products",
    url: "https://ultistudios.co/products",
  },
  {
    title: "Commission Services",
    url: "https://ultistudios.co/commissions",
  },
  {
    title: "Portfolio",
    url: "https://ultistudios.co/portfolio",
  },
  {
    title: "Docs",
    url: "https://ultistudios.co/docs",
  },
];

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="w-full p-5 text-zinc-600 text-center dark:bg-page-background-dark dark:text-white">
    <header class="flex flex-row flex-wrap items-center justify-between my-4 gap-x-6 gap-y-4">
      <div class="flex items-center justify-between">
        <a href="/"><img class="button" src="../assets/img/logoTransparent.png" alt="A orange-gradient U-shaped logo." width="200px" height="200px" /></a>
      </div>

      <!-- Hamburger Icon -->
      <button class="block lg:hidden p-2 rounded border border-gray-300 dark:border-white-300 hover:bg-gray-100 dark:hover:bg-white-100" 
      @click="toggleMenu" aria-label="Toggle menu">
        <Icon name="mdi:menu" width="24" height="24" />
      </button>

      <nav :class="['w-full lg:flex lg:items-center lg:gap-4 lg:w-auto', isMenuOpen ? 'block' : 'hidden',]">
        <ul class="flex flex-col lg:flex-row gap-4 text-sm">
          <li v-for="item of menuitems" :key="item.title">
            <a :href="item.url" class="button block px-4 py-2 text-link-light-color border rounded hover:text-link-light-color-hover montserrat 
            lg:border-none dark:text-link-dark-color dark:hover:text-link-dark-color-hover">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
