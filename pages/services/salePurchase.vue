<template>
  <div class="w-full position bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
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
    <section class="w-full">
      <div class="w-[1000px] place-self-center">
        <div class="w-full place-self-center !py-[40px] !px-[40px]">
          <h1 class="text-center text-white font-bold text-3xl !my-[30px]">Sales & Purchase Agreement (SPA) Service</h1>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white">SPA is a warranty undertaking
            between the seller and buyer to impose on property conditions, transferring of property, and payment terms.
          </p>
          <p class=" text-center place-self-center !mb-[40px] text-[20px] text-white ">Other expenses for accessory
            costs includes legal and duty taxes (usually liable by sellers).
          </p>
        </div>
      </div>
    </section>
    <section
      class="w-full !pt-[40px] !pb-[60px] relative bg-[url('https://www.philliptrustee.com.kh/v2/img/rep_bottom_bg.png')] bg-bottom">
      <div class="w-[1000px] !mx-auto">
        <div class="w-full place-self-center ">
          <h2 class="text-center text-white text-3xl font-bold !mb-[40px]">Key Services & Products</h2>
        </div>
        <div class="grid w-[80%] h-[200px] grid-cols-3 gap-4 !mx-auto">
          <div
            class="relative w-full h-[200px] overflow-hidden cursor-pointer rounded-xl transiton hover:scale-105 hover:transition hover:duration-500 group hover:shadow-xl">
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
            class="relative w-full  overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition transition hover:duration-500 group hover:shadow-xl">
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
            class="relative w-full  overflow-hidden cursor-pointer rounded-xl hover:scale-105 hover:transition transition hover:duration-500 group hover:shadow-xl">
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
        </div>
      </div>
    </section>
    <appFooter />
  </div>

</template>