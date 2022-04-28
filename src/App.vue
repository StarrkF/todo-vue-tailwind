<script setup>
import { ref } from "vue";

const title = ref("TODO APP");
const showUpdate = ref(false)
const showAdd = ref(true)
const items = ref([]);
const newTodo = ref(null);
const updateId=ref(null);
const updateTodo = ref(null);
const insert = () => {
  
    items.value.push({ todo: newTodo.value });
    newTodo.value = "";
  
};
const deleteItem = (index) => {
  items.value.splice(index, 1);
};

const getUpdate = (index) => {
  showAdd.value=false
  showUpdate.value=true
  updateTodo.value=items.value[index].todo
  updateId.value=index
}

const updateItem = ()=> {
  console.log(updateId.value)
  console.log(items.value)
  console.log(items.value[updateId.value])
  items.value[updateId.value].todo=updateTodo.value
  showAdd.value=true
  showUpdate.value=false
}
</script>

<template>
<div class="card">
    <div class="title">{{ title }}</div>
    <div class="add">

      <div v-show="showAdd">
        <input type="text" class="addInput" @keyup.enter="insert" v-model="newTodo" />
        <button class="addBtn btn-primary" @click="insert"><i class="fa-solid fa-plus"></i> Add </button>
      </div>

      <div v-show="showUpdate">
        <input type="text" class="addInput" @keyup.enter="insert" v-model="updateTodo" />
        <button class="addBtn btn-secondary" @click="updateItem"><i class="fa-solid fa-pen-to-square"></i> Update </button>
      </div>

      
      
      
    </div>
    <table class="table-auto" v-if="items.length">
      <thead>
        <tr>
          <th>Number</th>
          <th>To Do</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="({ todo }, index) in items" :key="index">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ todo }}</td>
            <td>
              <button class="btn btn-secondary" @click="getUpdate(index)">Update</button>
              <button class="btn btn-danger" @click="deleteItem(index)">Delete</button>  
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="text-xl text-slate-600 font-semibold text-center" v-else>
      Not Currently Any Todo
    </div>
  </div>
  
</template>



<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
  
</style>