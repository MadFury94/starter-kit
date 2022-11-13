<template>
  <div class="bg-white grid place-items-center gap-x-4 pt-4 pb-4">
    <button
      class="flex bg-app-primary-500 border-white font-semibold p-2 border-2 rounded-lg hover:bg-app-secondary-500 text-white hover:text-white"
    >
      <i
        @click="toggleModal"
        class="fa fa-info-circle duration-150 cursor-pointer px-1"
        aria-hidden="true"
        ><span class="px-1">View Our Partners</span></i
      >
    </button>

    <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
      <div class="flex gap-3 flex-1 justify-end"></div>
      <div class="px-1- container mx-auto w-auto">
        <div class="items-center gap-x-10 gap-y-10">
          <div
            class="grid grid-cols-3 gap-7 lg:grid-cols-6 md:grid-cols-3 px-20 pr-px sm:px-20 sm:pr-16"
          >
            <div v-for="(item, index) in logos" :key="index">
              <img class="h-20" :alt="item.alt" :src="`/logos/${item.src}`" />
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  </div>
</template>

<script setup>
import BaseModal from "./BaseModal.vue";
import { ref } from "vue";
import ButtonComponent from "./ButtonComponent.vue";

const logos = [
  {
    src: "Eroton-E-P-Limited.png",
    alt: "Eroton",
  },
  {
    src: "Seplat-Petroleum-Development-Company-Plc.jpg",
    alt: "Eroton",
  },
  {
    src: "ExxonMobil.jpg",
    alt: "Exxon",
  },
  {
    src: "Total-e1546490476141.jpg",
    alt: "Total",
  },
  {
    src: "Saipem-1.png",
    alt: "Saipem",
  },
  {
    src: "Agip.jpg",
    alt: "Agip",
  },
];
const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
