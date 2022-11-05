import VueRouter from 'vue-router';
import routes from './routes.js'
// import store from './../store'

const router = new VueRouter({
    mode: 'history',
    hash: false,
    routes,
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
        if (to.matched.some(route => route.meta.guard === 'guest')) next({ name: 'ExampleComponent' })
        else next();
    } else {
        if (to.matched.some(route => route.meta.guard === 'auth')) next({ name: 'Login' })
        else next();
    }
})

export default router;
