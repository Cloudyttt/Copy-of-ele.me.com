<template>
  <div id="app">
    <v-header></v-header>
    <div class="tap">
      <div class="tap-item col-sm-4">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue'
export default{
  components: {
    name: 'App',
    'v-header' : header,
  },
  computed: {
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$taprouter.go(-1)
        : this.$taprouter.push('/')
    }
  }
}
</script>

<style>
  .tap{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    justify-content: space-around;
  }
  .tap-item{
    text-align: center;
  }
</style>
