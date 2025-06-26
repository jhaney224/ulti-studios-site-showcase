<script setup>
import DynamicHTML from './DynamicHTML.vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    sections: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <section class="text-center mt-20">
        <h2 role="heading" aria-level="2" class="text-3xl font-bold text-zinc-800 sm:text-4xl dark:text-white">{{ title }}</h2>
        <p role="paragraph" v-for="(section, index) of sections" :key="index">
            <DynamicHTML :html="section"></DynamicHTML>
        </p>
    </section>
</template>
