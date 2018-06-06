<template>
  <div class="takeaway">
    <!-- <router-view></router-view> -->
    <div class="wrapper" ref="takeawayWrapper">
      <div class="content">
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
          <div class="search-box" v-bind:class="{'fixed': false}">
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
        <!-- 大图推荐 -->
        <div class="main-recommend">
          <el-row :gutter="20" class="main-recommend-row">
            <el-col class="main-recommend-col first-row" :span="12">
              <div class="main-recommend-message message-first">
                <span class="message-title">限量抢购</span>
                <span class="message-info">美食午餐 9.9元起</span>
                <span class="message-other">2485人正在抢购></span>
              </div>
              <img class="main-recommend-image1" :src="mainRecommendImg[0].imgAddress" alt="">
            </el-col>
            <el-col class="main-recommend-col first-row" :span="12">
              <div class="main-recommend-message message-first">
                <span class="message-title">周五半价日</span>
                <span class="message-info">满30减15起</span>
                <span class="message-other">立即抢购></span>
              </div>
              <img class="main-recommend-image1" :src="mainRecommendImg[1].imgAddress" alt="">
            </el-col>
          </el-row>
          <el-row :gutter="20" class="main-recommend-row">
            <el-col class="main-recommend-col subordinate-row" :span="8">
              <div class="main-recommend-message">
                <span class="message-title-2">生鲜晚市</span>
                <span class="message-info-2">1元优惠开市</span>
              </div>
              <img class="main-recommend-image2" :src="mainRecommendImg[2].imgAddress" alt="">              
            </el-col>
            <el-col class="main-recommend-col subordinate-row" :span="8">
              <div class="main-recommend-message">
                <span class="message-title-2">品质联盟</span>
                <span class="message-info-2">品质升级</span>
              </div>
              <img class="main-recommend-image2" :src="mainRecommendImg[3].imgAddress" alt="">              
            </el-col>
            <el-col class="main-recommend-col subordinate-row" :span="8">
              <div class="main-recommend-message">
                <span class="message-title-2">人气简餐</span>
                <span class="message-info-2">大牌必吃</span>
              </div>
              <img class="main-recommend-image2" :src="mainRecommendImg[4].imgAddress" alt="">              
            </el-col>
          </el-row>
        </div>
        <!-- 品质优选推荐 -->
        <div class="special-select">
          <div class="top-title row">
            <div class="line"></div>
            <div class="special-select-title">品质优选</div>
            <div class="line"></div>
          </div>
          <div class="row">
            <div v-for="(selectStore, index) in recommendList" class="select-list col-md-3 col-sm-3 col-xm-3">
              <img class="select-img" :src="selectStore.src" height="40px" width="40px">
              <span class="select-name">{{selectStore.name}}</span>
              <span class="select-type">大牌精选</span>
            </div>
          </div>
        </div>
        <!-- 推荐商家列表 -->
        <div class="main-menu">
          <div class="top-title row">
            <div class="line"></div>
            <div class="special-select-title">推荐商家</div>
            <div class="line"></div>
          </div>
          <div class="filter row">
            <div class="filter-list col-md-10 col-sm-10 col-xs-10">
                <div class="col-xs-4"><h5 class="filter-title">综合排序</h5></div>
                <div class="col-xs-4"><h5 class="filter-title">好评优先</h5></div>
                <div class="col-xs-4"><h5 class="filter-title">距离优先</h5></div>
            </div>
            <div class="col-md-2 col-sm-2 col-xs-2">筛选</div>
          </div>
          <div class="sellers-list">
            <ul>
              <li v-for="list in 10" v-bind:key="list">
                <router-link to="/store"> <!-- 商家列表路由，路由到制定store组件 -->
                  <div class="seller-info">
                    <div class="seller-avatar">
                      <img width="57" height="57" v-bind:src="sellers.avatar">
                    </div>
                    <div class="seller-content">
                      <div class="seller-name">
                        {{sellers.name}}
                        <div class="dislike" v-on:click="showAllSupports()">...</div>
                      </div>
                      <ul class="seller-detail">
                        <li class="seller-score">
                          <star class="star" v-bind:size="24" v-bind:score="sellers.score"></star>
                          {{sellers.score}}
                          &nbsp;月售{{sellers.sellCount}}
                          <span class="delivery-type">蜂鸟专送</span>
                        </li>
                        <li class="seller-minPrice">
                          起送￥{{sellers.minPrise}} | 
                          配送￥{{sellers.deliveryPrice}}
                          <span class="delivery-discount">
                            {{sellers.deliveryTime}}分钟 | {{sellers.deliveryPrice / 2.0}}km
                          </span>
                        </li>
                        <li class="category">
                          <i class="el-icon-bell"></i>
                          {{sellers.category}}
                        </li>
                        <li class="seller-support">
                          <div v-if="sellers.supports" class="supports">
                            <icon v-bind:iconSize="12" v-bind:supportsType="sellers.supports[0].type"></icon>
                            <span class="text">{{sellers.supports[0].description}}</span>
                            <span class="support-showall" v-on:click="showAllSupports()">
                              <i class="el-icon-arrow-down"></i>
                            </span>
                          </div>
                          <div v-if="sellers.supports" class="supports">
                            <icon v-bind:iconSize="12" v-bind:supportsType="sellers.supports[1].type"></icon>
                            <span class="text">{{sellers.supports[1].description}}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </router-link>
              </li>
              <!-- <router-view></router-view> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import star from "../star/star.vue";
import icon from "../icon/icon.vue";
import store from "../store/store.vue";
export default {
  data() {
    return {
      sellers: {},
      searchBarHeight: 50,
      scrollY: 0,
      isShowAllSupports: true,
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
      mainRecommendImg: [
        {
          imgAddress: "../../../static/image/recommendImages/food1.png"
        },
        {
          imgAddress: "../../../static/image/recommendImages/food2.png"
        },
        {
          imgAddress: "../../../static/image/recommendImages/food3.png"
        },
        {
          imgAddress: "../../../static/image/recommendImages/food4.png"
        },
        {
          imgAddress: "../../../static/image/recommendImages/food5.png"
        }
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
      ],
      recommendList: [
        {
          name: "粥员外",
          src: "../../../static/image/recommend1.jpg"
        },
        {
          name: "我呀便当",
          src: "../../../static/image/recommend2.jpg"
        },
        {
          name: "草没味儿",
          src: "../../../static/image/recommend3.jpg"
        },
        {
          name: "三米粥铺",
          src: "../../../static/image/recommend4.jpg"
        }
      ]
    };
  },
  components: {
    star: star,
    icon: icon,
    store: store
  },
  created: function() {
    this.$axios
      .get("/api/seller", { id: 123 })
      .then(res => {
        this.sellers = res.data.data;
        console.log("this.sellers in takeaway:" + this.sellers);
        console.log(this.sellers.name);
        console.log("succeed!");

        this.$refs.content.style.minHeight =
          this.$refs.wrapper.offsetHeight + 1 + "px";
        this.$nextTick(() => {
          this._initScroll();
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    // 初始化betterScroll
    _initScroll() {
      this.takeawayScroll = new BScroll(this.$refs.takeawayWrapper, {
        click: true,
        probeType: 3 //scroll滚动时实时返回当前滚动位置
      });
      this.takeawayScroll.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
        console.log("this.scrollY: " + this.scrollY);
      });
    },
    chooseSeller() {
      console.log("this.scrollY: " + this.scrollY);
    },
    showAllSupports() {
      // 点击显示当前商店所有优惠和特价信息
    },
    dislikeSeller() {
      // 点击将提供按钮，用户可将当前商家设置为不喜欢，商家移动至列表最后
    }
  },
  mounted() {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
ul, ol, li {
  list-style: none; /* 将默认的列表符号去掉 */
  padding: 0; /* 将默认的内边距去掉 */
  margin: 0; /* 将默认的外边距去掉 */
  font-size: 11px;
}

.takeaway {
  background: #f3f5f7;
  position: absolute;
  width: 100%;
  // bottom: 48px;
  overflow: hidden;

  .wrapper {
    // position: absolute;
    // top: 0px
    // bottom: 0px
    // height: 50%;
    // overflow: hidden;
    .content {
      // height 100%
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
          width: 100%;
          padding: 0 10px 0 10px;
          background-color: rgb(0, 160, 220);
          z-index: 500;

          .input-search {
            height: 40px;
            margin: 5px 0;
            background-color: #ffffff;
            background: #ffffff;
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
          background: #ffffff;

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
      .advertisement{
        // background-color #ffffff
        margin-bottom 10px
        padding 0 10px
      }
      .main-recommend {
        .main-recommend-row {
          // margin-top: 10px;
          margin-left: 10px;
          margin-right: 5px;
          background-color: #f3f5f7;
          padding-left 20px;
          padding-right 20px
          .main-recommend-col {
            position relative
            background-color: #eeeeee;
            padding: 10px 10px 10px 10px;
            .main-recommend-message {
              display flex
              flex-direction column
              margin-bottom: 5px;

              .message-title {
                display: inline-block;
                margin-bottom 5px
                font-size: 14px;
                color: red;
                font-weight: bold;
              }

              .message-info {
                display: inline-block;
                margin-bottom 5px
                font-weight: 300;
                font-size: 10px;
              }

              .message-other {
                display: inline-block;
                // margin-bottom 5px
                font-size: 10px;
                font-weight: bold;
              }

              .message-title-2 {
                display: inline-block;
                margin-bottom: 5px;
                font-size: 14px;
                color: black;
                font-weight: bold;
              }

              .message-info-2 {
                display: inline-block;
                // margin-bottom 5px
                font-weight: 300;
                font-size: 10px;
                border-radius: 1px;
                color: #666666;
                border: 1px solid #666666;
              }
            }
            .message-first{
              align-self: flex-start
              padding-left 20px
            }
            .main-recommend-image1 {
              // position absolute
              position relative
              float right
              float: right bottom;
              height: 75px;
              width: 75px;
              align-self: flex-end
              margin-right 30px;
            }

            .main-recommend-image2 {
              // position absolute
              bottom: 0;
              right: 0;
              height: 60px;
              width: 60px;
            }
          }

          .first-row {
            display: flex;
            flex-direction: column;
            padding: 10px 10px 0px 10px;
            // justify-content center
            align-content: center;
            align-items: center;
            margin-bottom 5px;
          }

          .subordinate-row {
            display: flex;
            flex-direction: column;
            // justify-content center
            align-content: center;
            align-items: center;

            .main-recommend-message {
              display: flex;
              flex-direction: column;
              // justify-content center
              align-content: center;
              align-items: center;
            }
          }
        }
      }

      .special-select {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 10px auto 10px auto;
        background: #ffffff;

        .top-title {
          display: flex;
          justify-content: center;
          width: 100%;
          margin: 10px auto 10px auto;
          padding: 0 125px;

          .line {
            padding: 0 20px;
            flex: 1;
            position: relative;
            top: -8px;
            border-bottom: 1px solid rgba(7, 17, 27, 0.3);
          }

          .special-select-title {
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
            color: brown;
          }
        }

        .row {
          display: flex;
          flex-direction: row;

          .select-list {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding-bottom: 20px;

            .select-img {
              margin: 0;
              padding: 0;
            }

            .select-name {
              text-align: center;
              font-weight: 700;
              font-size: 14px;
            }

            .select-type {
              text-align: center;
              border: 1px solid rgb(0, 160, 240);
              border-radius: 1px;
              color: rgb(0, 160, 240);
              font-size: 12px;
            }
          }
        }
      }

      .main-menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        width: 100%;
        margin: 10px auto;
        padding: 0 10px 0 10px;
        background: #ffffff;

        .top-title {
          display: flex;
          justify-content: center;
          width: 100%;
          margin: 10px auto;
          padding: 0 115px;

          .line {
            padding: 0 20px;
            flex: 1;
            position: relative;
            top: -8px;
            border-bottom: 1px solid rgba(7, 17, 27, 0.3);
          }

          .special-select-title {
            padding: 0 12px;
            font-size: 14px;
            font-weight: 700;
          }

          .filter {
            width: 100%;
            display: flex;
            flex-direction: row;
            word-wrap: nowrap;
            align-content: center;
            align-items: center;

            // justify-content space-between
            .filter-list {
              width: 100%;
              display: flex;
              flex-direction: row;
              word-wrap: nowrap;

              // justify-content space-between
              .filter-title {
                color: #cccccc;
              }
            }
          }
        }

        .sellers-list {
          width: 100%;
          display: flex;
          margin: 18xp;
          padding-bottom: 18px;
          // padding-top: 18px;
          border-bottom: 1px solid rgba(7, 17, 27, 0.1);

          ul, li {
            width: 100%;
            color: #666666;
          }

          ul {
            padding: 5px 0;
            margin-bottom: 10px;
            // border-bottom 1px solid #cccccc
          }

          .seller-info {
            display: flex;
            border-bottom: 0.5px solid #cccccc;
            margin-bottom: 10px;

            .seller-avatar {
              flex: 0 0 50px;
              margin-right: 10px;
            }
          }

          .seller-content {
            position: relative;
            flex: 1;

            .seller-name {
              position: relative;
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              font-weight: 700;
              color: rgb(7, 17, 27);

              .dislike {
                float: right;
              }
            }
          }

          .seller-detail {
            // margin-bottom: 5px;
            .seller-score {
              margin-bottom: 5px;
              position: relative;

              .star {
                display: inline-block;
              }

              .delivery-type {
                float: right;
                color: #ffffff;
                background-color: rgb(0, 160, 240);
                border-radius: 2px;
                padding: 0px 2px 0px 2px;
              }
            }

            .seller-minPrice {
              margin-bottom: 5px;
              position: relative;

              .delivery-discount {
                position: absolute;
                // float: right;
                right: 0;
              }
            }

            .category {
              margin-bottom: 5px;
            }

            .seller-support {
              .supports {
                position: relative;
                font-size: 10px;
                font-weight: 200;
                display: flex;
                align-items: center;
                margin-bottom: 5px;

                .text {
                  display: inline-block;
                }

                .support-show {
                  float: right;
                }

                .support-showall {
                  position: absolute;
                  // float: right;
                  right: 0;
                }
              }
            }
          }
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

  .fixed {
    position: fixed;
    top: 0;
  }
}
</style>