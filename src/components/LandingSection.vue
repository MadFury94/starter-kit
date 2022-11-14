<template>
  <section>
    <!-- two divs for image and writeup -->
    <div class="grid lg:grid-cols-2 md:grid-cols-1">
      <div class="relative shadow-2xl shadow-app-secondary sm:rounded">
        <div class="lg:absolute inset-0">
          <img class="" src="/oilworker.jpg" />
        </div>
      </div>

      <div class="py-20 lg:pr-48 lg:px-8 px-2">
        <SmallButton class="pr-72 lg:pr-64" />
        <h1
          class="text-app-primary border-l-4 px-1 py-2 border-app-primary-500 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {{ companyInformation.name.Companyname }}
        </h1>
        <h2
          class="text-app-secondary border-l-4 px-1 py-2 border-app-primary-500 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
        >
          {{ companyInformation.name.Companyname2 }}
        </h2>

        <p class="pb-4">
          Lorem ipsum dolor sit amet. Cum tenetur atque vel distinctio galisum
          eum distinctio pariatur et esse recusandae sed voluptatem temporibus
          At dolor dolores? Aut veniam esse ut officiis reprehenderit non
          deserunt omnis est sapiente illo vel vitae facere non galisum sunt.
        </p>
        <div>
          <button
            class="flex bg-app-primary-500 border-white font-semibold p-2 border-2 rounded-lg hover:bg-app-secondary-500 text-white hover:text-white"
          >
            <i
              @click="toggleModal"
              class="fa fa-info-circle duration-150 cursor-pointer px-1"
              aria-hidden="true"
              ><span class="px-1">About Us </span></i
            >
          </button>

          <ButtonComponent class="bg-red-500" text="New One" />
        </div>
        <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
          <p class="">
            We at PrrLorem ipsum dolor sit amet. Cum tenetur atque vel
            distinctio galisum eum distinctio pariatur et esse recusandae sed
            voluptatem temporibus At dolor dolores? Aut veniam esse ut officiis
            reprehenderit non deserunt omnis est sapiente illo vel vitae facere
            non galisum sunt.
          </p>
        </BaseModal>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import BaseModal from "./BaseModal.vue";
import { companyInformation } from "../../public/store/store";
import ButtonComponent from "./ButtonComponent.vue";
import SmallButton from "./SmallButton.vue";
// import ButtonComponent from "./ButtonComponent.vue";

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
