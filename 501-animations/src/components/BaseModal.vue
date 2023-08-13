<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>

  <transition name="modal">
    <dialog open v-if="open">
      <slot></slot>
    </dialog>
  </transition>
</template>

<script>
export default {
  emits: ["close"],
  props: ["open"],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  position: fixed;
  top: 30%;
  width: 35vw;
  min-width: 275px;
  max-width: 400px;
  left: 50%;
  transform: translate(-50%);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: apear 0.5s ease-out forwards; */
  /* opacity: 0; */
}

@keyframes apear {
  from {
    opacity: 0;
    transform: translateY(-50px) translateX(-50%) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) translateX(-50%) scale(1);
  }
}
@keyframes disapear {
  from {
    opacity: 1;
    transform: translateY(0) translateX(-50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(50px) translateX(-50%) scale(0.9);
  }
}

.modal-enter-active {
  animation: apear 0.5s ease-out;
}
.modal-leave-active {
  animation: apear 0.5s ease-out reverse;
  /* animation: disapear 0.5s ease-out; */
}
</style>
