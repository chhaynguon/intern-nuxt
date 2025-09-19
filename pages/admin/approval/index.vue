<script setup>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";
import ConfirmDialog from "primevue/confirmdialog";
import { ref, onMounted } from "vue";
import Tag from 'primevue/tag'

const approvals = ref([]);
const loading = ref(false);
const selectedEvent = ref(null);
const selectedApproval = ref(null);
const { $apollo, $gql } = useNuxtApp(); // reactive variable for DataTable
const events = ref([]);
const toast = useToast();
const confirm = useConfirm();
const openEvent = ref(false)
const topPos = ref(150);

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
        loading.value = false;
    }
};

onMounted(() => {
    fetchEvents();
})

const getStatusLabel = (status) => {
    switch (status) {
        case 'APPROVED': return 'APPROVED';
        case 'PENDING': return 'PENDING';
        case 'REJECTED': return 'REJECTED';
        default: return 'PENDING';
    }
};

const getStatusClass = (status) => {
    switch (status) {
        case 'APPROVED': return 'status-active';
        case 'PENDING': return 'status-pending';
        case 'REJECTED': return 'status-deleted';
        default: return 'status-pending';
    }
};

const getActionLabel = (approval_action) => {
    switch (approval_action) {
        case 'CREATE': return 'CREATE';
        case 'UPDATE': return 'UPDATE';
        case 'UPLOAD': return 'UPLOAD';
        default: return 'CREATE';
    }
};

const getActionClass = (approval_action) => {
    switch (approval_action) {
        case 'CREATE': return 'status-action';
        case 'UPDATE': return 'status-action';
        case 'UPLOAD': return 'status-action';
        default: return 'status-action';
    }
};


const getStatusImg = (approval_status) => {
    switch (approval_status) {
        case 'ACTIVE': return 'https://nano-uat.phillipbank.com.kh/images/placeholders/approve-icon.png';
        case 'PENDING': return 'https://nano-uat.phillipbank.com.kh/images/placeholders/approval-pending.gif';
        case 'DELETED': return 'https://nano-uat.phillipbank.com.kh/images/placeholders/reject-icon.png';
        default: return 'https://nano-uat.phillipbank.com.kh/images/placeholders/approval-pending.gif';
    }
};

const fetchApprovals = async () => {
    try {
        loading.value = true;
        const { data } = await $apollo.query({
            query: $gql`
             query FindAll {
                findAllApprovals {
                    id
                  key
                  value
                  original
                  new
                  module
                  approval_status
                  status
                  created_by
                  created_at
                  approved_by
                  approved_at
                  rejected_by
                  rejected_at
                  approval_action
                }
            }
            `,
            fetchPolicy: "network-only"
        });
        approvals.value = data.findAllApprovals || [];
        console.log(approvals.value)
    } catch (err) {
        console.error(err);
    } finally {
        setTimeout(() => {
            loading.value = false;
        }, 500)
    }
}

onMounted(() => {
    fetchApprovals();
})

const closeDialog = () => {
    setTimeout(() => {
        refresh()
    }, 500);
    openEvent.value = false
};

const refresh = async () => {
    try {
        loading.value = true;
        const { data } = await $apollo.query({
            query: $gql`
             query FindAll {
                findAllApprovals {
                    id
                  key
                  value
                  original
                  new
                  module
                  approval_status
                  status
                  created_by
                  created_at
                  approved_by
                  approved_at
                  rejected_by
                  rejected_at
                  approval_action
                }
            }
            `,
            fetchPolicy: "network-only"
        });
        approvals.value = data.findAllApprovals || [];
        console.log(approvals.value)
    } catch (err) {
        console.error(err);
    } finally {
        setTimeout(() => {
            loading.value = false;
        }, 500)
    }
}

const viewEvent = async () => {
    openEvent.value = true
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
        console.log(events.value)
    } catch (err) {
        console.error(err);
    } finally {
        setTimeout(() => {
            loading.value = false;
        }, 500)
    }
}

// Approve selected approval
const approveApproval = async (id) => {
    try {
        loading.value = true;
        const { data } = await $apollo.mutate({
            mutation: $gql`
        mutation ApproveApproval($id: Int!) {
          approve(id: $id) {
            id
            status
            approval_status
            approved_at
            approved_by
          }
        }
      `,
            variables: { id },
        });

        const index = approvals.value.findIndex(a => a.id === id);
        if (index !== -1) {
            approvals.value[index] = { ...approvals.value[index], ...data.approve };
        }
        openEvent.value = false
        console.log('Approval approved:', data.approve);
    } catch (err) {
        console.error('Failed to approve:', err);
    } finally {
        loading.value = false;
    }
};

const rejectEvent = async () => {

    if (!selectedEvent.value) return
    await updateEventStatus("DELETED")
    toast.add({
        severity: "error",
        summary: "Request Cancelled",
        detail: "The request has been cancelled.",
        life: 2000,
    })
    setTimeout(() => {
        refresh();
    }, 500);
}

const updateEventStatus = async (status) => {
    try {
        const { data } = await $apollo.mutate({
            mutation: $gql`
        mutation UpdateEvent($input: UpdateEventInput!) {
          updateEvent(updateEventInput: $input) {
            id
            status
          }
        }
      `,
            variables: {
                input: { id: selectedEvent.value.id, status }
            }
        })
        // update UI, close dialog, toast, etc.
        openEvent.value = false

    } catch (err) {
        console.error("Approval failed:", err)

    } finally {
        setTimeout(() => {
            loading.value = false;
        }, 500)
    }
}

const viewDBClick = (event) => {
    selectedEvent.value = event.data   // <- capture row data
    openEvent.value = true
}


</script>
<template>
    <section class="relative flex justify-between w-full">
        <div class="fixed flex h-screen bg-white shadow-xl !z-1102">
            <aside class="w-[100%] text-black flex flex-col">
                <ul class="w-[135px] text-center">
                    <!-- home menu -->
                    <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
                        <a href="/admin/dashboard"
                            class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px]">
                            <svg class="w-6 h-6 cursor-pointer hover:text-black dark:text-white group-hover:text-white hover:transition hover:duration-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd"
                                    d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="!pl-[8px]">Dashboard</span>
                        </a>
                    </li>

                    <li class="transition hover:duration-300 hover:bg-[#454545] hover:text-white group">
                        <a href="/admin/users"
                            class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group">
                            <svg class="w-6 h-6 !mr-2 text-gray-800 group-hover:text-white transition group-hover:duration-300 hover:transition"
                                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path
                                    d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3.05A2.5 2.5 0 1 1 9 5.5M19.5 17h.5a1 1 0 0 0 1-1 3 3 0 0 0-3-3h-1m0-3.05a2.5 2.5 0 1 0-2-4.45m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3 1 1 0 0 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
                            </svg>
                            <span>Users</span>
                        </a>
                    </li>

                    <!-- users menu -->
                    <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
                        <a href="/admin/events"
                            class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                                class="w-6 h-6 text-gray-800 group-hover:text-white" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z" />
                            </svg>
                            <span class="!pl-[8px]">Event</span>
                        </a>
                    </li>

                    <li class="transition hover:transition hover:duration-300 hover:bg-[#454545] hover:text-white">
                        <a href="/admin/services"
                            class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                                class="w-6 h-6 text-gray-800 cursor-pointer group-hover:text-white hover:transition hover:duration-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                    d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
                            </svg>
                            <span class="!pl-[8px]">Service</span>
                        </a>
                    </li>

                    <li class="transition hover:transition hover:duration-300 bg-[#454545] text-white">
                        <a href="/admin/approval"
                            class="w-[135px] h-[44px] flex place-self-center items-center !pl-[10px] group"><svg
                                class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
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
                            <svg class="w-6 h-6 text-gray-800 cursor-pointer dark:text-white group-hover:text-white hover:transition hover:duration-300"
                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
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
                            <h1 class="text-center font-bold text-2xl">Approvals</h1>
                            <div class="w-[30%] flex justify-end  place-self-end">
                                <div class="flex shadow-sm rounded-md">
                                    <input type="text" placeholder="Seach"
                                        class="w-[150px] !pl-[8px] rounded-tl-md rounded-bl-md border-gray-200" />
                                    <button class=" border-y-1 border-r-1 border-gray-200 rounded-tr-md rounded-br-md"
                                        @click="eventSearch()">
                                        <svg class="w-6 h-6 !m-1 text-gray-500 cursor-pointer" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                            viewBox="0 0 24 24">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2"
                                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </button>
                                </div>
                                <button @click="viewEvent"
                                    class="bg-[#60a5fa] items-center text-white transition hover:transition hover:duration-300 scale-100 flex !px-2 !py-1 !ml-2 cursor-pointer group shadow-sm hover:bg-blue-500 rounded-tl-md rounded-bl-md">
                                    <span class="pi pi pi-eye !pr-1"></span>View
                                </button>
                                <button @click="refresh"
                                    class="transition items-center hover:transition hover:duration-300 scale-100 flex !px-2 !py-1 border-1 border-gray-200 cursor-pointer group shadow-sm hover:bg-gray-200 rounded-tr-md rounded-br-md">
                                    <span class="pi pi pi-fw pi-refresh "></span>Refresh
                                </button>
                            </div>
                        </div>
                        <Dialog v-model:visible="openEvent" modal :dismissable-mask="false" :draggable="false"
                            :closable="false" :resizable="false" position="top" :style="{ top: topPos + '50px' }"
                            pt:root:class="!rounded-2xl !shadow-2xs !overflow-hidden"
                            pt:mask:class="!bg-black/50 !backdrop-blur-2xs" class="w-[70%] dynamic-dialog">
                            <template #header>
                                <div class="flex items-center justify-between w-full">
                                    <span class="font-bold">Approval Detail</span>
                                    <div class="flex">
                                        <button type="submit" @click="approveApproval()"
                                            class="flex text-black shadow-sm cursor-pointer !px-2 !py-1 rounded-tl-md rounded-bl-md text-sm border-gray-300 hover:bg-gray-100 transition hover:duration-200">
                                            <svg width="42" height="42" viewBox="0 0 42 42" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" class="p-menuitem-icon h-5 w-5">
                                                <path
                                                    d="M21 41C10.0667 41 1 31.9333 1 21C1 10.0667 10.0667 1 21 1C31.9333 1 41 10.0667 41 21C41 31.9333 31.9333 41 21 41ZM21 3.39998C11.4 3.39998 3.40007 11.1333 3.40007 21C3.40007 30.8667 11.1333 38.5999 21 38.5999C30.8667 38.5999 38.6 30.8667 38.6 21C38.6 11.1333 30.6 3.39998 21 3.39998Z"
                                                    fill="#00CA42" stroke="#00CA42" stroke-width="0.5"
                                                    stroke-miterlimit="10"></path>
                                                <path
                                                    d="M18.0669 28.2001L11.6669 21.8001L14.0669 19.1334L18.3335 23.1334L28.4669 14.6L30.8669 17.2667L18.0669 28.2001Z"
                                                    fill="#00CA42"></path>
                                            </svg>
                                            <p class="!pl-1">Approve</p>
                                        </button>
                                        <button type="submit" @click="rejectEvent()"
                                            class="flex justify-between text-black shadow-sm cursor-pointer !px-2 !py-1 text-sm text-center border-gray-300 hover:bg-gray-100 transition hover:duration-200">
                                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg" class="p-menuitem-icon h-5 w-5">
                                                <path
                                                    d="M20 2.40002C29.8 2.40002 37.6 10.2 37.6 20C37.6 29.8 29.8 37.6 20 37.6C10.2 37.6 2.39996 29.8 2.39996 20C2.39996 10.2 10.2 2.40002 20 2.40002ZM20 0C9 0 0 9 0 20C0 31 9 40 20 40C31 40 40 31 40 20C40 9 31 0 20 0Z"
                                                    fill="#E93841"></path>
                                                <path d="M14 14L26 26" stroke="#E93841" stroke-width="4"
                                                    stroke-miterlimit="10"></path>
                                                <path d="M14 26L26 14" stroke="#E93841" stroke-width="4"
                                                    stroke-miterlimit="10"></path>
                                            </svg>
                                            <p class="!pl-1">Reject</p>
                                        </button>
                                        <button @click="closeDialog()"
                                            class=" cursor-pointer !px-2 !py-1 rounded-tr-md rounded-br-md text-sm text-center items-center border-gray-300 shadow-sm hover:bg-gray-100 transition hover:duration-200">
                                            <span class="pi pi pi-fw pi-times"></span>Close
                                        </button>
                                    </div>
                                </div>
                            </template>
                            <div class="w-full bg-[#fafafa] rounded-md">
                                <div class="grid grid-cols-2 gap-4 sm:w-full !p-3">

                                    <div name="id" initialValue="" class="grid-cols-1 gap-1 hidden">
                                        <p class="text-xs max-w-[15rem] font-semibold">{{ selectedEvent?.id }}</p>
                                    </div>

                                    <div name="title" initialValue="" class="grid-cols-1 gap-1 ">
                                        <div class="flex items-center">
                                            <label for="title"
                                                class="p-inputtext-sm w-[25%] text-end !pr-2 text-xs text-gray-500 font-semibold">Title</label>
                                            <p class="text-xs max-w-[15rem] font-semibold">{{ selectedEvent?.title }}
                                            </p>
                                        </div>
                                    </div>

                                    <div name="sub_title" initialValue="" class="grid-cols-1 gap-1 ">
                                        <div class="flex items-center">
                                            <label for="sub_title"
                                                class="w-[25%] text-end !pr-2 text-xs text-gray-500 font-semibold">
                                                Secondary Title
                                            </label>
                                            <p class="text-xs max-w-[15rem] font-semibold">{{ selectedEvent?.sub_title
                                                }}</p>
                                        </div>
                                    </div>

                                    <div name="title_detail" initialValue="" class="grid-cols-1 gap-1">
                                        <div class="flex items-center"><label for="title_detail"
                                                class="w-[25%] text-end !pr-2 text-xs text-gray-500 font-semibold">Title
                                                Detail</label>
                                            <p class="text-xs max-w-[15rem] font-semibold">{{
                                                selectedEvent?.title_detail }}
                                            </p>
                                        </div>
                                    </div>

                                    <div name="description_detail" initialValue="" class="col-span-2">
                                        <div class="flex">
                                            <label for="description_detail"
                                                class="w-[12.5%] text-end !pr-2 text-xs text-gray-500 font-semibold">Description</label>
                                            <p class="text-xs max-w-[20rem] font-semibold">{{
                                                selectedEvent?.description_detail }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Dialog>

                        <div class="card shadow-sm text-sm">
                            <DataTable :value="approvals" tableStyle="min-width: 50rem" :paginator="true" :rows="10"
                                :totalRecords="approvals.length" :loading="loading"
                                template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                                currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
                                data-p-highlight="true" @row-dblclick="viewDBClick" dataKey="id" selectionMode="single"
                                v-model:selection="selectedApproval">

                                <Column field="approval_status" header="">
                                    <template #body="slotProps">
                                        <img :src="getStatusImg(slotProps.data.status)" :alt="slotProps.data.status"
                                            class="max-w-6 max-h-6" />
                                    </template>
                                </Column>

                                <Column field="id" header="ID">
                                    <template #body="slotProps">
                                        <p class="truncate inline-block max-w-[12rem]">{{ slotProps.data.id }}</p>
                                    </template>
                                </Column>

                                <Column field="module" header="Subject">
                                    <template #body="slotProps">
                                        <a class="text-blue-500 font-semibold"
                                            :href="`/admin/events/detail-${slotProps.data.id}`">
                                            <p class="truncate inline-block max-w-[12rem]">{{ slotProps.data.module }}
                                            </p>
                                        </a>
                                    </template>
                                </Column>

                                <Column field="approval_status" header="Approval status">
                                    <template #body="slotProps">
                                        <Tag :value="getStatusLabel(slotProps.data.approval_status)"
                                            :class="getStatusClass(slotProps.data.approval_status)" />
                                    </template>
                                </Column>

                                <Column field="status" header="Status">
                                    <template #body="slotProps">
                                        <Tag :value="getStatusLabel(slotProps.data.status)"
                                            :class="getStatusClass(slotProps.data.status)" />
                                    </template>
                                </Column>

                                <Column field="created_at" header="Created date">
                                    <template #body="slotProps">
                                        <p class="truncate inline-block max-w-[10rem]">{{ slotProps.data.created_at }}
                                        </p>
                                    </template>
                                </Column>

                                <Column field="created_by" header="Created by">
                                    <template #body="slotProps">
                                        <p class="truncate inline-block max-w-[12rem]">{{ slotProps.data.created_by }}
                                        </p>
                                    </template>
                                </Column>

                                <Column field="approved_at" header="Approved date">
                                    <template #body="slotProps">
                                        <p class="truncate inline-block max-w-[10rem]">
                                            {{ slotProps.data.approved_at }}</p>
                                    </template>
                                </Column>

                                <Column field="approved_by" header="Approved by">
                                    <template #body="slotProps">
                                        <p class="truncate inline-block max-w-[12rem]">
                                            {{ slotProps.data.approved_by }}</p>
                                    </template>
                                </Column>

                                <Column field="action" header="Action">
                                    <template #body="slotProps">
                                        <Tag :value="getActionLabel(slotProps.data.approval_action)"
                                            :class="getActionClass(slotProps.data.approval_action)" />
                                    </template>
                                </Column>

                                <template #footer>
                                    In total there are {{ approvals ? approvals.length : 0 }} requests.
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

.status-action {
    background: none;
    color: #1E293B;
    font-weight: 500;
    font-size: 14px;
    padding-left: 3px;
}
</style>