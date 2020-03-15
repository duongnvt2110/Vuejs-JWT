
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Login from '@/pages/auth/Login'
import Register from '@/pages/auth/Register'
import Dashboard from '@/components/Dashboard'

// Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/Register',
      name: 'register',
      component: Register
    },
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true
      }
    }
  ],
  mode: 'history',
  history: true
})
