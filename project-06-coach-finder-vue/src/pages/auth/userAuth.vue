<template>
  <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="from-control">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model="email" autocomplete="email"/>
        </div>
        <div class="from-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" autocomplete="password"/>
        </div>
        <br />
        <p v-if="!formIsValid">
          Please enter a valid email and/or a valid password ({{ charsLong }}
          chars long)
        </p>
        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button @click="switchMode" type="button" mode="flat"
          >{{ switchButtonCaption }} instead</base-button
        >
      </form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
      charsLong: 6,
      isLoading: false,
      error: null,
    };
  },
  computed: {
    submitButtonCaption() {
      return `${this.mode}`;
    },
    switchButtonCaption() {
      if (this.mode === "login") {
        return "signup";
      } else {
        return "login";
      }
    },
  },
  methods: {
    async submitForm() {
      if (this.email === "" || this.password.length < this.charsLong) {
        this.formIsValid = false;
        return;
      }

      this.isLoading = true;
      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        if (this.mode === "login") {
          await this.$store.dispatch("signin", actionPayload);
        } else {
          await this.$store.dispatch("signup", actionPayload);
        }
        // const redirectUrl = "/" + this.$route.query.redirect || "coaches"; //not working console.log(redirectUrl)
        const redirectUrl = "/coaches";
        
        this.$router.replace(redirectUrl);
        
      } catch (err) {
        this.error = err.message || "Failed to authenticate";
      }
      this.isLoading = false;
    },

    switchMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
      // console.log(this.mode) //ok
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: none;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
