<script setup>
import Expandable from './Expandable.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  openings: [
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        requirements: {
          type: Array,
          required: true,
        }
    },
  ]
});

function displayOpeningDescriptionAndRequirements(opening) {
  const description = opening.description + "\n\n";
  return description.concat("<strong>Requirements</strong>:" + "\n" + opening.requirements.join("\n"));
}

</script>
<template>
  <h2 role="heading" aria-level="2" class="text-3xl font-bold sm:text-4xl text-zinc-800 text-center dark:text-white mt-20">{{ title }}</h2>

  <div v-for="(opening, index) of openings" :key="index">
    <Expandable :title="opening.title" :description="displayOpeningDescriptionAndRequirements(opening)"></Expandable>
  </div>
</template>