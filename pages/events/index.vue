<script setup>
import { listEvents } from '~/data/Event/event'
// Sort ascending by ID
// events.sort((a, b) => a.id - b.id)

// Or descending
const event = listEvents.sort((a, b) => b.id - a.id)

</script>
<template>
  <div class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')] ">
    <header class="fixed top-0 left-0 z-50 w-full">
      <div class="w-full bg-gradient-to-b from-[#00275e] via-[#00275e]/60 to-transparent">
        <div class="max-w-screen-xl !mx-auto flex items-center justify-between !px-4 sm:!px-6 lg:!px-8 !py-2">
          <!-- Logo -->
          <div class="shrink-0">
            <a href="/" class="inline-flex items-center">
              <img class="h-10 md:h-12 !p-1" src="https://www.philliptrustee.com.kh/v2/img/trustee.png"
                alt="Phillip Trustee Cambodia" />
            </a>
          </div>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-2 lg:gap-3 text-white text-[15px] lg:text-base font-normal">
            <a href="/" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4 ">Home</a>
            <a href="/about" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Profile</a>
            <a href="/services" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4 ">Services</a>
            <a href="/events" class="text-[#F15A22] font-medium rounded-lg !py-2 !px-4 bg-[#F15A22]/20">Event</a>
            <a href="/faqs" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">FAQs</a>
          </nav>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-white text-2xl !p-2" @click="menuOpen = !menuOpen"
            aria-label="Toggle navigation" :aria-expanded="menuOpen ? 'true' : 'false'">
            ☰
          </button>
        </div>

        <!-- Mobile Nav -->
        <div v-show="menuOpen" class="md:hidden bg-[#00275E] text-white">
          <div class="max-w-screen-xl !mx-auto flex flex-col !px-4 !py-2">
            <a href="/" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Home</a>
            <a href="/about"
              class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Profile</a>
            <a href="/services" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 text-[#F15A22]">Services</a>
            <a href="/events" class="font-medium rounded-lg bg-white/10 !py-3 !px-2 text-[#F15A22]">Event</a>
            <a href="/faqs" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">FAQs</a>
          </div>
        </div>
      </div>
    </header>

    <section
      class="w-full h-screen bg-fixed bg-[url('https://www.philliptrustee.com.kh/v2/img/event_1_hero.jpg')] bg-cover bg-center">
    </section>

    <section
      class="w-full !py-[45px] relative bg-repeat-x bg-left-bottom top-0 left-0 bg-[url('https://www.philliptrustee.com.kh/v2/img/rep_bottom_bg.png')]">

      <!-- Title -->
      <div class="w-[90%] md:w-[80%] !py-[40px] md:!py-[60px] !px-[20px] md:!px-[70px] !mx-auto">
        <h1 class="text-white text-2xl md:text-3xl text-center font-bold !mb-[20px] md:!mb-[30px]">
          Events
        </h1>
      </div>

      <!-- Event Grid -->
      <div class="lg:w-[55%] md:w-[60%] !mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">

        <div class="!m-[8px] relative" v-for="event in listEvents" :key="event.id">
          <NuxtLink :to="`/events/${event.id}`">
            <div
              class="relative w-full h-[200px] sm:h-[180px] md:h-[200px] lg:h-[180px] overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition hover:duration-300 group hover:shadow-xl">

              <!-- Dark blue overlay -->
              <div class="absolute w-full h-full bg-[#002b66]"></div>

              <!-- Image -->
              <div class="absolute w-full h-full overflow-hidden">
                <img
                  class="object-cover w-full h-full rounded-xl group-hover:scale-110 group-hover:transition group-hover:duration-2000"
                  :src="event.thumbnail" alt="">
              </div>

              <!-- Black overlay -->
              <div class="absolute w-full h-full bg-black/40 rounded-xl">
                <div
                  class="absolute rounded-xl w-full h-full group-hover:bg-[#F15A22]/40 hover:transition hover:duration-500">
                </div>
              </div>

              <!-- Title -->
              <span
                class="text-white absolute top-[25%] left-[5%] font-semibold text-left text-base sm:text-lg md:text-xl">
                {{ event.title }}
              </span>

              <!-- Arrow -->
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20%] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
              </span>
            </div>
          </NuxtLink>
        </div>

      </div>
    </section>
    <AppFooter />
  </div>
</template>
