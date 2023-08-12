<template>
  <div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">
        {{ animatedBlock ? "Turn off" : "Animate" }}
      </button>
    </div>
    <div class="container">
      <p>managing the css with js:</p>
      <transition
        name="jsCSS"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <div class="block2" v-if="isBlockVisible"></div>
      </transition>
      <button @click="toggleBlock">toggle block</button>
    </div>
    <div class="container">
      <!--  <p v-if="isUsersVisible">I'm the user</p>-->
      <transition name="buttons" mode="out-in">
        <button v-if="!isUsersVisible" @click="toggleUsers">show users</button>
        <button v-else @click="toggleUsers">Hide users</button>
      </transition>
    </div>

    <div class="container">
      <transition
        name="para"
        @before-enter="console.log('before enter')"
        @before-leave="console.log('before leaves')"
        @after-enter="console.log('after enter')"
        @enter="console.log('enter')"
        @leave="console.log('leave')"
        @after-leave="console.log('after leave')"
      >
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
      isBlockVisible: false,

      enterInterval: null,
      leaveInterval: null,
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

    toggleBlock() {
      this.isBlockVisible = !this.isBlockVisible;
    },
    beforeEnter(el) {
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },

    afterEnter(el) {
      console.log(el);
      el.style.opacity = 1;
    },
    leave(el, done) {
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.02;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log(el);
      el.style.opacity = 0;
    },
    //in order to override one animation and start the other animation
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
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
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 1s ease-out;
}
.block2 {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  opacity: 0;
  /* transition: opacity 3s ease-out; */
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
  transition: all 5s ease-out;
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
  transition: all 2s ease-out;
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
