<script setup>
import { ref } from 'vue';
import { computed } from "vue";
import { keyService } from "~/data/Service/keyService";
const allowedIds = [1, 2, 3];
const allowedService = computed(() => {
  return keyService.filter(s => allowedIds.includes(s.id));
});

const menuOpen = ref(false)

</script>
<template>
  <div class="w-full position bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
    <!-- <AppHeader /> -->
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
            <a href="/services" class="text-[#F15A22] font-medium rounded-lg !py-2 !px-4 bg-[#F15A22]/20">Services</a>
            <a href="/events" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Event</a>
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
            <a href="/services" class="font-medium rounded-lg bg-white/10 !py-3 !px-2 text-[#F15A22]">Services</a>
            <a href="/events"
              class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Event</a>
            <a href="/faqs" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">FAQs</a>
          </div>
        </div>
      </div>
    </header>


    <section class="w-full h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/hero_bg.png')] bg-cover">
    </section>
    <section class="w-full">
      <div class="w-[1000px] place-self-center">
        <div class="w-full place-self-center !py-[40px] !px-[40px]">
          <h1 class="text-center text-white font-bold text-3xl !my-[30px]">Sales & Purchase Agreement (SPA) Service</h1>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white">SPA is a warranty undertaking
            between the seller and buyer to impose on property conditions, transferring of property, and payment terms.
          </p>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white ">Other expenses for accessory
            costs includes legal and duty taxes (usually liable by sellers).
          </p>
        </div>
      </div>
    </section>
    <section class="w-full !pb-14 sm:!pb-16">
        <div class="max-w-screen-xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <h2 class="text-center text-white text-2xl md:text-3xl font-bold !mb-8">Key Services & Products</h2>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="service in allowedService" :key="service.id"
              class="relative w-full h-[180px] overflow-hidden cursor-pointer rounded-xl group hover:shadow-xl">
              <a :href="service.link" class="block w-full h-full">
                <img
                  class="absolute inset-0 object-cover w-full h-full transition-transform duration-500 rounded-xl group-hover:scale-110"
                  :src="service.image" :alt="service.title" />
                <div class="absolute inset-0 rounded-xl bg-[#00275E]/40 group-hover:bg-[#F15A22]/40 transition-colors">
                </div>

                <div class="absolute inset-0 flex flex-col items-center justify-center text-center !px-3">
                  <span class="font-bold text-white">{{ service.title }}</span>
                  <img class="w-[20px] h-[20px] !mt-3" src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg"
                    alt="" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    <appFooter />
  </div>
</template>