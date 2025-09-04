import { ref } from 'vue'

const is_disabled = ref(false);
const errors = reactive({});
const attachments = ref([])
const attachmentsDeleted = ref([])
const thumbnailattachments = ref([])
const thumbnailDeleted = ref([])
import { computed } from "vue"

const filesComponent = [
  {
    label: "Attachment",
    limit: "10",
    id: "file1",
    size: "10",
    path: "event1/",
    deleteFile: "deleteFile",
    onDeleteFile: (file) => {
      if (file?.id) {
        attachmentsDeleted.value.push(file);
      }
      thumbnailattachments.value.splice(index, 1);
    },
    changeFile: "changeFile",
    onChangeFile: (file) => {
      console.log(file);
      console.log("Chnage File");
      attachments.value = [file];
    },
    preFile: attachments.value?.length,
    disable: is_disabled.value,
    errors: errors,
    attachments: attachments.value,
  },
  // {
  //   label: "Thumbnail",
  //   limit: "10",
  //   id: "file1",
  //   size: "10",
  //   path: "event1/",
  //   deleteFile: "deleteFile",
  //   onDeleteFile: (file) => {
  //     console.log("Thumbnail");
  //     console.log(file);
  //     thumbnailattachments.value = [file];
  //   },
  //   changeFile: "changeFile",
  //   onChangeFile: (file) => {
  //     console.log("Change Thumbnail")
  //     console.log(file)
  //     thumbnailattachments.value = [file];
  //   },
  //   preFile: thumbnailattachments.value?.length,
  //   disable: is_disabled.value,
  //   errors: errors,
  //   attachments: thumbnailattachments.value,
  // },


];

export default filesComponent;
