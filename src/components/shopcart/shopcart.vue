<template>
    <div class="shopcart">
        <transition name="fold">
          <div class="shopcart-list" v-show="listShow" v-bind:class="{'showstyle': listShow}">
            <div class="list-header">
              <h1 class="title">购物车</h1>
              <span class="empty" v-on:click="empty">清空</span>
            </div>
            <div class="list-content" ref="listContent">
              <ul>
                <transition-group name="list-change" tag="p">
                  <li class="list-food" v-for="food in selectFoods" v-bind:key="food.name">
                    <span class="food-name">{{food.name}}</span>
                    <div class="price">
                      <span>￥{{food.price * food.count}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                      <cartcontrol v-bind:food="food"></cartcontrol>
                    </div>
                  </li>
                </transition-group>
              </ul>
            </div>
          </div>
        </transition>
        <div class="content">
            <div class="content-left"  v-on:click="toggleList">
                <div class="logo-wrapper">
                    <div class="logo" v-bind:class="{'highlight': totalCount>0}">
                        <span class="shopcart-logo" v-bind:class="{'highlight': totalCount>0}"></span>
                    </div>
                    <div class="food-num">{{totalCount}}</div>
                </div>
                <div class="price" v-bind:class="{'highlight': totalPrice>0}">￥{{totalPrice}}</div>
                <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay" v-bind:class="{'enough': totalPrice>=minPrice}" v-on:click="pay">{{payDesc}}</div>
            </div>
        </div>
        <transition name="mask-fade">
          <div class="list-mask" v-show="listShow" v-on:click="hideListMask"></div>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
import cartcontrol from "../cartcontrol/cartcontrol";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      fold: true
    };
  },
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total = total + food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count = count + food.count;
      });
      if (count > 99) {
        count = 99;
      }
      return count;
    },
    payDesc() {
      if (this.totalPrice === 0) {
        return "￥" + this.minPrice + "元起送";
      } else if (this.totalPrice < this.minPrice) {
        let diff = this.minPrice - this.totalPrice;
        return "还差￥" + diff + "元起送";
      } else {
        return "去结算";
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true;
        return false;
      }
      let show = !this.fold;
      console.log("show: " + show);
      if (show) {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.listContent, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      }
      return show;
    }
  },
  components: {
    cartcontrol: cartcontrol
  },
  methods: {
    toggleList() {
      if (!this.totalCount) {
        return;
      }
      this.fold = !this.fold;
    },
    empty() {
      this.selectFoods.forEach(food => {
        food.count = 0;
      });
    },
    pay() {
      if (this.totalPrice < this.minPrice) {
        return;
      }
      window.alert("支付" + this.totalPrice + "元");
    },
    hideListMask(){
      this.fold = true;
    }
  }
};
</script>

<style type="text/css">
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
.shopcart {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
  background: rgb(255, 255, 255);
}
.shopcart .content {
  display: flex;
  background: #141d27;
  font-size: 0;
  height: 48px;
}
.shopcart .content .content-left {
  flex: 1;
}
.content-left .logo-wrapper {
  display: inline-block;
  position: relative;
  top: -10px;
  margin: 0 12px;
  padding: 6px;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  border-radius: 50%;
  background: #141d27;
}
.content-left .logo-wrapper .logo {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #2b343c;
}
.logo.highlight {
  background: rgb(0, 160, 240) !important;
}
.logo .shopcart-logo {
  display: block;
  margin: auto;
  background-image: url("./shopcart_grey.png");
  height: 24px;
  width: 24px;
  background-size: 24px 24px;
  background-repeat: no-repeat;
}
.shopcart-logo.highlight {
  background-image: url("./shopcart_white.png") !important;
}
.logo-wrapper .food-num {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 16px;
  font-size: 9px;
  font-weight: 700;
  color: #ffffff;
  background: rgb(240, 20, 20);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}
.content-left .price {
  display: inline-block;
  margin-top: 12px;
  vertical-align: top;
  line-height: 24px;
  padding-right: 12px;
  box-sizing: border-box;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
}
.price.highlight {
  color: #ffffff !important;
}
.content-left .desc {
  display: inline-block;
  vertical-align: top;
  margin: 12px 0 0 12px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
}
.shopcart .content .content-right {
  flex: 0 0 105px;
  width: 105px;
}
.content-right .pay {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  font-weight: 700px;
  background: #2b333b;
  color: rgba(255, 255, 255, 0.4);
}
.pay.enough {
  background: #00b43c;
  color: #ffffff;
}
/* 底部购物车详细 */
.shopcart-list {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
.shopcart-list .list-header {
  height: 40px;
  line-height: 40px;
  padding: 0 18px;
  background: #f3f5f7;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.shopcart-list .list-header .title {
  float: left;
  font-size: 14px;
  color: rgb(7, 17, 27);
  line-height: 40px;
  font-weight: 200;
}
.shopcart-list .list-header .empty {
  float: right;
  font-size: 12px;
  color: rgb(0, 160, 220);
}
/* 底部购物车信息栏过渡效果 */
.fold-enter-active {
  transition: all 0.5s ease;
}
.fold-leave-active {
  transition: all 0.3s ease;
}
/* .fold-leave, .fold-enter-to{
  transform: translate3d(0, -100%, 0);
} */
.fold-enter-to,
.fold-leave {
  transform: translate3d(0, 0, 0);
}
.showstyle {
  transform: translate3d(0, -100%, 0);
  transition: all 0.5s ease;
}

/* 购物车详情列表增减过渡动画 */
.list-change-enter-active,
.list-change-leave-active {
  transition: all 0.3s;
}
.list-change-enter,
.list-change-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.shopcart-list .list-content {
  width: 100%;
  max-height: 217px;
  overflow: hidden;
  background-color: #ffffff;
  padding: 0 18px;
}
.list-content .list-food {
  position: relative;
  padding: 12px 0;
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.list-content .list-food .cartcontrol-wrapper {
  position: absolute;
  right: 0;
  bottom: 12px;
}
.list-content .list-food .price {
  position: absolute;
  right: 90px;
  bottom: 12px;
  line-height: 24px;
  font-weight: 700;
  color: rgb(240, 20, 20);
}
.shopcart-list .list-content .food-name {
  font-size: 14px;
  line-height: 24px;
  color: rgb(7, 17, 27);
}

/* 购物车详情列表展开时背景虚化效果 */
.list-mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -40;
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(100px);
  background-color: rgba(7, 17, 27, 0.6);
}
  .mask-fade-enter-active, .mask-fade-leave-active{
    opacity: 1;
    transition: all .3s ease;
  }
  .mask-fade-leave-to, .mask-fade-enter{
    opacity: 0;
    background: rgba(7, 17, 27, 0);
  }
</style>
