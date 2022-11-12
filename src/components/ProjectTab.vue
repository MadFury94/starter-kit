<template>
  <div class="px-10 py-16 sm:px-10">
    <h1 class="text-2xl font-bold border-l border-app-primary-500">
      Related Services
    </h1>
    <p class="">
      We have in our employ experienced and professionally qualified personnel
      in fabrication and construction field of services. Our fabrication
      facility is located in
      <span class="" v-html="companyInformation.addresses.address2"> </span>
    </p>
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
            <img class="w-full h-96" :src="item.image" />
            {{ item.text }}
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

const services = ref([
  {
    title: "PIPELINE CONSTRUCTION",
    image: "./pipe.jpg",
    text: "nim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    title: "FLARE GAS METERING SYSTEM",
    image: "./flaregas.jpg",
    text: "nim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
  {
    title: "FABRICATION OF SMOKELESS FLARES",
    image: "./airgas.jpg",
    text: "nim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  },
]);
</script>
