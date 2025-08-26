import App from '../app.vue';
import {createApp} from 'vue';
import ConfirmationService from 'primevue/confirmationservice';
import primevue from '../plugins/primevue';

const app = createApp(App);
app.use(primevue);
app.use(ConfirmationService);
app.mount('#app');
