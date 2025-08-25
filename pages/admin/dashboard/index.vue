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
  <section class="w-full flex justify-between relative top-14.5">
    <!-- <dbMenu /> -->
    <div class="flex min-h-screen shadow-xl bg-white fixed top-14.5">

      <aside class="w-[100%] text-black flex flex-col">
        <ul class="w-[135px] text-center">

          <!-- home menu -->
          <li class="transition hover:transition hover:duration-300 bg-[#454545] text-white">
            <a href="/admin/dashboard" class="w-[135px] h-[44px] flex place-self-center items-center !pl-[18px]">
              <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clip-rule="evenodd" />
              </svg>
              <span class="!ml-[5px]">Home</span>
            </a>
          </li>

          <!-- user menu -->
          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/tableadmin"
              class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[18px] group"><svg
                class="w-6 h-6 text-gray-800 transition dark:text-white group-hover:text-white hover:transition hover:duration-300"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg><span class="!ml-[8px]">User</span>
            </a>
          </li>

          <!-- Logout menu -->
          <li
            class="transition hover:bg-red-400 hover:transition hover:duration-300 hover:text-white hover:border-red-400">
            <Toast />
            <button @click="confirmLogout"
              class="w-[135px] h-[44px] flex place-self-center !pl-[18px] items-center group">
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white hover:transition hover:duration-300 cursor-pointer"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
              </svg> <span class="!ml-[8px] cursor-pointer">Logout</span>
              <confirmDialog />
              <Toast />
            </button>
          </li>
        </ul>
      </aside>
    </div>

    <!-- middle contain -->
    <div class="w-full h-screen !pl-[135px] bg-[#f9fafb]">
      <div class="w-full place-self-end">
        <div>
          <h1 class="text-start font-bold text-xl !px-8 !my-[20px]">Welcome to Admin-Side</h1>
        </div>
        <div class="min-w-[90%] flex justify-between !px-8">
          <div class="w-[80%] grid grid-cols-4 gap-4">
            <!-- Recent Data Updated -->
            <div
              class="w-full h-[180px] !p-7 bg-white shadow drop-shadow-md rounded-md hover:scale-102 transition hover:transition hover:duration-300">
              <a href="/admin/recent">
                <h1 class="min-text-lg max-text-xl font-semibold text-black flex">
                  <svg class="w-6 h-6 text-black dark:text-white !mt-[2.5px] !mr-[5px]" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 8v4l3 3M3.22302 14C4.13247 18.008 7.71683 21 12 21c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-3.72916 0-6.92858 2.26806-8.29409 5.5M7 9H3V5" />
                  </svg>
                  Recently Update :
                </h1>
                <div class="flex ">
                  <div class="!pt-10">
                    <p class="!p-1.5 text-[#454545] text-xl font-medium bg-gray-200 rounded-md ">12</p>
                  </div>
                  <div class="!pt-10 flex">
                    <p class="!p-[6px] text-xl text-[#454545]/80">Posts updated</p>
                  </div>
                </div>
              </a>
            </div>

            <!-- 1st Total-Event-Update -->
            <div
              class="w-full h-[180px] !p-7 bg-white shadow drop-shadow-md rounded-md hover:scale-102 transition hover:transition hover:duration-300">
              <a href="/admin/event">
                <h1 class="text-xl font-semibold text-black flex">
                  <svg class="w-6 h-6 text-black dark:text-white !mt-[2.5px] !mr-[5px]" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                  </svg>
                  Total Event :
                </h1>
                <div class="flex">
                  <div class="flex !pt-10">
                    <p class="!p-1.5 text-[#454545] text-xl font-medium bg-blue-200 rounded-md ">{{ events }}</p>
                  </div>
                  <div class="!pt-10 flex">
                    <p class="!p-[6px] text-xl text-[#454545]/80">Events Posted</p>
                  </div>
                </div>
              </a>
            </div>

            <!-- 2nd Total-Service-Update  -->
            <div
              class="w-full h-[180px] !p-7 bg-white shadow drop-shadow-md rounded-md hover:scale-102 transition hover:transition hover:duration-300">
              <a href="/admin/service">
                <h1 class="text-xl font-semibold text-black flex">
                  <svg class="w-6 h-6 text-black dark:text-white !mt-[2.5px]" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="2"
                      d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  Total Service :
                </h1>

                <div class="flex">
                  <div class="flex !pt-10">
                    <p class="!p-1.5 text-[#454545] text-xl font-medium bg-red-200 rounded-md ">{{ services }}</p>
                  </div>
                  <div class="!pt-10 flex">
                    <p class="!p-[6px] text-xl text-[#454545]/80">Services Posted</p>
                  </div>
                </div>
              </a>
            </div>

            <!-- 3rd Total-Account -->
            <div
              class="w-full h-[180px] !p-7 bg-white shadow drop-shadow-md rounded-md hover:scale-102 transition hover:transition hover:duration-300">
              <a href="/admin/tableadmin">
                <h1 class="text-xl font-semibold text-black flex">
                  <svg class="w-6 h-6 text-black dark:text-white !mt-[2.5px] !mr-[5px] cursor-pointer"
                    aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                      d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                  </svg>Total Users :
                </h1>
                <div class="flex">
                  <div class="flex !pt-10">
                    <p class="!p-1.5 text-[#454545] text-xl font-medium bg-gray-200 rounded-md ">{{ counts }}</p>
                  </div>
                  <div class="!pt-10 flex">
                    <p class="!p-[6px] text-xl text-[#454545]/80">Accounts</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
