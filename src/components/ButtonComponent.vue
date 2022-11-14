<template>
  <div>
    <button
      class="flex bg-app-primary-500 border-white font-semibold p-2 border-2 rounded-lg hover:bg-app-secondary-500 text-white hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="w-4 h-6"
      >
        <path
          d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
        />
        <path
          d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
        />
      </svg>
      <p class="px-1">{{ text }}</p>
    </button>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "test",
  },
});
</script>

<style lang="scss" scoped></style>
