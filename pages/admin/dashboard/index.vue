<script setup>
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm'
import ConfirmDialog from 'primevue/confirmdialog';
import { onMounted, ref } from 'vue';
import { listEvents } from '~/data/Event/event';
import { keyService } from '~/data/Service/keyService'
const toast = useToast();
const confirm = useConfirm()

const confirmLogout = () => {
  confirm.require({
    message: 'Are you sure you want to logout?',
    header: 'Confirm Logout',
    icon: 'pi pi-sign-out',
    acceptProps: {
      label: 'Yes',
    },
    rejectProps: {
      label: 'No',
      severity: 'secondary',
      outlined: true
    },
    acceptClass: 'p-button-danger',
    accept: () => {
      // do logout action here (clear token, redirect, etc.)
      localStorage.removeItem('token');
      navigateTo("/login")
      toast.add({
        severity: 'success',
        summary: 'Logged Out',
        detail: 'You have been successfully logged out.',
        life: 3000
      })
    },
    reject: () => {
      toast.add({
        severity: 'info',
        summary: 'Cancelled',
        detail: 'Logout cancelled.',
        life: 2000
      })
    }

  })
}

const counts = ref(0)

onMounted(async () => {
  try {
    const res = await fetch("http://localhost:8000/api/user/account-counts")
    const data = await res.json()
    counts.value = data.counts
  } catch (err) {
    console.error("Error fetching counts:", err)
  }
})

const events = listEvents.length
const services = keyService.length
</script>
<template>
  <dbHeader />

  <section class="relative flex flex-col lg:flex-row lg:top-16">

    <div class="lg:fixed lg:top-1.4 shadow-xl bg-white w-full h-screen lg:w-[135px]">
      <aside class="flex flex-row justify-around text-black lg:flex-col lg:justify-start">
        <ul class="flex w-full text-center lg:flex-col">

          <li class="transition hover:duration-300 bg-[#454545] text-white">
            <a href="/admin/dashboard"
              class="flex items-center justify-center lg:justify-start !px-4 !py-3 lg:w-[135px] lg:h-[44px]">
              <svg class="w-6 h-6 !mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
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
              <span>users</span>
            </a>
          </li>

          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/events" class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[18px] group"><svg
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
              class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[18px] group"><svg
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
              class="flex items-center justify-center lg:justify-start !px-4 !py-3 lg:w-[135px] lg:h-[44px] cursor-pointer">
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
    </div>

    <div class="w-full min-h-screen bg-[#f9fafb] lg:!pl-[135px]">
      <div class="w-full">
        <h1 class="!px-4 !mt-6 text-xl font-bold text-start md:!px-8 md:!my-6">Welcome to Admin-Side</h1>

        <div class="grid grid-cols-1 gap-6 !px-4 md:!px-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          <div class="!p-6 transition bg-white rounded-md shadow hover:scale-105">
            <a href="#">
              <h1 class="flex text-xl font-semibold text-black">
                <svg class="w-6 h-6 !mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path
                    d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5" />
                </svg>
                Recently Update :
              </h1>
              <div class="flex items-center !mt-6">
                <p class="!p-2 text-xl font-medium bg-gray-200 rounded-md">12</p>
                <p class="!ml-3 text-lg text-gray-700">Posts updated</p>
              </div>
            </a>
          </div>

          <div class="!p-6 transition bg-white rounded-md shadow hover:scale-105">
            <a href="/admin/events">
              <h1 class="flex text-xl font-semibold text-black">
                <svg class="w-6 h-6 !mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path
                    d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                </svg>
                Total Event :
              </h1>
              <div class="flex items-center !mt-6">
                <p class="!p-2 text-xl font-medium bg-blue-200 rounded-md">{{ events }}</p>
                <p class="!ml-3 text-lg text-gray-700">Events Posted</p>
              </div>
            </a>
          </div>

          <div class="!p-6 transition bg-white rounded-md shadow hover:scale-105">
            <a href="/admin/services">
              <h1 class="flex text-xl font-semibold text-black">
                <svg class="w-6 h-6 !mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path
                    d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Total Service :
              </h1>
              <div class="flex items-center !mt-6">
                <p class="!p-2 text-xl font-medium bg-red-200 rounded-md">{{ services }}</p>
                <p class="!ml-3 text-lg text-gray-700">Services Posted</p>
              </div>
            </a>
          </div>

          <div class="!p-6 transition bg-white rounded-md shadow hover:scale-105">
            <a href="/admin/users">
              <h1 class="flex text-xl font-semibold text-black">
                <svg class="w-6 h-6 !mr-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path
                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                </svg>
                Total Users :
              </h1>
              <div class="flex items-center !mt-6">
                <p class="!p-2 text-xl font-medium bg-gray-200 rounded-md">{{ counts }}</p>
                <p class="!ml-3 text-lg text-gray-700">Accounts</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
