<template>
  <div>
    <div class="overflow-hidden text-gray-700">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="flex-wrap -m-1 md:-m-2">
          <div class="flex-wrap w-1/3">
            <div v-for="(item, index) in logos" :key="index">
              <img class="" :alt="item.alt" :src="`/logos/${item.src}`" />
            </div>
          </div>
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

<style lang="scss" scoped></style>
