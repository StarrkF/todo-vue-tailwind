<script setup>
import ThemeSwitcher from './components/ThemeSwitcher.vue';
</script>

<template>
    <div class="mt-4 flex justify-end">
        <theme-switcher></theme-switcher>
    </div>

    <router-view></router-view>
</template>