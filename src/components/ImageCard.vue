<script setup>
import CustomButton from './CustomButton.vue';
const props = defineProps({
    image: {
        type: String,
        default: "https://img.freepik.com/premium-photo/new-planet_176100-157.jpg"
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    moreButton: {
        type: Object,
        default: {
            linkName: null,
            param: null,
            buttonName: null
        }
    },
})

</script>

<template>
    <div class="shadow-glow-sm dark:shadow-slate-300 shadow-slate-900 rounded-lg overflow-hidden hover:shadow-glow hover:dark:shadow-slate-200 hover:shadow-slate-900 hover:scale-105 duration-300">
        <div class="bg-transparent hover:cursor-pointer dark:border-4 min-h-full border-black rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img class="w-full h-56 object-cover" :src="image">
            <div class="p-6">
                <h2 class="text-2xl font-bold text-amber-600 dark:text-amber-300  mb-2">{{ title }}</h2>
                <p class="dark:text-light text-dark  mb-4">{{ content }}</p>
                <div class="flex mt-14 justify-end">
                     <router-link v-if="moreButton && moreButton.linkName" :to="{name: moreButton.linkName , params: {id: moreButton.param}}">
                         <custom-button color="btn-secondary">{{ moreButton.buttonName }}</custom-button>
                     </router-link> 
                </div>
            </div>
        </div>
    </div>
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