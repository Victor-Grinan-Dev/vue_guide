<template>
  <ul>
    <learning-resources
      v-for="resource in storeResourses"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
    ></learning-resources>
  </ul>
</template>

<script>
import LearningResources from "./components/learning-resources/LearningResources.vue";

export default {
  components: {
    LearningResources,
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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
