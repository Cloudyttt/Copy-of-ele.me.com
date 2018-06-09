<template>
  <div id="app">
    <!-- <tabbar></tabbar> -->
    <!-- <div class="tab">
      <div class="tab-item col-sm-3">
        <router-link active-class="active-style" to="/takeaway">
          <div class="tab-route">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-changyonglogo40"></use>
            </svg>
            <span class="tab-title">外卖</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item col-sm-3">
        <router-link active-class="active-style" to="/discover">
          <div class="tab-route" >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-faxian"></use>
            </svg>
            <span class="tab-title">发现</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item col-sm-3">
        <router-link active-class="active-style" to="/order">
          <div class="tab-route">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dingdan"></use>
            </svg>
            <span class="tab-title">订单</span>
          </div>
        </router-link>
      </div>
      <div class="tab-item col-sm-3">
        <router-link active-class="active-style" to="/user">
          <div class="tab-route">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibiaoti2fuzhi12"></use>
            </svg>
            <span class="tab-title">我的</span>
          </div>
        </router-link>
      </div>
    </div> -->
    <router-view v-bind:takeaway="takeaway"></router-view>
  </div>
</template>

<script>
// import header from './components/takeaway/takeaway'
// import store from "./components/store/store";
// import tabbar from './components/tabbar/tabbar';
export default {
  data() {
    return {
      seller: {},
      store: {},
      takeaway: {}
    };
  },
  // created: function() {
  //   this.$axios
  //     .get("/api/seller", { id: 123 })
  //     .then(res => {
  //       this.seller = res.data.data;
  //       console.log("this.seller: " + this.seller);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // },
  components: {
    name: "App",
    // 'v-header': header,
    // "v-store": store,
    // tabbar: tabbar
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
// a {
//   color: rgb(147, 153, 159);
//   text-decoration: none;
// }

// span, p, a, img, {
//   margin: 0;
//   padding: 0;
// }

// .tab {
//   z-index: 999;
//   position: fixed;
//   bottom: 0;
//   display: flex;
//   width: 100%;
//   height: 48px;
//   line-height: 48px;
//   justify-content: space-around;
//   box-shadow: 0px -1px 3px #dddddd;
//   -webkit-box-shadow: 0px -1px 3px #dddddd;
//   background-color: #ffffff;

//   .tab-item {
//     text-align: center;
//     display: block;
//     .tab-route {
//       display flex
//       flex-direction column
//       line-height 18px
//       padding-top 5px
//       .tab-title {
//         // position absolute
//         display: block;
//         margin: 0;
//         padding: 0;
//         width 28px
//         height 18px
//         font-size 11px;
//       }

//       .icon {
//         float top
//         display: block;
//         width: 1.8em;
//         height: 1.8em;
//         vertical-align: -0.15em;
//         fill: rgb(147, 153, 159);
//         /* overflow: hidden; */
//         margin: 0;
//         padding: 0;
//       }
//     }

//     .active-style {
//       color: rgb(0, 160, 220) !important;
//       font-weight: bold;

//       .icon {
//         fill: rgb(0, 160, 220) !important;
//       }
//     }
//   }
// }
</style>
