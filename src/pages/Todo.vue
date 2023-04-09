<script setup>
import { onMounted, reactive, ref, toRaw, watchEffect } from 'vue';
import useCrud from '../scripts/crud';
import BasicCard from '../components/BasicCard.vue';
import Datatable from '../components/datatable.vue';
import ToggleSwitch from '../components/ToggleSwitch.vue';
import CustomButton from '../components/CustomButton.vue';
import BaseInput from '../components/BaseInput.vue';

const { index, show, store, update, destroy } = useCrud()

const head = ref(['Id', 'Goal', 'Status', 'Action'])
const data = ref()
const goal = ref()
const todo = ref({
    id: null,
    goal: null,
    status: null,
})
const storeArea = ref(true)
const editArea = ref(false)

const getData = () => {
    data.value = index()
}

const storeTodo = () => {
    let storeTodo = {
        goal: goal.value,
        status: false
    }
    store(storeTodo)
    goal.value = null
    getData()
}

const deleteTodo = (id) => {
    if (confirm('Are you sure you want to delete this todo?')) {
        destroy(id)
        getData()
    }
}

const showTodo = (id) => {
    storeArea.value = false
    editArea.value = true
    todo.value = show(id)

}

const updateTodo = () => {
    update(todo.value.id, toRaw(todo.value))
    cancel()
    getData()
}

const updateStatus = (id) => {
    todo.value = show(id)
    todo.value.status = !todo.value.status
    updateTodo()
}

const cancel = () =>{
    Object.keys(todo.value).forEach(key => {
        todo.value[key] = null;
    });
    editArea.value = false
    storeArea.value = true
}

watchEffect(() => {
    getData()
})


</script>

<template>
    <basic-card title="Todo App" class="mt-12" :glow="true" header="text-center">

        <div v-show="storeArea" class="flex flex-col sm:flex-row mb-6">
            <base-input label="Save Goal" class="max-w-6xl" v-model="goal"></base-input>
            <custom-button color="btn-theme" class="flex-1 mt-4 sm:mt-0 ml-0 sm:ml-4"  @click="storeTodo">Add Todo</custom-button>
        </div>

        <div v-show="editArea" class="flex flex-col sm:flex-row mb-6">
            <base-input label="Edit Goal" class="max-w-6xl" v-model="todo.goal"></base-input>
            <custom-button color="btn-secondary" class="flex-1 mt-4 sm:mt-0 ml-0 sm:ml-4" @click="updateTodo">Save</custom-button>
            <custom-button color="btn-danger" class="flex-1 mt-4 sm:mt-0 ml-0 sm:ml-4" @click="cancel">Cancel</custom-button>
        </div>

        <div class="overflow-y-auto max-h-[37rem] sm:max-h-full">
            <datatable :head="head">
            <tr v-for="item in data" class="tr-body" :class="{'tr-completed': item.status}">
                <td>{{ item.id }}</td>
                <td class="w-2/3">{{ item.goal }}</td>
                <td>
                    <toggle-switch v-model="item.status" @change="updateStatus(item.id)"></toggle-switch>
                </td>
                <td class="flex flex-col md:flex-row">
                    <custom-button  @click="showTodo(item.id)">Update</custom-button>
                    <custom-button class="mt-4 md:mt-0 ml-0 sm:ml-4" color="btn-danger" @click="deleteTodo(item.id)">Delete</custom-button>
                </td>
            </tr>
        </datatable>
        </div>
        
    </basic-card>
</template>
