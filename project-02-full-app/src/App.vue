<template>
  <div>
    <TheHeader appTitle="Vue App" />
    <the-resource></the-resource>
  </div>
</template>

<script>
import TheResource from "./components/learning-resources/TheResource.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: {
    // StoredResources,
    TheHeader,
    TheResource,
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
  padding: 0;
}
</style>
