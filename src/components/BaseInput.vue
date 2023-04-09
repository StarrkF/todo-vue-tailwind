<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        default: ""
    },
    label: {
        type: String,
        default: ""
    }
})

</script>

<template>
      <input class="form-input" type="text" :placeholder="label" 
      :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
       v-bind="$attrs">
</template>

<style scoped>
.form-input {
    @apply
    w-full
    py-3
    px-4
    border-2
    shadow-black
    border-slate-600
    outline-none
    rounded-2xl
    shadow-md
    focus:shadow-lg
    focus:shadow-black
    dark:bg-slate-800
    duration-300
}
</style>
