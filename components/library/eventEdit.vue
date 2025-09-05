<script setup>
import { ref, reactive } from "vue";
import { Form } from "@primevue/forms";
import { FormField } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';
import { Textarea } from "primevue";
import Dialog from 'primevue/dialog'; // default import
import { useToast } from "primevue";
const { $apollo, $gql } = useNuxtApp();

const toast = useToast();
const visible = ref(false);
const loading = ref(false);
const SelectedEvent = ref(null);
const topPos = ref(150);
const nuxtApp = useNuxtApp();
const initialValues = reactive({
    id: null,
    title: '',
    sub_title: '',
    title_detail: '',
    description_detail: '',
    status: 'PENDING', // Desfault value
});

const resolver = zodResolver(
    z.object({
        title: z.string().min(1, { message: 'Title field is required.' }),
        sub_title: z.string().min(1, { message: 'Secondary title is required.' }),
        title_detail: z.string().min(1, { message: 'Title Detail field is required.' }),
        description_detail: z.string().min(1, { message: 'Description field is required.' })
    })
);

const emit = defineEmits(["update:visible", "updated"]);

const editDialog = async (event) => {
    visible.value = true;
    SelectedEvent.value = event;
    Object.assign(initialValues, {
        id: number(event.id),
        title: event.title || '',
        sub_title: event.sub_title || '',
        title_detail: event.title_detail || '',
        description_detail: event.description_detail || '',
        status: event.status || 'PENDING',
    })
    
}

// Close dialog and reset form
const closeDialog = () => {
    visible.value = false;
};

const updateEvent = async (values) => {
    loading.value = true
    try {
        const { data } = await $apollo.mutate({
            mutation: nuxtApp.$gql`
      mutation UpdateEvent($updateEventInput: UpdateEventInput!){
        updateEvent(updateEventInput: $updateEventInput){
        id
        title
        sub_title
        title_detail
        description_detail
        status
        }
      }
    `,
            variables: { updateEventInput: values },
            fetchPolicy: "network-only",
        })

        visible.value = false;
        toast.add({ severity: 'success', summary: 'Successful to edit event.', life: 3000 });
        emit("updated", data.updateEvent);
        closeDialog();
    } catch (error) {
        console.error("Failed to edit event:", error);
        toast.add({ severity: 'error', summary: 'Failed to edit event', detail: error.message, life: 3000 });
    } finally {
        loading.value = false;
    }
}

const onFormSubmit = async ({ values, valid }) => {
    if (valid) {
        values.id = Number(initialValues.id);
        await updateEvent(values);
    }
}

</script>
<template>
    <button type="button" @click="editDialog(event)" class="text-sm cursor-pointer !px-[5px]">
        <svg class="text-gray-800transition w-7 h-7 hover:scale-120 hover:transition hover:duration-300"
            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
        </svg>
    </button>
    <Dialog v-model:visible="visible" class="w-[60%] dynamic-dialog" :dismissable-mask="false" :draggable="false"
        :closable="false" :resizable="false" position="top" :style="{ top: topPos + 50 + 'px' }">
        <template #header>
            <div class="flex items-center justify-between w-full">
                <span class="font-bold">Update Event</span>
                <div>
                    <button type="submit" @click="$refs.eventForm.submit()"
                        class=" bg-blue-300 text-white cursor-pointer !p-2 rounded-tl-md rounded-bl-md text-sm text-center hover:text-white hover:bg-blue-400 hover:transition hover:duration-300 transition duration-300">
                        Save</button>
                    <button @click="closeDialog"
                        class=" cursor-pointer !p-2 !px-2.5 rounded-tr-md rounded-br-md text-sm text-center bg-gray-100 hover:bg-gray-200  hover:transition hover:duration-300 transition duration-300">
                        Close</button>
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
                            rows="6" cols="50" maxlength="1000" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                        class="w-[88%] place-self-end">{{
                            $field.error?.message }}</Message>
                </FormField>
            </Form>
        </div>
    </Dialog>
</template>
<style scoped>
.p-inputtext {
    height: 30px;
}

#file_input {
    height: 40px;
}
</style>