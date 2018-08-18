import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router/'
import iView from 'iview';
import store from './store/index'
import {routerMode} from './config/env'
import 'iview/dist/styles/iview.css';

// 路由
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {x: 0, y: to.meta.savedPosition || 0}
    }
  }
});

// iview
Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
});
