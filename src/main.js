// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './router';
import VueRouter from "vue-router";
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min.js";
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
import axios from "axios";
Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.prototype.$axios = axios;

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
//const Goods = { template: "<div>Goods</div>" };
//const Ratings = { template: "<div>Ratings</div>" };
//const Seller = { template: "<div>Goods</div>" };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: "/goods", component: goods },
  { path: "/ratings", component: ratings },
  { path: "/seller", component: seller }
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes: routes // （缩写）相当于routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')
// 或者
// const app = new Vue({
//   el: "#app",
//   router
// });
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});