<template>
  <div>
    <header
      class="relative flex items-center justify-center h-screen mb-12 overflow-hidden pb-10 mx-auto max-w-7xl lg:px-8 md:px-8"
    >
      <div
        class="bg-gradient-to-r from-app-primary to-app-secondary mix-blend-multiply"
      >
        <h1
          class="mt-4 absolute inset-0 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
        >
          <span class="block">Priziangori </span>
          <span
            class="block bg-gradient-to-r from-app-primary to-app-secondary bg-clip-text pb-3 text-transparent sm:pb-5"
          >
            Global Ltd</span
          >
        </h1>
        <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
          >
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img
              class="lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/map.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <video
        autoplay
        loop
        muted
        class="absolute z-10 w-auto min-h-full max-w-none"
      >
        <source src="/procurevid.mp4" type="video/mp4" />
      </video>
    </header>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
