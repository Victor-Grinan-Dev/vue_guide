import { createRouter, createWebHistory } from "vue-router";

import coachDetail from "./pages/coaches/CoachDetail.vue";
import coachesList from "./pages/coaches/CoachesList.vue";
import coachRegistration from "./pages/coaches/CoachRegistration.vue";
import contactCoach from "./pages/requests/ContactCoach.vue";
import requestsRecieved from "./pages/requests/RequestsRecieved.vue";
import notFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: coachesList },
    {
      path: "/coaches/:id",
      component: coachDetail,
      children: [{ path: "/contact", component: contactCoach }],
    },
    { path: "/register", component: coachRegistration },
    { path: "/requests", component: requestsRecieved },
    { path: "/:notfound(.*)", component: notFound },
  ],
});

export default router;
