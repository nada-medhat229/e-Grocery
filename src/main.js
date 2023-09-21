import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import 'bootstrap/dist/css/bootstrap.css';
import Popper from 'popper.js';
window.Popper = Popper;
const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);

app.mount("#app");
