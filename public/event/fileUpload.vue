<template>
    <div class="flex flex-col w-full">
        <input multiple type="file" id="file_uplaod" @change="onFileChange" class="hidden" v-if="!disabled">
        <div class="grid gap-4">
            <div class="col-start-1 col-end-3">
                <div class="p-fileupload-buttonbar">
                    <div class="w-[120px] h-[40px]">
                        <label for="file_uplaod">
                            <span class="p-button p-component p-fileupload-choose mt-1 " tabindex="0">
                                <span class="p-button-label">
                                    <i class="pi pi-paperclip"></i>
                                    Attach file
                                </span>
                            </span>
                        </label>
                    </div>
                    <span v-if="error.status" class="text-red-500 w-full">{{ error.title }}</span>
                </div>
            </div>
            <div class="col-end-6 col-span-2">
                <slot name="right-side"></slot>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4">
            <div class="col-span-1">
                <div v-for="(file, index) in allAttachments" :key="index"
                    class="w-full border-b-1 flex align-center justify-between items-center rounded-[4px]">
                    <div class="flex items-center pt-2 pb-2">
                        <Image class="w-[70px]"
                            :src="images[index].id ? '/storage/' + props.path + images[index]?.url : images[index]?.url"
                            v-if="['image/png', 'image/jpeg', 'image/svg'].includes(images[index]?.type)" preview />
                        <DocumentTextIcon class="w-[70px] h-[70px]" v-else />
                        <div class="p-2">
                            <p class="text-lg">
                                {{ images[index]?.name }}
                            </p>
                            <div class="w-full text-xs italic text-red-400">
                                {{ errors['file.' + index]?.[0] }}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row" style="margin-right: 15px;">
                        <div style="width: 9rem;">
                            {{ calImageSize(images[index]?.size) }}
                        </div>
                        <div style="width: 4rem;" class="flex flex-row justify-end mr-2">
                            <Button v-if="images[index].id" icon="pi pi-download" severity="info" size="small" rounded
                                aria-label="Download" @click="downloadWithAxios(images[index]?.url)"
                                style="margin-right: 5px;" />
                            <Button icon="pi pi-times" severity="danger" size="small" rounded aria-label="Remove"
                                @click="removeImage(index, images[index]?.url, images[index]?.id ?? null, images[index])"
                                :disabled="disabled" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { DocumentTextIcon } from "@heroicons/vue/24/outline";
import ServiceMaster from '@request/Service/service.master.js';
import Button from 'primevue/button';
import Image from 'primevue/image';
import { useToast } from "primevue/usetoast";
import { computed, reactive, ref } from 'vue';

const images = ref([])
const toast = useToast();
const error = reactive({
    'status': false,
    'title': ''
})
const emits = defineEmits(['changeFile', 'deleteFile'])
const props = defineProps({
    limit: Number,
    size: Number,
    preFile: {
        type: Number,
        default: 0
    },
    disabled: {
        type: Boolean,
        default: false
    },
    attachments: {
        type: Array,
        default: []
    },
    path: String,
    imageFit: {
        type: Boolean,
        default: false
    },
    errors: null
});

const loadingButton = reactive({
    download: false,
    delete: false,
    url: ''
});

const removeImage = (index, url, id = null, file) => {
    if (id) {
        emits('deleteFile', index, file)
    } else {
        emits('deleteFile', index);
    }
}

const onFileChange = (e) => {
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length) {
        return
    }

    if (files.length + props.preFile > props.limit) {
        error.status = true
        error.title = 'File upload allow only ' + props.limit + ' files'
        handleRules('error', 'Error', 'File upload allow only ' + props.limit + ' files');
        return
    }
    error.status = false
    createImage(files);
}

const checkFileSize = (files) => {
    for (const element of files) {
        if (element.size > props.size * 100000) {
            return true;
        }
    }
    return false;
}
const createImage = (files) => {
    if (checkFileSize(files)) {
        error.status = true
        error.title = 'File too Big, please select a file less than ' + props.size + 'MB'
        handleRules('error', 'Error', 'File too Big, please select a file less than ' + props.size + 'MB');
        return;
    }

    if (images?.value?.length >= props.limit) {
        error.status = true
        error.title = 'File upload allow only ' + props.limit + ' files'
        handleRules('error', 'Error', 'File upload allow only ' + props.limit + ' files');
        return;
    }

    for (const element of files) {
        error.value = false
        const name = element.name
        const size = element.size
        const type = element.type
        var reader = new FileReader();
        reader.onload = function (event) {
            const imageUrl = event.target.result;
            images.value.push({
                'url': imageUrl,
                'name': name,
                'size': size,
                'type': type,
                'file': element
            });
        }
        reader.readAsDataURL(element);
    }
    emits('changeFile', images.value);
}

const handleRules = (type, title, detial) => {
    toast.add({ severity: type, summary: title, detail: detial, life: 6000 });
}

const calImageSize = (size, decimals = 2) => {
    if (!+size) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(size) / Math.log(k))

    return `${parseFloat((size / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

const downloadWithAxios = (url) => {
    loadingButton.download = true
    loadingButton.url = url
    return ServiceMaster
        .downloadFile(url, props.path)
        .then((res) => {
            if (res.data) {
                loadingButton.download = false
                loadingButton.url = ''
                const fileURL = window.URL.createObjectURL(new Blob([res.data]));
                const fURL = document.createElement('a');
                fURL.href = fileURL;
                fURL.setAttribute('download', url);
                document.body.appendChild(fURL);
                fURL.click();
            }
        })
        .catch((error) => {
            if (error) handleRules('error', 'Error', 'Something went wrong.');
        });
}

const allAttachments = computed(() => {
    if (props.attachments) {
        images.value = props.attachments
    }
    return images.value.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    })
})

</script>
<style>
.p-button.p-button-icon-only.p-button-rounded {
    height: 20px !important;
    width: 20px !important;
    color: #ffffff;
    padding: 10px !important;
}

.border-b-1 {
    border-bottom: 1px solid #ced4da;
}

.p-button-danger {
    background: #f44336 !important;
    border: 1px solid #f44336 !important;
}
</style>
 