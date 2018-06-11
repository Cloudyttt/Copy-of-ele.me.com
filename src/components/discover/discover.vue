<template>
  <div class="discover">
    <div class="top-title">
        发现
    </div>
    <div class="discover-top">
      <div class="item" v-for="(i, index) in activity" :class="{'no-bottom-border': index <= 3, 'no-right-border': index % 2 !== 0}" :key="i.title">
        <div class="title-wrap">
          <span class="title" :class="i.colorClass">{{i.title}}</span>
          <span class="sub-title">{{i.subTitle}}</span>
        </div>
        <img :src="i.imagSrc" alt="test">
      </div>
    </div>
    <!-- 394*100 -->
    <!-- 轮播图 -->
    <div class="advertisement">
      <el-carousel height="100px" arrow="never" indicator-position="none">
        <el-carousel-item v-for="adv in advertisement" v-bind:key="adv">
          <img :src="adv" height="100px" width="100%">
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 为你推荐 -->
    <div class="commend">
        <div class="commed-start">
          <img src="/static/image/commedforyou.png" alt="" class="commed-foryou">
        </div>
        <div class="commed-item" v-for="comm in commendactivity" :key="comm.commedTitle">
          <div class="commed-container">
            <img :src="comm.commedImgSrc" alt="" class="commed-product-img">
            <span class="commed-title">{{comm.commedTitle}}</span>
            <div class="commed-subtitle">
              <span class="commed-subtitle1">
                月售{{comm.commedSubtitle1}}份
              </span>
              <span class="commed-subtitle2">
                好评率{{comm.commedSubtitle2}}%
              </span>
            </div>
            <div class="commed-paytitle">
              <span class="commed-paytitle1">
                ¥{{comm.commedPaytitle1}}
              </span>
              <span class="commed-paytitle2">
                {{comm.commedPaytitle2}}
              </span>
            </div>
            <hr>
            <div class="commed-nameofbussiness">
              <img src="/static/image/business.png" alt="">
              <span class="commed-bussinessname">
                {{comm.commedBusinessname}}
              </span>
            </div>
          </div>
        </div>
        <div class="commed-end">
          <span>查看更多></span>
        </div>
    </div>
    <div class="space-top"></div>
    <div class="gift">
      <div class="gift-top">
        <img src="/static/image/timelygift.png" alt="">
      </div>
      <div class="gift-item" v-for="gift in timelimitgift" :key="gift.giftImgSrc">
        <span class="gift-title">{{gift.giftTitle}}</span>
        <div class="gift-img">
          <img :src="gift.giftImgSrc" alt="">
        </div>
        <span class="gift-info">{{gift.giftInfo}}</span>
        <div class="gift-coin">
          <span class="gift-goldcoin">{{gift.giftGoldCoin}}</span>
          <span class="gift-origprice">{{gift.giftOrigPrice}}</span>  
        </div>
      </div>
      <div class="gift-end">查看更多></div>
    </div>
    <div class="space-end"></div>
    <tabbar></tabbar>
  </div>
</template>
<script type="text/ecmascript-6">
import tabbar from "../tabbar/tabbar.vue";
export default {
  data() {
    return {
      activity: [
        {
          title: "百元红包",
          subTitle: "兴业银行联名卡",
          imagSrc: "/static/image/redpack.png",
          colorClass: "activity-color1"
        },
        {
          title: "金币商城",
          subTitle: "0元购好物在这里",
          imagSrc: "/static/image/goldmall.png",
          colorClass: "activity-color2"
        },
        {
          title: "有红包快抢",
          subTitle: "礼包福利领不停",
          imagSrc: "/static/image/grabredpack.png",
          colorClass: "activity-color3"
        },
        {
          title: "推荐有奖",
          subTitle: "5元现金拿不停",
          imagSrc: "/static/image/recommendprize.png",
          colorClass: "activity-color4"
        },
        {
          title: "周边优惠",
          subTitle: "领取口碑好券",
          imagSrc: "/static/image/offeraround.png",
          colorClass: "activity-color5"
        },
        {
          title: "免费流量",
          subTitle: "每月最高500M",
          imagSrc: "/static/image/freeflow.png",
          colorClass: "activity-color6"
        }
      ],
      advertisement: ["/static/image/ad1.jpg", "/static/image/ad2.jpg"],
      commendactivity: [
        {
          commedImgSrc: "/static/image/commend1.png",
          commedTitle: "第二页 鸡翅优惠篇",
          commedSubtitle1: "559",
          commedSubtitle2: "100",
          commedPaytitle1: "57",
          commedPaytitle2: "满40减39",
          commedBusinessname: "韩式炸鸡啤酒"
        },
        {
          commedImgSrc: "/static/image/commend2.png",
          commedTitle: "第三页 鸡腿优惠篇",
          commedSubtitle1: "1589",
          commedSubtitle2: "100",
          commedPaytitle1: "57",
          commedPaytitle2: "满40减39",
          commedBusinessname: "韩式炸鸡啤酒"
        },
        {
          commedImgSrc: "/static/image/commend3.png",
          commedTitle: "猪软骨芝士焗饭",
          commedSubtitle1: "202",
          commedSubtitle2: "97",
          commedPaytitle1: "36.99",
          commedPaytitle2: "满21减20",
          commedBusinessname: "芝士焗饭"
        },
        {
          commedImgSrc: "/static/image/commend4.png",
          commedTitle: "鸡腿堡+鸡肉卷+可乐",
          commedSubtitle1: "290",
          commedSubtitle2: "100",
          commedPaytitle1: "14.5",
          commedPaytitle2: "满20减13",
          commedBusinessname: "迪克汉堡(梦想小镇店)"
        },
        {
          commedImgSrc: "/static/image/commend5.png",
          commedTitle: "咖喱鸡肉芝士焗饭",
          commedSubtitle1: "72",
          commedSubtitle2: "90",
          commedPaytitle1: "36.99",
          commedPaytitle2: "满21减20",
          commedBusinessname: "芝士焗饭"
        },
        {
          commedImgSrc: "/static/image/commend6.png",
          commedTitle: "墨西哥鸡肉卷",
          commedSubtitle1: "127",
          commedSubtitle2: "100",
          commedPaytitle1: "12",
          commedPaytitle2: "满20减13",
          commedBusinessname: "迪克汉堡(梦想小镇店)"
        }
      ],
      timelimitgift: [
        {
          giftTitle: "限时优惠",
          giftImgSrc: "/static/image/gift1.png",
          giftInfo: "3元饿了么红包",
          giftGoldCoin: "90金币",
          giftOrigPrice: "¥3"
        },
        {
          giftTitle: "特价换购",
          giftImgSrc: "/static/image/gift2.png",
          giftInfo: "无线蓝牙耳机",
          giftGoldCoin: "9金币",
          giftOrigPrice: "¥249"
        },
        {
          giftTitle: "特价换购",
          giftImgSrc: "/static/image/gift3.png",
          giftInfo: "机械手感键鼠套装",
          giftGoldCoin: "9金币",
          giftOrigPrice: "¥129"
        }
      ]
    };
  },
  components: {
    tabbar: tabbar
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.top-title {
  width: 100%;
  position: fixed;
  top: 0px;
  text-align: center;
  background-color: #00A1FF;
  height: 50px;
  line-height: 50px;
  font-weight: 700;
  color: #fff;
  font-size: 18px;
  z-index: 999px;
}

.discover-top {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
}

.item {
  width: 49.9%;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-left: none;
  display: flex;
  justify-content: space-between;
}

.item img {
  width: 70px;
  height: 70px;
}

.item .title-wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item .title-wrap .title {
  font-size: 18px;
}

.item .title-wrap .sub-title {
  font-size: 12px;
  color: #ccc;
  line-height: 20px;
}

.no-bottom-border {
  border-bottom: none;
}

.no-right-border {
  border-right: none;
}

.activity-color1 {
  color: #E88F28;
}

.activity-color2 {
  color: #FF9900;
}

.activity-color3 {
  color: #CC3300;
}

.activity-color4 {
  color: #1BA9E1;
}

.activity-color5 {
  color: #ED6660;
}

.activity-color6 {
  color: #FF8585;
}

.advertisement {
  height: 120px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 100px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.commend {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.commed-start {
  width: 100%;
  display: flex;
  justify-content: center;
}

.commed-item {
  width: 50%;
  padding: 4px;
  background-color: #fff;
  /* border: 1px solid pink; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.commed-container {
  width: 100%;
  border: 1px solid #ddd;
}

.commed-title {
  font-weight: bold;
  font-size: 16px;
  padding-left: 10px;
}

.commed-product-img {
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}

.commed-subtitle1 {
  color: #666;
  padding-left: 10px;
  font-size: 12px;
  margin-top: 10px;
  line-height: 20px;
}

.commed-subtitle2 {
  color: #666;
  font-size: 12px;
  margin-left: 5px;
}

.commed-paytitle1 {
  color: #FF6000;
  font-size: 16px;
  font-weight: bolder;
  padding-left: 10px;
  margin-top: 10px;
  line-height: 20px;
  font-weight: 700;
}

.commed-paytitle2 {
  color: #f66d6b;
  font-size: 12px;
  margin-left: 5px;
  border: 1px solid #f66d6b;
  border-radius: 2px;
}

.commed-container hr {
  width: 88%;
  margin-top: 2px;
  margin-bottom: 5px;
  border: 1px dashed #ccc;
}

.commed-nameofbussiness {
  padding: 0 0 10px 10px;
  color: #ccc;
  font-size: 8px;
}

.commed-nameofbussiness img {
  width: 10px;
  height: 10px;
}

.commed-end {
  width: 100%;
  text-align: center;
  margin: 10px 0 10px 0;
}

.space {
  height: 100px;
}

.gift {
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 68px;
}

.gift-top {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.gift-item {
  width: 33%;
}

.gift-title {
  display: block;
  width: 80px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  margin-left: 5px;
  background-color: #413d3c;
  color: #fff;
}

.gift-info {
  margin-left: 5px;
  font-size: 14px;
}

.gift-coin {
  margin-left: 5px;
}

.gift-goldcoin {
  color: #ff5339;
  font-size: 16px;
}

.gift-origprice {
  color: #ccc;
  text-decoration: line-through;
}

.gift-img {
  width: 100%;
}

.gift-img img {
  width: 100%;
}

.gift-end {
  width: 100%;
  text-align: center;
  color: #ccc;
  margin-top: 30px;
}

.space-top {
  width: 100%;
  height: 10px;
  background-color: #f5f5f5;
}

.space-end {
  width: 100%;
  background-color: #f5f5f5;
}
</style>