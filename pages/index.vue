<script setup >
import { keyService } from '~/data/Service/keyService'
import { ref, nextTick } from 'vue'

const menuOpen = ref(false)

const showMore = ref(false);
const contentHeight = ref("0px");

const toggleShowMore = async () => {
  showMore.value = !showMore.value;

  // Wait for DOM to update
  await nextTick();

  const el = document.getElementById("extraContent");
  if (el) {
    contentHeight.value = showMore.value ? el.scrollHeight + "0px" : "0px";
  }
};
</script>
<template>
  <div class="w-full min-h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')] bg-no-repeat">
    <!-- Prefer adding external CSS in app.config or nuxt.config, kept here if needed -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Header -->
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
            <a href="/" class="text-[#F15A22] font-medium rounded-lg !py-2 !px-4 bg-[#F15A22]/20">Home</a>
            <a href="/about" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Profile</a>
            <a href="/services" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Services</a>
            <a href="/events" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Event</a>
            <a href="/faqs" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">FAQs</a>
          </nav>

          <!-- Mobile Menu Button -->
          <button class="md:hidden text-white text-2xl !p-2 transition duration-300" @click="menuOpen = !menuOpen"
            aria-label="Toggle navigation" :aria-expanded="menuOpen ? 'true' : 'false'">
            ☰
          </button>
        </div>

        <!-- Mobile Nav -->
        <div v-show="menuOpen" class="md:hidden bg-[#00275E] text-white">
          <div class="max-w-screen-xl !mx-auto flex flex-col !px-4 !py-2">
            <a href="/" class="font-medium rounded-lg bg-white/10 !py-3 !px-2 text-[#F15A22]">Home</a>
            <a href="/about" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Profile</a>
            <a href="/services" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Services</a>
            <a href="/events" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Event</a>
            <a href="/faqs" class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">FAQs</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section
      class="relative w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/hero_bg.png')] bg-cover bg-center">
      <!-- Offset for fixed header -->
      <div class="pointer-events-none !pt-[72px] md:!pt-[88px]"></div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>

      <div class="relative flex items-center max-w-screen-xl !mx-auto">
        <div class="w-full flex items-center justify-center sm:justify-start !px-4 sm:!px-6 lg:!px-18 !py-16 sm:!py-24">
          <div class="max-w-[520px] text-center sm:text-left">
            <span class="block text-base text-white sm:text-lg" style="font-family: sans-serif;">Leave your worries
              behind,</span>
            <h1 class="text-[#F15A22] italic leading-tight font-bold !mt-2 text-4xl sm:text-5xl md:text-6xl"
              style="font-family: var(--hero-font); font-size: var(--fs-xl);">
              <span>We've got</span><br />
              <span>your back.</span>
            </h1>
          </div>
        </div>
      </div>

      <!-- Maintain visual height without fixed pixels -->
      <div class="h-[28vh] sm:h-[34vh] md:h-[40vh] lg:h-[44vh]"></div>
    </section>

    <!-- About -->
    <section class="w-full !py-10 sm:!py-12 lg:!py-16 !px-4 sm:!px-6 lg:!px-8 text-center">
      <h2 class="text-white font-bold text-2xl md:text-3xl !mb-5 md:!mb-7">About Us</h2>

      <p class="text-white font-normal text-base md:text-lg max-w-[1000px] !mx-auto !mb-5 md:!mb-10 text-left">
        Phillip Trustee (Cambodia), Co Ltd. was incorporated in June 2022, after the Law of Trust was
        passed in 2019, allowing foreigners to register their fixed assets with trustee companies in
        Cambodia. Our specialised license consists of commercial, social and personal trust in which
        has been approved by the Trust Regulator.
      </p>

      <div id="extraContent" ref="contentEl"
        class="max-w-[1000px] !mx-auto text-white space-y-4 text-base md:text-lg text-left overflow-hidden transition-all duration-300 ease-in-out"
        :style="{ maxHeight: contentHeight }">
        <p>
          We are the associated company of Phillip Bank, Plc, one of the medium-sized commercial
          banks in Cambodia, part of Phillip Capital group in Singapore, and a sister company of
          Phillip General Insurance and Phillip Life Assurance Company.
        </p>
        <p>
          At Phillip Trustee (Cambodia), Co Ltd. we believe in a financial and non-financial
          ecosystem that can provide suitable services to investors and customers throughout
          Cambodia such as commercial, public, social and personal trust services.
        </p>

        <div class="flex justify-center !mt-6">
          <a href="/about"
            class="bg-[#F15A22] hover:bg-orange-600 text-white !px-6 !py-2 rounded-lg inline-flex items-center justify-center gap-2">
            <img class="w-[20px] h-[20px]" src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="" />
          </a>
        </div>
      </div>

      <div class="!mt-6 text-center">
        <button @click="toggleShowMore"
          class="bg-white text-[#00275E] font-medium !px-6 !py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
          {{ showMore ? "Show Less" : "Read More" }}
        </button>
      </div>
    </section>

    <!-- Key Services -->
    <section class="w-full !pb-14 sm:!pb-16">
      <div class="max-w-screen-xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
        <h2 class="text-center text-white text-2xl md:text-3xl font-bold !mb-8">Key Services & Products</h2>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="service in keyService" :key="service.id"
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
