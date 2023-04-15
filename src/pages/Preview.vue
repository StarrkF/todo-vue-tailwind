<script setup>
import useCrud from '../scripts/crud';
import { watchEffect, ref } from 'vue';
import CustomButton from '../components/CustomButton.vue';
import BasicCard from '../components/BasicCard.vue';

const { index } = useCrud()
const todos = ref()
const getData = () => {
    todos.value = index()
}

watchEffect(() => {
    getData()
})


</script>

<template>
    <div class="w-96 my-10 mx-auto">
        <router-link to="/" scroll-behavior="smooth">
            <custom-button color="btn-theme">Return Back</custom-button>
        </router-link>
    </div>
 <basic-card title="Preview" class="mt-12" :glow="true" header="text-center">
  <div class="grid sm:mx-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-20 gap-y-10">
  <div v-for="todo in todos" class="shadow-glow-sm dark:shadow-slate-300 shadow-slate-900 rounded-lg overflow-hidden hover:shadow-glow hover:dark:shadow-slate-200 hover:shadow-slate-900 hover:scale-105 duration-300">
    <div class="bg-transparent dark:border-4 min-h-full border-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img class="w-full h-56 object-cover" src="https://img.freepik.com/premium-photo/new-planet_176100-157.jpg">
      <div class="p-6">
        <h2 class="text-2xl font-bold text-amber-600 dark:text-amber-300  mb-2">Todo {{ todo.id }}</h2>
        <p class="dark:text-light text-dark  mb-4">{{ todo.goal }}</p>
        <div class="flex justify-end">
          <a href="#" class="dark:text-light text-black font-semibold text-lg hover:text-blue-600 transition-colors duration-300">Preview</a>
        </div>
      </div>
    </div>
  </div>
</div>
 </basic-card>

  
</template>
