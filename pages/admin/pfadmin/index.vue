<script setup>

</script>
<template>

    <header class=" w-full bg-white shadow-md fixed z-2">
        <div class="w-[80%] !p-[20px] flex justify-between place-self-center">
            <div class="cursor-pointer">
                <nuxt-link to="/admin/dashboard" class="flex items-center gap-2 !mx-[5px] cursor-pointer group">
                    <img class="w-[50px] h-[50px] rounded-full border-[2px] border-[#454545] group-hover:border-[#F15A22]"
                        src="../../../assets/img/IMG_20250603_125940_674.jpg" alt="">
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

    <section class="flex justify-between relative top-22.5">
        <div class="w-full !p-5">
            <div
                class="w-[50%] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg !p-5 place-self-center">
                <h2 class="text-lg font-bold text-gray-900 dark:text-white !mb-5">Profile</h2>
                <address class="relative bg-white shadow-md !p-4 rounded-lg border border-gray-200 not-italic">
                    <div class="space-y-2 text-gray-500 dark:text-gray-400 flex">
                        <img class="w-[80px] h-[80px] rounded-full" src="/assets/img/IMG_20250603_125940_674.jpg"
                            alt="">
                        <div class="!ml-[40px] self-center">
                            <h1 class="text-base font-bold text-[black]/70 !mb-[10px]">Pen ChhayNguon</h1>
                            <p class="text-sm">IT Applications Department | Boeng Keng Kang Branch, Phnom Penh</p>
                        </div>
                    </div>
                </address>
                <address
                    class="relative bg-white shadow-md !mt-[25px] !p-4 rounded-lg border border-gray-200 not-italic flex justify-between">
                    <div class="w-[50%]">
                        <h1 class="!mb-5 font-semibold">Personal Information</h1>
                        <div class="grid grid-cols-2 justify-between">

                            <div class="!py-2">
                                <div class="text-xs text-gray-400">User Name</div>
                                <p class="text-sm">Pen ChhayNguon</p>
                            </div>
                            <div class="!py-2">
                                <div class="text-xs text-gray-400">Gender</div>
                                <p class="text-sm"></p>
                            </div>
                            <div class="!py-2">
                                <div class="text-xs text-gray-400">Email address</div>
                                <p class="text-sm"></p>
                            </div>
                            <div class="!py-2">
                                <div class="text-xs text-gray-400">Social Contact</div>
                                <div class="w-[70%] cursor-pointer !mt-1 flex justify-between">
                                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white rounded-full border-[0.5px] border-gray-700"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white rounded-full border-[0.5px] border-gray-700"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                    </svg>
                                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white rounded-full border-[0.5px] border-gray-700"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="currentColor" viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                            d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                                            clip-rule="evenodd" />
                                        <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                    </svg>
                                    <svg class="w-[30px] h-[30px] text-gray-800 dark:text-white rounded-full border-[0.5px] border-gray-700"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-[10%]">
                        <button type="button"
                            class=" group inline-flex items-center !px-2.5 !py-2 text-sm font-medium text-center text-black rounded-lg cursor-pointer transition hover:transition hover:duration-300 hover:bg-black hover:text-white">
                            <svg class="w-[20px] h-[20px] text-black group-hover:text-white transition group-hover:transition group-hover:duration-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10.779 17.779 4.36 19.918 6.5 13.5m4.279 4.279 8.364-8.643a3.027 3.027 0 0 0-2.14-5.165 3.03 3.03 0 0 0-2.14.886L6.5 13.5m4.279 4.279L6.499 13.5m2.14 2.14 6.213-6.504M12.75 7.04 17 11.28" />
                            </svg>
                            Edit
                        </button>
                    </div>
                </address>
            </div>
        </div>
    </section>
</template>