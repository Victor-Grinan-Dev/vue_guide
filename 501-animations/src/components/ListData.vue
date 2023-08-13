<template>
  <div class="container view">
    <transition name="buttons" mode="out-in">
      <button v-if="!isUsersVisible" @click="toggleUsers">show users</button>
      <button v-else @click="toggleUsers">Hide users</button>
    </transition>

    <div v-if="isUsersVisible">
      <p>Click a user to remove it</p>
      <ul>
        <transition-group tag="ul" name="user-list">
          <li v-for="user in users" :key="user" @click="removeUser(user)">
            {{ user }}
          </li>
        </transition-group>
      </ul>

      <div>
        <input type="text" v-model="input" />

        <button @click="addUser">add user</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["el yoyo", "machete", "los anastacios", "el maestro"],
      input: "",
      isUsersVisible: false,
    };
  },
  methods: {
    addUser() {
      if (this.input) {
        this.users.unshift(this.input);
        this.input = "";
      }
    },
    removeUser(deleUser) {
      this.users = this.users.filter((user) => {
        return user !== deleUser;
      });
    },
    toggleUsers() {
      this.isUsersVisible = !this.isUsersVisible;
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
li {
  text-transform: capitalize;
  cursor: pointer;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1.5s ease-out;
}
.user-list-leave-from,
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1.5s ease-in;
  position: absolute;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.user-list-move {
  transition: transform 1s ease;
}

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
</style>
