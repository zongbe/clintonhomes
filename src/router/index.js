import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/components/Login.vue";
import Buy from "@/components/Buy.vue";
import PropertyDetails from "@/views/PropertyDetails.vue";
import Help from "@/views/Help.vue";
import Advertise from "@/views/Advertise.vue";
import Sell from "@/views/Sell.vue";
import Rent from "@/views/Rent.vue";
import Lease from "@/views/Lease.vue";
import CoLiving from "@/views/CoLiving.vue";

const routes = [
    {path: '/', name:'Home', component: Home},
    {path: '/login', name:'Login', component: Login},
    {path: '/buy', name:'Buy', component: Buy},
    {path: '/help', name:'Help', component: Help},
    {path: '/advertise', name:'Advertise', component: Advertise},
    {path: '/sell', name:'Sell', component: Sell},
    {path: '/rent', name:'Rent', component: Rent},
    {path: '/lease', name:'Lease', component: Lease},
    {path: '/co-living', name:'CoLiving', component: CoLiving},
    {path: '/properties/:slug', name:'PropertyDetails', component: PropertyDetails},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        return { top: 0 };
    },
})
export default router