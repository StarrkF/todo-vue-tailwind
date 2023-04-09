<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: Boolean,
    },
    color: {
        type: String,
        default: 'primary',
    }
})

const emits = defineEmits(['update:modelValue']);
const onInput = (value) => {
    emits('update:modelValue', value);
};
</script>

<template>
    <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" class="sr-only peer" :value="modelValue" :checked="modelValue" @input="onInput($event.target.checked)"
            @change="onClick">
        <div class="toggle-switch" :class="'toggle-' + color">
        </div>
        <span v-show="label" class="ml-3 text-sm font-medium text-dark dark:text-light">{{ label }}</span>
    </label>
</template>

<style scoped>
.toggle-switch {
    @apply
    w-11 
    h-6 
    rounded-full 
    peer-checked:after:translate-x-full 
    after:content-[''] 
    after:absolute 
    after:top-[2px] 
    after:left-[2px]  
    after:border 
    after:rounded-full 
    after:h-5 
    after:w-5 
    after:transition-all
}
.toggle-primary {
    @apply
    bg-red-600
    peer-checked:bg-green-600
    after:bg-white
    after:border-gray-400
    shadow-md
    shadow-red-500
    peer-checked:shadow-green-500
}

.toggle-theme {
    @apply
    bg-slate-700
    peer-checked:bg-slate-50
    after:bg-light
    after:border-gray-300
    shadow-md
    shadow-slate-800
    peer-checked:shadow-slate-50
    peer-checked:after:bg-dark
}
</style>