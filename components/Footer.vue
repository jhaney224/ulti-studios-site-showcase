<script setup>
const socialLinks = [
    {
        name: "mdi:instagram",
        ariaLabel: "Instagram",
        url: "https://www.instagram.com/ultistudios/",
        openNewTab: true
    },
    {
        name: "ic:baseline-facebook",
        ariaLabel: "Facebook",
        url: "https://www.facebook.com/ultistudios",
        openNewTab: true
    },
    {
        name: "mdi:discord",
        ariaLabel: "Discord",
        url: "https://discord.ultistudios.co",
        openNewTab: true
    }
];

const footerSections = [
    {
        title: "Business",
        links: [
            {
                url: "/about",
                title: "About Us",
                openNewTab: false
            },
            {
                url: "/openings",
                title: "Openings",
                openNewTab: false
            },
            {
                url: "/contact",
                title: "Contact Us",
                openNewTab: false
            }
        ]
    },
    {
        title: "Links",
        links: [
            {
                url: "https://builtbybit.com/ulti-studios-products",
                title: "Our Public Products",
                openNewTab: true
            },
            {
                url: "/privacy",
                title: "Privacy Policy",
                openNewTab: false
            },
            {
                url: "/terms",
                title: "Terms",
                openNewTab: false
            }
        ]
    }
];
</script>
<template>
    <footer class="w-full mt-20 roboto-slab-regular text-zinc-600 dark:bg-page-background-dark dark:text-white">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <h3 role="heading" aria-level="3" class="mt-10 text-center text-zinc-800 dark:text-white md:text-left">Ulti Studios</h3>
          
          <div v-for="footerSection of footerSections">
              <h3 role="heading" aria-level="3" class="mt-10 text-center" v-if="footerSection.title">{{ footerSection.title }}</h3>
              <ul class="list-none" v-for="link of footerSection.links">
                <li class="button mt-5 text-center">
                    <a :href="link.url" :target="[link.openNewTab ? '_blank' : '_self']">{{ link.title }}</a>
                </li>
              </ul>
          </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between mt-10">
        <!-- Copyright Text -->
        <p role="paragraph" class="mt-10 text-sm roboto-slab-bold dark:text-white text-center md:text-left">&copy; {{ new Date().getFullYear() }} Ulti Studios</p>

        <!-- Designed By -->
        <p role="paragraph" class="text-xs mt-10 text-center dark:text-white">Designed by Ultimation/Jacob</p>

        <!-- Social Icons -->
        <ul class="flex flex-wrap justify-center gap-5 mt-10">
            <li class="mt-5" v-for="socialLink of socialLinks">
            <a class="no-underline text-link-light-color hover:text-link-light-color-hover dark:text-link-dark-color dark:hover:text-link-dark-color-hover" 
            :aria-label="socialLink.ariaLabel" :href="socialLink.url" :target="[socialLink.openNewTab ? '_blank' : '_self']">
                <Icon class="button" :name="socialLink.name" width="24" height="24"/>
            </a>
            </li>
        </ul>
      </div>
  </footer>
</template>
