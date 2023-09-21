<template>
  <section class="container">
    <h1>Using Ref Vue:</h1>
    <h2>{{ user1.name }}</h2>
    <h3>{{ user1.age }}</h3>
  </section>
  <section class="container">
    <h1>Using Reactive Vue:</h1>
    <h2>{{ user2.name }}</h2>
    <h3>{{ user2.age }}</h3>
  </section>
  <section class="container">
    <h1>Transformed Reactive to Ref:</h1>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
import { ref, reactive, isRef, isReactive, toRefs } from 'vue';
export default {

  setup(){
    //Use it to access primitive data
    const user1 = ref({
      name:'Maximilian',
      age:31
    });

    setTimeout(()=>{
      user1.value.name = 'Max',
      user1.value.age = 32
    },2000);

    const user2 = reactive({
      name:'victor',
      age:39
    });

    //reactive allow you to access the value name directly
    //Use it to reference objects
    setTimeout(()=>{
      user2.name = 'Vitisman',
      user2.age = 40
    },2000);

    console.log('ref:', user1);
    console.log('reactive:', user2);
    console.log('isRef:', isRef(user1));
    console.log('isReactive:', isReactive(user2));
    console.log('isReactive:', isReactive(user2));

    //turning reactive to ref allows you to acces the reactive data as a ref
    const user2toRef = toRefs(user2);

    return {
      user1:user1,
      user2:user2,
      userName:user2toRef.name,
      age:user2toRef.age
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>