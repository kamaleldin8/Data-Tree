import { createApp } from "vue";

import App from "./App.vue";

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

import '@/assets/styles.scss';

const app = createApp(App);

app.mount("#app");
