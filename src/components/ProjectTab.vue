<template>
  <!-- Mobile view -->
  <div class="grid lg:grid-cols-2 md:grid-cols-1">
    <div
      class="relative shadow-2xl shadow-app-secondary sm:rounded lg:order-last"
    >
      <div class="inset-0">
        <img class="" src="/Smoking-Flare.png" />
      </div>
    </div>
    <div class="py-10 lg:pr-48 px-2">
      <SmallButton class="pr-72 lg:pr-64" />
      <h1
        class="text-app-primary border-l-4 px-1 py-2 border-app-primary-500 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
      >
        Related
      </h1>
      <h2
        class="text-app-secondary border-l-4 px-1 py-2 border-app-primary-500 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
      >
        Services
      </h2>

      <p class="">
        We have in our employ experienced and professionally qualified personnel
        in fabrication and construction field of services. Our fabrication
        facility is located in
        <span class="" v-html="companyInformation.addresses.address2"> </span>
      </p>
      <div class="py-2">
        <!-- <button
          class="flex bg-app-primary-500 border-white font-semibold p-2 border-2 rounded-lg hover:bg-app-secondary-500 text-white hover:text-white"
        >
          <i
            @click="toggleModal"
            class="fa fa-info-circle duration-150 cursor-pointer px-1"
            aria-hidden="true"
            ><span class="px-1">About Us</span></i
          >
        </button> -->
        <ButtonComponent
          class="duration-150 cursor-pointer"
          @click="toggleModal"
          text="About Us"
        />
      </div>
    </div>
  </div>

  <div class="mx-auto w-full max-w-4xl px-2 py-16 sm:px-2">
    <TabGroup>
      <TabList
        class="flex space-x-1 border-t-8 border-app-primary-500 bg-[#f4f4f4] p-1"
      >
        <Tab
          v-for="(item, index) in services"
          as="template"
          :key="index"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full  py-2.5 text-sm font-medium leading-5 text-app-primary-900',
              ' ring-white ring-opacity-60 ring-offset-2 ring-offset-app-primary-400 focus:outline-none focus:ring-2 rounded-lg',
              selected
                ? 'bg-white  shadow'
                : '  text-black hover:bg-white/[0.12] hover:text-app-primary-400',
            ]"
          >
            {{ item.title }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(item, idx) in services"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
          ]"
        >
          <div
            class="shadow-lg cursor-pointer group hover:text-app-primary-900 hover:font-semibold transition-all duration-1000"
          >
            <img class="w-full h-96 pb-4" :src="item.image" />
            <h1
              class="text-sm leading-5 text-app-primary-900 text-center font-semibold py-4"
            >
              {{ item.text }}
            </h1>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { companyInformation } from "../../public/store/store";
import SmallButton from "./SmallButton.vue";
import ButtonComponent from "./ButtonComponent.vue";

const services = ref([
  {
    title: "PIPELINE CONSTRUCTION",
    image: "./pipe.jpg",
    text: "THIS IN CAPS THIS ON CAPS THIS IN CAPS THIS ON CAPS ",
  },
  {
    title: "FLARE GAS METERING SYSTEM",
    image: "./flaregas.jpg",
    text: "THIS IN CAPS THIS ON CAPS",
  },
  {
    title: "FABRICATION OF SMOKELESS FLARES",
    image: "./airgas.jpg",
    text: "THIS IN CAPS THIS ON CAPS",
  },
]);
</script>
