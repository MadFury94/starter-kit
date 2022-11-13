<template>
  <nav>
    <!-- desktop Menu -->
    <div class="bg-white lg:grid lg:items-center">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between">
          <!-- menu -->
          <div class="flex space-x-4">
            <!-- logo -->
            <div class="flex items-center px-2">
              <a href="" class="flex items-center space-x-2 py-5 px-2">
                <h1 class="text-2xl font-extrabold text-app-secondary-500">
                  Starter<span
                    class="text-2xl font-extrabold text-app-primary-500"
                    >Kit</span
                  >
                </h1>
              </a>
            </div>
            <!-- menu -->

            <div class="text-center">
              <div
                class="hidden md:flex lg:text-center space-x-1 font-semibold"
              >
                <a
                  href="/"
                  class="px-2 py-5 hover:text-app-primary-500 hover:font-semibold"
                  >HOME</a
                >
                <a
                  href="/"
                  class="px-2 py-5 hover:text-app-primary-500 hover:font-semibold"
                  >ABOUT</a
                >
                <a
                  href="/"
                  class="px-2 py-5 hover:text-app-primary-500 hover:font-semibold"
                  >SERVICES</a
                >
                <a
                  href="/"
                  class="px-2 py-5 hover:text-app-secondary hover:font-semibold"
                  >PROJECTS</a
                >

                <a
                  href="/"
                  class="px-2 py-5 hover:text-app-secondary hover:font-semibold"
                  >CONTACT US</a
                >
              </div>
            </div>
          </div>
          <!-- button -->
          <div class="hidden md:flex items-center space-x-1 lg:px-10">
            <button
              @click="showMobileMenu = !showMobileMenu"
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
              <span class="px-1"> Message us</span>
            </button>
          </div>
          <!-- button show mobile menu -->
          <div class="md:hidden flex items-center">
            <button
              @click="showMobileMenu = !showMobileMenu"
              class="py-5 px-16"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-app-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div class="md:hidden bg-white px-4" v-show="showMobileMenu">
      <a
        href=""
        class="block py-2 px-4 bg-white hover:text-app-primary-500 hover:font-semibold"
        >HOME</a
      >
      <a
        href=""
        class="block py-2 px-4 bg-white hover:text-app-primary-500 hover:font-semibold"
        >ABOUT</a
      >
      <a
        href=""
        class="block py-2 px-4 bg-white hover:text-app-primary-500 hover:font-semibold"
        >SERVICES</a
      ><a
        href=""
        class="block py-2 px-4 bg-white hover:text-app-primary-500 hover:font-semibold"
        >PROJECTSS</a
      >

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
        <span class="px-1"> Message us</span>
      </button>
    </div>
  </nav>
  <div class="p-8 text-2xl font-extrabold text-center"></div>
</template>

<script setup>
import { ref } from "vue";

const showMobileMenu = ref(false);

// const navigation = [
//   {
//     path: "/",
//     name: "Home",
//     title: "home",
//   },
//   {
//     path: "/",
//     name: "About",
//     title: "about",
//   },
//   {
//     path: "/",
//     name: "Services",
//     title: "services",
//   },
// ];
</script>

<style></style>
