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
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto sm:h-10" src="/public/proc.jpg" alt="" />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <PopoverButton
                class="focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
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
        <div class="hidden md:flex md:items-center md:space-x-6"></div>
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
