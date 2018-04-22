<template>
  <div class="goods">
    <!-- 左侧菜单栏 -->
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
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
        <li v-for="item in goods" class="foods-list">
          <h1 class="goods-name">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
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
  </div> 
</template>
<script type="text/ecmascript-6">
import star from "../star/star.vue";
import icon from "../icon/icon.vue";
import BScroll from 'better-scroll';
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
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  data() {
    return {
      goods: []
    };
  },
  components: {
    star: star,
    icon: icon
  },
  methods: {
    _initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {});
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {});
    }
  }
};
</script>

<style type="text/css">
ol,ul{
  padding-left: 12px;
  list-style: none; 
  margin: 0;
}
span{
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
.goods .menu-wrapper .menu-item{
  display: table;
  height: 54px;
  width: 56px;
  line-height: 14px;
}
.menu-item .item-name{
  display: table-cell;
  font-size: 12px;
  vertical-align: middle;
  width: 56px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}
.goods-icon{
  display: inline;
}
.goods .foods-wrapper {
  flex: 1;
}
.foods-wrapper ul,ol{
  padding: 0;
}
.foods-wrapper .goods-name{
  padding-left: 14px;
  height: 26px;
  line-height: 26px;
  border-left: 2px solid #d9dde1;
  font-size: 12px;
  color: rgb(147, 153, 159);
  background: #f3f5f7;
}
.foods-wrapper .food-item{
  display: flex;
  margin: 18xp;
  padding-bottom: 18px;
  padding-top: 18px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1)
}
.foods-wrapper .food-item:last-child{
  border: none;
  margin-bottom: 0;
}
.food-item .food-img{
  flex: 0 0 57px;
  margin-right: 10px;
}
.food-item .food-content{
  flex: 1;
}
.food-item .food-name{
  margin: 2px 0 8px 0;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  color: rgb(7, 17, 27);
}
.food-item .food-desc{
  margin-bottom: 8px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.food-item .food-extra{
  line-height: 12px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
.food-item .food-extra .sell-count{
  margin-right: 12px;
}
.food-item .food-price{
  font-weight: 700;
  line-height: 24px;
}
.food-item .food-price .now-price{
  margin-right: 8px;
  font-size: 14px;
  color: rgb(240, 20, 20);
}
.food-item .food-price .old-price{
  text-decoration: line-through;
  font-size: 10px;
  color: rgb(147, 153, 159);
}
</style>