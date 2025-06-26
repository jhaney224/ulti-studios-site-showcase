<script setup>
import Hero from '~/components/Hero.vue';
import Container from '~/components/Container.vue';
import DarkModeButton from '~/components/DarkModeButton.vue';

useHead({
  title: "Ulti Studios | Contact",
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Have a question? Or need to contact us via email rather than Discord? Then you came to the right place!"
      }
    ],
});

const { data: page } = await useAsyncData("contact", () =>
  queryContent("/contact").findOne()
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
    <Hero class="mb-20" :title="page.hero.title"></Hero>
    <main>
      <p role="paragraph" class="text-center" v-if="page.description">{{ page.description }}</p>

      <div class="text-center mt-20">
        <div class="grid grid-cols-1 items-center">
          <div v-for="(item, index) of page.contact_methods.items" :key="index">
            <Icon class="inline-block" :name="item.icon" size="2em"></Icon>
            <h3 role="heading" aria-level="3" class="text-2xl font-semibold text-zinc-800 dark:text-white" v-if="item.title">{{ item.title }}</h3>
            <p role="paragraph" class="button mt-2 leading-relaxed" v-if="item.description" v-for="(descriptionPart, index) of item.description.split('\n')" :key="index">
              <DynamicHTML :html="descriptionPart"></DynamicHTML>
            </p>
          </div>
        </div>
      </div>

      <h2 role="heading" aria-level="2" class="mt-20 text-center text-3xl font-bold text-zinc-800 sm:text-4xl dark:text-white" v-if="page.get_in_touch">{{ page.get_in_touch }}</h2>
      <form name="contact" method="POST" netlify class="flex flex-col items-center mx-auto">
        <label for="name">{{ page.contact_form.name }}</label>
        <input id="name" name="name" type="text" required />

        <label for="email">{{ page.contact_form.email }}</label>
        <input id="email" name="email" type="email" autocomplete="email" required />

        <label for="subject">{{ page.contact_form.subject }}</label>
        <input id="subject" name="subject" type="text" />

        <label for="message">{{ page.contact_form.message }}</label>
        <textarea id="message" name="message" required></textarea>

        <label for="privacy-consent">{{ page.contact_form.privacy_consent }}</label>
        <input id="privacy-consent" type="checkbox" name="privacy-consent" required />

        <label for="gdpr-consent">{{ page.contact_form.gdpr_consent }}</label>
        <input id="gdpr-consent" type="checkbox" name="gdpr-consent" required />

        <input type="hidden" name="form-name" value="contact">

        <input class="button p-4 bg-primary-button-light text-primary-button-light-text hover:bg-primary-button-light-hover dark:text-primary-button-dark-text 
        dark:bg-primary-button-dark dark:hover:bg-primary-button-dark-hover" 
        id="submit" type="submit" value="Send Message" />
      </form>
      <DarkModeButton/>
    </main>
  </Container>
</template>
