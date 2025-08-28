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
            <p class="!mt-6"> A trust agreement is entered by the customer and Phillip Trustee to
                establish a trust
                fund.<br> <br>
              The customer is required to make a transfer to the trust fund under Phillip Trustee’s company bank
              account, Phillip Bank. <br><br> In proceeding with the trust, the terms of payment for the service are
                agreed
                upon.<br> <br>
              The customer has to create a trust sub-account under the Trustee main account. <br> <br> The Trustee is to coordinate the trustor’s documents and submit them to
                the bank to apply for
                an account.<br> <br>
              The trustee is to sign on the sub-account opening form on behalf of the trustor.
              <br><br>
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