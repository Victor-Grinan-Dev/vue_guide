<template>
  <div class="modal">
    <dialog open>
      <div @click="$emit('close-dialog')">
        <header>
          <slot name="header">
            <h2>{{ title }}</h2>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu>
          <slot name="actions">
            <base-button @click="$emit('close-dialog')">close</base-button>
          </slot>
        </menu>
      </div>
    </dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: false },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: white;
}

header {
  background-color: #3a0061;
  color: white;
  width: 100%;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
