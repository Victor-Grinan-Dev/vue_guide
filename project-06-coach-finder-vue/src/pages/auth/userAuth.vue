<template>
  <base-card>
    <form class="">
      <div class="from-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" />
      </div>
      <div class="from-control">
        <label for="password">Password</label>
        <input type="password" id="password" />
      </div>
      <br />
      <base-button>Login</base-button>
      <base-button type="button" mode="flat">Signup instead</base-button>
    </form>
  </base-card>
</template>

<script>
export default {};
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
