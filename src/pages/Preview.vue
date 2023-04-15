<script setup>
import useCrud from '../scripts/crud';
import { watchEffect, ref } from 'vue';
import CustomButton from '../components/CustomButton.vue';
import BasicCard from '../components/BasicCard.vue';

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
  console.log(1)
  if (selectedTodo.value.includes(id)) {
    selectedTodo.value = selectedTodo.value.filter(item => item !== id)
  } else {
    selectedTodo.value.push(id)
  }
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
      <div v-for="todo in todos" @click="toggleSelect(todo.id)"
        class="shadow-glow-sm dark:shadow-slate-300 shadow-slate-900 rounded-lg overflow-hidden hover:shadow-glow hover:dark:shadow-slate-200 hover:shadow-slate-900 hover:scale-105 duration-300"
        :class="{ 'selected-todo': selectedTodo.includes(todo.id) }">
        <div
          class="bg-transparent hover:cursor-pointer dark:border-4 min-h-full border-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <img class="w-full h-56 object-cover" src="https://img.freepik.com/premium-photo/new-planet_176100-157.jpg">
          <div class="p-6">
            <h2 class="text-2xl font-bold text-amber-600 dark:text-amber-300  mb-2">Todo {{ todo.id }}</h2>
            <p class="dark:text-light text-dark  mb-4">{{ todo.goal }}</p>
            <div class="flex justify-end">
              <a href="#"
                class="dark:text-light text-black font-semibold text-lg hover:text-blue-600 transition-colors duration-300">Preview</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </basic-card>
</template>

<style scoped>
.selected-todo {
  @apply 
  scale-110 
  shadow-glow-xl 
  dark:shadow-slate-300 
  shadow-slate-900
}
</style>
