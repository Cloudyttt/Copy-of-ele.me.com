<template>
  <div class="header">
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
        <span id="icon" v-bind:class="classMap[seller.supports[0].type]">   </span>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
      <div v-if="seller.supports" class="supports-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    }
  };
</script>

<!--<style scoped lang="stylus" rel="stylesheet/stylus">-->
<style type="text/css">
  .header{
    color: #fff;
    background-color: #999;
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
  #icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    margin-right: 4px;
  }
  #avatar-img{
    border-radius: 2px 2px 2px 2px;
  }
  .decrease{
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
  }
  .supports-count{
    display: flex;
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
  }
  .supports-count .icon-keyboard_arrow_right{
    font-size: 10px;
  }
</style>