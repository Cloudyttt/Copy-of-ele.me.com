<template>
  <div class="order">
    <div class="top-title">
      订单
    </div>
    <div class="nearbuy-title">
      <span class="nearbuy-title-left">附近买过</span>
      <span class="nearbuy-title-right">共12家></span>
    </div>
    <div class="nearbuy">
      <div class="nearbuy-item" v-for="nb in nearbuy" :key="nb.nearbuyTitle">
        <div class="neaybuy-img">
          <img :src="nb.nearbuyImg" alt="">
        </div>
        <div class="nearbuy-info">
          <div class="nearbuy-business">{{nb.nearbuyTitle}}</div>
          <div class="nearbuy-price">{{nb.nearbuyPrice}}</div>
        </div>
      </div>
    </div>
    <div class="history-order-title">历史订单</div>
    <div class="history">
      <div class="history-item" v-for="his in history" :key="his.itemTime">
        <div class="item-top">
          <div class="item-img">
            <img :src="his.itemImg" alt="">  <!--图片-->
          </div>
          <div class="item-info">
            <div class="item-business">{{his.itemBusiness}}</div> <!--店铺名-->
            <div class="item-time">{{his.itemTime}}</div>     <!--订单时间-->
          </div>
          <div class="item-status">{{his.itemStatus}}</div>     <!--订单状态-->
        </div>
        <div class="item-mid">
          <div class="item-product">{{his.itemProduct}}</div>    <!--订购商品-->
          <div class="item-price">{{his.itemPrice}}</div>      <!--订单售价-->
        </div>
        <div class="item-foot">
          <div class="item-onemore">{{his.itemOnemore}}</div>    <!--再来一单-->
          <div class="item-getglod">{{his.itemGetgold}}</div>    <!--评价得金币-->
        </div>
        <div class="line"></div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>
<script type="text/ecmascript-6">
import tabbar from '../tabbar/tabbar.vue'
  export default{
    data(){
      return{
        nearbuy: [
          {
            nearbuyImg: '/static/image/nearbuy1.png',
            nearbuyTitle: '韩式炸鸡啤…',
            nearbuyPrice: '满40减39'
          },
          {
            nearbuyImg: '/static/image/nearbuy2.png',
            nearbuyTitle: '西班牙牛排…',
            nearbuyPrice: '满26减26'
          },
          {
            nearbuyImg: '/static/image/nearbuy3.png',
            nearbuyTitle: '东北饺子馆',
            nearbuyPrice: '满15减14'
          },
          {
            nearbuyImg: '/static/image/nearbuy4.png',
            nearbuyTitle: '旺克士(淘…',
            nearbuyPrice: '满23减22'
          }
        ],
        history: [
          {
            itemImg: '/static/image/history1.png',
            itemBusiness: '韩式炸鸡啤酒 >',
            itemTime: '2018-06-03 18:12',
            itemStatus: '订单已送达',
            itemProduct: '第三页 鸡腿优惠篇',
            itemPrice: '¥18.5',
            itemOnemore: '再来一单',
            itemGetgold: '评价得11金币'
          },
          {
            itemImg: '/static/image/history2.png',
            itemBusiness: '东北饺子馆 >',
            itemTime: '2018-06-02 19:58',
            itemStatus: '订单已送达',
            itemProduct: '三鲜肉12只',
            itemPrice: '¥16.67',
            itemOnemore: '再来一单',
            itemGetgold: '评价得11金币'
          },
          {
            itemImg: '/static/image/history3.png',
            itemBusiness: '芝士焗饭 >',
            itemTime: '2018-05-29 16:52',
            itemStatus: '订单已送达',
            itemProduct: '台湾卤肉芝士焗饭-番茄味',
            itemPrice: '¥13.89',
            itemOnemore: '再来一单',
            itemGetgold: '评价得11金币'
          },
          {
            itemImg: '/static/image/history1.png',
            itemBusiness: '韩式炸鸡啤酒 >',
            itemTime: '2018-05-20 19:14',
            itemStatus: '订单已送达',
            itemProduct: '第三页 鸡腿优惠篇',
            itemPrice: '¥20.7',
            itemOnemore: '再来一单',
            itemGetgold: '评价得11金币'
          },
          {
            itemImg: '/static/image/history2.png',
            itemBusiness: '东北饺子馆 >',
            itemTime: '2018-05-19 19:50',
            itemStatus: '订单已送达',
            itemProduct: '三鲜肉12只',
            itemPrice: '¥16.67',
            itemOnemore: '再来一单',
            itemGetgold: '评价得11金币'
          }
        ]
      }
    },
    components: {
      tabbar
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.order{
  margin-bottom 68px;
}
.top-title{
  width: 100%;
  position: fixed;
  top: 0px;
  z-index 999
  text-align center
  font-weight bold
  background-color: #00A1FF;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 18px;
}

.nearbuy-title{
  margin-top 50px
  height : 50px;
  margin-left: 10px;
  display : flex;
  justify-content : space-between;
  align-items : center;
}

.nearbuy-title-left{
  font-size: 18px;
  font-weight: 700;
}

.nearbuy-title-right{
  color: #ccc; 
  margin-right : 10px;
  margin-top : 10px;
}

.nearbuy{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 10px 0 10px;
}

.nearbuy-item{
  width: 48%;
  display: flex;
  margin-bottom: 20px;
}

.neaybuy-img img{
  width: 80px;
  heigh: 80px;
}

.nearbuy-info{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.nearbuy-business{
  font-size: 16px;
  font-weight: bolder;
  margin-left: 10px;
}

.nearbuy-price{
  color: #ff5339;
  width: 65px;
  background-color: #f8f8f8;
  text-align: center;
  margin-left: 10px;
  margin-top 10px
}

.history-order-title{
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px 10px;
}

.history{
  display: flex;
  flex-wrap: wrap;
  justify-content : center;
}

.history-item{
  width: 95%;
  // border: 1px solid pink;
  display: flex;
  flex-direction : column;
}

.item-top{
  width: 100%;
  display : flex;
}

.item-img{
  width: 20%;
}

.item-img img{
  width: 50px;
  heght: 50px;
}

.item-info{
  width: 60%;
}

.item-business{
  font-size: 16px;
  color #000
  font-weight 500
  margin-left : 0px;
}

.item-status{
  text-align right
  width: 30%;
  color: #000;
  margin-right 10px
}

.item-time{
  margin-left : 0px;
  margin-top 10px
  color: #bbb;
  font-size 12px
}

.item-mid{
  width: 100%;
  display : flex;
  justify-content : space-between;
}

.item-product{
  font-size : 14px;
  margin-left : 70px;
  margin-top 10px
  color #000
}

.item-price{
  margin-right : 10px;
  font-size 14px;
  font-weight bold
}

.item-foot{
  width: 100%;
  display : flex;
  justify-content : flex-end;
  margin-top : 10px;
  // margin-bottom : 10px;
}

.item-onemore{
  width : 80px;
  height: 30px;
  margin-right : 20px;
  border : 1px solid #ccc;
  border-radius: 2px;
  text-align : center;
  line-height : 30px;
  font-weight 700
  font-size 13px
}

.item-getglod{
  width : 90px;
  height: 30px;
  margin-right : 10px;
  border : 1px solid #ffa99c;
  border-radius: 2px;
  text-align : center;
  line-height : 30px;
  color: #ff5339;
  font-size 13px
}

.line{
  width : 75%;
  border: 0.5px solid #eee;
  margin: 10px 0 10px 60px;
}

</style>