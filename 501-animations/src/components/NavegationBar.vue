<template>
  <div class="nav">
    <router-link to="/">Users</router-link>
    <router-link to="/goals">Goals</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/squares">Squares</router-link>
    <router-link to="/parragraph">Parragraph</router-link>
  </div>
</template>
<style scoped>
.nav {
  max-width: 40rem;
  margin: 2rem auto;

  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;

  display: flex;
  justify-content: space-around;

  width: 85%;
  min-width: 200px;
  max-width: 600px;
}
a {
  text-decoration: none;
  color: azure;
  padding: 0 5px;
  border-radius: 3px;
}
a:hover,
a:focus {
  background-color: #810032;
  color: azure;
}
</style>
