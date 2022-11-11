<template>
  <div>
    <div>
      <Transition name="modal-inner-enter-active">
        <div
          v-show="modalActive"
          class="bg-white bg-opacity-30 left-0 flex justify-center px-8 py-2"
        >
          <Transition name="modal-inner">
            <div
              v-if="modalActive"
              class="py-4 rounded-lg bg-white max-w-screen-md"
            >
              <slot />
              <div class="py-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-app-secondary-100-100 px-4 py-2 text-sm font-medium text-app-secondary-500 hover:bg-app-secondary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:text-white"
                  @click="$emit('close-modal')"
                >
                  <span class="font-extrabold px-2">X</span> Got it, thanks!
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
