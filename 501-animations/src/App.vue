<template>
  <div class="application">
    <navegation-bar></navegation-bar>
    <router-view></router-view>

    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>

    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>

<script>
import NavegationBar from "./components/NavegationBar.vue";
export default {
  components: {
    NavegationBar,
  },
  data() {
    return {
      dialogIsVisible: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
  background-color: #112331;
  color: aliceblue;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  width: 85%;
  min-width: 280px;
  max-width: 600px;
}

.container-row {
  max-width: 40rem;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
  width: 40%;
  min-width: 140px;
  max-width: 300px;
}

.view {
  min-height: 250px;
}

.view-row {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

.modal-enter-active {
  animation: apear 0.5s ease-out forwards;
}

.modal-leave-active {
  animation: disapear 0.5s ease-out forwards;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  25% {
    transform: translateX(-150px) scale(1.1);
  }
  50% {
    transform: translateX(0) scale(1);
  }
  75% {
    transform: translateX(150px) scale(1.1);
  }
  100% {
    transform: translateX(0) scale(1);
  }
}
</style>
