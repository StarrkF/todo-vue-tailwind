<script setup>
import { ref , onMounted } from "vue";

const title = ref("TODO APP");
const showUpdate = ref(false)
const showAdd = ref(true)
const items = ref({});
const newTodo = ref(null);
const updateId=ref(null);
const updateTodo = ref(null);

onMounted(() => {
    items.value = {
      
    }
})

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

const check = (e,index)=> {
  if(e.target.checked)
  {
    console.log('checked')
    console.log(index)
    items.value[index].status=true
  }
  else
  {
    console.log('unchecked')
    console.log(index)
    items.value[index].status=false
  }
}

// const getTodos = () =>{
//   let response= axios.get('http://localhost:8000/api/todos/1')
//      console.log(response.data.data)
  
// }

//  const getTodos = async () => {
//         let response= await axios.get('http://localhost:8000/api/todos/3')
//         items.value=response.data.data
//     }


//   onMounted(getTodos())


</script>

<template>






<div class="card">
  <!-- {{items}} -->
  <button class="btn btn-primary" @click="getTodos">Ekle</button>
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
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="({ todo, status }, index) in items" :key="index">
          <tr>
            <td>{{ index + 1 }}</td>
            <td>{{ todo }}</td>
            <td>
              <label class="relative">
                <input type="checkbox" :checked="status" class="toggle sr-only peer" @change="check($event,index)"/>
                <span class="switch"></span>
              </label>
            </td>
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