<template>
  <div class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <header class="fixed top-0 left-0 z-50 w-full">
      <div class="w-full bg-gradient-to-b from-[#00275e] via-[#00275e]/60 to-transparent">
        <div class="max-w-screen-xl !mx-auto flex items-center justify-between !px-4 sm:!px-6 lg:!px-8 !py-2">
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
            <a href="/about" class="text-[#F15A22] font-medium rounded-lg !py-2 !px-4 bg-[#F15A22]/20">Profile</a>
            <a href="/services" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Services</a>
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
            <a href="/" class="font-medium rounded-lg hover:bg-[#F15A22]/20 hover:text-[#F15A22] !py-3 !px-2">Home</a>
            <a href="/about" class="font-medium rounded-lg bg-[#F15A22]/20 text-[#F15A22] !py-3 !px-2">Profile</a>
            <a href="/services"
              class="font-medium rounded-lg hover:bg-[#F15A22]/20 hover:text-[#F15A22] !py-3 !px-2">Services</a>
            <a href="/events"
              class="font-medium rounded-lg hover:bg-[#F15A22]/20 hover:text-[#F15A22] !py-3 !px-2">Event</a>
            <a href="/faqs"
              class="font-medium rounded-lg hover:bg-[#F15A22]/20 hover:text-[#F15A22] !py-3 !px-2">FAQs</a>
          </div>
        </div>
      </div>
    </header>
    <section
      class="w-full bg-fixed h-screen bg-[url('https://www.philliptrustee.com.kh/v2/img/about_hero.jpg')] bg-cover">
    </section>
    <section class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
      <section class="w-full h-[758.75px] !py-12">
        <div class="w-full h-[593.75px] flex">
          <div class="flex justify-center w-1/2">
            <div class="w-[80%] relative">
              <img class="ww-[350px] h-[400px] absolute top-[30px] left-[30px]"
                src="https://www.philliptrustee.com.kh/v2/img/about_img_01.jpg" alt="" />
              <img class="w-[350px] h-[400px] absolute bottom-[30px] right-[30px]"
                src="https://www.philliptrustee.com.kh/v2/img/about_img_02.jpg" alt="" />
            </div>
          </div>
          <div class="w-1/2">
            <h2 class="w-1/2 !mb-6 text-3xl font-bold text-white">About Us</h2>
            <p class="w-[60%] space-y-4 text-base text-justify text-white">
              <span class="block !my-2">
                Phillip Trustee (Cambodia), Co Ltd. was incorporated in June
                2022, after the Law of Trust was passed in 2019, allowing
                foreigners to register their fixed assets with trustee companies
                in Cambodia. Our specialised license consists of commercial,
                social and personal trust in which has been approved by the
                Trust Regulator. </span><br>
              <span class="block !my-2">
                We are the associated company of Phillip Bank, Plc, one of the
                medium-sized commercial banks in Cambodia, part of Phillip
                Capital group in Singapore, and a sister company of Phillip
                General Insurance and Phillip Life Assurance Company. </span>
              <span class="block !my-2"><br>
                At Phillip Trustee (Cambodia), Co Ltd. we believe in a financial
                and non-financial ecosystem that can provide suitable services
                to investors and customers throughout Cambodia such as
                commercial, public, social and personal trust services.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section class="w-full">
        <div class="w-[1000px] !py-12 place-self-center">
          <div class="w-[1000px] h-[102px] !pb-8">
            <span class="text-3xl font-bold text-white">Phillip Members (Cambodia Offices)</span><br />
            <span class="text-xl text-white">(Mutual integration and resource complementary)</span>
          </div>
          <div class="red_ball_wrap">
            <div class="red_ball">
              <span class="text-center">
                Financial <br />
                Service <br />
                Platform
              </span>
            </div>
            <div class="pointer_eles">
              <div class="animate top_right_ele" style="transform: translate(0px, 0px)">
                <span>General & Life Insurance</span>
              </div>
              <div class="animate mid_right_ele" style="transform: translate(0px, 0px)">
                <span>Commercial Bank</span>
              </div>
              <div class="animate bottom_right_ele" style="transform: translate(0px, 0px)">
                <span>Trustee</span>
              </div>
            </div>
          </div>
          <div class="w-[1010px]">
            <p class="text-lg text-white">
              <span class="text-lx !mb-[22.5px]">As an associate company of Phillip Bank, Phillip Trustee
                (Cambodia), Co Ltd leverages on the bank’s facilities and
                resources that has more than 10 years of financial management
                experience in Cambodia.
              </span>
              <br /><br />
              <span class="text-lx !mb-[22.5px]">
                We will work closely with you to determine an appropriate
                structure that can cater to all your investment needs and
                purposes.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section class="w-full h-48 !mt-[40px] bg-gradient-to-r from-[#002e6e] via-[#002e6ea8] to-transparent">
        <div class="w-[1100px] place-self-center">
          <div class="!pt-[50px]">
            <h2 class="flex text-3xl font-bold text-white item-center">
              <img class="w-[45px] h-[48px] !mr-6" src="https://www.philliptrustee.com.kh/v2/img/vision_icon.svg"
                alt="" />
              Vision
            </h2>
            <span class="text-xl text-white">To be an active catalyst in bringing foreign investments into
              Cambodia.</span>
          </div>
        </div>
      </section>
      <section class="w-full h-[181.81px] !mt-[40px] bg-gradient-to-l from-[#f15a22] via-[#f15a22a8] to-transparent">
        <div class="w-[1100px] h-[87.89px] place-self-center">
          <div class="w-[808px] place-self-end !pt-[50px]">
            <h2 class="flex text-3xl font-bold text-white item-center">
              <img class="w-[45px] h-[48px] !mr-6" src="https://www.philliptrustee.com.kh/v2/img/icon_mission.svg"
                alt="" />
              Mission
            </h2>
            <span class="text-xl text-white">
              To enable foreign investors to own their tangible assets and to
              grow their businesses.
            </span>
          </div>
        </div>
      </section>
      <section class="value w-full !py-20 !px-12">
        <div class="w-[1100px] h-[366.36px] place-self-center flex justify-between">
          <div class="left">
            <h2 class="flex text-3xl font-bold text-white item-center">
              <img class="w-[45px] h-[48px] !mr-6" src="https://www.philliptrustee.com.kh/v2/img/icon_value.svg"
                alt="" />
              Value
            </h2>
            <p class="w-[550px] h-[275.38px] text-white text-xl">
              <span>Transparency: We are transparent in all dealings with our
                customers.</span><br /><br />
              <span>Conduct of Business: We serve our customers with mutual respect
                and honesty. We do not tolerate bribery in any form.</span><br /><br />
              <span>Relationships: We believe in building a total and long-lasting
                relationship with our clients, offering them the entire range of
                products and services available not only in Cambodia but also
                from our overseas business units.</span>
            </p>
          </div>
          <div class="right">
            <div class="para_bg w-[505px] h-[366.36px]">
              <img class="w-[325px] h-[366.36px] place-self-end"
                src="https://www.philliptrustee.com.kh/v2/img/icon_value2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="w-full relative bg-[url('https://www.philliptrustee.com.kh/v2/img/rep_bottom_bg.png')]">
        <div
          class="before:content-[''] before:absolute before:w-full before:h-1/2 before:z-0 before:bg-gradient-to-b before:from-white/50 before:to-white/0 before:mix-blend-overlay">
        </div>
        <div class="w-[1100px] place-self-center">
          <h2 class="text-center text-3xl text-white font-bold !pt-[40px]">
            Management Profile
          </h2>
          <div class="flex flex-wrap justify-center !pt-[50px]">
            <div class="grid grid-cols-3 gap-4">
              <div class="w-[330px] h-[298.75px] !my-[1.5%] !mb-10">
                <div class="flex justify-center">
                  <img class="w-[214.5px] h-[214.5px] rounded-full"
                    src="https://www.philliptrustee.com.kh/v2/img/management/ceo.jpg" alt="" />
                </div>
                <div class="text-center text-white">
                  <h4 class="text-xl font-bold">ONG TEONG HOON</h4>
                  <small class="text-white place-self-center">Chairman</small>
                </div>
              </div>
              <div class="w-[330px] h-[298.75px] !my-[1.5%] !mb-10">
                <div class="flex justify-center">
                  <img class="w-[214.5px] h-[214.5px] rounded-full"
                    src="https://www.philliptrustee.com.kh/v2/img/management/mr_sopheap.jpg" alt="" />
                </div>
                <div class="text-center text-white">
                  <h4 class="text-xl font-bold">Sopheap Proeung</h4>
                  <small class="text-white place-self-center">General Manager</small>
                </div>
              </div>
              <div class="w-[330px] h-[298.75px] !my-[1.5%] !mb-10">
                <div class="flex justify-center">
                  <img class="w-[214.5px] h-[214.5px] rounded-full"
                    src="https://www.philliptrustee.com.kh/v2/img/management/legal_manager.jpg" alt="" />
                </div>
                <div class="text-center text-white">
                  <h4 class="text-xl font-bold">Phang Vichet</h4>
                  <small class="text-white place-self-center">Legal & Compliance Manager</small>
                </div>
              </div>
            </div>
            <div class="w-[330px] h-[298.75px] !my-[1.5%] !mb-10">
              <div class="flex justify-center">
                <img class="w-[214.5px] h-[214.5px] rounded-full"
                  src="https://www.philliptrustee.com.kh/v2/img/management/kong_rothana.jpg" alt="" />
              </div>
              <div class="text-center text-white">
                <h4 class="text-xl font-bold">Kong Rothana</h4>
                <small class="text-white place-self-center">
                  Accounting and Finance Manager</small>
              </div>
            </div>
            <div class="w-[330px] h-[298.75px] !my-[1.5%] !mb-10">
              <div class="flex justify-center">
                <img class="w-[214.5px] h-[214.5px] rounded-full"
                  src="https://www.philliptrustee.com.kh/v2/img/management/ho_souven.jpg" alt="" />
              </div>
              <div class="text-center text-white">
                <h4 class="text-xl font-bold">Ho Souven</h4>
                <small class="text-white place-self-center">Operation Supervisor</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>