<script setup>
import CustomButton from '../components/CustomButton.vue';
import BasicCard from '../components/BasicCard.vue';

const click = () => {
    console.log("Click")
}
</script>

<template>
    <basic-card title="Card Header 1" class="mt-20">
        <custom-button class="mx-2" @click="click">Primary</custom-button>
        <custom-button class="mx-2" color="btn-secondary" @click="click">Seconndary</custom-button>
        <custom-button class="mx-2" color="btn-success" @click="click">Success</custom-button>
        <custom-button class="mx-2" color="btn-danger" @click="click">Danger</custom-button>
        <custom-button class="mx-2" color="btn-theme" @click="click">Theme</custom-button>
    </basic-card>
    <basic-card title="Card Header 2" class="mt-20" :glow="true">
        <basic-card>
            <custom-button class="mx-2" @click="click">Primary</custom-button>
            <custom-button class="mx-2" color="btn-secondary" @click="click">Seconndary</custom-button>
            <custom-button class="mx-2" color="btn-success" @click="click">Success</custom-button>
            <custom-button class="mx-2" color="btn-danger" @click="click">Danger</custom-button>
            <custom-button class="mx-2" color="btn-theme" @click="click">Theme</custom-button>
        </basic-card>
    </basic-card>
</template>