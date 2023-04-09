<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    glow: {
        type: Boolean,
        default: false
    },
    header: {
        type: String,
        default: ""
    },
    content: {
        type: String,
        default: ""
    },
})

</script>

<template>
   <div>
    <div class="card" :class="glow ? 'border-glow' : ''">
        <h5 class="card-header" :class="header">{{ title }}</h5>
        <div class="card-content" :class="content">
            <slot></slot>
        </div>
   </div>
</div>
</template>

<style scoped>
.card{
    @apply
    p-8
    m-4
    text-dark 
    bg-gradient-to-r from-gray-100 to-gray-300
    border-2
    rounded-lg
    dark:bg-gradient-to-r
    dark:from-gray-800 
    dark:via-gray-900 
    dark:to-black
    dark:border-black
    dark:text-light
    duration-500
}

.border-glow {
    @apply
    shadow-glow
    shadow-slate-400
    hover:shadow-slate-700
    hover:shadow-glow-xl
    dark:shadow-slate-400
}

.card-header{
    @apply
    mb-8
    text-3xl
    font-bold 
    tracking-tight 
    text-dark
    dark:text-light
}
</style>