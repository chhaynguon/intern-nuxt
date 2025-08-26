<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>
<template>
  <div class="w-full bg-[url('https://www.philliptrustee.com.kh/v2/img/bg_1.jpg')]">
    <!-- <AppHeader /> -->
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
            <a href="/about" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4">Profile</a>
            <a href="/services" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4 ">Services</a>
            <a href="/events" class="hover:text-[#F15A22] font-medium rounded-lg !py-2 !px-4 ">Event</a>
            <a href="/faqs" class="text-[#F15A22] font-medium rounded-lg !py-2 !px-4 bg-[#F15A22]/20">FAQs</a>
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
            <a href="/services"
              class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Services</a>
            <a href="/events"
              class="font-medium rounded-lg hover:bg-white/10 !py-3 !px-2 hover:text-[#F15A22]">Event</a>
            <a href="/faqs" class="font-medium rounded-lg bg-white/10 !py-3 !px-2 text-[#F15A22]">FAQs</a>
          </div>
        </div>
      </div>
    </header>
    <section class="w-full h-screen bg-fixed bg-[url('https://www.philliptrustee.com.kh/v2/img/Trustee-Faqs.jpg')] bg-cover bg-center">
    </section>
    <section
      class="w-full h-full !px-[45px] relative bg-repeat-x bg-left-bottom top-0 left-0 bg-[url('https://www.philliptrustee.com.kh/v2/img/rep_bottom_bg.png')]">
      <div class="w-[75%] !py-[60px] !px-[70px] place-self-center">
        <h1 class="text-white text-2xl text-center font-bold !mb-[50px]">
          Frequently Asked Questions (FAQs)
        </h1>

        <div class="w-[100%]">
          <div class="card">
            <Accordion value="0">
              <AccordionPanel value="0">
                <AccordionHeader class="hover:!text-[#002E6E]">(1) How does a Trust work?</AccordionHeader>
                <AccordionContent>
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      1.1 What is the current state of trust law in Cambodia, and how
                      has it evolved over time?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      Under the Trust Law enacted on January 2, 2019, a trust is a
                      three-party legal relationship, in which the Trustor (or investor)
                      transfers property or fund to a Trustee who shall hold, manage and
                      protect it, apart from its own estate, for the trust’s
                      beneficiary. The Trustee (or the Trust Company) is licensed by the
                      NBFSA under the Ministry of Economy and Finance (MEF) and the
                      Trust Regulator.
                    </p>
                    <br />
                    <p>
                      Foreign investors can now make a profit from land appreciation
                      without acquiring the land in their name, they can do so without
                      relinquishing their nationality or applying for the Cambodian
                      nationality.
                    </p>
                    <br />
                  </div>
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      1.2 Why should you use Phillip Trustee (Cambodia) Trustee
                      Services?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      Phillip Trustee (Cambodia) is an esteemed affiliate of Phillip
                      Bank, which boasts a remarkable track record of over 10 years of
                      successful business operations in Cambodia. With a wide network of
                      more than 70 branches nationwide, our strong presence enables us
                      to offer comprehensive services. Our experienced team of trust
                      experts, strategically located in Cambodia and Singapore, can
                      leverage upon our well-established banking network and resources
                      to provide you with the best-in-class, personalized trust advisory
                      services to help you achieve your financial goals. Moreover, as
                      part of the established Phillip Capital Group, headquartered in
                      Singapore, we have access to extensive global connections that we
                      can leverage upon to provide you unrivaled trust advisory
                      services.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="1">
                <AccordionHeader class="hover:!text-[#002E6E]">(2) Legal Framework & Protection</AccordionHeader>
                <AccordionContent>
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      2.1 How is Phillip Trustee (Cambodia) related to Phillip Bank?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      Phillip Trustee is an associated company of Phillip Bank, 49%
                      owned by the bank while the remaining 51% by the local nominee
                      shareholders. Phillip Trustee and Phillip Bank are both esteemed
                      affiliates of Phillip Capital Group, a Singaporean holding group
                      which has near 50 years business success in the financial services
                      industry and a global presence, with operations in 16 countries
                      and over 1 million clients with Assets Under Management (AUM) of
                      total more than USD 35 Billion.
                    </p>
                    <br />
                    <p>
                      Whilst Phillip Trustee (Cambodia) is a new establishment like
                      other trust companies in Cambodia, we can leverage upon our
                      connections with trust experts based in Singapore.
                    </p>
                    <br />
                  </div>
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      2.2 Is it safe to engage Phillip Trustee (Cambodia)?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      Phillip Trustee is a registered trust company under the Cambodian
                      Trust Regulator. We abide by strict trust regulations and are
                      under the supervision of the governing Trust Regulator. Currently,
                      we are the only trust company that is bank-related, and it does
                      not have business affiliates in the real estate and construction
                      sector. As a trust company, we provide trustee services and hold
                      assets for clients. Although the assets are held under Phillip
                      Trustee, the Trustor has full right to claim his/her ownership as
                      per the registered trust deed.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      2.3 As a Trustor, how can I ensure that the Trustee will only do
                      as I wish?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      All parties are governed by the trust deed. The trust deed must be
                      registered for legal validity of trust operation. Phillip Trustee
                      is regulated by the Trust Regulator. Our (Trustee’s) role is to
                      execute based on the trust deed. If the trustee breaches the trust
                      deed, the Trustor can take legal action and/or can file a
                      complaint with the Trust Regulator.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      2.4 How are my asset/funds protected from fraudulent acts (eg:
                      embezzlement of funds)?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      Our Trustee company has a robust set of internal controls in place
                      to safeguard client assets. These controls include checks and
                      balances, segregation of duties, and ongoing monitoring and
                      supervisions of operations. Regular audits and reviews are
                      conducted to assess the effectiveness of internal controls and
                      identify any potential vulnerabilities. In the case of loss from
                      fraud, clients can file a complaint with the Trust Regulator and
                      the police department for case investigations. Our company will be
                      liable for reimbursement from any loss occurring from fraud.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      2.5 What if Phillip Trustee (Cambodia) go out of business or
                      become insolvent?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      If our Trustee business becomes insolvent, the Trust Regulator
                      will take over all asset under the trust deeds held in the name of
                      the bankrupted Trustee and manage all operations/liquidation of
                      the bankrupted Trustee. Since the Trustor is still the beneficial
                      owner of the Trust, he/she may then appoint another Trustee to
                      administer their trust.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      2.6 As a Trustor, what happens to my trust and the property held
                      under the trust upon my demise?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      During our consultation process, we will explicitly discuss all
                      the details and specific arrangement to be administered upon the
                      Trustor’s demise. This includes (a) whether the assets are to be
                      sold and the proceeds are to be distributed to the beneficiaries,
                      (b) the appointment of a successor Trustor upon the current
                      Trustor’s demise, and other arrangements.
                    </p>
                    <br />
                    <p>
                      During our onboarding process, we will similarly advise our
                      clients to separate their assets under Trust and Will, to avoid
                      the duplication of assets under these arrangements. The asset
                      under trust arrangement in Cambodia will be managed, disposed
                      and/or distributed to beneficiaries indicated in the trust deed.
                    </p>
                    <br />
                    <b>
                      <p>For Cambodians:</p>
                    </b>
                    <p>
                      Upon the unfortunate demise of the Trustor, the Trustee will
                      continue executing the trust functions according to the trust
                      deed. In the case that the trust has more than 1 single Trustor,
                      the remaining Trustors can take control of the trust upon the
                      passing of a Trustor. If you are the sole Trustor, the Trustee
                      will hold and administer the trust until the end of the term and
                      distribute the assets to the beneficiaries according to the trust
                      deed.
                    </p>
                    <br />
                    <b>
                      <p>For Non-Cambodians:</p>
                    </b>
                    <p>
                      For foreign Trustors, the Trustee will similarly execute according
                      to the trust deed upon the passing of the Trustor. However, if
                      there are no successor Trustor(s) and no beneficiaries mentioned
                      in the trust deed, and there are also no people with special
                      connection (e.g. family ties) with the Trustor, the Trustee will
                      hand over the assets within the Trust to the Cambodian government.
                      Therefore, we advise our clients to indicate their beneficiaries
                      during the formation of the Trust Deed, which the Trustee will
                      then administer, dispose and distribute the assets in accordance
                      with Trust Deed in their passing.
                    </p>
                    <br />
                    <p>
                      To ensure protection of the Trustor’s succession interest, we
                      strongly recommend that Non-Cambodian Trustor should also select a
                      successor trustor from the outset so in the demise of the first
                      Trustor, the successor trustor will then take over the Trust and
                      its property.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      2.7 Can my spouse take control of the trust and the property held
                      under the trust upon my demise?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      If your spouse is listed as the trustor, they can take control of
                      the trust upon your demise. In contrast, if your spouse is not
                      listed as the trustor, then the trustee will hold and administer
                      the trust until the end of the term and asset is distributed to
                      the beneficiary.
                    </p>
                    <br />
                    <p>
                      Firstly, the beneficiary will have to manage and cover all tax
                      payable under the Cambodian taxation law. After all tax has been
                      cleared, the Trustee will issue a letter of asset distribution and
                      then a transfer of fund or asset will be made to the beneficiary’s
                      designated bank.
                    </p>
                    <br />
                    <p>
                      If it is an immovable property, we will distribute it based on the
                      trustor’s instruction and the distribution will occur via the SPA.
                      All tax payable to the General Department of tax (GDT) has to be
                      cleared before we will issue the distribution letter for the
                      trustor’s signing off.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      2.8 What would happen in the case of compulsory purchase of land
                      by the Cambodian government?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      Our legal due diligence process (conducted by third party
                      professionals) will first establish if there are any encumbrances
                      on the assets/ property and whether the land is owned by the
                      government. We will only proceed with the purchase of land and
                      setting up the Trust once we receive a positive legal due
                      diligence report.
                    </p>
                    <br />
                    <p>
                      Once the title deed of the property has been transferred under the
                      Trustee and the Trust has been registered with the Trust
                      Regulator, the Trustor will have full rights to the asset through
                      the Trust. If the Cambodian government chooses to exercise its
                      power of compulsory purchase, it typically follows a specific
                      process that involves notifying the owner, conducting a valuation
                      of the property, and offering compensation based on the fair
                      market value.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      2.8 What would happen in the case of compulsory purchase of land
                      by the Cambodian government?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      Our legal due diligence process (conducted by third party
                      professionals) will first establish if there are any encumbrances
                      on the assets/ property and whether the land is owned by the
                      government. We will only proceed with the purchase of land and
                      setting up the Trust once we receive a positive legal due
                      diligence report.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="2">
                <AccordionHeader class="hover:!text-[#002E6E]">(3) Taxation</AccordionHeader>
                <AccordionContent>
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      3.1 Who is responsible to pay stamp duty on sale and purchase of
                      property?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      The seller of the property is usually the responsible party, and
                      we always ensure it is included within the Sale and Purchase
                      Agreement (SPA).
                    </p>
                    <br />
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      3.2 What taxes do I or the Trust have to pay in Cambodia?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <li>
                      Duty Stamp Tax (4%):
                      <span>Required for any ownership transfer transactions.</span>
                    </li>
                    <li>
                      Yearly Tax on Property (0.1 to 2%):
                      <span>Dependent on the type of land property.</span>
                    </li>
                    <li>
                      Capital Gain Tax (20% - effective from Jan 2024):
                      <span>It is levied on the capital gain which is the difference
                        between the proceeds from sale/transfer of assets (i.e.,
                        immovable property) and original purchase price, less permitted
                        deductible expenses.</span>
                    </li>
                    <br />
                    <p class="!ml-[20px]  text-[#002E6E]">
                      - Upon the sale & purchase of the land, the Trust would have to
                      pay a 20% capital gain tax under the law of Cambodia. Phillip
                      Trustee will administer the tax payments on behalf of the Trustor
                      and Trust.
                    </p>
                    <br />
                    <p class="!ml-[20px]  text-[#002E6E]">
                      - For the payment of any fees and taxes, a Trust bank account
                      would be established at Phillip Bank as per the mutual agreement
                      between the Trustor and Phillip Trustee. In the case that Phillip
                      Trustee makes the payment first, we will recover the full amount
                      back from the Trust account.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel value="3">
                <AccordionHeader class="hover:!text-[#002E6E]">(4) Account Opening with Phillip Bank</AccordionHeader>
                <AccordionContent>
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      4.1 If I choose to engage Phillip Trustee Cambodia, do I need to
                      open a personal bank account with Phillip Bank?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      For both Non-Cambodian and Cambodian Trustors, we strongly
                      recommend you open a personal bank account with Phillip Bank for
                      your ease of transactions and trust administration. By having a
                      personal bank account with Phillip Bank, this will give you
                      greater ease and convenience and you can avoid interbank
                      transaction fees.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px]  text-[#002E6E]">
                      4.2 What are the bank account opening fees?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px]  text-[#002E6E]">
                    <p>
                      There are no fees for opening an account. However, there could be
                      remittance fees incurred for sending money to fund the Phillip
                      Bank account depending on the bank you are remitting from.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      4.3 Does Phillip Bank an ATM and/or internet banking services?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      Your personal Phillip Bank ATM card will be issued upon the
                      opening of a savings account. The interest rate for savings
                      account is between 2-3% per annum if they maintain balance between
                      USD 500 to USD 100,000.
                    </p>
                    <br />
                    <p>
                      Phillip Bank has both internet and mobile banking services
                      available.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      4.4 Does Phillip Bank charge fees for local wire transfer within
                      Cambodia and international transfers?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      For local wire transfers, there may be certain transaction fees of
                      USD 0.50 to 1 per transaction (subject to changes).
                    </p>
                    <br />
                    <p>
                      For international transfers (between Phnom Penh and Singapore),
                      USD 9 is charged per transaction for a maximum of USD 10,000 per
                      transaction per day (subject to changes).
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      4.5 What are the loan financing interest rate for individuals?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      This is based on market rate. Also note that financing arrangement
                      will be assessed on case by case basis.
                    </p>
                  </div>
                  <br />
                  <b>
                    <p class="!ml-[20px] text-[#002E6E]">
                      4.6 If an investor chooses to purchase commercial properties via a
                      Singapore registered company, is it possible to obtain financing
                      from Phillip Bank?
                    </p>
                  </b>
                  <br />
                  <div class="!ml-[40px] text-[#002E6E]">
                    <p>
                      Phillip Bank is precluded from offshore financing, and we are not
                      allowed to lend to foreigners for foreign projects. However, in
                      the case of foreign borrowing to fund local projects, we require
                      approval from the local authorities.
                    </p>
                    <br />
                    <p>
                      We would not recommend such arrangements for clients as the loan
                      rates are higher in Cambodia than Singapore. Furthermore,
                      documentation from overseas can be cumbersome and credit
                      processing across border can be challenging.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>