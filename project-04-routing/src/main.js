import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
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
    },

    { path: "/:notfound(.*)", component: NotFound },
  ],
  linkActiveClass: "active", //change the class from link-active to active
});

const app = createApp(App);
app.use(router);

app.mount("#app");
