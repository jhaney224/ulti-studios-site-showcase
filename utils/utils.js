import { ref, onMounted } from "vue";

export function darkMode() {
    const isDark = ref(false);

    const toggleDarkMode = () => {
      isDark.value = !isDark.value;
      const theme = isDark.value ? "dark" : "light";
      if (process.client) {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", isDark.value);
      }
    };
  
    onMounted(() => {
      if (process.client) {
        isDark.value =
          localStorage.getItem("theme") === "dark" ||
          (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList.toggle("dark", isDark.value);
      }
    });
  
    return { isDark, toggleDarkMode };
}

export function navigateToUrl(url) {
  window.location.href = url;
}

export default {
  darkMode,
  navigateToUrl,
};