import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 路由懒加载
const HelloWorld = () => import('../components/HelloWorld')
const Detail = () => import('../components/detail')
const color = () => import('../components/color')
const Img = () => import('../components/Img')
const Question = () => import('../components/question')
const Carsystem = () => import('../components/Carsystem')
const Login = () => import('../components/login')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/helloword',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/color',
      name: 'color',
      component: color
    }, {
      path: '/img',
      name: 'Img',
      component: Img
    }, {
      path: '/question',
      name: 'Question',
      component: Question
    }, {
      path: '/carsystem',
      name: 'Carsystem',
      component: Carsystem
    }, {
      path: '*',
      redirect: '/login'
    }
  ]
})

// 全局导航守卫

router.beforeEach((to, from, next) => {
  let login = window.localStorage.getItem('login')
  if (!login && to.path != '/login') {
    console.log('123')
    next('/login')
  }
  next()
})

router.afterEach((to, from) => {
  console.log('路由跳转……')
})

export default router
