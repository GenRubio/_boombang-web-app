import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import { createPinia } from 'pinia';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import 'vue3-carousel/dist/carousel.css';
import { useAuth } from './store/auth.store';

var userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf('electron/') > -1 == false) {
    location.href = 'https://www.google.com/';
}

library.add(fas, far, fab)
dom.watch();

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);


if (window.electron) {
    const { ipcRenderer } = window.electron;
    ipcRenderer.on('remove-token', () => {
        /*const auth = useAuth();
        auth.clear();
        console.log('remove-token');*/
    });
}

if (localStorage.getItem('token')) {
    (async () => {
        const auth = useAuth();
        try {
            auth.setIsAuth(true);
            await auth.checkToken();
        } catch (error) {
            auth.clear()
        }
    })()
}

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app');
