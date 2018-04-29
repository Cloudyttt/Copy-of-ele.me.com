<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
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
                <div class="pay" v-bind:class="{'enough': totalPrice>=minPrice}">{{payDesc}}</div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
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
      if(count > 99){
        count = 99;
      }
      return count;
    },
    payDesc() {
      if(this.totalPrice === 0){
        return '￥' + this.minPrice + '元起送';
      }else if(this.totalPrice < this.minPrice){
        let diff = this.minPrice - this.totalPrice;
        return '还差￥' + diff + '元起送';
      }else{
        return '去结算';
      }
    }
  }
};
</script>

<style type="text/css">
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
.shopcart-logo.highlight{
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
.price.highlight{
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
.pay.enough{
  background: #00b43c;
  color: #ffffff;
}

</style>
