<script setup>

const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    glow: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
   <div>
    <div class="card" :class="glow ? 'border-glow' : ''">
        <h5 class="card-header">{{ title }}</h5>
        <div class="card-content">
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
    bg-slate-100 
    border-2
    rounded-lg
    dark:bg-slate-700 
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