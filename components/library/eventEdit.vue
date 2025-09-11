<script setup>
import { ref, defineEmits, watch } from "vue";
import { Form } from "@primevue/forms";
import { FormField } from '@primevue/forms';
import { Textarea } from "primevue";
import Dialog from 'primevue/dialog'; // default import
import { useToast } from "primevue";
const { $apollo, $gql } = useNuxtApp();
const toast = useToast();
const visible = ref(false);
const loading = ref(false);
const topPos = ref(150);
const eventFormRef = ref(null);

const props = defineProps({
    event: {
        type: Object,
        default: {}
    },
    openEvent: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(["update:visible", "updated", 'closeEvent']);


// Close dialog and reset form
const closeDialog = () => {
    // visible.value = false;
    emit('closeEvent', false)
};
const updateEvent = async (values) => {
    loading.value = true
    try {
        const { data } = await $apollo.mutate({
            mutation: $gql`
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
            variables: {
                updateEventInput: {
                    ...values,
                    id: props.event.id,
                }
            },
            fetchPolicy: "network-only",
        })
        refresh()
        visible.value = false;
        toast.add({ severity: 'success', summary: 'Successful to edit event.', life: 2000 });
        emit("updated", data.updateEvent);
        closeDialog()
    } catch (error) {
        console.error("Failed to edit event:", error);
        toast.add({ severity: 'error', summary: 'Failed to edit event', detail: error.message, life: 2000 });
    } finally {
        loading.value = false;
    }
}

const onFormSubmit = async ({ values, valid }) => {
    if (!valid) return
    await updateEvent(values)
}

const initForm = {
    id: "",
    title: "",
    sub_title: "",
    title_detail: "",
    description_detail: "",
    status: ""
}

const formData = ref({ ...initForm });

// Watch for changes in props.event
watch(
    () => props.event?.id,
    (newId) => {
        if (newId) {
            formData.value.id = props.event.id || ''
            formData.value.title = props.event.title || ''
            formData.value.sub_title = props.event.sub_title || ''
            formData.value.title_detail = props.event.title_detail || ''
            formData.value.description_detail = props.event.description_detail || ''
            formData.value.status = props.event.status || 'PENDING'

            eventFormRef.value?.reset();
        } else {
            formData.value = { ...initForm };
            eventFormRef.value?.reset();
        }
    },
    { immediate: true }
);

const refresh = async () => {
  try {
      loading.value = true; 
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
    <Dialog v-model:visible="props.openEvent" class="w-[60%] dynamic-dialog" :dismissable-mask="false"
        :draggable="false" :closable="false" :resizable="false" position="top" :style="{ top: topPos + 50 + 'px' }">
        <template #header>
            <div class="flex items-center justify-between w-full">
                <span class="font-bold">Update Event: {{ props.event.id }}</span>
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
            <Form ref="eventForm" :initial-values="formData" @submit="onFormSubmit"
                class="grid grid-cols-2 gap-4 sm:w-full !p-3 position">
                <FormField v-slot="$field" name="id" class="absolute">
                    <InputText type="hidden" v-model="$field.value" />
                </FormField>
                <FormField v-slot="$field" name="title" class="grid-cols-1 gap-1 ">
                    <div class="flex justify-between items-center">
                        <label for="title" class="p-inputtext-sm w-[25%] text-end !pr-2 text-xs">Title</label>
                        <InputText id="title" type="text" v-model="$field.value"
                            class="p-inputtext-sm w-[75%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                        class="w-[75%] place-self-end ">{{
                            $field.error?.message }}</Message>
                </FormField>

                <FormField v-slot="$field" name="sub_title" class="grid-cols-1 gap-1 ">
                    <div class="flex justify-between items-center">
                        <label for="sub_title" class="w-[25%] text-end !pr-2 text-xs">
                            Sub Title
                        </label>
                        <InputText id="sub_title" type="text" v-model="$field.value"
                            class="w-[75%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                        class="w-[75%] place-self-end">{{
                            $field.error?.message }}</Message>
                </FormField>

                <FormField v-slot="$field" name="title_detail" class="grid-cols-1 gap-1">
                    <div class="flex justify-between items-center w-full">
                        <label for="title_detail" class="w-[25%] text-end !pr-2 text-xs">Title Detail</label>
                        <InputText id="title_detail" type="text" v-model="$field.value"
                            class="w-[75%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300" />
                    </div>
                    <Message v-if="$field?.invalid" severity="error" size="small" variant="simple"
                        class="w-[75%] place-self-end">{{
                            $field.error?.message }}</Message>
                </FormField>

                <FormField v-slot="$field" name="description_detail" class="col-span-2">
                    <div class="flex justify-between">
                        <label for="description_detail" class="w-[12.5%] text-end !pr-2 text-xs">Description</label>
                        <Textarea id="description_detail" type="text" v-model="$field.value"
                            class="w-[90%] border border-gray-300 rounded-lg focus:!ring-1 focus:!ring-gray-300 focus:!border-gray-300 hover:!border-gray-300"
                            rows="5" cols="50" maxlength="1000" />
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