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
    <section class="w-[60%] xl:w-[50%] !pb-14 sm:!pb-16 !mx-auto">
        <div class="max-w-screen-xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <h2 class="text-center text-white text-2xl md:text-3xl font-bold !mb-8">Key Services & Products</h2>

          <div class="grid grid-cols-3 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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