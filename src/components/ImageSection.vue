<template>
  <div class="relative">
    <div class="absolute inset-x-0 bottom-0 h-1/2 bg-app-secondary" />
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="relative shadow-xl sm:overflow-hidden sm:rounded">
        <div class="absolute inset-0">
          <img
            class="h-full w-full object-cover"
            src="/Smoking-Flare.png"
            alt="People working on laptops"
          />
          <div
            class="absolute inset-0 bg-gradient-to-r from-app-primary to-app-secondary mix-blend-multiply"
          />
        </div>
        <div
          class="text-app-primary px-10 py-2 border-app-primary-500 tracking-tight"
        >
          <div class="relative py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1
              class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span class="block text-white py-2 px-4"
                >We’ve Been Building
              </span>
              <span class="block text-app-primary py-2 px-4"
                >For Over 20 years</span
              >
            </h1>
            <p class="mt-6 text-xl text-gray-400 text-justify sm:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div class="grid place-items-center py-4">
              <div class="">
                <button
                  class="flex bg-transaprent font-semibold p-2 hover:bg-app-secondary border-app-secondary-500 border-2 rounded-lg hover:rounded-lg hover:text-white text-white"
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
                  <span class="px-1"> Message us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonComponent from "./ButtonComponent.vue";
</script>
