<script setup>
const props = defineProps({
    head: {
        type:Object
    },
    bodyLength: {
        type: Number,
        default: 0
    }
})

</script>

<template>
   
<div class="table-responsive">
    <table class="table-auto h-full">
        <thead>
            <tr class="dark:bg-slate-800 dark:border-b-slate-600 bg-light border-b-2">
                <th v-for="item in head" scope="col">{{ item }}</th>
            </tr>
        </thead>
        <tbody>
            <!-- <tr v-for="(item, index) in body" class="bg-white border-b dark:bg-slate-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800">
                <td v-for="(value, key) in item" :key="key">{{ value }}</td>
            </tr> -->
            <slot></slot>
        </tbody>
    </table>
</div>

</template>

<style>

.table-responsive {
    @apply
    relative overflow-x-auto sm:rounded-lg
}

table {
    @apply
    text-center w-full text-sm text-dark dark:text-light shadow-glow  shadow-neutral-200 dark:shadow-dark 
}

thead {
    @apply
     text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
}
.tr-body {
    @apply
    bg-white border-b dark:bg-slate-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800 duration-300
}

.tr-completed {
    @apply
    bg-slate-200
    hover:bg-slate-300
    border-b-slate-300    
    dark:bg-gray-800
    dark:hover:bg-gray-700
    dark:border-gray-700
}

.tr-selected {
    @apply
    bg-slate-300
    hover:bg-slate-400
    border-b-slate-400    
    dark:bg-gray-700
    dark:hover:bg-gray-600
    dark:border-gray-600
}

th {
    @apply
    px-6 py-3
}


td {
    @apply
    px-6 py-4
}
</style>

