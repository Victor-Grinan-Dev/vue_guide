<template>
  <ul>
    <li :key="goal" v-for="goal in goals">
      <slot :item="goal" other="..." thirdValue="by Papi"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
