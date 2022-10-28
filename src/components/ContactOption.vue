<template>
  <div>
    <div>
      <section
        class="grid place-content-center gap-y-10 px-10 py-20 sm:grid-cols-3 lg:grid-cols-3"
      >
        <div v-for="(item, index) in serviceList" :key="index">
          <div class="box-border h-48 w-48 items-center gap-x-4 border-4 p-4">
            <h1 class="text-center font-bree text-sm font-bold uppercase">
              {{ item.title }}
            </h1>
            <p class="text-center font-bree text-sm font-light">
              {{ item.subtitle }}
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const serviceList = [
  {
    title: "Our Administrative Office",
    subtitle: "Road B, House 106, Oba Adeyanka Oyekan Estate, Lekki Phase 1",
  },
  {
    title: "Branch Office",
    subtitle:
      "LAKESIDE MALL Plot 101 East West Road, Rumudara, Port Harcourt Rivers State",
  },
  {
    title: "Branch office",
    subtitle: "11 MCC Road, Off Ernheren Road, Warri Delta State",
  },
];
</script>
