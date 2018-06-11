<template>
  <div id="store">
    <v-header v-bind:seller="seller">
    </v-header>
    <div class="tap">
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/goods">商品</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/ratings">评价</router-link>
      </div>
      <div class="tap-item col-sm-4">
        <router-link active-class="active-style" to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 商店界面顶部路由 -->
    <router-view v-bind:seller="seller"></router-view>
  </div>
</template>

<script>
import header from "../header/header.vue";
export default {
  data() {
    return {
      seller: {},
      sellersData: {}
    };
  },
  // props: {
  //   sellersData: {  //接收父组件takeaway传过来的商家信息
  //     type: Object
  //   }
  // },
  created: function() {
    // this.sellersData = this.$route.params.sellersData;
    // this.seller = this.sellersData.seller

    this.seller = this.$route.params.seller;
    this.$axios
      .get("/api/seller", { id: 123 })
      .then(res => {
        this.seller = res.data.data;
        // console.log("this.seller: " + this.seller);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  components: {
    name: "App",
    "v-header": header
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.tap {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  justify-content: space-around;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);

  .tap-item {
    text-align: center;
    display: block;

    .tap-item a {
      text-decoration: none;
    }

    .active-style {
      color: red !important;
      font-weight: bold;
      text-decoration none
    }
  }
}
</style>
