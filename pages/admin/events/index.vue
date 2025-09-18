<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import ConfirmDialog from "primevue/confirmdialog";
import { ref } from "vue";
import { Form } from "@primevue/forms";
import { FormField } from '@primevue/forms';
import { reactive } from 'vue';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { Textarea } from "primevue";
import Tag from 'primevue/tag'
import { navigateTo } from "#imports";
import { useRoute, useRouter } from 'vue-router'

const { $apollo, $gql } = useNuxtApp(); // reactive variable for DataTable
const loading = ref(false); // optional, show loading state
const events = ref([]);
const toast = useToast();
const confirm = useConfirm();
const openEvent = ref(false)
const selectedEvent = ref(null)
const topPos = ref(150);
const router = useRouter();
const route = useRoute();

const confirmLogout = () => {
  confirm.require({
    message: "Are you sure you want to logout?",
    header: "Confirm Logout",
    icon: "pi pi-sign-out",
    acceptProps: {
      label: "Yes",
    },
    rejectProps: {
      label: "No",
      severity: "secondary",
      outlined: true,
    },
    acceptClass: "p-button-danger",
    accept: () => {
      // do logout action here (clear token, redirect, etc.)
      localStorage.removeItem("token");
      navigateTo("/login");
      toast.add({
        severity: "success",
        summary: "Logged Out",
        detail: "You have been successfully logged out.",
        life: 2000,
      });
    },
    reject: () => {
      toast.add({
        severity: "info",
        summary: "Cancelled",
        detail: "Logout cancelled.",
        life: 2000,
      });
    },
  });
};

const editDialog = (event) => {
  openEvent.value = true
  selectedEvent.value = event
  router.push({
    query: { ...route.query, eventId: event.id }
  })
}

const closeDialog = () => {
  visible.value = false;
  const { eventId, ...rest } = route.query
  router.push({ query: rest })
};
const fetchEvents = async () => {
  loading.value = true;
  try {
    const { data } = await $apollo.query({
      query: $gql`
        query FindAll {
          findAll {
          id
          title
          sub_title
          title_detail
          description_detail
          status
        }
      }
      `,
      fetchPolicy: "network-only"
    });
    events.value = data.findAll || [];
  } catch (error) {
    console.error("Failed to fetch events:", error);
  } finally {
    setTimeout(() => (loading.value = false), 200)
  }
};

onMounted(() => {
  fetchEvents();
})

const getStatusLabel = (status) => {
  switch (status) {
    case 'ACTIVE': return 'ACTIVE';
    case 'PENDING': return 'PENDING';
    case 'DELETED': return 'DELETED';
    default: return 'ACTIVE';
  }
};

const getStatusClass = (status) => {
  switch (status) {
    case 'ACTIVE': return 'status-active';
    case 'PENDING': return 'status-pending';
    case 'DELETED': return 'status-deleted';
    default: return 'status-active';
  }
};

const initialValues = reactive({
  title: '',
  sub_title: '',
  title_detail: '',
  description_detail: ''
});

const resolver = zodResolver(
  z.object({
    title: z.string().min(1, { message: 'Title field is required.' }),
    sub_title: z.string().min(1, { message: 'Secondary title is required.' }),
    title_detail: z.string().min(1, { message: 'Title Detail field is required.' }),
    description_detail: z.string().min(1, { message: 'Description field is required.' })
  })
);


const visible = ref(false);
const createEvents = async (values) => {

  try {
    const { data } = await $apollo.mutate({
      mutation: $gql`
        mutation CreateEvent($createEventInput: CreateEventInput!) {
          createEvent(createEventInput: $createEventInput) {
            id
        title
        sub_title
        title_detail
        description_detail
        status
          }
        }
      `,
      variables: { createEventInput: values },
      fetchPolicy: "network-only", // optional, avoid cache
    });
    setTimeout(() => {
      refresh();
    }, 1000);
    console.log("Created: ", data.createEvent)
    visible.value = false;
    toast.add({ severity: 'success', summary: 'Successful to create event.', life: 2000 });
  } catch (error) {
    console.error("Failed to create events:", error);
    toast.add({ severity: 'error', summary: 'Failed to create event', detail: error.message, life: 2000 });
  } finally {
    loading.value = false;
  }
};

const onFormSubmit = async ({ values, valid }) => {
  if (valid) {
    await createEvents(values);
  }
};

const removeEvent = async (id) => {
  loading.value = false;
  try {
    const { data } = await $apollo.mutate({
      mutation: $gql`
      mutation RemoveEvent($id: Int!) {
      removeEvent(id: $id) {
        id
        title
        status
    }
}
      `,
      variables: { id, status: 'DELETED' },
      fetchPolicy: "network-only",
    })
    setTimeout(() => {
      refresh();
    }, 500);
    visible.value = false;
    toast.add({ severity: 'success', summary: 'Successful to Delete event.', life: 2000, closable: true });
  } catch (error) {
    console.error("Failed to mark event as deleted:", error);
    toast.add({ severity: 'error', summary: 'Failed to delete event.', life: 2000, closable: true });
  }
}

const refresh = async () => {
  try {
    loading.value = true;

    // start loading
    // your async task here, e.g. fetching data
    const { data } = await $apollo.query({
      query: $gql`
        query FindAll {
          findAll {
            id
            title
            sub_title
            title_detail
            description_detail
            status
          }
        }
      `,
      fetchPolicy: "network-only"
    });
    events.value = data.findAll || [];
    await fetchData();
  } catch (err) {
    console.error(err);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 500)
  }
}

</script>
<template>
  <dbHeader />
  <section class="relative flex justify-between w-full h-screen top-16">
    <div class="fixed flex h-screen bg-white shadow-sm top-16 !z-1107">
      <aside class="w-[100%] text-black flex flex-col">
        <ul class="w-[135px] text-center">
          <!-- home menu -->
          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/dashboard" class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px]">
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

          <!-- users menu -->
          <li class="transition hover:transition hover:duration-300 bg-[#454545] text-white">
            <a href="/admin/events" class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
              </svg>
              <span class="!pl-[8px]">Event</span>
            </a>
          </li>

          <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
            <a href="/admin/services"
              class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                  d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
              </svg>
              <span class="!pl-[8px]">Service</span>
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
            <button @click="confirmLogout"
              class="w-[135px] h-[44px] flex place-self-center !pl-[10px] items-center group">
              <svg
                class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
              </svg>
              <span class="!pl-[8px] cursor-pointer">Logout</span>
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
        <div class="w-full !mx-auto flex justify-between !px-8">
          <div class="w-full !mx-auto">
            <div class="flex justify-between w-full !my-5">
              <h1 class="text-center font-bold text-2xl">Events</h1>
              <div class="w-[30%] flex justify-end  place-self-end">
                <div class="flex shadow-sm rounded-md">
                  <input type="text" placeholder="Search"
                    class="w-[160px] !pl-[8px] rounded-tl-md rounded-bl-md border-gray-200" />
                  <button class=" border-y-1 border-r-1 border-gray-200 rounded-tr-md rounded-br-md"
                    @click="eventSearch()">
                    <svg class="w-6 h-6 !m-1 text-gray-500 cursor-pointer" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                        d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                  </button>
                </div>
                <button @click="visible = true"
                  class="bg-[#60a5fa] items-center text-white transition hover:transition hover:duration-300 scale-100 flex !px-2 !py-1 !ml-2 cursor-pointer group shadow-sm hover:bg-blue-500 rounded-tl-md rounded-bl-md">
                  <svg class="w-5 h-5 text-white !mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                    height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>New
                </button>
                <button @click="openEvent = true"
                  class="transition items-center hover:transition hover:duration-300 scale-100 flex !px-2 !py-1 border-1 border-gray-200 cursor-pointer group shadow-sm hover:bg-gray-200">
                  <span class="pi pi pi-eye !mr-1.5"></span>View
                </button>
                <button @click="refresh"
                  class="transition items-center hover:transition hover:duration-300 scale-100 flex !px-2 !py-1 border-1 border-gray-200 cursor-pointer group shadow-sm hover:bg-gray-200">
                  <span class="pi pi pi-fw pi-refresh !mr-1"></span>Refresh
                </button>
                <button @click="Column"
                  class="transition items-center hover:transition hover:duration-300 scale-100 flex !px-2 !py-1 border-1 border-gray-200 cursor-pointer group shadow-sm hover:bg-gray-200 rounded-tr-md rounded-br-md">
                  <span class="pi pi-ellipsis-h"></span>
                </button>
              </div>
            </div>
            <Dialog v-model:visible="visible" class="w-[70%] dynamic-dialog " :dismissable-mask="false"
              :draggable="false" :closable="false" :resizable="false" position="top" :style="{ top: topPos + '50px' }"
              pt:root:class="!rounded-2xl !shadow-2xs !overflow-hidden" pt:mask:class="!bg-black/50 !backdrop-blur-2xs">
              <template #header>
                <div class="flex items-center justify-between w-full">
                  <span class="font-bold">New Event</span>
                  <div>
                    <button type="submit" @click="$refs.eventForm.submit()"
                      class=" bg-blue-300 text-white cursor-pointer !p-2 rounded-tl-md rounded-bl-md text-sm text-center shadow-sm hover:bg-blue-400 hover:transition hover:duration-300 transition duration-300">
                      Add</button>
                    <button @click="closeDialog"
                      class="cursor-pointer !p-2 rounded-tr-md rounded-br-md text-sm text-center items-center shadow-sm hover:bg-gray-100 hover:transition hover:duration-300 transition duration-300">
                      Close
                    </button>
                  </div>
                </div>
              </template>
              <div class="w-full bg-[#fafafa] rounded-md">
                <Form ref="eventForm" :initial-values="initialValues" :resolver="resolver" @submit="onFormSubmit"
                  class="grid grid-cols-2 gap-4 sm:w-full !p-3">
                  <FormField v-slot="$field" name="title" initialValue="" class="grid-cols-1 gap-1 ">
                    <div class="flex justify-between items-center">
                      <label for="title" class="p-inputtext-sm w-[25%] text-end !pr-2 text-xs">Title</label>
                      <InputText id="title" type="text"
                        class="p-inputtext-sm w-[75%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                      class="w-[75%] place-self-end ">{{
                        $field.error?.message }}</Message>
                  </FormField>

                  <FormField v-slot="$field" name="sub_title" initialValue="" class="grid-cols-1 gap-1 ">
                    <div class="flex justify-between items-center">
                      <label for="sub_title" class="w-[25%] text-end !pr-2 text-xs">
                        Secondary Title
                      </label>
                      <InputText id="sub_title" type="text"
                        class="w-[75%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                      class="w-[75%] place-self-end">{{
                        $field.error?.message }}</Message>
                  </FormField>

                  <FormField v-slot="$field" name="title_detail" initialValue="" class="grid-cols-1 gap-1">
                    <div class="flex justify-between items-center w-full"><label for="title_detail"
                        class="w-[25%] text-end !pr-2 text-xs">Title Detail</label>
                      <InputText id="title_detail" type="text"
                        class="w-[75%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                      class="w-[75%] place-self-end">{{
                        $field.error?.message }}</Message>
                  </FormField>

                  <FormField v-slot="$field" name="description_detail" initialValue="" class="col-span-2">
                    <div class="flex justify-between">
                      <label for="description_detail" class="w-[12.5%] text-end !pr-2 text-xs">Description</label>
                      <Textarea id="description_detail" type="text"
                        class="w-[90%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300"
                        rows="5" cols="50" maxlength="5000" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                      class="w-[88%] place-self-end">{{
                        $field.error?.message }}</Message>
                  </FormField>
                  <!-- <ImagesUpload label="Attachment" v-model:attachments="attachments" :limit="10" id="file1"
                    :preFile="attachments?.length" :size="10" :disabled="is_disabled" :errors="errors" :path="'event1/'"
                    @deleteFile="deleteFile" @changeFile="changeFile" />

                  <ImagesUpload label="Thumbnail" v-model:attachments="thumbnailattachments" :limit="10" id="file1"
                    :preFile="thumbnailattachments?.length" :size="10" :disabled="is_disabled" :errors="errors"
                    :path="'event1/'" @[deleteFile]="deleteThumbnailFile" @changeFile="changeThumbnailFile" /> -->

                  <!-- <ImagesUpload v-for="(file, index) in filesComponent" :key="index" :label="file.label"
                    :limit="file.limit" :id="file.id" :size="file.size" :attachments="file.attachments"
                    :preFile="file.preFile" :disabled="file.is_disabled" :errors="file.errors" :path="file.path"
                    @[file.deleteFile]="file.onDeleteFile" @[file.changeFile]="file.onChangeFile" /> -->

                </Form>
              </div>
            </Dialog>

            <div class="card shadow-sm">
              <DataTable :value="events" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
                :totalRecords="events.length" :loading="loading"
                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" data-p-highlight="true"
                @row-dblclick="editDialog($event.data)" dataKey="id" selectionMode="single"
                v-model:selection="selectedEvent">

                <!-- <Column header="Thumbnail">
                  <template #body="slotProps">
                    <img v-if="slotProps.data.thumbnail" :src="slotProps.data.thumbnail" alt="Thumbnail"
                      class="object-cover w-25 h-25 rounded-lg" />
                  </template>
                </Column> -->

                <Column field="id" header="ID">
                  <template #body="slotProps">
                    <p class="truncate inline-block max-w-[12rem]">{{ slotProps.data.id }}</p>
                  </template>
                </Column>

                <Column field="title" header="Title">
                  <template #body="slotProps">
                    <a class="text-blue-500 font-semibold" :href="`/admin/events/detail-${slotProps.data.id}`">
                      <p class="truncate inline-block">{{ slotProps.data.title }}</p>
                    </a>
                  </template>
                </Column>

                <Column field="sub_title" header="Sub title">
                  <template #body="slotProps">
                    <p class="truncate inline-block max-w-[12rem]">{{ slotProps.data.sub_title }}</p>
                  </template>
                </Column>

                <Column field="title_detail" header="Title detail">
                  <template #body="slotProps">
                    <p class="truncate inline-block max-w-[12rem]">{{ slotProps.data.title_detail }}</p>
                  </template>
                </Column>

                <Column field="description_detail" header="Description">
                  <template #body="slotProps">
                    <p class="truncate inline-block max-w-[12rem]">{{ slotProps.data.description_detail }}</p>
                  </template>
                </Column>

                <!-- <Column field="images" header="Images">
                  <template #body="slotProps">
                    {{ slotProps.data.images }}
                  </template>
                </Column> -->

                <!-- <Column field="cover" header="Cover">
                  <template #body="slotProps">
                    {{ slotProps.data.cover }}
                  </template>
                </Column> -->

                <Column field="status" header="Status">
                  <template #body="slotProps">
                    <Tag :value="getStatusLabel(slotProps.data.status)"
                      :class="getStatusClass(slotProps.data.status)" />
                  </template>
                </Column>

                <Column field="Action" header="Action">
                  <template #body="slotProps">
                    <div class="flex">
                      <eventEdit :openEvent="openEvent" @updated="onUpdated" @closeEvent="(close) => openEvent = close"
                        :event="selectedEvent" />

                      <button type="button" @click="editDialog(slotProps.data)"
                        class="text-sm cursor-pointer !px-[5px]">
                        <svg
                          class="text-gray-800 transition w-7 h-7 hover:scale-120 hover:transition hover:duration-300"
                          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                          viewBox="0 0 24 24">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                        </svg>
                      </button>
                      <button type="button" @click="removeEvent(slotProps.data.id)"
                        class="text-sm !px-[5px] cursor-pointer">
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

                <template #footer>
                  In total there are {{ events ? events.length : 0 }} events.
                </template>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.p-inputtext {
  height: 30px;
}

#file_input {
  height: 40px;
}

.status-active {
  background-color: #d1fae5;
  color: #008000;
  font-weight: 500;
  font-size: 12px;
}

.status-pending {
  background-color: #e5e7eb;
  color: #1E293B;
  font-weight: 500;
  font-size: 12px;
}

.status-deleted {
  background-color: #fee2e2;
  color: #e53e3e;
  font-weight: 500;
  font-size: 12px;
}
</style>