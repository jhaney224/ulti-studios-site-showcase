<script setup>
import { darkMode } from '~/utils/utils';

const { isDark, toggleDarkMode } = darkMode();
</script>

<template>
    <client-only>
        <div class="relative">
            <button @click="toggleDarkMode" class="fixed bottom-0 right-0 p-3 mx-4 mb-20 rounded bg-gray-300 dark:bg-gray-700">
                <span v-if="isDark">🌙</span>
                <span v-else>☀️</span>
            </button>
        </div>
    </client-only>
</template>