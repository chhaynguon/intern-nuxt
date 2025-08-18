<script setup>
import { computed } from "vue";
import { keyService } from "~/data/Service/keyService";
const allowedIds = [1, 3, 4];
const allowedService = computed(() => {
  return keyService.filter(s => allowedIds.includes(s.id));
});
</script>
<template>
  <div class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
    <!-- <AppHeader /> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div
      class="w-full h-[100px] items-end fixed left-0 top-0 z-10 bg-gradient-to-b from-[#00275e] via-[rgba(0, 39, 94, 0)]">
      <div class="w-[65%] h-full place-self-center flex justify-between items-center">
        <div class="w-[15%]">
          <a href="/" class="w-[220px] z-1000">
            <img src="https://www.philliptrustee.com.kh/v2/img/trustee.png" alt="" />
          </a>
        </div>
        <div class="w-[75%]">
          <nav class="w-[60%] items-end place-self-end flex justify-between text-white text-lg font-normal !px-[10px]">
            <a href="/" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Home</a>
            <a href="/about" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Profile</a>
            <a href="/services" class="text-[#F15A22] font-medium rounded-lg !py-1 !px-[30px] bg-[#F15A22]/20">Services</a>
            <a href="/events" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Event</a>
            <a href="/faqs" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">FAQs</a>
          </nav>
        </div>
      </div>
    </div>
    <section
      class="w-full h-screen bg-fixed bg-[url('https://www.philliptrustee.com.kh/v2/img/services_hero.jpg')] bg-cover">
    </section>
    <section class="w-full place-self-center">
      <div class="w-full">
        <div class="w-full place-self-center !py-[30px] !px-[40px]">
          <h2 class="text-center text-white font-bold text-3xl !my-[30px]">Fund Retention Service</h2>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white">We serve as enforcers of your
            Trust Deeds or Will.
          </p>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white ">Our role is to hold and apply
            trust assets on behalf of your beneficiaries, <br> ensuring that this is done according to your wishes.
          </p>

        </div>
        <div class="w-full place-self-center !px-[40px] !mt-[30px] !mb-[20px]">
          <h2 class="text-center text-white text-3xl">Service Fee for Trust Fund Retention</h2>
        </div>
        <div class="w-full bg-[#002e6e]">
          <div class="w-full h-[369px] !px-[40px] !py-[40px] place-self-center">
            <div class="w-[60%] place-self-center">
              <table class="w-full h-full border-collapse text-white ">
                <thead class=" text-lg">
                  <tr>
                    <th class="text-left !py-4 !px-6 font-normal">Fund Amount(USD)</th>
                    <th class="text-center !px-6 bg-[#00204d] rounded-tl-lg rounded-tr-lg font-normal">1 Year Quote</th>
                    <th
                      class="text-center !py-4 !px-6 bg-[#00204d] rounded-tl-lg rounded-tr-lg font-normal border-l-[5px] border-[#002e6e]">
                      3 Year Quote</th>
                    <th
                      class="text-center !py-4 !px-6 bg-[#00204d] rounded-tl-lg  rounded-tr-lg font-normal border-l-[5px] border-[#002e6e]">
                      5 Year Quote</th>
                  </tr>
                </thead>
                <tbody class="bg-[#002F6C] font-semibold">
                  <tr>
                    <td class="!py-4 !px-6">&lt; 300K</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d]">$210</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">$350</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">$1,050</td>
                  </tr>
                  <tr>
                    <td class="!py-4 !px-6">&gt; 300K &lt; 1$Million</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d]">$370</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">$617</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">0.062%</td>
                  </tr>
                  <tr>
                    <td class="!py-4 !px-6">&gt; 1$Million &lt; 5$Million</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d]">0.037%</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">0.062%</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d] border-l-[5px] border-[#002e6e]">0.185%</td>
                  </tr>
                  <tr class="">
                    <td class="!py-4 !px-6 ">&gt; 5$Million</td>
                    <td class="text-center !py-4 !px-6 bg-[#00204d] rounded-br-lg rounded-bl-lg">0.035%</td>
                    <td
                      class="text-center !py-4 !px-6 bg-[#00204d] rounded-br-lg rounded-bl-lg border-l-[5px] border-[#002e6e]">
                      0.058%</td>
                    <td
                      class="text-center !py-4 !px-6 bg-[#00204d] rounded-br-lg rounded-bl-lg border-l-[5px] border-[#002e6e]">
                      0.175%</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
        <div class="w-full place-self-center !py-[30px] !px-[40px] flex">
          <div class="w-[34%]"></div>
          <div class="w-[66%] text-left text-white">
            <h2 class="font-medium">
              Important Note</h2>
            <li class="text-sm">Fee charge for drafting trust deed is $ 500-$ 1,000.</li>
            <li class="text-sm">Fees excludes a 10% VAT and other associated taxes and fees including trust registration
              fees.</li>
            <li class="text-sm">Fees are subject to change without prior notice.</li>
          </div>
        </div>
        <div class="w-full place-self-center !py-[30px]">
          <h2 class="text-center text-white font-bold text-3xl">Fund Retention Service</h2>
          <div class="bg-gradient-to-r  !py-10 !px-4">
            <div class="max-w-5xl !mx-auto grid md:grid-cols-4 gap-6 text-white">
              <!-- Column 1 -->
              <div class=" rounded-xl !p-6 border-2 border-[#F15A22] relative">
                <div class="absolute -top-4 left-4 bg-[#F15A22] text-white !px-4 !py-1 rounded font-bold text-sm">
                  Trusteeship Consulting
                </div>
                <h3 class="!mt-6 font-normal">Our trustee advisor will provide:</h3>
                <ul class="list-disc list-inside !mt-2 space-y-1">
                  <li>A company brochure.</li>
                  <li>Information on service procedures.</li>
                  <li>Fee quotation.</li>
                </ul>
              </div>

              <!-- Column 2 -->
              <div class=" rounded-xl !p-6 border-2 border-[#F15A22] relative">
                <div class="absolute -top-4 left-4 bg-[#F15A22] text-white !px-4 !py-1 rounded font-bold text-sm">
                  Pre-trusteeship Service<br><span class="font-normal">(5 Working Days)</span>
                </div>
                <h3 class="!mt-6 font-normal">Our pre-trustee service requires:</h3>
                <ul class="list-disc list-inside !mt-2 space-y-1">
                  <li>A sign-off on the application form.</li>
                  <li>ID or passport of individual trustors.</li>
                  <li>The company’s board/shareholder resolution, M&A, patents, certificate of incorporation and company
                    extract.</li>
                  <li>
                    A negative report stops the process, while a positive report brings us to the next step.
                  </li>
                </ul>
              </div>

              <!-- Column 3 -->
              <div class=" rounded-xl !p-6 border-2 border-[#F15A22] relative">
                <div class="absolute -top-4 left-4 bg-[#F15A22] text-white !px-4 !py-1 rounded font-bold text-sm">
                  Enter Trust Agreement<br>and Proceed with Trust<br><span class="font-normal">(3–5 Working Days)</span>
                </div>
                <p class="!mt-6">
                  <strong class="font-normal">A trust agreement is entered by the customer and Phillip Trustee to
                    establish a trust
                    fund.</strong><br>
                  The customer is required to make a transfer to the trust fund under Phillip Trustee’s company bank
                  account, Phillip Bank.
                </p>
                <p class="!mt-4">
                  <strong class="font-normal">In proceeding with the trust, the terms of payment for the service are
                    agreed
                    upon.</strong><br>
                  The customer has to create a trust sub-account under the Trustee main account.
                </p>
                <p class="!mt-4">
                  <strong class="font-normal">The Trustee is to coordinate the trustor’s documents and submit them to
                    the bank to apply for
                    an account.</strong><br>
                  The trustee is to sign on the sub-account opening form on behalf of the trustor.
                </p>
                <p class="!mt-4 font-normal">
                  100% of the Trustor’s fund will be deducted.
                </p>
              </div>

              <!-- Column 4 -->
              <div class="rounded-xl !p-6 border-2 border-[#F15A22] relative">
                <div class="absolute -top-4 left-4 bg-[#F15A22] text-white !px-4 !py-1 rounded font-bold text-sm">
                  Trust Registration
                </div>
                <p class="!mt-6 font-normal">
                  The trust should be registered with the Trust Regulator (TR) within 3 months after the date of
                  establishment in order to be valid.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="w-full !mb-[70px]">
      <div class="w-[1000px] place-self-center">
        <div class="w-full place-self-center">
          <h2 class="text-center text-white text-3xl font-bold !mb-[40px]">Key Services & Products</h2>
        </div>
        <div class="grid w-[80%] h-[180px] grid-cols-3 gap-4 place-self-center">
          <div v-for="service in allowedService" :key="service.id"
            class="relative w-full h-[180px] overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition hover:duration-500 group hover:shadow-xl">
            <a :href="service.link">
              <div class="absolute w-full rounded-xl">
                <img
                  class="w-full h-full rounded-xl place-self-center group-hover:scale-110 group-hover:transition group-hover:duration-5000"
                  :src="service.image" alt="">
              </div>
              <div class="absolute w-full h-full bg-[#00275E]/40 group-hover:bg-[#F15A22]/40"></div>
              <span class="text-white absolute top-[35%] left-[15%] font-bold">{{ service.title }}</span>
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20px] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <appFooter />
  </div>
</template>