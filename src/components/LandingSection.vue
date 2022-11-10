<template>
  <section>
    <!-- two divs for image and writeup -->
    <div class="grid lg:grid-cols-2 md:grid-cols-1">
      <div class="relative shadow-2xl shadow-app-secondary sm:rounded">
        <div class="lg:absolute inset-0">
          <img class="" src="/oilworker.jpg" />
        </div>
      </div>
      <div class="py-20 lg:pr-48 px-20">
        <h1
          class="text-app-primary text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Priziangori
        </h1>
        <h2
          class="text-app-secondary text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          Global
        </h2>

        <p class="pb-4">
          Lorem ipsum dolor sit amet. Cum tenetur atque vel distinctio galisum
          eum distinctio pariatur et esse recusandae sed voluptatem temporibus
          At dolor dolores? Aut veniam esse ut officiis reprehenderit non
          deserunt omnis est sapiente illo vel vitae facere non galisum sunt.
        </p>
        <div class="grid place-items-center">
          <button
            class="flex bg-white font-semibold p-2 border-2 border-black rounded-lg hover:bg-app-secondary hover:text-white"
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
            <span class="px-1"> Read more</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
