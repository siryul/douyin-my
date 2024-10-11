import { createApp } from 'vue';
import './styles/index.scss';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './mock';

createApp(App).use(router).use(createPinia()).mount('#app');
