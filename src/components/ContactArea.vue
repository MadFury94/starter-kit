<template>
  <div>
    <div class="grid lg:grid-cols-2">
      <div class="-mb-10 bg-orange-500 p-4">
        <template v-if="!isDev">
          {{ formData }}
        </template>

        <div class="py-8 lg:py-0 lg:px-20">
          <h1 class="font-bree text-2xl uppercase lg:text-5xl">Contact Us</h1>
          <hr class="w-20 border-4 border-black" />
        </div>

        <!-- contact form -->

        <div
          class="grid-cols-1 gap-x-10 gap-y-10 space-y-8 md:grid md:grid-cols-2 md:space-y-0 lg:p-20"
        >
          <div class="w-full">
            <label
              for="fullname"
              class="block text-sm font-medium text-gray-700"
              >Full name:</label
            >
            <div class="mt-1">
              <input
                v-model="formData.name"
                type="text"
                name="name"
                class="block w-full border-gray-300 py-4 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="your full name"
              />
            </div>
          </div>
          <div class="w-full">
            <label
              for="fullname"
              class="block text-sm font-medium text-gray-700"
              >Email:</label
            >
            <div class="mt-1">
              <input
                v-model="formData.email"
                type="email"
                name="email"
                class="block w-full border-gray-300 py-4 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div class="col-span-2 w-full">
            <label
              for="fullname"
              class="block text-sm font-medium text-gray-700"
              >Email:</label
            >
            <div class="mt-1">
              <textarea
                v-model="formData.message"
                type="text"
                :rows="10"
                class="block w-full border-gray-300 py-4 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                placeholder="please leave us a message"
              />
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
                <span class="px-1"> Message us</span>
              </button>
            </div>
          </div>
        </div>

        <!-- contact form -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { companyInformation } from "../../public/store/store";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const isDev = import.meta.env.DEV;

console.log(import.meta.env.DEV);
</script>
