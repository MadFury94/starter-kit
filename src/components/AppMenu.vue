<template>
  <div>
    <div class="bg-transparent pt-6">
      <nav
        class="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div class="flex flex-1 items-center">
          <div class="flex w-full items-center justify-between md:w-auto">
            <a href="#">
              <img class="h-8 w-auto sm:h-10" src="/proc.jpg" alt="" />
            </a>
          </div>
          <div class="hidden space-x-8 md:ml-10 md:flex">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-base font-medium text-app-secondary hover:text-app-primary"
              >{{ item.name }}</a
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Services", href: "#" },
  { name: "Contact ", href: "#" },
];
</script>
