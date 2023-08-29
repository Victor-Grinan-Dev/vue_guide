<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
      <p>{{ message }}</p>
    </div>
  </li>
</template>
<script>
export default {
  props: ["email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>
