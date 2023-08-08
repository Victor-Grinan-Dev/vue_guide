<template>
  <div>
    <h3>Manage Goals tab</h3>
    <p>Write in the input and change tabs... the input value persits.</p>

    <input type="text" ref="goal" v-model="inputValue" />
    <button @click="setGoal">send</button>

    <error-alert v-if="inputIsInvalid">
      <h2>Input is empty!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="closeModal">Confirm</button>
    </error-alert>

    <error-alert v-if="newGoalAdded">
      <h2>New Goal added!</h2>
      <p>{{ inputValue }}</p>
      <button @click="closeModal">Confirm</button>
    </error-alert>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";

export default {
  data() {
    return {
      inputIsInvalid: false,
      inputValue: "",
      newGoalAdded: false,
    };
  },
  components: { ErrorAlert },
  methods: {
    closeModal() {
      this.inputIsInvalid = false;
      this.newGoalAdded = false;
      this.inputValue = "";
    },

    setGoal() {
      // const inputValue = this.$refs.goal.value;
      if (this.inputValue === "" || !this.inputValue) {
        this.inputIsInvalid = true;
      } else {
        this.newGoalAdded = true;
      }
    },
  },
};
</script>
