<template>
  <div id="app">
    <v-header v-bind:seller="seller">
    </v-header>
    <div class="tap">
      <div class="tap-item col-sm-4">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link active-class="active-style" to="/goods">商品</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/ratings">评价</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default{
  data () {
    return {
      seller: {}
    }
  },
  created: function() {
    this.$axios.get("/api/seller",{"id":123})
    .then(res=>{
      this.seller = res.data.data;
      console.log('this.seller: ' + this.seller);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  components: {
    name: 'App',
    'v-header': header,
  },
}
</script>

<style>
  .tap{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    justify-content: space-around;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  }
  .tap-item{
    text-align: center;
    display: block;
  }
  .tap-item a{
    text-decoration: none;
  }

  /* .tap-item a:focus{
    color: red;
    font-weight: 2;
  } */

  .active-style{
    color: red !important;
    font-weight:bold;
  }
</style>
