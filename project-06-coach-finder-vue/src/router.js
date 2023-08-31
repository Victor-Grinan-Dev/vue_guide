import { createRouter, createWebHistory } from "vue-router";

import coachDetail from "./pages/coaches/CoachDetail.vue";
import coachesList from "./pages/coaches/CoachesList.vue";
import coachRegistration from "./pages/coaches/CoachRegistration.vue";
import contactCoach from "./pages/requests/ContactCoach.vue";
import requestsRecieved from "./pages/requests/RequestsReceived.vue";
import notFound from "./pages/NotFound.vue";
import userAuth from "./pages/auth/userAuth.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: coachesList },
    {
      path: "/coaches/:id", //this declared id value. see under.
      component: coachDetail,
      props: true, //the view-router will pass the id value to the child component
      children: [{ path: "contact", component: contactCoach }],
    },
    { path: "/register", component: coachRegistration },
    { path: "/requests", component: requestsRecieved },
    { path: "/auth", component: userAuth },
    { path: "/:notfound(.*)", component: notFound },
  ],
});

export default router;
