<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import { ref, onMounted } from 'vue';
import { EventService } from '@/service/EventService';

// onMounted(() => {
//     EventService.getEventsMini().then((data) => (event.value = data));
// });

const event = ref();
const getSeverity = (event) => {
    switch (event.infoStatus) {
        case 'UPDATED':
            return 'success';
        case 'OUTDATED':
            return 'danger';

        default:
            return null;
    }
};



const logout = async () => {
    localStorage.removeItem('token');
    alert("You have been logged out!")
    navigateTo("/login")
}

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




</script>
<template>
    <dbHeader />
    <section class="w-full flex justify-between relative top-22.5">

        <div class="flex h-screen shadow-xl bg-white fixed top-22.5">
            <aside class="w-[100%] text-black flex flex-col">
                <ul class="w-[200px] text-center ">

                    <!-- home menu -->
                    <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
                        <a href="/staff/dashboard"
                            class="w-[135px] h-[44px] flex place-self-center items-center !pl-[18px]">
                            <svg class="w-6 h-6 hover:text-black dark:text-white group-hover:text-white hover:transition hover:duration-300 cursor-pointer"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="!ml-[5px]">Home</span>
                        </a>
                    </li>

                    <!-- staff menu -->
                    <li class="transition hover:transition hover:duration-300 bg-[#454545] text-white">
                        <a href="/staff/event"
                            class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[18px] group"><svg
                                class="w-6 h-6 text-white dark:text-white " aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                            <span class="!ml-[8px]">Event</span>
                        </a>
                    </li>

                    <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
                        <a href="/staff/service"
                            class=" w-[135px] h-[44px] flex place-self-center items-center !pl-[18px] group"><svg
                                class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white hover:transition hover:duration-300 cursor-pointer"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                    d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
                            </svg>
                            <span class="!ml-[8px]">Service</span>
                        </a>
                    </li>

                    <!-- Logout menu -->
                    <li
                        class="transition hover:bg-red-400 hover:transition hover:duration-300 hover:text-white hover:border-red-400">
                        <button @click="logout()"
                            class="w-[135px] h-[44px] flex place-self-center !pl-[18px] items-center group">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white group-hover:text-white hover:transition hover:duration-300 cursor-pointer"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                            </svg> <span class="!ml-[8px] cursor-pointer">Logout</span>
                        </button>
                    </li>
                </ul>
            </aside>
        </div>

        <!-- middle contain -->
        <div class="w-full h-screen !pl-[200px] bg-[#f9fafb]">
            <div class="w-full place-self-end">
                <div>
                    <h1 class="text-center font-bold text-2xl !m-[20px]">Welcome to Event</h1>
                </div>
                <div class="w-[90%] !mx-auto flex justify-between">
                    <div class="w-[80%] !mx-auto">
                        <div class="w-[30%] flex justify-end !mb-[15px] place-self-end">
                            <div class="flex shadow-xl bg-[white]/100 rounded-lg ">
                                <input type="text" placeholder="Enter Event Title" class="w-[150px] !pl-[20px] ">
                                <button class="transition hover:transition hover:duration-300 hover:scale-110 "
                                    @click="reloadPage()">
                                    <svg class="w-6.5 h-6.5 text-red-400 !m-1 cursor-pointer hover:scale-120 transition hover:transition hover:duration-300 rounded-full"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                                    </svg>
                                </button>
                                <button class="transition hover:transition hover:duration-300 hover:scale-110"
                                    @click="eventSearch()">
                                    <svg class="w-6.5 h-6.5 !m-1 text-blue-400 cursor-pointer hover:scale-105 transition hover:transition hover:duration-300 rounded-full"
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                    </svg>
                                </button>

                                <button @click="visible = true"
                                    class="transition hover:transition hover:duration-300 hover:scale-110">
                                    <svg class="w-7 h-7 !m-1 text-black cursor-pointer hover:scale-110 "
                                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="square" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16.5 15v1.5m0 0V18m0-1.5H15m1.5 0H18M3 9V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3M3 9v6a1 1 0 0 0 1 1h5M3 9h16m0 0v1M6 12h3m12 4.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <div class="card">
                            <DataTable :value="data" tableStyle="min-width: 50rem">
                                <template #header>
                                    <div class="flex flex-wrap items-center justify-between gap-2">
                                        <span class="text-xl font-bold">events</span>
                                        <Button icon="pi pi-refresh" rounded raised />
                                    </div>
                                </template>
                                <Column field="title" header="Title"></Column>
                                <Column header="Image">
                                    <template #body="slotProps">
                                        <img :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
                                            :alt="slotProps.data.image" class="w-24 rounded" />
                                    </template>
                                </Column>
                                <Column field="thumbnail" header="thumbnail">
                                    <template #body="slotProps">
                                        {{ slotProps.thumbnail }}
                                    </template>
                                </Column>
                                <Column header="Status">
                                    <template #body="slotProps">
                                        <Tag :value="slotProps.data.infoStatus"
                                            :severity="getSeverity(slotProps.data)" />
                                    </template>
                                </Column>
                                <template #footer> In total there are {{ events ? events.length : 0 }} events.
                                </template>
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
