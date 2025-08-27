<script setup>

</script>
<template>

    <header class="lg:fixed lg:top-1.4 shadow-xl bg-white w-full h-screen lg:w-[135px]">
      <aside class="flex flex-row justify-around text-black lg:flex-col lg:justify-start">
        <ul class="flex w-full text-center lg:flex-col">

          <li class="transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/dashboard"
              class="flex items-center justify-center lg:justify-start !px-4 !py-3 lg:w-[135px] lg:h-[44px]">
              <svg class="w-6 h-6 !mr-2 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clip-rule="evenodd" />
              </svg>
              <span>Home</span>
            </a>
          </li>


          <li class="transition hover:duration-300 hover:bg-[#454545] hover:text-white group">
            <a href="/admin/users"
              class="flex items-center justify-center lg:justify-start !px-4 !py-3 lg:w-[135px] lg:h-[44px]">
              <svg
                class="w-6 h-6 !mr-2 text-gray-800 group-hover:text-white transition group-hover:duration-300 hover:transition"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <span>User</span>
            </a>
          </li>

          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white group">
            <a href="/admin/events" class="flex items-center justify-center lg:justify-start !px-4 !py-3 lg:w-[135px] lg:h-[44px]"><svg
                class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
              </svg>
              <span class="!pl-[8px]">Event</span>
            </a>
          </li>

          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/services"
              class="flex items-center justify-center lg:justify-start !px-4 !py-3 lg:w-[135px] lg:h-[44px] group"><svg
                class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                  d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
              </svg>
              <span class="!pl-[8px]">Service</span>
            </a>
          </li>

          <li class="transition hover:bg-red-400 hover:text-white group">
            <button @click="confirmLogout()"
              class="flex items-center justify-center lg:justify-start !px-4 !py-3 lg:w-[135px] lg:h-[44px]">
              <svg
                class="w-6 h-6 !mr-2 text-gray-800 group-hover:text-white transition group-hover:duration-300 hover:transition"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
              </svg>
              <span>Logout</span>
              <confirmDialog />
              <Toast />

            </button>
          </li>
        </ul>
      </aside>
    </header>

    <section class="flex justify-between relative top-22.5">
        <div class="w-full !p-5">
            <div
                class="w-[50%] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg !p-5 place-self-center">
                <h2 class="text-lg font-bold text-gray-900 dark:text-white !mb-5">Profile</h2>
                <address class="relative bg-white shadow-md !p-4 rounded-lg border border-gray-200 not-italic">
                    <div class="flex space-y-2 text-gray-500 dark:text-gray-400">
                        <div class="w-[40px] h-[40px] md:w-[80px] md:h-[80px]">
                            <img class="object-cover w-full h-full border-2 border-red-200 rounded-full"
                                src="/assets/img/IMG_20250603_125940_674.jpg" alt="">
                        </div>
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
                        <div class="grid justify-between grid-cols-2">

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