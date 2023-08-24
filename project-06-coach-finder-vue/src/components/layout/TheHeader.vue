<template>
  <header class="the-header">
    <nav>
      <router-link to="/"><h1>Find a Coach</h1></router-link>
      <ul>
        <li><router-link to="/coaches">All Coaches</router-link></li>
        <li><router-link to="/requests">Requests</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@import "../../styles/header.css";
</style>
