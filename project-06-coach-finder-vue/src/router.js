import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";


import coachesList from "./pages/coaches/CoachesList.vue";
// import coachDetail from "./pages/coaches/CoachDetail.vue";
// import coachRegistration from "./pages/coaches/CoachRegistration.vue";
// import contactCoach from "./pages/requests/ContactCoach.vue";
// import requestsRecieved from "./pages/requests/RequestsReceived.vue";
// import notFound from "./pages/NotFound.vue";
// import userAuth from "./pages/auth/userAuth.vue";
import store from "./store/index";

const coachDetail = defineAsyncComponent(()=>import("./pages/coaches/CoachDetail.vue"));
const coachRegistration = defineAsyncComponent(()=>import("./pages/coaches/CoachRegistration.vue"));
const contactCoach = defineAsyncComponent(()=>import("./pages/requests/ContactCoach.vue"));
const requestsRecieved = defineAsyncComponent(()=>import("./pages/requests/RequestsReceived.vue"));
const userAuth = defineAsyncComponent(()=>import("./pages/auth/userAuth.vue"));
const notFound = defineAsyncComponent(()=>import("./pages/NotFound.vue"));

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
