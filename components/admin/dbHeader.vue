<script setup>
</script>
<template>
    <header class=" w-full bg-white shadow-md fixed z-2">
        <div class="w-[80%] !p-[20px] flex justify-between place-self-center">
            <div class="cursor-pointer">
                <nuxt-link to="/admin/pfAdmin" class="flex items-center gap-2 !mx-[5px] cursor-pointer group">
                    <img class="w-[50px] h-[50px] rounded-full border-[2px] border-[#454545] group-hover:border-[#F15A22]"
                        src="../../assets/img/IMG_20250603_125940_674.jpg" alt="">
                    <div
                        class="font-medium text-[#454545] dark:text-white text-right group-hover:text-[#F15A22] transition gorup-hover:trasition gorup-hover:duration-300">
                        <div>Pen ChhayNguon</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Joined in June 2025</div>
                    </div>
                </nuxt-link>
            </div>
            <div class="flex place-self-center place-items-center">
                <div class="place-self-center text-center !mx-[6px] !mt-[2px]">
                    <button type="button"
                        class="inline-flex items-center !px-4 !py-2 text-sm font-medium text-center text-white bg-[#454545] rounded-lg hover:bg-blue-400 cursor-pointer group transition hover:transition hover:duration-300">
                        Messages
                        <span
                            class="inline-flex items-center justify-center w-5 h-5 !ms-2 text-md font-semibold text-blue-400 group-hover:text-red-500 bg-white rounded-full transition group-hover:transition group-hover:duration-300">
                            2
                        </span>
                    </button>
                </div>
                <div class="relative flex">
                    <svg class="w-[30px] h-[30px] !mx-[6px] text-gray-800 dark:text-white cursor-pointer hover:scale-115 hover:border-[3px] hover:text-blue-400 hover:rounded-full hover:border-blue-400 transition hover:transition hover:duration-300"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z" />
                    </svg>
                </div>
                <div class="cursor-pointer !mx-[6px] place-self-center group position">
                    <i class="pi pi-spin pi-cog w-[30px] h-[30px] !mt-[5px] rounded-full place-self-center hover:text-red-400 hover:bg-white"
                        style="font-size: 30px">
                    </i>
                </div>
            </div>
        </div>
    </header>
</template>