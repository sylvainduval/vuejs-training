import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Product from '@/views/Product.vue'
import UserProfile from '@/views/UserProfile.vue'
import { createRouter, createWebHistory } from 'vue-router';

//Vue.use(VueRouter); //equivalent dans createApp(App).use(router).mount('#app') de main.js

const routes = [
    {
        path: '/', 
        name: 'home', 
        component: Home
    },
    {
        path: '/contact', 
        name: 'contact', 
        component: Contact
    },
    {
        path: '/user-profile', 
        name: 'userProfile', 
        component: UserProfile,
        beforeEnter: (to, from, next) => {
            if (isUserAuthenticated()) {
                next();
            } else {
                next({name: 'home'});
            }
        }
    },
    {
        path: '/produit/:id(\\d+)', 
        name: 'product', 
        component: Product
    },
]

function isUserAuthenticated() {
    //Rechercher dans le store
    return true;
}

const router = createRouter({
    history: createWebHistory(/*process.env.BASE_URL*/ '/'),
    routes,
});

export default router;