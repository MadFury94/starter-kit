<template>
  <div>
    <section
      class="grid gap-y-10 px-10 py-20 md:grid-cols-2 lg:grid-cols-3 pt-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <div v-for="(item, index) in serviceList" :key="index">
        <Transition class="transition ease-in-out delay-1500">
          <div
            class="flex items-center gap-x-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          >
            <img :src="`/${item.icon}`" alt="supply icon" class="w-16" />
            <p class="text-sm uppercase">
              {{ item.title }}
            </p>
          </div>
        </Transition>
      </div>
    </section>
  </div>
</template>
<script setup>
const serviceList = [
  {
    icon: "constr1.png",

    title: "Supply of boats and vehicles to SPDC for Immunization Programme",
  },
  {
    icon: "constr2.png",

    title: "Design, Fabrication and installation of smokeless flares",
  },
  {
    icon: "constr3.png",

    title: "Procurement and Installation of Remote Ignition System",
  },
  {
    icon: "constr4.png",

    title:
      "Our fabrication facility is located in Omueke Village Igwuruta Rd Ikwerre L.G.A Rivers State",
  },
  {
    icon: "constr5.png",

    title: "Flow line replacement, maintenance and installation",
  },
  {
    icon: "constr6.png",

    title: "Flow station/facilities upgrade and rehabilitation",
  },
];
</script>
