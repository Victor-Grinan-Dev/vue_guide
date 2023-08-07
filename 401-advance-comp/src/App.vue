<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> -->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <h2>{{ slotProps.other }}</h2>
        <p>{{ slotProps.thirdValue }}</p>
      </template>
    </course-goals>
    <base-card>
      <template v-slot:header>
        <h2>Managing tabs</h2>
      </template>
      <button @click="changeTab('manage-goals')">Manage goals</button>
      <button @click="changeTab('active-goals')">Active goals</button>
      <!-- <active-goals></active-goals>
    <manage-goals></manage-goals> -->
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </base-card>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // "the-header": TheHeader, //standard way to register a component locally
    // TheHeader: TheHeader, //this allows you to use self closing tag <TheHeader />
    TheHeader, //even shorter hand syntax
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
      selectedComponent: "active-goals",
    };
  },
  methods: {
    changeTab(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
