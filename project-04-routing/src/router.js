import { createRouter, createWebHistory } from "vue-router";
import TeamsList from "./components/teams/TeamsList.vue";
import UsersList from "./components/users/UsersList.vue";
import UsersFooter from "./components/users/UsersFooter.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import NotFound from "./components/nav/NotFound.vue";
import TeamsFooter from "./components/teams/TeamsFooter.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/teams" }, //redirect changes url to /teams
    //{ path: "/teams", component: TeamsList, alias:"/" }, //alias url doesnt change to /teams
    {
      name: "teams",
      path: "/teams",
      meta: { needsAuth: true }, //pass data in to componentsand or use it in the guards
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          name: "team-members",
          path: ":teamId",
          component: TeamMembers,
          props: true,
        },
      ], // teams/
    },
    {
      path: "/users",
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
      beforeEnter(to, from, next) {
        //here to protect routes
        console.log("before enter users @main.js");
        console.log(
          "-> moving to:",
          `"${to.path}."`,
          "from: ",
          `"${from.path}."`
        );
        next();
      },
    },

    { path: "/:notfound(.*)", component: NotFound },
  ],
  linkActiveClass: "active", //change the class from link-active to active
  scrollBehavior(_, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0,
    };
  },
});

/** Router global guard */
router.beforeEach((to, from, next) => {
  //before entering in each component apply this logic
  console.log("global beforEch cmp @main.js");
  console.log("-> moving to:", `"${to.path}."`, "from: ", `"${from.path}."`);

  if (to.meta.needsAuth) {
    console.log("needs auth!");
    next();
  } else {
    next();
  }
  // if (to.name === "team-members") {
  //   next(); //pass or do a security check
  // } else {
  //   //next({name:'team-members', params:{teamId:'t2'}})
  //   //... pass or do a security check?
  // }
  // next();
});

router.afterEach((to, from) => {
  //sending analitic data to your own database
  console.log("global after each cmp @main.js");
  console.log("-> moving to:", `"${to.path}."`, "from: ", `"${from.path}."`);
});

export default router;
