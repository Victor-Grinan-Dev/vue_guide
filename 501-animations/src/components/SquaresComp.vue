<template>
  <div class="view-row">
    <div class="container-row">
      <p>normal animation made with css</p>
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">
        {{ animatedBlock ? "Turn off" : "Animate" }}
      </button>
    </div>

    <div class="container-row">
      <p>managing the css with js:</p>
      <transition
        name="js-no-CSS"
        :css="false"
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      isBlockVisible: false,
      enterInterval: null,
      leaveInterval: null,
      animatedBlock: false,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleBlock() {
      console.log("click");
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
    beforeLeave(el) {
      console.log(el);
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
<style scoped>
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

.animate {
  animation: slide-fade 2s ease-in-out infinite;
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
