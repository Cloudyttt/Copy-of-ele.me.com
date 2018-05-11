<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.count>0" v-on:click="decreaseCart($event)"></div>
        </transition>
        <transition name="count-bround">
            <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        </transition>
        
        <div class="cart-add" v-on:click="addCart($event)"></div>
    </div>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
export default {
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart(event) {
      // if(event._constructed){
      //     return;
      // }
      console.log("Click the add button!");
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
      } else {
        this.food.count++;
      }
    },
    decreaseCart() {
      console.log("Click the decrease button!");
      if (this.food.count != 0) {
        this.food.count--;
      }
    }
  }
};
</script>

<style type="text/css">
.cartcontrol {
  font-size: 0;
  display: flex;
  align-items: center;
}
.cartcontrol .cart-decrease {
  display: inline-block;
  line-height: 24px;
  padding: 6px;
  height: 24px;
  width: 24px;
  background-image: url("decrease.png");
  background-size: 24px 24px;
  background-repeat: no-repeat;
}
.cartcontrol .cart-count {
  display: inline-block;
  font-size: 10px;
  line-height: 24px;
  vertical-align: top;
  width: 24px;
  /* padding-top: 6px; */
  text-align: center;
  color: rgb(147, 153, 159);
}
.cartcontrol .cart-add {
  display: inline-block;
  line-height: 24px;
  padding: 6px;
  height: 24px;
  width: 24px;
  background-image: url("add.png");
  background-size: 24px 24px;
  background-repeat: no-repeat;
}

/* Vue动画效果 */
.move-enter-active {
  transition: all 0.5s ease;
  /* animation: move-in 0.5s; */
  /* -webkit-animation: move-in 0.5s; 兼容Safari 与 Chrome */
}
.move-leave-active {
  transition: all 0.5s ease;
  /* animation: move-in 0.5s reverse; */
  /* -webkit-animation: move-in 0.5s reverse; 兼容Safari 与 Chrome */
}
.move-enter{
  transform: translate3D(48px, 0, 0);
  /* transform: rotate(-180deg); */
  opacity: 0;
}
.move-leave-to {
  transform: translate3D(48px, 0, 0);
  /* transform: rotate(-180deg); */
  opacity: 0;
}
/* @keyframes move-in {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  100% {
    transform: rotate(-180deg);
     opacity: 1;
  }
} */

.count-bround-enter-active {
  animation: move-in 0.4s;
  -webkit-animation: count-move-in 0.4s; /* 兼容Safari 与 Chrome */
}
.count-bround-leave-active {
  animation: move-in 0.25s reverse;
  -webkit-animation: count-move-in 0.25s reverse; /* 兼容Safari 与 Chrome */
}
@keyframes count-move-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
