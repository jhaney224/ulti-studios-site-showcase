<template>
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="show" class="modal-overlay" @click="$emit('close')">
          <div class="modal-content" @click.stop>
            <button class="modal-close-button" @click="$emit('close')" aria-label="Close modal">
              ×
            </button>
            <slot></slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </template>
  
  <script setup>
    defineProps({
      show: {
        type: Boolean,
        required: true
      }
    });
    
    defineEmits(['close']);
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  
  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 0.5rem;
    max-width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    width: 800px;
  }
  
  .dark .modal-content {
    background: #303134;
    color: white;
  }
  
  .modal-close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from, .modal-leave-to {
    opacity: 0;
  }
  </style>