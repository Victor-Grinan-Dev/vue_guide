<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>
<style scoped>
dialog {
  margin: 0;
  position: fixed;
  top: 20vh;
  left: 25%;
  width: 50%;
  z-index: 1;
}
</style>
