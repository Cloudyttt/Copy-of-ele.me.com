// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './router';
import VueRouter from "vue-router";
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import "./assets/js/iconfont.js";
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'

import takeaway from './components/takeaway/takeaway.vue'
import discover from './components/discover/discover.vue'
import order from './components/order/order.vue'
import user from './components/user/user.vue'
import store from './components/store/store.vue'

import axios from "axios";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

// 1. 定义（路由）组件。
// 2. 定义路由
// 每个路由应该映射一个组件。
const routes = [{
    path: "/takeaway",
    component: takeaway,
  },
  {
    path: "/store",
    component: store,
    children: [{
      path: "/goods",
      component: goods
    }, {
      path: "/ratings",
      component: ratings
    }, {
      path: "/seller",
      component: seller,
    }]
  },
  {
    path: "/order",
    component: order,
  },
  {
    path: "/user",
    component: user,
  }
];
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes: routes // （缩写）相当于routes
});
// 4. 创建和挂载根实例。
// 通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  components: {
    App
  },
  template: "<App/>"
});
