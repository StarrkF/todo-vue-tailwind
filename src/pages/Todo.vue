<script setup>
import { ref } from 'vue';
import BasicCard from '../components/BasicCard.vue';
import Datatable from '../components/datatable.vue';
import ToggleSwitch from '../components/ToggleSwitch.vue';
import CustomButton from '../components/CustomButton.vue';


const head = ref(['Id', 'Goal', 'Status', 'Action'])
const body = Array.from({ length: 10 }, (_, idx) => ({
    id: idx + 1,
    goal: `Lorem Ipsum Dolar Sit Amet ${idx + 1}`,
    status: Math.random() < 0.5 ? true : false,
}));

</script>

<template>
    <basic-card title="Todo App" class="mt-20" :glow="true" header="text-center">
        <datatable :head="head" :dataLength="body.length">
            <tr v-for="item in body" class="tr-body">
                <td>{{ item.id }}</td>
                <td>{{ item.goal }}</td>
                <td>
                    <toggle-switch v-model="item.status"></toggle-switch>
                </td>
                <td>
                    <custom-button>Update</custom-button>
                    <custom-button color="btn-danger">Delete</custom-button>
                </td>
            </tr>
        </datatable>
    </basic-card>
</template>