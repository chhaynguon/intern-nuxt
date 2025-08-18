<script setup>
import { computed } from "vue";
import { keyService } from "~/data/Service/keyService";
const allowedIds = [2, 3, 4];
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


    <section class="w-full h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/hero_bg.png')] bg-cover">
    </section>
    <section class="w-80% place-self-center">
      <div class="w-full place-self-center !py-[30px] !px-[40px]">
        <h1 class="text-center text-white font-bold text-3xl !my-[30px]">Hold Trust Property</h1>
        <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white">We act as legal representatives for
          foreigners to make real estate purchases in <br> Cambodia with a peace of mind.
        </p>
        <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white ">Our responsibility is to hold
          ownership on your behalf for the purpose of commercial, <br> social and personal trust, managing the property
          trust
          in accordance with a Trust Deed or <br> agreement.
        </p>

      </div>
      <div class="w-full place-self-center !px-[40px] !mb-[20px]">
        <h2 class="text-center text-white text-3xl">Business Flow</h2>
        <p class="text-center text-white text-[20px] place-self-center !mt-[10px]">Holding Property Process</p>
      </div>
      <div class=" text-white min-h-screen !p-8">
        <div class="max-w-6xl !mx-auto grid md:grid-cols-2 gap-6">

          <!-- 1 -->
          <div class=" !p-6 rounded-lg shadow-lg border-2 border-[#F15A22]">
            <h2 class="text-lg font-bold !mb-4 text-[#F15A22]">
              1. Trusteeship Consulting
            </h2>
            <p class="!ml-[20px]">Our trustee advisor will provide:</p>
            <ul class="list-disc list-inside space-y-1 !ml-[20px]">
              <li>A company brochure.</li>
              <li>Information on service procedures.</li>
              <li>Fee quotation.</li>
            </ul>
          </div>

          <!-- 2 -->
          <div class=" !p-6 rounded-lg shadow-lg border-2 border-[#F15A22]">
            <h2 class="text-lg font-bold text-[#F15A22] ">
              2. Pre-trusteeship Service
            </h2>
            <span class="text-sm text-[#F15A22] !ml-[20px]">(5 Working Days)</span>
            <ul class="list-disc list-inside space-y-1 !ml-[20px]">
              <li>Arrange Property/legal due diligence with third party.</li>
              <li>The land verification report must be recommended by the third <span class="!ml-[20px]">party.</span>
              </li>
              <li>A negative required means stopping the process, and a positive <span class="!ml-[20px]">report means
                  we can go ahead with the next step.</span></li>
              <li>Sign off on application form.</li>
            </ul>
          </div>

          <!-- 3 -->
          <div class=" !p-6 rounded-lg shadow-lg border-2 border-[#F15A22]">
            <h2 class="text-lg font-bold text-[#F15A22]">
              3. Proceed with Trust
            </h2>
            <span class="text-sm text-[#F15A22] !ml-[20px]">(3-5 Working Days)</span>
            <p class="!mb-4 !ml-[20px] ">We will:</p>
            <ul class="list-disc list-inside space-y-1 !ml-[20px]">
              <li>Discuss land price and payment phases with seller and buyer.</li>
              <li>Consult a lawyer.</li>
              <li>Create Sales and Purchase Agreement (SPA).</li>
              <li>Agree on payment conditions.</li>
              <li>Sign SPA on behalf of trustor(s) for trust service arrangement.</li>
            </ul>
          </div>

          <!-- 4 -->
          <div class="!p-6 rounded-lg shadow-lg border-2 border-[#F15A22]">
            <h2 class="text-lg font-bold text-[#F15A22]">
              4. Enter Trust Agreement
            </h2>
            <span class="text-sm text-[#F15A22] !ml-[20px]">(5 Working Days)</span>
            <p class="!mb-4 !ml-[20px]">
              A trust deed is entered by the customer and Phillip Trustee to establish a trust on immovable property or
              fund.
            </p>
            <ul class="list-disc list-inside space-y-1 !ml-[20px]">
              <li>The customer must transfer funds to Phillip Trustee’s bank account <span class="!ml-[23px]">under
                  Phillip Bank.</span></li>
              <li>10% of the service fees will be deducted.</li>
            </ul>
          </div>

          <!-- 5 -->
          <div class="!p-6 rounded-lg shadow-lg border-2 border-[#F15A22]">
            <h2 class="text-lg font-bold text-[#F15A22]">
              5. Purchase of Property
            </h2>
            <span class="text-sm text-[#F15A22] !ml-[20px]">(1 Month)</span>
            <p class="!mb-4 !ml-[20px]">
              The land title will be transferred under Phillip Trustee Company’s name, on the date stated as per the
              agreement.
            </p>
            <p class="!mb-2 !ml-[20px]">Before the purchase:</p>
            <ul class="list-disc list-inside space-y-1 !ml-[20px]">
              <li>The hard title should be prepared for the buyer.</li>
              <li>Phillip Trustee will make payments using the trust fund per the <span class="!ml-[23px]">SPA.</span>
              </li>
            </ul>
          </div>

          <!-- 6 -->
          <div class="!p-6 rounded-lg shadow-lg border-2 border-[#F15A22]">
            <h2 class="text-lg font-bold text-[#F15A22]">
              6. Transfer of Ownership
            </h2>
            <span class="text-sm text-[#F15A22] !ml-[20px]">(2-3 Month)</span>
            <p class="!mb-4 !ml-[20px]">
              The property transfer process involves: Application > Transfer/Registration of titles with Cadastral
              Office > <br> Duty stamp tax > Completion of process with Cadastral office > Confirmation with Trustor.
            </p>
            <ul class="list-disc list-inside space-y-1 !ml-[20px]">
              <li>Tariff/out-of-pocket fees (land checking, lawyer service fees, trust <span
                  class="!ml-[23px]">registration fees) should be
                  paid.</span> </li>
              <li>The final 90% of service fees are deducted.</li>
            </ul>
          </div>

          <!-- 7 -->
          <div class="!p-6 rounded-lg shadow-lg border-2 border-[#F15A22]">
            <h2 class="text-lg font-bold text-[#F15A22] !mb-4">
              7. Trust Registration with Regulator
            </h2>
            <p class="!ml-[20px]">
              The trust should be registered with the Trust Regulator (TR) within 3 months after the date of
              establishment to be valid.
            </p>
          </div>

        </div>
      </div>
      <div class="bg-gradient-to-r !py-10 !px-4">
        <div class="w-full place-self-center !px-[40px] !mb-[30px]">
          <h2 class="text-center text-white text-3xl font-bold">Trustee Service Transfer Process</h2>
        </div>
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