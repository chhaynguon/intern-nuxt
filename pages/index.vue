<template>
  <div class="w-full  bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
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
            <a href="/" class="text-[#F15A22] font-medium rounded-lg !py-1 !px-[30px] bg-[#F15A22]/20">Home</a>
            <a href="/about" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Profile</a>
            <a href="/services" class="hover:text-[#F15A22] font-medium rounded-lg !py-1 !px-[30px]">Services</a>
            <a href="/events" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">Event</a>
            <a href="/faqs" class="hover:text-[#F15A22] font-medium !py-1 !px-[30px]">FAQs</a>
          </nav>
        </div>

      </div>
    </div>


    <section
      class="w-full h-[1380px] relative bg-[url('https://www.philliptrustee.com.kh/v2/img/hero_bg.png')] bg-origin-content">
    </section>
    <section class="place-self-center absolute top-[150px] left-[380px]">
      <div class="w-[80%]">
        <div class="w-[505px]">
          <span class="text-white" style="font-family: sans-serif;">Leave your worries behind,</span><br>
          <h1 class="text-[#F15A22] text-[60px] italic" style="font-family: var(--hero-font);">
            <span class="">We've got</span><br>
            <span>your back.</span>
          </h1>
        </div>
      </div>
    </section>
    <section class="w-full place-self-center !pb-[20px]">
      <div class="w-full">
        <div class="w-full place-self-center !py-[30px] !px-[40px]">
          <h2 class="text-center text-white font-bold text-3xl !mb-[30px]">About Us</h2>
          <p class="w-[50%] place-self-center !mb-[40px] font-normal text-lg">
            <span class="text-normal text-white text-left">Phillip Trustee (Cambodia), Co Ltd. was incorporated in June
              2022, after
              the
              Law of Trust was passed in 2019, allowing foreigners to register their fixed assets with trustee
              companies in
              Cambodia. Our specialised license consists of commercial, social and personal trust in which has been
              approved
              by the Trust Regulator.
            </span>
          </p>
          <p class="hidden peer-checked:block !mb-[15px]">
            <span class="text-base text-white">
              We are the associated company of Phillip Bank, Plc, one of the medium-sized commercial banks in Cambodia,
              part
              of Phillip Capital group in Singapore, and a sister company of Phillip General Insurance and Phillip Life
              Assurance Company. <br><br>
            </span>
            <span class="text-base text-white">
              At Phillip Trustee (Cambodia), Co Ltd. we believe in a financial and non-financial ecosystem that can
              provide
              suitable services to investors and customers throughout Cambodia such as commercial, public, social and
              personal trust services.
            </span>
          </p>
          <div class="relative flex justify-center overflow-hidden !mb-[40px]">
            <label for="readMoreToggle" class="bg-white text-black !px-5 !py-2 rounded cursor-pointer">
              Read More
            </label>
            <a href="about"
              class="absolute bg-[#F15A22] !px-5 !py-2 rounded top-0 left-1/2 items-center h-full transform translate-x-[-50%] translate-y-full z-1">
              <img class="w-[60px] h-[24px] " src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="w-full !mb-[70px]">
      <div class="w-[1000px] place-self-center">
        <div class="w-full place-self-center">
          <h2 class="text-center text-white text-3xl font-bold !mb-[40px]">Key Services & Products</h2>
        </div>
        <div class="grid w-full h-[180px] grid-cols-4 gap-4 place-self-center">
          <div
            class="relative w-full h-[180px] overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition hover:duration-500 group hover:shadow-xl">
            <a href="/services/holdProperty">
              <div class="absolute w-full rounded-xl">
                <img
                  class="w-full h-full rounded-xl place-self-center group-hover:scale-110 group-hover:transition group-hover:duration-5000"
                  src="https://www.philliptrustee.com.kh/v2/img/key_service_img_01.jpg" alt="">
              </div>
              <div class="absolute w-full h-full bg-[#00275E]/40 group-hover:bg-[#F15A22]/40"></div>
              <span class="text-white absolute top-[35%] left-[15%] font-bold">Hold Trust <br> Property</span>
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20px] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
              </span>
            </a>
          </div>

          <div
            class="relative w-full  overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition hover:duration-500 group hover:shadow-xl">
            <a href="/services/holdPersonal">
              <div class="absolute w-full rounded-xl">
                <img
                  class="w-full h-full rounded-xl place-self-center group-hover:scale-110 group-hover:transition group-hover:duration-5000"
                  src="https://www.philliptrustee.com.kh/v2/img/key_service_img_02.jpg" alt="">
              </div>
              <div class="absolute w-full h-full bg-[#00275E]/40 group-hover:bg-[#F15A22]/40"></div>
              <span class="text-white absolute top-[35%] left-[15%] font-bold">Hold Personal <br> Trust</span>
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20px] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
              </span>
            </a>
          </div>

          <div
            class="relative w-full  overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition hover:duration-500 group hover:shadow-xl">
            <a href="/services/escrowService">
              <div class="absolute w-full rounded-xl">
                <img
                  class="w-full h-full rounded-xl place-self-center group-hover:scale-110 group-hover:transition group-hover:duration-5000"
                  src="https://www.philliptrustee.com.kh/v2/img/key_service_img_03.jpg" alt="">
              </div>
              <div class="absolute w-full h-full bg-[#00275E]/40 group-hover:bg-[#F15A22]/40"></div>
              <span class="text-white absolute top-[35%] left-[15%] font-bold">Escrow Service </span>
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20px] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
              </span>
            </a>
          </div>

          <div
            class="relative w-full  overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:duration-500 group hover:shadow-xl">
            <a href="/services/salePurchase">
              <div class="absolute w-full rounded-xl">
                <img
                  class="w-full h-full rounded-xl place-self-center group-hover:scale-110 group-hover:transition group-hover:duration-5000"
                  src="https://www.philliptrustee.com.kh/v2/img/key_service_img_04.jpg" alt="">
              </div>
              <div class="absolute w-full h-full bg-[#00275E]/40 group-hover:bg-[#F15A22]/40"></div>
              <span class="text-white w-full absolute top-[25%] left-[15%] font-bold">Sales & Purchase <br> Agreement
                (SPA)
                <br>
                Service</span>
              <span>
                <img class="absolute w-[20px] h-[20px] bottom-[20px] left-[45%]"
                  src="https://www.philliptrustee.com.kh/v2/img/arrow_right.svg" alt="">
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <appFooter />
  </div>

</template>