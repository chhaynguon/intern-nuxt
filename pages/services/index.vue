<script setup>
import { keyService } from '~/data/Service/keyService'
import { ref } from 'vue'

const menuOpen = ref(false)
</script>
<template>
  <div class="min-w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
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


    <section
      class="w-full h-screen bg-fixed bg-[url('https://www.philliptrustee.com.kh/v2/img/services_hero.jpg')] bg-cover">
    </section>
    <section class="w-full !py-[60px] ">
      <div class="w-[900px] place-self-center !px-[25px] !mx-[15.6px] !pb-[40px]">
        <h2 class="text-2xl font-bold text-center text-white">What is Trust?</h2>
        <div class="w-full items-center !mt-[30px]">
          <p class="text-white text-center text-xl !mb-[50px]">Type of Trust in Cambodia</p>
        </div>
        <div class="grid w-full grid-cols-3 gap4">
          <div class="w-full place-items-center !px-[22.5px] !mx-[15.6px] !mb-[45px]">
            <img class="w-[100px] h-[100px]" src="https://www.philliptrustee.com.kh/v2/img/services_icon_1.svg" alt="">
            <div class="w-full place-items-center text-center text-[12px]">
              <h2 class="text-white font-bold text-xl !mt-[10px]">Financial Trust</h2>
              <span class="text-white">
                Grants or sub-loans provided by development partners for the purpose of developing banking and
                micro-financial sector in Cambodia.
              </span>
            </div>
          </div>
          <div class="w-full place-items-center !px-[22.5px] !mx-[15.6px] !mb-[45px]">
            <img class="w-[100px] h-[100px]" src="https://www.philliptrustee.com.kh/v2/img/services_icon_2.svg" alt="">
            <div class="w-full place-items-center text-center text-[12px]">
              <h2 class="text-xl font-bold text-white">Commercial Trust</h2>
              <span class="text-white">
                Created for the purpose of making profits or other purposes, for the benefits of the Trust Contributor
                or the person acknowledged by the Trust Contributor.
              </span>
            </div>
          </div>
          <div class="w-full place-items-center !px-[22.5px] !mx-[15.6px] !mb-[45px]">
            <img class="w-[100px] h-[100px]" src="https://www.philliptrustee.com.kh/v2/img/services_icon_3.svg" alt="">
            <div class="w-full place-items-center text-center text-[12px]">
              <h2 class="text-xl font-bold text-white">Public Trust</h2>
              <span class="text-white">
                Created for the benefits of Cambodian people in general.
              </span>
            </div>
          </div>
        </div>
        <div class="w-[80%] grid grid-cols-2 gap-6 place-self-center !px-[22.5px] !mb-[45px]">
          <div class="w-full place-items-center !px-[22.5px] !mx-[15.6px] !mb-[45px]">
            <img class="w-[100px] h-[100px]" src="https://www.philliptrustee.com.kh/v2/img/services_icon_4.svg" alt="">
            <div class="w-full place-items-center text-center text-[12px]">
              <h2 class="text-xl font-bold text-white">Social Trust</h2>
              <span class="text-white ">
                Created when a trustor donates his/her property to the trustee for social benefits such as cultures,
                education, humanity, religions, or science.
              </span>
            </div>
          </div>
          <div class="w-[80%] place-items-center !px-[22.5px] !mx-[15.6px] !mb-[45px]">
            <img class="w-[100px] h-[100px]" src="https://www.philliptrustee.com.kh/v2/img/services_icon_5.svg" alt="">
            <div class="w-full place-items-center text-center text-[12px]">
              <h2 class="text-xl font-bold text-white">Personal Trust</h2>
              <span class="text-white">
                Created by the Trustor for the purpose of transferring assets or funds to Trustee to manage and
                safeguard for the Trustor's own benefits or for certain individuals.
              </span>
            </div>
          </div>
        </div>
        <div class="w-full circle_thingy_wrap">
          <div class="circle_thingy !mt-[60px] !px-[30px] text-white">
            <span class="label_1">Trustor</span>
            <span class="label_2">Trustee</span>
            <span class="label_3">Beneficiaries</span>
            <span class="text_1">Transfer of Legal Title</span>
            <span class="text_2">Transfer of Equitable Title</span>
            <div class="circle">
              <img src="https://www.philliptrustee.com.kh/v2/img/circle_thingy.svg" alt="">
            </div>
          </div>
        </div>
        <div class="w-full !my-[90px] flex justify-between text-white text-[14px]">
          <div class="w-[29%]">
            <strong class="w-full text-2xl font-bold text-white">Trustor</strong><br>
            <span>The individual who gives their assets or initial funds to the trust with the right to receive
              information about the trust management and appointment or termination of the trustee.</span>
          </div>
          <div class="w-[29%]">
            <strong class="w-full text-2xl font-bold text-white">Trustee</strong><br>
            <span>The person who has the right to manage and administer the trust from another trustor for the benefit
              of the beneficiary, in accordance with the letter of trust or regulations in force.</span>
          </div>
          <div class="w-[29%]">
            <strong class="text-2xl font-bold text-white">Beneficiaries</strong><br>
            <span>The individual(s) who benefits from the trust on the date the trust comes into force, with the
              exception of certain conditions.</span>
          </div>
        </div>
      </div>
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
    </section>
    <AppFooter />
  </div>

</template>
