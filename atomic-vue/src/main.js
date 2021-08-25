import { createApp } from "vue";
import App from "./App.vue";
import { routes } from "./constants/routes";
import { createRouter, createWebHashHistory } from "vue-router";

const atomicVue = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
atomicVue.use(router);
atomicVue.mount("#app");
