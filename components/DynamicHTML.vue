<script>
export default {
  props: {
    html: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.updateHtml();
  },
  watch: {
    html: {
      immediate: true,
      handler() {
        this.updateHtml();
      }
    }
  },
  methods: {
    updateHtml() {
      if (this.$refs.container) {
        this.$refs.container.innerHTML = this.html;
      }
    }
  }
};
</script>

<template>
  <div :class="$attrs.class" ref="container"></div>
</template>