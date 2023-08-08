<template>
  <ul></ul>
</template>

<script>
// import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CourseGoals.vue";
// import ActiveGoals from "./components/ActiveGoals.vue";
// import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    // "the-header": TheHeader, //standard way to register a component locally
    // TheHeader: TheHeader, //this allows you to use self closing tag <TheHeader />
    // TheHeader, //even shorter hand syntax
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    // ActiveGoals,
    // ManageGoals,
  },
  data() {
    return {
      storeResourses: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official Vue.js documentation.",
          link: "https://vuejs.org/",
        },
        {
          id: "google",
          title: "Google",
          description: "The original Google engine.",
          link: "https://google.com/",
        },
      ],
    };
  },
  methods: {},
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
