<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { useConfirm } from 'primevue/useconfirm'
import ConfirmDialog from 'primevue/confirmdialog';

import { KeyService } from '../../../service/KeyService';

const keyService = new KeyService();
onMounted(async () => {
  services.value = await keyService.getServicesMini()
});

const services = ref([]);
const getSeverity = (services) => {
  switch (services.status) {
    case 'UPDATED':
      return 'success';
    case 'OUTDATED':
      return 'danger';

    default:
      return null;
  }
};

const { $apollo, $gql } = useNuxtApp()
const { data } = await $apollo.query({
  query: $gql`
    query FindAll {
    findAll {
        id
        title
        thumbnail
        des_detail
    }
}
  `,
})

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

const first = ref(0);


</script>
<template>
  <section class="relative flex justify-between w-full top-16">

    <div class="fixed flex h-screen bg-white shadow-xl top-16">
      <aside class="w-[100%] text-black flex flex-col">
        <ul class="w-[135px] text-center ">

          <!-- home menu -->
          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/dashboard" class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group">
              <svg
                class="w-6 h-6 cursor-pointer hover:text-black dark:text-white group-hover:text-white hover:transition hover:duration-300"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clip-rule="evenodd" />
              </svg>
              <span class="!pl-[8px]">Dashboard</span>
            </a>
          </li>

          <li class="transition hover:duration-300 hover:bg-[#454545] hover:text-white group">
            <a href="/admin/users" class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group">
              <svg
                class="w-6 h-6 !mr-2 text-gray-800 group-hover:text-white transition group-hover:duration-300 hover:transition"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <span>Users</span>
            </a>
          </li>

          <li class="transition hover:duration-300 hover:bg-[#454545] hover:text-white group">
            <a href="/admin/events" class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                class="w-6 h-6 !mr-2 text-gray-800 group-hover:text-white transition group-hover:duration-300 hover:transition"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
              </svg>
              <span>Event</span>
            </a>
          </li>

          <li class="transition hover:duration-300 bg-[#454545] text-white group">
            <a href="/admin/services"
              class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                class="w-6 h-6 !mr-2 text-white transition group-hover:duration-300 hover:transition" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                  d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
              </svg>
              <span>Service</span>
            </a>
          </li>

          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/approval"
              class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                class="w-6 h-6 text-gray-800 group-hover:text-white" aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
              </svg>

              <span class="!pl-[8px]">Approval</span>
            </a>
          </li>

          <!-- Logout menu -->
          <li
            class="transition hover:bg-red-400 hover:transition hover:duration-300 hover:text-white hover:border-red-400">
            <button @click="confirmLogout()"
              class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group">
              <svg
                class="w-6 h-6 !mr-2 text-gray-800 group-hover:text-white transition group-hover:duration-300 hover:transition"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
              </svg> <span>Logout</span>
              <confirmDialog />
              <Toast />
            </button>
          </li>
        </ul>
      </aside>
    </div>

    <!-- middle contain -->
    <div class="w-full !pl-[135px] bg-[#f9fafb]">
      <div class="w-full place-self-end">
        <div class="w-full !mx-auto flex justify-between !px-8 !mt-5">
          <div class="w-full !mx-auto">
            <div class="w-full flex justify-between">
              <h1 class="text-center font-bold text-2xl">Services</h1>
              <div class="w-[30%] flex justify-end !mb-[15px] place-self-end">
                <button @click="visible = true"
                  class="transition hover:transition hover:duration-300 hover:scale-110 !pt-1 !pr-0.5">
                  <svg class="w-7 h-7 text-black cursor-pointer hover:scale-110 " aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>

                </button>
                <div class="flex shadow-md bg-[white]/100 rounded-lg ">
                  <input type="text" placeholder="Enter Event Title" class="w-[150px] !pl-[20px] ">
                  <button class="transition hover:transition hover:duration-300 hover:scale-110 " @click="reloadPage()">
                    <svg
                      class="w-6.5 h-6.5 text-red-400 !m-1 cursor-pointer hover:scale-120 transition hover:transition hover:duration-300 rounded-full"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>
                  </button>
                  <button class="transition hover:transition hover:duration-300 hover:scale-110" @click="eventSearch()">
                    <svg
                      class="w-6.5 h-6.5 !m-1 text-blue-400 cursor-pointer hover:scale-105 transition hover:transition hover:duration-300 rounded-full"
                      aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                      viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                  </button>

                </div>
              </div>
            </div>
            <div class="card shadow-md">
              <DataTable :value="services" tableStyle="min-width: 50rem" paginator="true" :rows="5" :totalRecords="120"
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}">
                <Column header="Thumbnail">
                  <template #body="slotProps">
                    <img :src="`${slotProps.data.thumbnail}`" :alt="slotProps.data.thumbnail"
                      class="object-cover w-25 h-25 rounded-lg " />
                  </template>
                </Column>
                <Column field="title" header="Title">
                  <template #body="slotProps">
                    <a class="text-blue-500 hover:underline" :href="`/admin/services/detail/${slotProps.data.link}`">
                      {{ slotProps.data.title }}
                    </a>
                  </template>
                </Column>
                <Column field="action" header="Action">
                  <template #body>
                    <div class="flex">
                      <button type="button" class=" text-sm cursor-pointer !px-[5px]">

                        <svg class="text-gray-800transition w-7 h-7 hover:scale-120 hover:transition hover:duration-300"
                          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                          viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                      </button>

                      <button type="button" @click="deleteUser(user.id)" class=" text-sm !px-[5px] cursor-pointer ">
                        <svg class="text-red-600 transition w-7 h-7 hover:scale-120 hover:transition hover:duration-300"
                          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                          viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>
                      </button>
                    </div>
                  </template>
                </Column>
                <!-- <Column header="Status">
                  <template #body="slotProps">
                    <Tag :value="slotProps.data.infoStatus" :severity="getSeverity(slotProps.data)" />
                  </template>
                </Column> -->
                <template #footer> In total there are {{ services ? services.length : 0 }} services.
                </template>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
