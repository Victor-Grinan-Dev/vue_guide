import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import BaseModal from "./components/BaseModal.vue";
import AllUsers from "./components/AllUsers.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ListData from "./components/ListData.vue";
import SquareComp from "./components/SquaresComp.vue";
import ParraGraph from "./components/ParraGraph.vue";
const router = createRouter({
  history: createWebHistory(),

  routes: [
    { path: "/", component: AllUsers },
    { path: "/goals", component: CourseGoals },
    { path: "/list", component: ListData },
    { path: "/squares", component: SquareComp },
    { path: "/parragraph", component: ParraGraph },
  ],
});
const app = createApp(App);
app.use(router);
app.component("base-modal", BaseModal);

app.mount("#app");
