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