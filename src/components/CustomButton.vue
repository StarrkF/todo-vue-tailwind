<script setup>

const props = defineProps({
    color: {
        type: String,
        default: "btn-primary"
    }
})

</script>

<template>
     <button class="btn" :class="color">
         <slot></slot>
     </button>
</template>

<style scoped>
.btn {
    @apply
    w-full
    py-2 px-4
    shadow-md
    rounded-2xl
    duration-300
    active:scale-110
    hover:scale-105
    hover:shadow-lg
    text-white
    font-medium
  }

  .btn-primary{
      @apply
      bg-gradient-to-r
      from-cyan-500
      to-sky-700
      shadow-sky-500
      hover:shadow-sky-600
  }

  .btn-secondary{
      @apply
      bg-gradient-to-r
      from-amber-500
      to-orange-700
      shadow-amber-700
      hover:shadow-amber-700
  }
  .btn-success{
    @apply
    bg-gradient-to-r
    from-emerald-400
    to-green-700
    shadow-emerald-500
    hover:shadow-emerald-600
}
.btn-danger{
    @apply
    bg-gradient-to-r
    from-rose-500
    to-red-800
    shadow-rose-700
    hover:shadow-rose-700
}
.btn-theme{
    @apply
    bg-gradient-to-r
    from-slate-700
    to-slate-800
    shadow-slate-800
    hover:shadow-slate-800

    dark:bg-gradient-to-r
    dark:from-slate-200
    dark:to-slate-400
    dark:shadow-slate-200
    dark:hover:shadow-slate-200
    dark:text-slate-800
}

</style>