<script setup lang="ts">
import { partevents } from '../../../data/Event/partevent'
import { useRoute } from '#imports'


const route = useRoute();

// slug is like "event3"
const slug = route.params.slug as string;
const eventId = Number(slug.replace('event', ''));
const event = partevents.find(e => e.id === eventId);


</script>
<template>
    <div v-if="event" class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
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