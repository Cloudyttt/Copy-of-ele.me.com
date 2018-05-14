<template>
  <div id="app">
    <div class="tap">
        <!-- 使用 router-link 组件来导航.
        通过传入 `to` 属性指定链接.
        <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <div class="tap-item col-sm-4">
        <div tap-temp>
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-changyonglogo40"></use>
          </svg> -->
          <router-link active-class="active-style" to="/takeaway">外卖</router-link>
        </div>
      </div>
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/discover">发现</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/order">订单</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/user">我的</router-link>
      </div>
    </div>
    <router-view v-bind:store="store"></router-view>
  </div>
</template>

<script>
// import header from './components/header/header.vue'
import store from './components/store/store.vue'
export default{
  data () {
    return {
      seller: {},
      store: {},
      takeaway: {}
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
    // 'v-header': header,
    'v-store': store,
  },
}
</script>

<style>
  a{
    color: rgb(147, 153, 159);
  }
  a,img,span{
    margin: 0;
    padding: 0;
  }
  .icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
  }
  .tap{
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 57px;
    line-height: 57px;
    justify-content: space-around;
    background-color: f3f5f7;
    box-shadow:0px -2px 5px #cccccc;
    -webkit-box-shadow:0px -2px 5px #cccccc;
  }
  .tap-item{
    text-align: center;
    display: block;
  }
  .tap-item a{
    text-decoration: none;
  }
  .active-style{
    color: rgb(0, 160, 220) !important;
    font-weight:bold;
  }
  .tap-temp{
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

</style>
