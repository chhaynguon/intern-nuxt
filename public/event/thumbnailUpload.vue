<template>
    <input type="file" name="thumbnail" id="file_upload" @change="onThumbnailChange" class="hidden" v-if="!disabled">
    <div class="grid gap-4">
        <div class="col-start-1 col-end-3">
            <div class="p-button-label flex justify-end !pr-13">
                <div class="w-[100px] h-[40px]">
                    <label for="file_upload" class="flex justify-between">
                        <div
                            class="flex items-center cursor-pointer !p-2 bg-blue-400 hover:bg-blue-500 text-white place-content-center text-sm font-normal rounded-sm">
                            <i class="pi pi-paperclip !px-1"></i>
                            <span class="!px-1">Thumbnail</span>
                        </div>
                    </label>
                </div>
                <span v-if="error.status" class="text-red-500 w-full">{{ error.title }}</span>
            </div>
        </div>
        <div class="col-end-6 col-span-2">
            <slot name="right-side"></slot>
        </div>
    </div>
    <div class="grid col-span-2">
        <div class=" grid-cols-1 gap-4">
            <div class="col-span-1">
                <div v-for="(thumbnail, index) in allAttachments" :key="index"
                    class="w-[87%] place-self-end border-b-1 flex align-center justify-between items-center rounded-[4px]">
                    <p>Images</p>
                    <div class="flex items-center !pt-2 !pb-2">
                        <Image class="w-[70px] h-[70px] object-scale-down"
                            :src="thumbnail.id ? '/storage/' + props.path + thumbnail?.url : thumbnail?.url"
                            v-if="['image/png', 'image/jpeg', 'image/svg'].includes(thumbnail?.type)" preview />
                        <DocumentTextIcon class="w-[40px] h-[40px]" v-else />
                        <div class="!p-2">
                            <p class="text-lg">
                                {{ thumbnail?.name }}
                            </p>
                            <div class="w-full text-xs italic text-red-400">
                                {{ errors?.['file.' + index]?.[0] || '' }}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row" style="margin-right: 15px;">
                        <div style="width: 9rem;">
                            {{ calthumbnailsize(thumbnail?.size) }}
                        </div>
                        <div style="width: 4rem;" class="flex flex-row justify-end !mr-2">
                            <Button v-if="thumbnail.id" icon="pi pi-download" severity="info" size="small" rounded
                                aria-label="Download" @click="downloadWithAxios(thumbnail?.url)"
                                style="margin-right: 5px;" />
                            <Button icon="pi pi-times" severity="danger" size="small" rounded aria-label="Remove"
                                @click="removethumbnail(index, thumbnail?.url, thumbnail?.id ?? null, thumbnail)"
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
import ServiceMaster from '~/request/Service/service.master.js';
import Button from 'primevue/button';
// import Image from 'primevue/image';
import { useToast } from "primevue/usetoast";
import { computed, reactive, ref } from 'vue';

const thumbnail = ref([])
const toast = useToast();
const error = reactive({
    'status': false,
    'title': ''
})
const emits = defineEmits(['changeThumbnail', 'deleteThumbnail'])
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

const removethumbnail = (index) => {
    thumbnail.value.splice(index, 1) // removes from local list
    emits('deleteThumbnail', index)    // let parent know too
}

const onThumbnailChange = (e) => {
    var thumbnails = e.target.thumbnails || e.dataTransfer.thumbnails;
    if (!thumbnails.length) {
        return
    }

    if (thumbnails.length + props.preFile > props.limit) {
        error.status = true
        error.title = 'thumbnail upload allow only ' + props.limit + ' thumbnails'
        handleRules('error', 'Error', 'thumbnail upload allow only ' + props.limit + ' thumbnails');
        return
    }
    error.status = false
    createthumbnail(thumbnails);
}

const checkThumbnailSize = (thumbnails) => {
    for (const element of thumbnails) {
        if (element.size > props.size * 100000) {
            return true;
        }
    }
    return false;
}
const createthumbnail = (thumbnails) => {
    if (checkThumbnailSize(thumbnails)) {
        error.status = true
        error.title = 'Thumbnail too Big, please select a thumbnail less than ' + props.size + 'MB'
        handleRules('error', 'Error', 'Thumbnail too Big, please select a thumbnail less than ' + props.size + 'MB');
        return;
    }

    if (thumbnail?.value?.length >= props.limit) {
        error.status = true
        error.title = 'Thumbnail upload allow only ' + props.limit + ' thumbnails'
        handleRules('error', 'Error', 'Thumbnail upload allow only ' + props.limit + ' thumbnails');
        return;
    }

    for (const element of thumbnails) {
        error.status = false
        const name = element.name
        const size = element.size
        const type = element.type
        var reader = new FileReader();
        reader.onload = function (event) {
            const thumbnailUrl = event.target.result;
            thumbnail.value.push({
                'url': thumbnailUrl,
                'name': name,
                'size': size,
                'type': type,
                'file': element
            });
        }
        reader.readAsDataURL(element);
    }
    emits('changeThumbnail', thumbnail.value);
}

// Non-serializable storage for uploads only
// const rawFiles = ref([])

// const createImage = (files) => {
//     if (checkFileSize(files)) {
//         error.status = true
//         error.title = `File too big, please select a file less than ${props.size}MB`
//         handleRules('error', 'Error', error.title)
//         return
//     }

//     if (images.value.length >= props.limit) {
//         error.status = true
//         error.title = `File upload allows only ${props.limit} files`
//         handleRules('error', 'Error', error.title)
//         return
//     }

//     for (const file of files) {
//         error.status = false
//         const reader = new FileReader()
//         reader.onload = (event) => {
//             images.value.push({
//                 url: event.target.result, // preview
//                 name: file.name,
//                 size: file.size,
//                 type: file.type,
//                 created_at: new Date(),
//             })
//             rawFiles.value.push(file) // keep original File object separately
//         }
//         reader.readAsDataURL(file)
//     }

//     emits("changeFile", images.value)
//     console.log(images.value)
// }

const handleRules = (type, title, detial) => {
    toast.add({ severity: type, summary: title, detail: detial, life: 6000 });
}

const calthumbnailsize = (size, decimals = 2) => {
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
                const thumbnailURL = window.URL.createObjectURL(new Blob([res.data]));
                const fURL = document.createElement('a');
                fURL.href = thumbnailURL;
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
        thumbnail.value = props.attachments
    }
    return thumbnail.value.sort((a, b) => {
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
