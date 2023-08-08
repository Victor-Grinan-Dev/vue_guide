<template>
  <div>
    <learning-resources
      v-for="resource in resources"
      :key="resource.id"
      :id="resource.id"
      :title="resource.title"
      :description="resource.description"
    ></learning-resources>
  </div>
</template>
<script>
import LearningResources from "./LearningResources.vue";
export default {
  components: {
    LearningResources,
  },
  props: ["resources"],
};
</script>
