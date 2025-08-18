<script setup>
import { keyService } from '~/data/Service/keyService'
import { ref } from 'vue'

const showMore = ref(false);

</script>

<template>
  <div class="w-full  bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div
      class="w-full h-[100px] items-end fixed left-0 top-0 z-10 bg-gradient-to-b from-[#00275e] via-[rgba(0, 39, 94, 0)]">
      <div class="w-[65%] h-full place-self-center flex justify-between items-center">
        <div class="w-[20%]">
          <a href="/" class=" z-1000">
            <img class="!p-2" src="https://www.philliptrustee.com.kh/v2/img/trustee.png" alt="" />
          </a>
        </div>
        <div class="w-[75%]">
          <nav class="w-[60%] items-end place-self-end flex justify-between text-white text-lg font-normal !px-[10px]">
            <a href="/" class="text-[#F15A22] font-medium rounded-lg !py-1 !px-[30px] bg-[#F15A22]/20">Home</a>
            <a href="/about" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Profile</a>
            <a href="/services" class="hover:text-[#F15A22] font-medium rounded-lg !py-1 !px-[30px]">Services</a>
            <a href="/events" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Event</a>
            <a href="/faqs" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">FAQs</a>
          </nav>
        </div>

      </div>
    </div>


    <section
      class="w-full h-[1380px] relative bg-[url('https://www.philliptrustee.com.kh/v2/img/hero_bg.png')] bg-origin-content">
    </section>
    <section class="place-self-center absolute top-[150px] left-[380px]">
      <div class="w-[80%]">
        <div class="w-[505px]">
          <span class="text-white" style="font-family: sans-serif;">Leave your worries behind,</span><br>
          <h1 class="text-[#F15A22] text-[60px] italic" style="font-family: var(--hero-font);">
            <span class="">We've got</span><br>
            <span>your back.</span>
          </h1>
        </div>
      </div>
    </section>

    <section class="w-full !py-[40px] !px-[20px] md:!px-[60px] text-center">
      <h2 class="text-white font-bold text-2xl md:text-3xl !mb-[20px] md:!mb-[30px]">About Us</h2>

      <!-- Short paragraph -->
      <p class="text-white font-normal text-base md:text-lg max-w-[1000px] !mx-auto !mb-[20px] md:!mb-[40px] text-left">
        Phillip Trustee (Cambodia), Co Ltd. was incorporated in June 2022, after the Law of Trust was
        passed in 2019, allowing foreigners to register their fixed assets with trustee companies in
        Cambodia. Our specialised license consists of commercial, social and personal trust in which
        has been approved by the Trust Regulator.
      </p>

      <!-- Extra content -->
      <div v-if="showMore" class="max-w-[1000px] !mx-auto text-white space-y-4 text-base md:text-lg text-left">
        <p>
          We are the associated company of Phillip Bank, Plc, one of the medium-sized commercial
          banks in Cambodia, part of Phillip Capital group in Singapore, and a sister company of
          Phillip General Insurance and Phillip Life Assurance Company.
        </p>
        <br>
        <p>
          At Phillip Trustee (Cambodia), Co Ltd. we believe in a financial and non-financial
          ecosystem that can provide suitable services to investors and customers throughout
          Cambodia such as commercial, public, social and personal trust services.
        </p>

        <!-- Next button -->
        <div class="flex justify-center !mt-6">
          <a href="/about"
            class="bg-[#F15A22] hover:bg-orange-600 text-white !px-6 !py-2 rounded-lg flex items-center justify-center gap-2">
            <img class="w-[20px] h-[20px] bottom-[20px] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
          </a>
        </div>
      </div>

      <!-- Read More / Show Less button -->
      <div class="!mt-6 text-center">
        <button
          @click="showMore = !showMore"
          class="bg-white text-[#00275E] font-medium !px-6 !py-2 rounded-lg hover:bg-gray-200 transition cursor-pointer">
          {{ showMore ? "Show Less" : "Read More" }}
        </button>
      </div>
    </section>

    <div class="w-full !mb-[70px]">
      <div class="w-[1000px] place-self-center">
        <div class="w-full place-self-center">
          <h2 class="text-center text-white text-3xl font-bold !mb-[40px]">Key Services & Products</h2>
        </div>
        <div class="grid w-full h-[180px] grid-cols-4 gap-4 place-self-center" >
          <div v-for="service in keyService" :key="service.id"
            class="relative w-full h-[180px] overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition hover:duration-500 group hover:shadow-xl">
            <a :href="service.link">
              <div class="absolute w-full rounded-xl">
                <img
                  class="w-full h-full rounded-xl place-self-center group-hover:scale-110 group-hover:transition group-hover:duration-5000"
                  :src="service.image" alt="">
              </div>
              <div class="absolute w-full h-full bg-[#00275E]/40 group-hover:bg-[#F15A22]/40"></div>
              <span class="text-white absolute top-[35%] left-[15%] font-bold">{{ service.title }}</span>
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20px] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <appFooter />
  </div>

</template>