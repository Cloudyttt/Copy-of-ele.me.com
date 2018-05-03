<template>
  <div class="header">
    <div class="background">
      <img v-bind:src="seller.avatar" width="100%" height="100%">
    </div>
    <!-- 头部信息 -->
    <div class="header-info">
      <div class="content-wrapper">
        <div id="avatar">
          <img id="avatar-img" width="64" height="64" v-bind:src="seller.avatar">
        </div>
      </div>
      <div class="content">
        <div class="content-title">
          <span id="brand"> <img src="./brand@2x.png" width="30" height="18"></span>
          <span class="seller-name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">

          <!-- <span id="icon" v-bind:class="classMap[seller.supports[0].type]"></span> -->
          <icon v-bind:iconSize="12" v-bind:supportsType="seller.supports[0].type"></icon>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div v-if="seller.supports" class="supports-count" v-on:click="showDetail">
          <span class="count">{{seller.supports.length}}个</span>
          <img height="7" width="7" src="./right.png"></img>
        </div>
      </div>
    </div>
    <!-- 主页公告 -->
    <div class="bulletin-wrapper" v-on:click="showDetail">
      <span class="bulletin-title"><img width="24" height="12" src="./bulletin@2x.png" alt=""></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
    </div>
    <!-- 过渡效果 -->
    <transition name="slide-fade">
      <!-- 详细介绍 -->
      <div class="detail" v-show="detailShow">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 id="name">{{seller.name}}</h1>

            <div id="star-wrapper">
              <star v-bind:size="48" v-bind:score="seller.score"></star>
            </div>

            <div class="detail-title">
              <div class="line"></div>
              <div class="detail-title-text">优惠信息</div>
              <div class="line"></div>
            </div>

            <ul v-if="seller.supports" class="detail-main-supports">
              <li class="support-item" v-for="(item, index) in seller.supports">
                <icon v-bind:iconSize="16" v-bind:supportsType="seller.supports[index].type"></icon>
                <span class="supports-text">{{seller.supports[index].description}}</span>
              </li>
            </ul>

            <div class="detail-title">
              <div class="line"></div>
              <div class="detail-title-text">商家公告</div>
              <div class="line"></div>
            </div>

            <div id="detail-main-bulletin">
              <span class="supports-text">{{seller.bulletin}}</span>
            </div>
            
          </div>
        </div>
        <div class="detail-close">
          <img v-on:click="closeDetail" src="./close.png" width="16" height="16">
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import star from '../star/star.vue';
  import icon from '../icon/icon.vue';
  export default{
    data () {
      return {
        detailShow: false
      };
    },
    props: {
      seller: {
        type: Object
      }
    },
    // created() {
    //   this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    // },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      closeDetail() {
        this.detailShow = false;
      }
    },
    components: {
      "star": star,
      "icon": icon
    }
  };
</script>

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<style type="text/css">
  .header{
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    background-color: rgba(7, 17, 27, 0.5)
  }
  .header .header-info{
    display: flex;
    flex-direction: row;
  }
  .header .content-wrapper{
    padding: 24px 12px 18px 24px;
    display: inline-block;
  }
  .header .content{
    padding-top: 24px;
  }
  .content .content-title{
    padding: 2px 6px 8px 0;
  }
   .content .content-title .seller-name{
    padding-right: 6px;
    font-weight: bold;
    font-size: 16px;
    line-height: 18px;
  }
  .content .description{
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 12px;
    font-weight: 100;
  }
  .content .supports{
    font-size: 10px;
    font-weight: 200;
    display: flex;
    align-items: center;
  }
  /* #icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    margin-right: 4px;
  } */
  #avatar-img{
    border-radius: 2px 2px 2px 2px;
  }
  .supports .text{
    display: inline-block;
  }
  /* .decrease{
    background-image: url(decrease_1@2x.png);
  }
  .discount{
    background-image: url(discount_1@2x.png);
  }
  .special{
    background-image: url(special_1@2x.png);
  }
  .invoice {
    background-image: url(invoice_1@2x.png);
  }
  .guarantee{
    background-image: url(guarantee_1@2x.png);
  } */
  .supports-count{
    cursor: pointer;
    display: flex;
    align-items: center;
    position: absolute;
    right: 12px;
    top: 70px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background-color: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .supports-count .count{
    vertical-align: top;
    font-size: 10px;
    margin-right: 4px;
  }
  .bulletin-wrapper{
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    font-size: 12px;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .bulletin-wrapper .bulletin-title{
    display: inline-block;
    /* background-image: url(./bulletin@2x.png);
    background-size: 22px 12px;
    background-repeat: no-repeat; */
    margin-right: 4px;
  }
  .header .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .header .detail{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(7, 17, 27, 0.8);
  }
  .clearfix{
    display: inline-block;

  }
  .clearfix:after{
    display: block;
    content: ".";
    height: 0;
    line-height: 0;
    clear: both;
    visibility: hidden;
  }
  .detail-wrapper
  {
    width: 100%;
    min-height: 100%;
  }
  .detail-wrapper .detail-main{
    margin-top: 64px;
    padding-bottom: 64px; 
  }
  .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
  }
  .detail-main #name{
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  #star-wrapper{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }

  .detail-title{
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 28px auto 24px auto;
  }
  .detail-title .line{
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .detail-title-text{
    padding: 0 12px;
    font-size: 14px;
    font-weight: 700;
  }
  /* .detail-main-icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
    margin-right: 6px;
  } */
  .detail-main-supports{
    width: 80%;
    margin: 0 auto;
  } 
  .detail-main-supports .support-item{
    display: flex;
    align-items: center;
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
  }
  .detail-main-supports .support-item:last-child{
    margin-bottom: 0;
  }
  .supports-text{
    font-size: 12px;
  }
  #detail-main-bulletin{
    width: 80%;
    margin: 0 auto;
  }

/* 显示商家详情设置全局模糊效果 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-leave-to{
    transform: translate3d(0, -100%, 0);
    opacity: 0;
  }
  .slide-fade-enter{
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  }
</style>