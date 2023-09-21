<template>
    <div>
        <h1>Using props</h1>
        <h2>{{ username }}</h2>
        <h3>{{ age }}</h3>
        <slot></slot>
    </div>
    <div>
        <h1>Provide-inject</h1>
        <h3>{{ age2 }}</h3>
    </div>
</template>

<script>
import { computed, inject } from 'vue';
export default{
    props:['firstname', 'lastname', 'age'],
    setup(props, context){
        const username = computed(()=> {
            return props.firstname + ' ' + props.lastname;
        })

        console.log(context); //context.emit('save-data');

        const age2 = inject('userAge');

        return {
            username,
            age2,
        }
    }
    // computed:{
    //     username(){
    //         return this.firstname + ' ' + this.lastname
    //     }
    // }
}
</script>