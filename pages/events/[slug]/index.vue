<script setup lang="ts">
import { partevents } from '~/data/Event/partevent'
import { useRoute } from '#imports'
const route = useRoute()

// slug is like "event3"
const slug = route.params.slug as string
const eventId = Number(slug.replace('event', ''))
const event = partevents.find(e => e.id === eventId)
</script>
<template>
    <div v-if="event" class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">

        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
                    <nav
                        class="w-[60%] items-end place-self-end flex justify-between text-white text-lg font-normal !px-[10px]">
                        <a href="/" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Home</a>
                        <a href="/about" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Profile</a>
                        <a href="/services" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px] ">Services</a>
                        <a href="/events"
                            class="text-[#F15A22] font-medium rounded-lg !py-1 !px-[30px] bg-[#F15A22]/20">Event</a>
                        <a href="/faqs" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">FAQs</a>
                    </nav>
                </div>
            </div>
        </div>
        <div class="w-full h-screen bg-fixed bg-no-repeat bg-cover" :style="{ backgroundImage: `url(${event.background})` }">
        </div>
        <section
            class="w-full relative bg-bottom bg-repeat-x bg-[url('https://www.philliptrustee.com.kh/v2/img/rep_bottom_bg.png')] ">
            <div class="w-full place-self-center !pb-[20px] ">
                <div class="w-full place-self-center !py-[50px] !px-[40px]">
                    <div class="w-[80%] !mx-auto">
                        <h2 class="text-center text-white font-bold text-3xl !mb-[40px]">{{ event.title }}</h2>
                        <div class="w-[70%] !mx-auto">
                            <p class=" place-self-center !mb-[20px] font-normal text-lg">
                                <span v-html="event.des" class="text-base text-white text-left">
                                </span>
                            </p>
                            <div v-for="img in event.image" :key="img">
                                <img class="!mt-[20px]" :src="img" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <AppFooter />
    </div>
    <div v-else class="text-center text-red-500 !py-10">
    Event not found
  </div>
</template>