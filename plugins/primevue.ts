import { defineNuxtPlugin } from '#imports'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService from 'primevue/confirmationservice'
import ConfirmDialog from 'primevue/confirmdialog'
import { type NuxtApp } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  const app = nuxtApp.vueApp

  if (!(app as any)._primeVueInstalled) {
    app.use(PrimeVue, { ripple: true })
    app.use(ToastService)
    app.use(ConfirmationService)
    app.component('ConfirmDialog', ConfirmDialog)

    // Custom flag to prevent double-install
    ;(app as any)._primeVueInstalled = true
  }
})
