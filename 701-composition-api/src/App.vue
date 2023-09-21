<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3>
    <button @click='setNewData'>Change age</button>

  </section>
  <section class="container">
    <h4>{{ fullname }}</h4>
    <div>
        <input type="text" placeholder='Firstname' @input='setFirstName'>
        <!--<input type="text" placeholder='Lastname' v-model='firstname'>-->
        <input type="text" placeholder='Lastname' v-model='lastname'>
    </div>
  </section>
  <section class="container">
            <p>{{ lastNameRef }}</p> 
            <input type="text" placeholder='Lastname ref' ref='lastNameInput'>
            <button @click='setLastName'>set last name ref</button>
  </section>
   <section class="container">
    <user-data :firstname='firstname' :lastname='lastname' :age='age2'/>
   </section>
   <section class="container">
    <life-cicle />
   </section>

</template>

<script>
import { ref, reactive, toRefs, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
import LifeCicle from './components/LifeCicle.vue';
export default {
  components:{
  UserData,
  LifeCicle,
  },
  setup(){
    const user = reactive({
      name:'victor',
      age:39
    });

    const uAge = ref(40);
    const uName = ref('Victor');
    
    const firstname = ref('');
    const lastname = ref('');

    const lastNameRef = ref('lastName ref');
    const lastNameInput = ref('');

    function setFirstName(e){
      firstname.value = e.target.value || "";
    }

    const fullname = computed(()=>{
      //computed ref are read only
      {
        return firstname.value + ' ' + lastname.value;
      }
    })

    setTimeout(()=>{
      user.name = 'Vitisman',
      uName.value = 'Vitisman',
      user.age = 40
    },2000);

    const setNewData = () => {
      user.age += 1;
      uAge.value += 1;
    }

    function setLastName (){
      lastNameRef.value = lastNameInput.value.value;
    }

    const user2toRef = toRefs(user);

    watch([uAge, uName], (newValue, oldValue) => {
      //doesnt work with reactive
      console.log('new user:', newValue);
      console.log('old user:', oldValue);
    });


    /* PROPS */

    const username = ref('props username');
    const age2 = ref(25);


    /* PROVIDE */
    provide('userAge', uAge);

    return {
      user,
      userName:user2toRef.name,
      age:user2toRef.age,
      setNewData:setNewData,
      setFirstName,
      firstname,
      lastname,
      fullname,
      setLastName,
      lastNameRef,
      lastNameInput,
      username,
      age2,
      
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