<script setup>
import useCrud from '../scripts/crud';
import { watchEffect, ref } from 'vue';
import CustomButton from '../components/CustomButton.vue';
import BasicCard from '../components/BasicCard.vue';
import ImageCard from '../components/ImageCard.vue';

const { index, destroy } = useCrud()
const todos = ref()
const selectedTodo = ref([])

const getData = () => {
  todos.value = index()
}

const multipleDelete = () => {
  if (confirm('Are you sure you want to delete this todo?')) {
    selectedTodo.value.forEach(todo => {
      destroy(todo)
    })
    selectedTodo.value = []
    getData()
  }
}

const toggleSelect = (id) => {
  selectedTodo.value.includes(id) 
  ? selectedTodo.value = selectedTodo.value.filter(item => item !== id)
  : selectedTodo.value.push(id);
}

watchEffect(() => {
  getData()
})


</script>

<template>
  <div class="flex flex-col sm:flex-row justify-evenly">
    <div class="w-full sm:w-1/2 lg:w-1/4 my-5">
      <router-link to="/" scroll-behavior="smooth">
        <custom-button color="btn-theme">Return Back</custom-button>
      </router-link>
    </div>
    <div v-show="selectedTodo.length > 0" class="w-full sm:w-1/2 lg:w-1/4 my-5">
      <custom-button color="btn-danger" @click="multipleDelete">Delete Selected</custom-button>
    </div>
  </div>


  <basic-card title="Preview" class="mt-12" :glow="true" header="text-center">


    <div class="grid sm:mx-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-20">
      <image-card 
      v-for="todo in todos" 
      :title="'Todo '+ todo.id" 
      :content="todo.goal"
      :class="{ 'selected-todo': selectedTodo.includes(todo.id) }"
      />
    </div>
  </basic-card>
</template>