<template>
  <div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">
        {{ animatedBlock ? "Turn off" : "Animate" }}
      </button>
    </div>

    <div class="container">
      <!--  <p v-if="isUsersVisible">I'm the user</p>-->
      <transition name="buttons" mode="out-in">
        <button v-if="!isUsersVisible" @click="toggleUsers">show users</button>
        <button v-else @click="toggleUsers">Hide users</button>
      </transition>
    </div>

    <div class="container">
      <transition name="para">
        <p v-if="parraIsVisible">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, nulla.
        </p>
      </transition>
      <button @click="toggleParragraph">Toggle Parragraph</button>
    </div>

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
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      parraIsVisible: false,
      isUsersVisible: false,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParragraph() {
      this.parraIsVisible = !this.parraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleUsers() {
      this.isUsersVisible = !this.isUsersVisible;
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
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 1s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-fade 2s ease-in-out infinite;
}

/* buttons */
.buttons-enter-from,
.buttons-leave-to {
  opacity: 0;
}

.buttons-enter-active {
  transition: opacity 1s ease-out;
}
.buttons-leave-active {
  transition: opacity 1s ease-in;
}

.buttons-enter-to,
.buttons-leave-from {
  opacity: 1;
}
/* @keyframes just-fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
} */

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

@keyframes apear {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes disapear {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
}
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.5s ease-out;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.para-leave-from {
  opacity: 1;
  transform: translateY();
}
.para-leave-active {
  transition: all 0.5s ease-out;
}
.para-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/** modal */
/* .modal-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */
.modal-enter-active {
  animation: apear 0.5s ease-out forwards;
}
/* .modal-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
/* .modal-leave-from {
  opacity: 1;
  transform: translateY();
} */
.modal-leave-active {
  animation: disapear 0.5s ease-out forwards;
}

/* .modal-leave-to {
  opacity: 0;
 transform: translateY(-30px);
} */
</style>
