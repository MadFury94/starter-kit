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
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span class="block text-white">We’ve Been Building </span>
            <span class="block text-app-primary">For Over 20 years</span>
          </h1>
          <p
            class="px-16 mx-auto mt-6 max-w-lg text-xl text-gray-400 text-justify sm:max-w-3xl"
          >
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div
            class="px-16 mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"
          >
            <div
              class="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0"
            >
              <ButtonComponent />
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
