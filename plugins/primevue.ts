import { defineNuxtPlugin } from '#imports'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.use(PrimeVue)
  nuxtApp.vueApp.use(ConfirmationService)
  nuxtApp.vueApp.component('ConfirmDialog', ConfirmDialog)
})
