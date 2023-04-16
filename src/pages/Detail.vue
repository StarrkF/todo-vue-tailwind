<script setup>
import { useRoute } from 'vue-router';
import useCrud from '../scripts/crud';
import { watchEffect, ref } from 'vue';
import CustomButton from '../components/CustomButton.vue';
import BasicCard from '../components/BasicCard.vue';

const route = useRoute()
const id = parseInt(route.params.id) 
const { show } = useCrud()
const todo = ref(null)

const getTodo =  () => {
    todo.value =  show(id)
}


watchEffect(() => {
    getTodo()
})

</script>

<template>
    <div class="text-white">
      <h1>{{ todo.id }}</h1>
      <h1>{{ todo.goal }}</h1>
      <h1>{{ todo.status }}</h1>
    </div>
</template>