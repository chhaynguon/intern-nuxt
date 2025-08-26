<script setup lang="ts">
import { partevents } from '../../../data/Event/partevent'
import { useRoute, navigateTo } from '#imports'
import { ref } from 'vue'

const menuOpen = ref(false)

const route = useRoute();

// slug is like "event3"
const slug = route.params.slug as string;
const eventId = Number(slug.replace('event', ''));
const event = partevents.find(e => e.id === eventId);


const goNext = () => {
    if (eventId < 17) {
        navigateTo(`/events/${eventId + 1}`)
    } else {
        navigateTo('/events')
    }
}
const goBack = () => {
    if (eventId > 1) {
        navigateTo(`/events/${eventId - 1}`)

    }
}

</script>
<template>
    <div v-if="event" class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">

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
                    <nav
                        class="hidden md:flex items-center gap-2 lg:gap-3 text-white text-[15px] lg:text-base font-normal">
                        <a href="/" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4 ">Home</a>
                        <a href="/about" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Profile</a>
                        <a href="/services"
                            class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4 ">Services</a>
                        <a href="/events"
                            class="text-[#F15A22] font-medium rounded-lg !py-2 !px-4 bg-[#F15A22]/20">Event</a>
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
                        <a href="/"
                            class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Home</a>
                        <a href="/about"
                            class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Profile</a>
                        <a href="/services"
                            class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 text-[#F15A22]">Services</a>
                        <a href="/events"
                            class="font-medium rounded-lg bg-white/10 !py-3 !px-2 text-[#F15A22]">Event</a>
                        <a href="/faqs"
                            class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">FAQs</a>
                    </div>
                </div>
            </div>
        </header>
        <div class="w-full h-screen bg-fixed bg-no-repeat bg-cover"
            :style="{ backgroundImage: `url(${event.background})` }">
        </div>
        <section
            class="w-full relative bg-bottom bg-repeat-x bg-[url('https://www.philliptrustee.com.kh/v2/img/rep_bottom_bg.png')] ">
            <div class="w-full place-self-center !pb-[20px] ">
                <div class="w-full place-self-center !py-[50px] !px-[40px]">
                    <div class="w-[80%] !mx-auto">
                        <h2 class="text-center text-white font-bold text-3xl !mb-[40px]">{{ event.title }}</h2>
                        <div class="w-[70%] !mx-auto">
                            <p class=" place-self-center !mb-[20px] font-normal text-lg">
                                <span v-html="event.description" class="text-base text-white text-left">
                                </span>
                            </p>
                            <div v-for="img in event.image" :key="img">
                                <img class="w-full h-full !mt-[20px]" :src="img" alt="">
                            </div>
                            <div class="flex justify-between !mt-6">
                                <button :hidden="(eventId <= 1)" @click="goBack()"
                                    class=" bg-[#F15A22] hover:bg-orange-600 text-white !px-6 !py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                                    <img class="w-[15px] h-[15px] bottom-[20px] left-[45%] scale-x-[-1]"
                                        src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
                                </button>
                                <span
                                    class=" text-white content-center text-center bg-[#F15A22] !px-6 !py-2 rounded-lg font-semibold">{{
                                        event.id }}
                                </span>
                                <button :hidden="(eventId >= 17)" @click="goNext()"
                                    class=" bg-[#F15A22] hover:bg-orange-600 text-white !px-6 !py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer">
                                    <img class="w-[15px] h-[15px] bottom-[20px] left-[45%]"
                                        src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
                                </button>
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