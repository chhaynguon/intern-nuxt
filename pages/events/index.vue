<script setup>
import { listEvents } from '~/data/Event/event'
// Sort ascending by ID
// events.sort((a, b) => a.id - b.id)

// Or descending
const event = listEvents.sort((a, b) => b.id - a.id)
</script>
<template>
  <div class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div
      class="w-full h-[100px] items-end fixed left-0 top-0 z-10 bg-gradient-to-b from-[#00275e] via-[rgba(0, 39, 94, 0)]">
      <div class="w-[65%] h-full place-self-center flex justify-between items-center">
        <div class="w-[15%]">
          <a href="/" class="w-[220px] z-1000">
            <img src="https://www.philliptrustee.com.kh/v2/img/trustee.png" alt="" />
          </a>
        </div>
        <!-- Navigation -->
        <div class="w-[75%]">
          <nav class="w-[60%] items-end place-self-end flex justify-between text-white text-lg font-normal !px-[10px]">
            <a href="/" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Home</a>
            <a href="/about" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Profile</a>
            <a href="/services" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px] ">Service</a>
            <a href="/events" class="text-[#F15A22] font-medium rounded-lg !py-1 !px-[30px] bg-[#F15A22]/20">Event</a>
            <a href="/faqs" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">FAQs</a>
          </nav>
        </div>

      </div>
    </div>

    <section class="w-full h-screen bg-fixed bg-[url('https://www.philliptrustee.com.kh/v2/img/event_1_hero.jpg')]">
    </section>
    <section
      class="w-full !py-[45px] relative bg-repeat-x bg-left-bottom top-0 left-0 bg-[url('https://www.philliptrustee.com.kh/v2/img/rep_bottom_bg.png')]">
      <div class=" w-[80%] !py-[60px] !px-[70px] place-self-center">
        <h1 class="text-white text-3xl text-center font-bold !mb-[30px]">Events</h1>
      </div>
      <div class="w-[45%] place-self-center grid grid-cols-3">

        <div class="!m-[8px] relative" v-for="event in listEvents" :key="event.id">
          <NuxtLink to="`/events/${event.id}`">
            <div
              class="relative w-full h-[200px] overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition hover:duration-300 group hover:shadow-xl">
              <div class=" absolute w-full h-full bg-[#00275E]"></div>
              <div class="absolute w-full overflow-hidden">
                <img
                  class="w-full h-full place-self-center rounded-xl group-hover:scale-110 group-hover:transition group-hover:duration-5000"
                  :src="event.image" alt="">
              </div>
              <div class="absolute w-full h-full bg-black/40 rounded-xl">
                <div
                  class="absolute rounded-xl w-full h-full group-hover:bg-[#F15A22]/40  hover:transition hover:duration-300">
                </div>
              </div>
              <span class="text-white absolute top-[25%] left-[5%] font-semibold text-left text-lg ">{{ event.title }}</span>
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20%] left-[45%]"
                  :src="event.icon" alt="">
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>
