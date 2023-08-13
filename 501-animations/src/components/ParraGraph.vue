<template>
  <div class="container view">
    <p>Lorem ipsum</p>
    <transition
      name="para"
      @before-enter="console.log('before enter')"
      @enter="console.log('enter')"
      @after-enter="console.log('after enter')"
      @before-leave="console.log('before leaves')"
      @leave="console.log('leave')"
      @after-leave="console.log('after leave')"
    >
      <p v-if="parraIsVisible">{{ text }}</p>
    </transition>
    <button @click="toggleParragraph">Toggle Parragraph</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parraIsVisible: true,
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dignissimos
        tenetur repellendus. Exercitationem inventore voluptatem dolore
        voluptates.`,
    };
  },
  methods: {
    toggleParragraph() {
      console.log("click");
      this.parraIsVisible = !this.parraIsVisible;
    },
  },
};
</script>
<style scoped>
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
</style>
