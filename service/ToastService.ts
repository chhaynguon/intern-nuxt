import {createApp} from 'vue';
import ToastService from 'primevue/toastservice';
import App from '../app.vue';

const app = createApp(App);
app.use(ToastService);
