// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueRouter from "vue-router";
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min.js";
import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  './common/stylus/index.styl';

Vue.use(ElementUI);

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

import { AlertPlugin, ToastPlugin } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

import "./assets/js/iconfont.js";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.prototype.$axios = axios;

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  components: {
    App
  },
  template: "<App/>"
});
