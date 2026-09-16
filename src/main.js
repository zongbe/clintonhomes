import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";

createApp(App).use(router).mount('#app')




// import { createRouter, createWebHistory } from 'vue-router'
// import Login from '@/components/Login.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'login',
//     component: Login
//   },
// ]

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// })

// export default router