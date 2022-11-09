<!-- <template>
  <div>
    <section class="bg-white flex lg:px-40 md:px-20">
      <div class="rounded bg-white lg:px-10 border-2 shadow-2xl">
        <div v-for="(item, index) in WhoServe" :key="index" class="md:px-10">
          <h1 class="font-semibold text-lg pb-10 pt-4 px-10">
            {{ item.title }}
          </h1>
          <ol>
            <li>{{ item.servers }}</li>
          </ol>
        </div>
      </div>
      <div class="grid grid-cols-2 px-10 lg:px-10">
        <div v-for="(item, index) in serviceList" :key="index" class="md:px-10">
          <img class="w-10" src="grow.jpg" />
          <h1>{{ item.title }}</h1>
          <p>{{ item.paragraph }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const WhoServe = [
  { title: "Who We Serve", servers: "General Businesses" },
  {
    servers: "General Businesses",
  },
  {
    servers: "General Businesses",
  },
  {
    servers: "General Businesses",
  },
  {
    servers: "General Businesses",
  },
  {
    servers: "General Businesses",
  },
];

const serviceList = [
  {
    icon: "constr1.png",
    title: "Supply of boats",
    paragraph:
      "Doing business online is in our NDA, sodales nunc. Nulla sed posuere est. Quisque et porttitor lectus",
  },
  {
    icon: "constr1.png",
    title: "Supply of boats",
    paragraph:
      "Doing business online is in our NDA, sodales nunc. Nulla sed posuere est. Quisque et porttitor lectus",
  },
  {
    icon: "constr1.png",
    title: "Supply of boats",
    paragraph:
      "Doing business online is in our NDA, sodales nunc. Nulla sed posuere est. Quisque et porttitor lectus",
  },
  {
    icon: "constr1.png",
    title: "Supply of boats",
    paragraph:
      "Doing business online is in our NDA, sodales nunc. Nulla sed posuere est. Quisque et porttitor lectus",
  },
  {
    icon: "constr1.png",
    title: "Supply of boats",
    paragraph:
      "Doing business online is in our NDA, sodales nunc. Nulla sed posuere est. Quisque et porttitor lectus",
  },
  {
    icon: "constr1.png",
    title: "Supply of boats",
    paragraph:
      "Doing business online is in our NDA, sodales nunc. Nulla sed posuere est. Quisque et porttitor lectus",
  },
];
</script>

<style lang="scss" scoped></style>

<! <template>
  <div>
    <section
      class="grid gap-y-10 px-10 py-20 md:grid-cols-2 lg:grid-cols-3 pt-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      <div v-for="(item, index) in serviceList" :key="index">
        <Transition class="transition ease-in-out delay-1500">
          <div
            class="flex items-center gap-x-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-30 p-5 text-2xl"
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
</script> -->
-->
