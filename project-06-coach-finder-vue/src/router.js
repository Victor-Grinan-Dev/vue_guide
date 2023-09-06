import { createRouter, createWebHistory } from "vue-router";

import coachDetail from "./pages/coaches/CoachDetail.vue";
import coachesList from "./pages/coaches/CoachesList.vue";
import coachRegistration from "./pages/coaches/CoachRegistration.vue";
import contactCoach from "./pages/requests/ContactCoach.vue";
import requestsRecieved from "./pages/requests/RequestsReceived.vue";
import notFound from "./pages/NotFound.vue";
import userAuth from "./pages/auth/userAuth.vue";
import store from "./store/index";

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
    {
      path: "/register",
      component: coachRegistration,
      meta: { requiresAuth: true },
    },
    {
      path: "/requests",
      component: requestsRecieved,
      meta: { requiresAuth: true },
    },
    { path: "/auth", component: userAuth },
    {
      path: "/:notfound(.*)",
      component: notFound,
      meta: { requiresUnauth: true },
    },
  ],
});

// router guard
router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;
