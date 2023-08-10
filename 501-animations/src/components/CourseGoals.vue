<template>
  <base-card>
    <template v-slot:header>
      <h2>List with diferrent items in it</h2>
    </template>
    <ul>
      <li :key="goal" v-for="goal in goals">
        <slot :item="goal" other="..." thirdValue="by Papi"></slot>
      </li>
    </ul>
  </base-card>
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
