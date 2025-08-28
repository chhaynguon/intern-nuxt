<script setup>
import { computed } from "vue";
import { keyService } from "~/data/Service/keyService";
const allowedIds = [1, 2, 4];
const allowedService = computed(() => {
  return keyService.filter(s => allowedIds.includes(s.id));
});

</script>

<template>
  <div class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')] bg-cover">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- HEADER -->
    <header class="fixed top-0 left-0 z-50 w-full">
      <div class="w-full bg-gradient-to-b from-[#00275e] via-[#00275e]/60 to-transparent">
        <div class="max-w-screen-xl !mx-auto flex items-center justify-between !px-4 sm:!px-6 lg:!px-8 !py-5">
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

    <!-- HERO SECTION -->
    <section
      class="w-full h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/hero_bg.png')] bg-cover bg-center relative">
      <!-- KeyService Centered Below Header -->
      <div class="max-w-[1280px] !mx-auto !px-4 sm:px-6 lg:px-8 !pt-[120px]">
        <div class="!mt-4">
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="w-[1000px] place-self-center">
        <div class="w-full place-self-center !pt-[40px] !px-[40px]">
          <h1 class="text-center text-white font-bold text-3xl !my-[30px]">Escrow Service</h1>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white">We serve as an intermediary
            between you and the relevant stakeholders for your real estate transactions in Cambodia.
          </p>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white ">Our role is to facilitate
            payments and hold funds with Phillip Bank, Plc until contractual requirements are fulfilled, safeguarding
            and managing funds for foreign buyers and sellers in accordance with Sales and Purchase Agreements (SPA).
          </p>
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="w-[1000px] place-self-center text-white">
        <div class="escrow_circle_thingy_wrap">
          <strong class="initial ">Operational Procedures</strong>
          <div class="circle_thingy">
            <span class="trustor">Trustor</span>
            <span class="seller">Seller</span>
            <span class="pbea">Phillip Bank Escrow Account</span>
            <ul class="text_top_mid">
              <li>
                Payment for purchase according to SPA
                Phillip Bank Escrow Account.
              </li>
            </ul>
            <ul class="text_right">
              <li>
                Escrow agreement is formulated,
                Trust fund is established and
                Trust regulator is notified.
              </li>
            </ul>
            <ul class="text_bottom">
              <li>
                Once all the conditions are met,
                payment is released to seller.
              </li>
            </ul>
            <ul class="text_left">
              <li>
                Property title is registered
                under trustee.
              </li>
            </ul>
            <div class="circle">
              <img src="https://www.philliptrustee.com.kh/v2/img/circle_thingy_2.svg" alt="">
            </div>
          </div>
        </div>
        <div class="requirement">
          <strong class="initial">Requiremnent</strong>
          <h2>This collateral process involves:</h2>
          <div class="colla_processes">
            <div class="each_colla_process">
              <span>1</span>
              <div class="des">
                Application
              </div>
            </div>
            <div class="each_colla_process">
              <span>2</span>
              <div class="des">
                Transfer/Registration of
                Tittles with Cadastral Office
              </div>
            </div>
            <div class="each_colla_process">
              <span>3</span>
              <div class="des">
                Duty Stamp Tax
              </div>
            </div>
            <div class="each_colla_process">
              <span>4</span>
              <div class="des">
                Confirmation with Trustor
              </div>
            </div>
            <div class="each_colla_process">
              <span>5</span>
              <div class="des">
                Completion of Process
                with Cadastral Office
              </div>
            </div>
          </div>
          <h2>To register your trust with Phillip Trustee, you will need:</h2>
          <div class="reg_processes">
            <div class="each_reg_process">
              <img src="https://www.philliptrustee.com.kh/v2/img/regis_process_icon_1.png" alt="">
              <strong>A complete
                application form</strong>
            </div>
            <div class="each_reg_process">
              <img src="https://www.philliptrustee.com.kh/v2/img/regis_process_icon_2.png" alt="">
              <strong>Relevant supporting
                documentation </strong>
            </div>
            <div class="each_reg_process">
              <img src="https://www.philliptrustee.com.kh/v2/img/regis_process_icon_3.png" alt="">
              <strong>A trust deed</strong>
            </div>
            <div class="each_reg_process">
              <img src="https://www.philliptrustee.com.kh/v2/img/regis_process_icon_4.png" alt="">
              <strong>A Phillip Bank
                savings account</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full">
      <h4 class="text-center text-white font-bold text-3xl">Fees for Trust Registration with Trust Regulator</h4>
      <div class="w-full bg-[#002e6e] !mt-[20px] !mx-auto relative">
        <div class="w-[1000px] place-self-center">
          <h2 class="text-center text-white text-xl !pt-[30px]">Trust Registration Fee (Update on 11-01-2022)</h2>
          <div class="w-[52%] place-self-end flex justify-between text-white !pt-[30px] !mr-[120px]">
            <p class="text-center !ml-[15px]">Commercial Trust <br>
              (In USD)</p>
            <p class="text-center">Commercial Trust <br>
              (In USD)</p>
          </div>
        </div>

        <div class="w-full !px-[40px] !pt-[10px] !pb-[40px] place-self-center">
          <div class="w-[1000px] place-self-center ">
            <table class="w-full h-full  text-white text-sm ">
              <thead class=" text-lg">
                <tr>
                  <th
                    class="text-left !py-4 !px-6 font-normal rounded-tr-lg rounded-tl-lg bg-[#F15A22] border-r-[5px] border-[#002e6e]">
                    Trust Value</th>
                  <th class="text-center !py-2 !px-1 bg-[#00204d] rounded-tl-lg rounded-tr-lg font-normal">
                    Administration Fee </th>
                  <th
                    class="text-center !py-4 !px-6 bg-[#00204d] rounded-tl-lg rounded-tr-lg font-normal border-l-[5px] border-[#002e6e]">
                    Yearly Fee on <br> Certificate</th>
                  <th
                    class="text-center !py-2 !px-0.5 bg-[#00204d] rounded-tl-lg  rounded-tr-lg font-normal border-l-[5px] border-[#002e6e]">
                    Administration Fee</th>
                  <th
                    class="text-center !py-4 !px-6 bg-[#00204d] rounded-tl-lg  rounded-tr-lg font-normal border-l-[5px] border-[#002e6e]">
                    Yearly Fee on <br> Certificate</th>
                </tr>
              </thead>
              <tbody class=" font-semibold">
                <tr>
                  <td class="!py-4 !px-6 bg-[#F15A22] border-r-[5px] border-[#002e6e]">&lt; 100,000</td>
                  <td class="text-center !py-2 !px-1 bg-[#00204d]">10</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">75</td>
                  <td class="text-center !py-2 !px-0.5 bg-[#00204d] border-l-[5px] border-[#002e6e]">10</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">50</td>
                </tr>
                <tr>
                  <td class="!py-4 !px-6 bg-[#F15A22] border-r-[5px] border-[#002e6e]">100,000 - 500,000</td>
                  <td class="text-center !py-2 !px-1 bg-[#00204d]">50</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">127</td>
                  <td class="text-center !py-2 !px-0.5 bg-[#00204d] border-l-[5px] border-[#002e6e]">30</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">75</td>
                </tr>
                <tr>
                  <td class="!py-4 !px-6 bg-[#F15A22] border-r-[5px] border-[#002e6e]">&gt; 1,000,000 - 5,000,000</td>
                  <td class="text-center !py-2 !px-1 bg-[#00204d]">100</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">150</td>
                  <td class="text-center !py-2 !px-0.5 bg-[#00204d] border-l-[5px] border-[#002e6e]">50</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">100</td>
                </tr>
                <tr>
                  <td class="!py-4 !px-6 bg-[#F15A22] border-r-[5px] border-[#002e6e]">&gt; 1,000,000 - 5,000,000</td>
                  <td class="text-center !py-2 !px-1 bg-[#00204d]">200 </td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    200</td>
                  <td class="text-center !py-2 !px-0.5 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    100</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    150</td>
                </tr>
                <tr>
                  <td class="!py-4 !px-6 bg-[#F15A22] border-r-[5px] border-[#002e6e]">&gt; 5,000,000 - 10,000,000</td>
                  <td class="text-center !py-2 !px-1 bg-[#00204d]">500</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    400</td>
                  <td class="text-center !py-2 !px-0.5 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    250</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    300</td>
                </tr>
                <tr>
                  <td class="!py-4 !px-6 bg-[#F15A22] border-r-[5px] border-[#002e6e]">&gt; 10,000,000 - 20,000,000</td>
                  <td class="text-center !py-2 !px-1 bg-[#00204d] ">1000</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d]  border-l-[5px] border-[#002e6e]">
                    600</td>
                  <td class="text-center !py-2 !px-0.5 bg-[#00204d]  border-l-[5px] border-[#002e6e]">
                    450</td>
                  <td class="text-center !py-4 !px-6 bg-[#00204d]  border-l-[5px] border-[#002e6e]">
                    400</td>
                </tr>
                <tr>
                  <td class="!py-4 !px-6 bg-[#F15A22] border-r-[5px] border-[#002e6e] rounded-bl-xl rounded-br-xl">More
                    than 20,000,000</td>
                  <td class="text-center !py-2 !px-1 bg-[#00204d] rounded-br-lg rounded-bl-lg">2,000</td>
                  <td
                    class="text-center !py-4 !px-6 bg-[#00204d] rounded-br-lg rounded-bl-lg border-l-[5px] border-[#002e6e]">
                    750</td>
                  <td
                    class="text-center !py-2 !px-0.5 bg-[#00204d] rounded-br-lg rounded-bl-lg border-l-[5px] border-[#002e6e]">
                    500</td>
                  <td
                    class="text-center !py-4 !px-6 bg-[#00204d] rounded-br-lg rounded-bl-lg border-l-[5px] border-[#002e6e]">
                    500</td>
                </tr>
              </tbody>
            </table>

            <div class="w-[1000px] place-self-center">
              <h2 class="text-center text-white text-xl !pt-[40px] !pb-[30px] ">Trust Registration Fee (Update on
                11-01-2022)</h2>
            </div>
            <table class="w-[80%] h-full border-collapse positin text-white text-sm !mx-auto rounded-xl ">
              <thead class=" text-lg ">
                <tr>
                  <th
                    class="text-left !py-2 !px-4 font-normal rounded-tr-lg rounded-tl-lg bg-[#F15A22] border-r-[5px] border-[#002e6e]">
                    Trust value for Public or Social Trust</th>
                  <th class="text-center !py-4 !px-6 bg-[#00204d] rounded-tl-lg rounded-tr-lg font-normal">
                    Administration Fee </th>
                  <th
                    class="text-center !py-4 !px-6 bg-[#00204d] rounded-tl-lg rounded-tr-lg font-normal border-l-[5px] border-[#002e6e]">
                    Yearly Fee on Certificate</th>
                </tr>
              </thead>
              <tbody class=" font-semibold">
                <tr class="text-center">
                  <td class="!py-4 !px-3 bg-[#F15A22] border-r-[5px] border-[#002e6e]">&lt; 100,000</td>
                  <td class="!py-2 !px-1 bg-[#00204d]">10</td>
                  <td class="!py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">30</td>
                </tr>
                <tr class="text-center">
                  <td class="!py-4 !px-3 bg-[#F15A22] border-r-[5px] border-[#002e6e]">100,000 - 500,000</td>
                  <td class="!py-2 !px-1 bg-[#00204d]">30</td>
                  <td class="!py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">75</td>
                </tr>
                <tr class="text-center">
                  <td class="!py-4 !px-3 bg-[#F15A22] border-r-[5px] border-[#002e6e]">&gt; 500,000 - 1,000,000</td>
                  <td class="!py-2 !px-1 bg-[#00204d]">50</td>
                  <td class="!py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">100</td>
                </tr>
                <tr class="text-center">
                  <td class="!py-4 !px-3 bg-[#F15A22]  border-r-[5px]  border-[#002e6e]">&gt; 1,000,000 - 5,000,000</td>
                  <td class="!py-2 !px-1 bg-[#00204d]">150 </td>
                  <td class="!py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    150</td>
                </tr>
                .
                <tr class="text-center">
                  <td class="!py-4 !px-3 bg-[#F15A22]  border-r-[5px] border-[#002e6e]">&gt; 5,000,000 - 10,000,000</td>
                  <td class="!py-2 !px-1 bg-[#00204d]">250</td>
                  <td class="!py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    250</td>

                </tr>
                <tr class="text-center">
                  <td class="!py-4 !px-6  bg-[#F15A22]  border-r-[5px] border-[#002e6e]">&gt; 10,000,000 - 20,000,000
                  </td>
                  <td class="!py-2 !px-1 bg-[#00204d]">375</td>
                  <td class="!py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">
                    500</td>
                </tr>
                <tr class="text-center">
                  <td class="!py-4 !px-3 rounded-bl-lg rounded-br-lg border-r-[5px] bg-[#F15A22] border-[#002e6e]">More
                    than 20,000,000</td>
                  <td class="!py-2 !px-1 bg-[#00204d] rounded-br-lg rounded-bl-lg">500</td>
                  <td
                    class="text-center !py-4 !px-6 bg-[#00204d] rounded-br-lg rounded-bl-lg border-l-[5px] border-[#002e6e]">
                    750</td>
                </tr>
              </tbody>
            </table>


          </div>
        </div>
      </div>
    </section>
    <section class="w-[60%] xl:w-[50%] !pb-14 sm:!pb-16 !mx-auto !pt-10">
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
    <!-- FOOTER -->
    <appFooter />
  </div>
</template>
