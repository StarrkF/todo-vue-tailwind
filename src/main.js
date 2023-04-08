import { createApp } from 'vue/dist/vue.esm-bundler.js'
import './assets/index.css'
import Todo from './pages/Todo.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const app = createApp({})
app.component('theme-switcher', ThemeSwitcher)
app.component('Todo', Todo)
app.mount('#app')




// import App from './App.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import './assets/index.css'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas);
// import { fab } from '@fortawesome/free-brands-svg-icons';
// library.add(fab);
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(far);
// import { dom } from "@fortawesome/fontawesome-svg-core";
// dom.watch();



// const app=createApp(App)
// app.component("font-awesome-icon", FontAwesomeIcon)
// app.use(VueAxios,axios)
// app.mount('#app')