<template>
    <section>
        <p>composition api Life cycle</p>
    </section>
</template>
<script>
//LIFE CYCLE HOOKS
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue';
export default{
    setup(){
        
        onBeforeMount(()=>{
            console.log('onBeforeMount')
        })
        onMounted(()=>{
            console.log('onMounted')
        })
        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
        })
        onUpdated(()=>{
            console.log('onUpdated')
        })
        onBeforeUnmount(()=>{
            console.log('onBeforeUnmount')
        })
        onUnmounted(()=>{
            console.log('onUnmounted')
        })

        //setup replaces this two life cycle hooks
        //this will print first
        console.log('beforeCreated & created');

        return {

        }
    }
}
</script>