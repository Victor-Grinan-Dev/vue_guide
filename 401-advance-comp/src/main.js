import { createApp } from "vue";

import App from "./App.vue";

// import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/CourseGoals.vue";
import ManageGoals from "./components/CourseGoals.vue";
const app = createApp(App);

// app.component('the-header', TheHeader);
// app.component("badge-list", BadgeList);
// app.component("user-info", UserInfo);

app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.component("course-goals", CourseGoals);
app.component("active-goals", ActiveGoals);
app.component("manage-goals", ManageGoals);

app.mount("#app");
