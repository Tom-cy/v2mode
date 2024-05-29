import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Layout from '@/layout'
// 我来演示下
const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: 'login',
        meta: {
          title: '考生个人中心'
        },
        component: () => import('@/views/percenter/login')
      },
      {
        path: 'register',
        meta: {
          title: '考生个人注册'
        },
        component: () => import('@/views/percenter/register')
      }
    ]
  },
  {
    path: '/table2',
    component: () => import('@/views/TableForm/table2')
  },
  {
    path: '/table1',
    component: () => import('@/views/TableForm/table1')
  },
  

  {
    path: '/examregis',
    component: Layout,
    children: [
      {
        path: 'register',
        meta: {
          title: '考试报名'
        },
        component: () => import('@/views/examregis/index')
      }
    ]
  },
  {
    path: '/examready',
    component: Layout,
    children: [
      {
        path: 'index',
        meta: {
          title: ''
        },
        component: () => import('@/views/examready/index')
      }
    ]
  },

  {
    path: '/teacenter',
    component: Layout,
    children: [
      {
        path: 'login',
        meta: {
          title: '教师能力认证个人中心'
        },
        component: () => import('@/views/teacenter/login')
      },
      {
        path: 'register',
        meta: {
          title: '教师注册'
        },
        component: () => import('@/views/teacenter/register')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
