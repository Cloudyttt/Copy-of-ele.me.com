<template>
  <div class="takeaway">
    <!-- 顶部地址、搜素栏 -->
    <div class="search-wrapper">
      <div class="location row">
          <div class="location-info col-xs-4 col-sm-4 col-md-4"><img src="./location.png" class="loaction-icon" height="16px" width="16px">杭州师范大学（仓前新校区）</div>
          <div class="showmore col-xs-1 col-sm-1 col-md-1"><img src="./showdetails.png" class="loaction-icon" height="16px" width="16px"></div>
          <div class="location-weather col-xs-offset-5 col-xs-2 col-sm-2 col-md-2">
            33℃&nbsp;
            <img src="./cloudy.png" class="loaction6-icon" height="18px" width="18px">
          </div>
      </div>
      <div class="search-box">
        <input type="text" class="input-search form-control" placeholder="输入商家、商品名称">
      </div>
      <div class="hot-search">
        <ul class="hotItems">
          <li class="items" v-for="item in hotitems">{{item}}</li>
        </ul>
      </div>
    </div>
    <!-- 主页面商品分类 -->
    <div class="search-category">
      <table class="table-category">
        <tr>
          <td class="category col-xm-2 col-md-2" v-for="(category, index) in categories" v-if="index<5">
            <img class="category-icon" :src="category.img" alt="" height="20px" width="20px">
            <span class="category-title">{{category.message}}</span>
          </td>
        </tr>
        <tr>
          <td class="category col-xm-2 col-md-2" v-for="(category, index) in categories" v-if="index>=5">
            <img class="category-icon" :src="category.img" alt="" height="20px" width="20px">
            <span class="category-title">{{category.message}}</span>
          </td>
        </tr>
      </table>
    </div>  
    <!-- 走马灯广告栏 -->
    <div class="advertisement">
      <el-carousel height="100px" arrow="never" indicator-position="none">
        <el-carousel-item v-for="addr in advertisements" v-bind:key="addr">
          <img :src="addr" height="100px" width="100%">
        </el-carousel-item>
      </el-carousel>
    </div> 
    <!-- 品质优选推荐 -->
    <div class="special-select">
      <div class="special-select-title">品质优选</div>
      <div class="col-md-3 col-xm-3" v-for=""></div>
    </div>
    <!-- 推荐商家列表 -->
    <div class="main-menu">
      <div class="main-menu-title">推荐商家</div>
      <div class="filter"></div>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {
      hotitems: [
        "酸菜鱼",
        "奶茶",
        "炸鸡",
        "水果满39减20",
        "粥",
        "凉皮",
        "鸡排",
        "炒面",
        "冷面"
      ],
      categories: [
        {
          message: "美食",
          img: "../../../static/image/chicken.png"
        },
        {
          message: "午餐",
          img: "../../../static/image/lunch.png"
        },
        {
          message: "商超便利",
          img: "../../../static/image/shop.png"
        },
        {
          message: "果蔬生鲜",
          img: "../../../static/image/fruit.png"
        },
        {
          message: "新店特卖",
          img: "../../../static/image/discount.png"
        },
        {
          message: "大牌简餐",
          img: "../../../static/image/food.png"
        },
        {
          message: "医药健康",
          img: "../../../static/image/medicine.png"
        },
        {
          message: "甜品饮品",
          img: "../../../static/image/juice.png"
        },
        {
          message: "浪漫鲜花",
          img: "../../../static/image/rose.png"
        },
        {
          message: "披萨意面",
          img: "../../../static/image/pizza.png"
        }
      ],
      advertisements: [
        "../../../static/image/ad1.jpg",
        "../../../static/image/ad2.jpg",
        "../../../static/image/ad3.jpg",
        "../../../static/image/ad4.jpg",
        "../../../static/image/ad5.jpg",
        "../../../static/image/ad6.jpg",
        "../../../static/image/ad7.jpg",
        "../../../static/image/ad8.jpg"
      ]
    };
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
ul, ol, li {
  list-style: none; /* 将默认的列表符号去掉 */
  padding: 0; /* 将默认的内边距去掉 */
  margin: 0; /* 将默认的外边距去掉 */
}

.search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgb(0, 160, 220);
  overflow: hidden;
  white-space: nowrap;

  p {
    display: inline;
  }

  .location {
    width: 90%;
    margin: 0 0 10PX 0;

    .loaction-icon {
      display: inline !important;
      margin-right: 5px;
    }

    .location-info {
      font-weight: 500;
      height: 40px;
      line-height: 40px;
      color: #ffffff;
      font-size: 16px;
      padding: 10px 0 0 0;
      overflow: hidden;
      white-space: nowrap;
    }

    .showmore {
      padding: 10px 0 0 0;
      height: 40px;
      line-height: 40px;
    }

    .location-weather {
      position: position;
      right: 0;
      font-weight: 500;
      height: 40px;
      line-height: 40px;
      color: #ffffff;
      font-size: 14px;
      padding: 10px 0 0 0;
    }
  }

  .search-box {
    width: 96%;

    .input-search {
      height: 40px;
      margin: 5px 0;
    }
  }

  .hot-search {
    .hotItems {
      color: #ffffff;
      font-size: 10 !important;

      .items {
        float: left; /* 往左浮动 */
        margin: 5px 6px 5px 0;
        font-size: 10 !important;
      }
    }
  }
}

.search-category {
  .table-category {
    width: 100%;

    .category {
      // position relative
      font-size: 10px;
      color: rgb(147, 153, 159);
      height: 60px;
      text-align: center;

      .category-title {
        display: block;
        margin-top: 5px;
      }

      .category-icon {
        // display: table-cell;
        // vertical-align: middle;
        // text-align: center;
        display: inline-block;
      }
    }
  }
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 10px;
  opacity: 0.75;
  line-height: 100px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>