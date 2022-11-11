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
            class="flex bg-white border-app-secondary-500 font-semibold p-2 border-2 rounded-lg hover:bg-app-secondary text-app-secondary-500 hover:text-white"
          >
            <i
              @click="toggleModal"
              class="fa fa-info-circle duration-150 cursor-pointer px-1"
              aria-hidden="true"
              ><span class="px-1">About Us</span></i
            >
          </button>
        </div>
        <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
          <p class="">
            We at PrrLorem ipsum dolor sit amet. Cum tenetur atque vel
            distinctio galisum eum distinctio pariatur et esse recusandae sed
            voluptatem temporibus At dolor dolores? Aut veniam esse ut officiis
            reprehenderit non deserunt omnis est sapiente illo vel vitae facere
            non galisum sunt.
          </p>
          <div class="grid place-content-center"></div>
        </BaseModal>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";

const modalActive = ref(true);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
