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
import LandlordProfile from "@/views/LandlordProfile.vue";
import AdminDashboard from "@/views/admin/Dashboard.vue";
import AdminProperties from "@/views/admin/Properties.vue";
import AdminLandlords from "@/views/admin/Landlords.vue";
import AdminLeads from "@/views/admin/Leads.vue";
import AdminReports from "@/views/admin/Reports.vue";

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
    {path: '/landlord/:slug', name:'LandlordProfile', component: LandlordProfile},
    {path: '/admin', redirect: '/admin/dashboard'},
    {path: '/admin/dashboard', name:'AdminDashboard', component: AdminDashboard, meta: { title: 'Dashboard' }},
    {path: '/admin/properties', name:'AdminProperties', component: AdminProperties, meta: { title: 'Properties' }},
    {path: '/admin/landlords', name:'AdminLandlords', component: AdminLandlords, meta: { title: 'Landlords' }},
    {path: '/admin/leads', name:'AdminLeads', component: AdminLeads, meta: { title: 'Leads' }},
    {path: '/admin/reports', name:'AdminReports', component: AdminReports, meta: { title: 'Reports' }},
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

router.beforeEach((to, from, next) => {
    const isAdminRoute = to.path.startsWith('/admin')
    const isAdminAuthenticated = localStorage.getItem('ch_admin_authenticated') === 'true'
    const isUserAuthenticated = localStorage.getItem('ch_user_authenticated') === 'true'
    const isAuthenticated = isAdminAuthenticated || isUserAuthenticated

    if (isAdminRoute && !isAdminAuthenticated) {
        next('/login')
        return
    }

    if (to.path === '/login' && isAuthenticated) {
        if (isAdminAuthenticated) {
            next('/admin/dashboard')
            return
        }

        if (isUserAuthenticated) {
            next('/buy')
            return
        }
    }

    next()
})

export default router