import App from '../App'


const vuex_test = r => require.ensure([], () => r(require('@/page/vuex-test/VuexTest')), 'vuex_test'); // vuex测试页
const index = r => require.ensure([], () => r(require('@/page/home/home')), 'index'); // 主页
const login = r => require.ensure([], () => r(require('@/page/login/login')), 'login'); // 登录
const register = r => require.ensure([], () => r(require('@/page/register/register')), 'register'); // 注册
const article = r => require.ensure([], () => r(require('@/page/article/article')), 'article'); // 文章
export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/index'
    },
    {
      path: '/vuex_test',
      component: vuex_test
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/article',
      component: article
    }
  ]
}]
