<script setup>
import { onMounted, ref } from "vue";
import ToggleSwitch from "./ToggleSwitch.vue";

const theme = ref(localStorage.getItem('theme') === 'dark');
const htmlTag = document.documentElement;

const changeTheme = () => {
    if (theme.value) {
        htmlTag.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmlTag.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
    console.log(theme.value)
}

onMounted(() => {
    if (theme.value) {
        htmlTag.classList.add('dark');
    }
})

</script>

<template>
    <toggle-switch v-model="theme" @change="changeTheme" color="theme" label="Change Theme"/>
</template>