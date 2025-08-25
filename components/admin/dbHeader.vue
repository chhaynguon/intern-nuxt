<script setup>
</script>

<template>
    <header class="w-full bg-white shadow-md fixed z-20 flex justify-between !p-0 sm:!p-[5px] md:!p-[7px] lg:!p-[10px]">
        <div class="flex justify-between w-full place-self-center">
            <!-- Profile Section -->
            <div class="cursor-pointer">
                <nuxt-link to="/admin/pfAdmin"
                    class="flex items-center gap-2 !mx-[3px] sm:!mx-[5px] cursor-pointer group">
                    <img class="w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] rounded-full border-[2px] border-[#454545] group-hover:border-[#F15A22]"
                        src="../../assets/img/IMG_20250603_125940_674.jpg" alt="Profile" />
                    <div
                        class="font-medium text-[#454545] dark:text-white text-right group-hover:text-[#F15A22] transition group-hover:duration-300">
                        <div class="text-sm sm:text-base">Pen ChhayNguon</div>
                        <div class="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                            Joined in June 2025
                        </div>
                    </div>
                </nuxt-link>
            </div>

            <!-- Right Section -->
            <div class="flex place-self-center place-items-center">
                <!-- Messages Button -->
                <div class="place-self-center text-center !mx-[2px] sm:!mx-[3px] !mt-[1px] sm:!mt-[2px]">
                    <button type="button"
                        class="inline-flex items-center !px-2 sm:!px-3 !py-1 sm:!py-1.5 text-xs sm:text-sm font-medium text-center text-white bg-[#454545] rounded-lg hover:bg-blue-400 cursor-pointer group transition hover:duration-300">
                        Messages
                        <span
                            class="inline-flex items-center justify-center w-4 h-4 !ms-1 sm:!ms-2 text-xs sm:text-md font-semibold text-blue-400 group-hover:text-red-500 bg-white rounded-full transition group-hover:duration-300">
                            2
                        </span>
                    </button>
                </div>

                <!-- Notification Icon -->
                <div class="relative flex">
                    <svg class="w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] !mx-[2px] sm:!mx-[3px] text-gray-800 dark:text-white cursor-pointer hover:scale-110 hover:border-[2px] hover:text-blue-400 hover:rounded-full hover:border-blue-400 transition hover:duration-300"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z" />
                    </svg>
                </div>

                <!-- Settings Icon -->
                <div class="cursor-pointer !mx-[2px] sm:!mx-[3px] place-self-center group">
                    <i class="pi pi-spin pi-cog w-[22px] h-[22px] sm:w-[25px] sm:h-[25px] !mt-[3px] sm:!mt-[5px] rounded-full place-self-center hover:text-red-400 hover:bg-white"
                        style="font-size: 22px"></i>
                </div>
            </div>
        </div>
    </header>
</template>