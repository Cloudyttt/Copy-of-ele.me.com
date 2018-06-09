import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'
import takeaway from '../components/takeaway/takeaway.vue'
import discover from '../components/discover/discover.vue'
import order from '../components/order/order.vue'
import user from '../components/user/user.vue'
import store from '../components/store/store.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    redirect: 'takeaway'
  },
  {
    path: "/takeaway",
    name: 'takeaway',
    component: takeaway,
  }, {
    path: "/discover",
    name: 'discover',
    component: discover
  }, {
    path: "/order",
    name: 'order',
    component: order,
  }, {
    path: "/user",
    name: 'user',
    component: user,
  }, {
    path: "/store/:data",
    name: 'store',
    component: store,
    children: [{
      // /:goodsdata
      path: "/goods",
      name: 'goods',
      component: goods
    }, {
      // /:ratingsdata
      path: "/ratings",
      name: 'ratings',
      component: ratings
    }, {
      // /:sellerdata
      path: "/seller",
      name: 'seller',
      component: seller,
    }]
  }
]
})
