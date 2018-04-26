<template>
  <div class="goods">
    <!-- 左侧菜单栏 -->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item" v-bind:class="{'current': currentIndex===index}" v-on:click="selectMenu(index, $event)">
          <span class="item-name">
            <icon class="goods-icon" v-show="item.type>0" v-bind:iconSize="12" v-bind:supportsType="item.type"></icon>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <!-- 右侧展示区 -->
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item item-list-hook">
          <h1 class="goods-name">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-list">
              <div class="food-img">
                <img width="57" height="57" v-bind:src="food.icon">
              </div>
              <div class="food-content">
                <h2 class="food-name">{{food.name}}</h2>
                <p class="food-desc">{{food.description}}</p>
                <div class="food-extra">
                  <span class="sell-count">月售{{food.sellCount}}</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="food-price">
                  <span class="now-price">￥{{food.price}}</span>
                  <span class="old-price" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- 底部购物车 -->
    <shopcart></shopcart>
  </div> 
</template>
<script type="text/ecmascript-6">
import star from "../star/star.vue";
import icon from "../icon/icon.vue";
import BScroll from "better-scroll";
import shopcart from '../shopcart/shopcart'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  created: function() {
    this.$axios
      .get("/api/goods", { id: 123 })
      .then(res => {
        this.goods = res.data.data;
        console.log("this.goods:" + this.goods);
        console.log(this.goods[0].name);
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      goods: [],
      itemHeight: [],
      scrollY: 0
    };
  },
  components: {
    star: star,
    icon: icon,
    shopcart: shopcart
  },
  methods: {
    // 初始化betterScroll
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3 //scroll滚动时实时返回当前滚动位置
      });
      this.foodsScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    // 计算右侧各区间高度
    _calculateHeight() {
      let itemList = this.$refs.foodsWrapper.getElementsByClassName(
        "item-list-hook"
      );
      let height = 0;
      this.itemHeight.push(height);
      for (let i = 0; i < itemList.length; i++) {
        let item = itemList[i];
        height = height + item.clientHeight;
        this.itemHeight.push(height);
      }
    },
    //左侧导航条点击事件
    selectMenu(index, event) {
      // if(event._constructed){
      //   return;
      // }
      let itemList = this.$refs.foodsWrapper.getElementsByClassName(
        "item-list-hook"
      );
      let el = itemList[index];
      this.foodsScroll.scrollToElement(el, 500);
      console.log(index);
    }
  },
  computed: {
    // 实时计算当前右侧滚动栏对应的左侧索引序号
    currentIndex() {
      for (let i = 0; i < this.itemHeight.length; i++) {
        let heightStart = this.itemHeight[i];
        let heightEnd = this.itemHeight[i + 1];
        if (
          !heightEnd ||
          (this.scrollY >= heightStart && this.scrollY < heightEnd)
        ) {
          return i;
        }
      }
      return 0;
    }
  }
};
</script>

<style type="text/css">
ol,
ul {
  padding-left: 0;
  list-style: none;
  margin: 0;
}
span {
  margin: 0;
  padding: 0;
}
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  width: 100%;
  bottom: 46px;
  overflow: hidden;
}
.goods .menu-wrapper {
  flex: 0 0 80px;
  width: 80px;
  background: #f3f5f7;
}
.goods .menu-wrapper .menu-item {
  display: table;
  height: 54px;
  width: 100%;
  line-height: 14px;
  padding-left: 12px;
  padding-right: 12px;
}
.menu-item .item-name {
  display: table-cell;
  font-size: 12px;
  vertical-align: middle;
  width: 56px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.goods-icon {
  display: inline;
}
.goods .foods-wrapper {
  flex: 1;
}
.foods-wrapper ul,
ol {
  padding: 0;
}
.foods-wrapper .goods-name {
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: rgb(147, 153, 159);
  background: #f3f5f7;
}
.foods-wrapper .food-list {
  display: flex;
  margin: 18xp;
  padding-bottom: 18px;
  padding-top: 18px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.foods-wrapper .food-list:last-child {
  border: none;
  margin-bottom: 0;
}
.food-list .food-img {
  flex: 0 0 57px;
  margin-right: 10px;
}
.food-list .food-content {
  flex: 1;
}
.food-list .food-name {
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}
.food-list .food-desc {
  margin-bottom: 8px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.food-list .food-extra {
  line-height: 12px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.food-list .food-extra .sell-count {
  margin-right: 12px;
}
.food-list .food-price {
  font-weight: 700;
  line-height: 24px;
}
.food-list .food-price .now-price {
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240, 20, 20);
}
.food-list .food-price .old-price {
  text-decoration: line-through;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.goods-name {
  margin: 0;
}
.current {
  position: relative;
  margin-top: -1px;
  z-index: 10;
  background: #fff;
  font-weight: 700;
}
.current .item-name {
  border: none;
}
</style>