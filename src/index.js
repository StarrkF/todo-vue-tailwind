import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './assets/index.css'
import Todo from './pages/Todo.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const app = createApp({})
app.component('theme-switcher', ThemeSwitcher)
app.component('Todo', Todo)
app.mount('#app')