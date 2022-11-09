<template>
  <div class="px-1- container mx-auto py-20 px-4 lg:px-80 md:px-30">
    <div class="flex items-center gap-x-10 gap-y-10">
      <div class="flex gap-4 overflow-x-scroll">
        <div v-for="(item, index) in logos" :key="index">
          <img class="h-20" :alt="item.alt" :src="`/logos/${item.src}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  {
    src: "shell.jpg",
    alt: "Eroton",
  },
  {
    src: "newcross-600x600-1.png",
    alt: "Newcross",
  },
];
</script>
