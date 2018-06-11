<template>
  <div class="user" ref="wrapper">
    <transition name="fade">
      <!-- 初始界面 -->
      <div v-show="userShow" class="user-show" id="user-show">
        <!-- 头 -->
        <div class="uesr-top">
          <div class="uesr-top-left">
            <p>我的</p>
          </div>
          <div class="uesr-top-right">
            <div class="notice-icon"><img src="./notice.png" width="30" height="30"></div>
            <div class="setting-icon" v-on:click="showsetting()"><img src="./setting.png" width="30" height="30"></div>
          </div>
        </div>
        <!-- 登录界面跳转按钮 -->
        <div class="login-btn" v-on:click="showlogin()">
          <div class="user-login">
            <div class="login-icon"><img src="./user.png" height="85" width="85"></div>
            <div class="login-main">
              <div>
                <p class="font21">{{username}}</p>
                <p class="font14">{{userid}}</p>
              </div>
              <div class="right"><img src="./right.png" width="26" height="26"></div>
            </div>
          </div>
        </div>

        <div class="user-cnt">
          <!-- 横向item -->
          <div class="money">
            <div class="money-item rightborder">
              <div class="money-item-data" v-show="isLogin" style="color: rgb(53,159,255);">
                <p class="big">0.00</p>
                <p class="small">元</p>
              </div>
              <img src="./wallet.png" v-show="!isLogin">
              <p>钱包</p>
            </div>
            <div class="money-item rightborder">
              <div class="money-item-data" v-show="isLogin" style="color: rgb(255,95,59);">
                <p class="big">0</p>
                <p class="small">个</p>
              </div>
              <img src="./redpacket.png" v-show="!isLogin">
              <p>红包</p>
            </div>
            <div class="money-item">
              <div class="money-item-data" v-show="isLogin" style="color: rgb(255,168,16);">
                <p class="big">0</p>
                <p class="small">个</p>
              </div>
              <img src="./gold.png" v-show="!isLogin">
              <p>金币</p>
            </div>
          </div>

          <!-- 纵向item -->
          <div class="assortment">
            <div class="bottomborder" v-show="isLogin">
              <img src="./vip.png" width="100%">
            </div>
            <div class="assortment-item bottomborder">
              <div class="assortment-item-left">
                <img src="./address.png">
                <p>收货地址</p>
              </div>
            </div>
            <div class="assortment-item">
              <div class="assortment-item-left">
                <img src="./collection.png">
                <p>我的收藏</p>
              </div>
            </div>
          </div>

          <div class="assortment">
            <div class="assortment-item bottomborder" v-show="isLogin">
              <div class="assortment-item-left">
                <img src="./card.png">
                <p>饿了么联名卡</p>
              </div>
              <div class="assortment-item-right">
                <img src="./new.png" width="42" height="23">
                <p>免费领百元红包</p>
              </div>
            </div>
            <div class="assortment-item bottomborder" v-show="isLogin">
              <div class="assortment-item-left">
                <img src="./gift.png">
                <p>推荐有奖</p>
              </div>
              <div class="assortment-item-right">
                <img>
                <p>5元现金拿不停</p>
              </div>
            </div>
            <div class="assortment-item bottomborder">
              <div class="assortment-item-left">
                <img src="./goldsuper.png">
                <p>金币商城</p>
              </div>
              <div class="assortment-item-right" v-show="isLogin">
                <img>
                <p>0元好物在这里</p>
              </div>
            </div>
            <div class="assortment-item bottomborder" v-show="isLogin">
              <div class="assortment-item-left">
                <img src="./city.png">
                <p>城市代理申请</p>
              </div>
              <div class="assortment-item-right">
                <img>
                <p>最高6个月免抽佣</p>
              </div>
            </div>
            <div class="assortment-item bottomborder" v-show="isLogin">
              <div class="assortment-item-left">
                <img src="./goldmoney.png">
                <p>我要借款</p>
              </div>
              <div class="assortment-item-right">
                <img src="./hot.png" width="42" height="23">
                <p>低门槛急速放款</p>
              </div>
            </div>
            <div class="assortment-item bottomborder" v-show="isLogin">
              <div class="assortment-item-left">
                <img src="./game.png">
                <p>玩游戏领红包</p>
              </div>
              <div class="assortment-item-right">
                <img>
                <p>大额红包任性领</p>
              </div>
            </div>
            <div class="assortment-item bottomborder" v-show="isLogin">
              <div class="assortment-item-left">
                <img src="./flow.png">
                <p>免费流量</p>
              </div>
              <div class="assortment-item-right">
                <img>
                <p>每月最高500M</p>
              </div>
            </div>
            <div class="assortment-item bottomborder" v-show="isLogin">
              <div class="assortment-item-left">
                <img src="./heart.png">
                <p>饿公益</p>
              </div>
              <div class="assortment-item-right">
                <img>
                <p>点餐也能做公益</p>
              </div>
            </div>
            
          </div>

          <div class="assortment">
            <div class="assortment-item bottomborder">
              <div class="assortment-item-left">
                <img src="./customservice.png">
                <p>我的客服</p>
              </div>
            </div>
            <div class="assortment-item bottomborder">
              <div class="assortment-item-left">
                <img src="./evaluate.png">
                <p>欢迎评分</p>
              </div>
            </div>
            <div class="assortment-item bottomborder">
              <div class="assortment-item-left">
                <img src="./cooperation.png">
                <p>加盟合作</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </transition>
     
    <transition name="fade">
      <!-- 登录界面 -->
      <div v-show="loginShow" class="login-show">
        <div class="login">
          <div class="login-top">
            <div class="login-top-left">
              <img src="./back.png" width="24" height="24" v-on:click="back_to_user()">
              <p>登录</p>
            </div>
            <div class="register-skip" v-on:click="showregister()">注册</div>
          </div>
          <div class="login-cnt">
            <input type="text" placeholder="账号/手机/邮箱" class="login-account-number bottomborder" v-model="str1">
            <input type="password" placeholder="密码" class="login-password" v-model="str2">
            <input type="button" class="login-botton" value="登录" v-on:click="userlogin()">
            <div class="forget">
              <p>忘记密码?</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <!-- 注册界面 -->
      <div v-show="registerShow" class="register-show">
        <div class="register">
          <div class="register-top">
            <div class="register-top-left">
              <img src="./back.png" width="26" height="26" v-on:click="back_to_login()">
              <p>注册</p>
            </div>
          </div>
          <div class="register-cnt">
            <input type="text" placeholder="用户名" class="register-name bottomborder" v-model="str5">
            <input type="text" placeholder="账号/手机/邮箱" class="register-account-number bottomborder" v-model="str3">
            <input type="password" placeholder="密码" class="register-password" v-model="str4">
            <input type="button" class="register-botton" value="注册" v-on:click="userregister()">
          </div>
        </div>
      </div>
    </transition> 

    <transition name="fade">
      <!-- 设置界面(含退出) -->
      <div v-show="settingShow" class="setting-show">
        <div class="setting">
          <div class="setting-top">
            <div class="setting-top-left">
              <img src="./back.png" width="26" height="26" v-on:click="back_to_user()">
              <p>设置</p>
            </div>
          </div>
          <div class="setting-cnt">
            <div class="setting-cnt-items">
              <div class="setting-cnt-item bottomborder">
                <p class="bigword">账号与安全</p>
                <p class="smallword">开启小额免密支付</p>
              </div>
              <div class="setting-cnt-item">
                <p class="bigword">通用</p>
              </div>
            </div>
            <div class="setting-cnt-items">
              <div class="setting-cnt-item">
                <p class="bigword">关于饿了么</p>
              </div>
            </div>
            <div class="logoff" v-on:click="log_off()" v-show="isLogin">
              <p>退出登录</p>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <!-- 弹窗 -->
    <div class="bg" v-show="isShow">
      <div class="pop-up">
        <div class="pop-up-header">
          <p>提示</p>
        </div>
        <div class="pop-up-cnt">
          <p>{{info}}</p>
        </div>
        <div class="pop-up-quit" v-on:click="quit()">
          <p>确认</p>
        </div>
      </div>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script type="text/ecmascript-6">
  // import BScroll from "better-scroll";
  import tabbar from '../tabbar/tabbar.vue'
  export default{
    data(){
      return{
        username: "立 即 登 陆",
        userid: "登陆后可享受更多特权",
        userShow: true,
        loginShow: false,
        registerShow: false,
        settingShow: false,
        isLogin: false,
        isShow: false,
        info: "",
        str1: "",
        str2: "",
        str3: "",
        str4: "",
        str5: "",
        scrollY: 0
      }
    },
    methods:{
      showlogin: function(){
        if(!this.isLogin){
          this.str1="";
          this.str2="";
          this.userShow=false;
          this.loginShow=true;
        }
      },
      showregister: function(){
        this.str3="";
        this.str4="";
        this.str5="";
        this.loginShow=false;
        this.registerShow=true;
      },
      showsetting: function(){
        this.userShow=false;
        this.settingShow=true;
      },
      back_to_user: function(){
        if(this.loginShow==true){
          this.loginShow=false;
        }
        if(this.settingShow==true){
          this.settingShow=false;
        }
        this.userShow=true;
      },
      back_to_login: function(){
        this.str1="";
        this.str2="";
        this.registerShow=false;
        this.loginShow=true;
      },
      userlogin: function(){
        if(this.str1==""|| this.str2==""||this.str1==null || this.str2==null){
          this.info="账号或密码不能为空";
          this.isShow=true;
        }
        else{
          this.$axios.get("http://localhost:8080/phpbin/userlogin.php",{
            params: { "id": this.str1, "psw": this.str2}
          }).then(res=>{
            console.log(res.data);
            if(res.data['id']==this.str1){
              this.username=res.data['name'];
              this.userid=res.data['id'];
              this.loginShow=false;
              this.isLogin=true;
              this.userShow=true;
              document.getElementById("user-show").style.height="100%";
            }
            else{
              this.info="账号或密码错误";
              this.isShow=true;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      userregister: function(){
        if(this.str3=="" || this.str4==""||this.str3==null || this.str4==null||this.str5==null||this.str5==""){
          this.info="用户名或账号或密码不能为空";
          this.isShow=true;
        }
        else{
          this.$axios.get("http://localhost:8080/phpbin/userregister.php",{
            params: { "id": this.str3, "psw": this.str4, "name": this.str5 }
          }).then(res=>{
            console.log(res.data['id']);
            if(res.data['id']==this.str3){
              this.username=res.data['name'];
              this.userid=res.data['id'];
              this.isLogin=true;
              this.registerShow=false;
              this.userShow=true;
            }
            else{
              this.info="注册失败";
              this.isShow=true;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      log_off: function(){
        this.isLogin=false;
        this.settingShow=false;
        this.userShow=true;
        this.username="立 即 登 录";
        this.userid="登陆后可享受更多特权";
      },
      quit: function(){
        this.isShow=false;
      }
    },
    components: {
      tabbar: tabbar
    }
    // mounted(){
    // this.$nextTick(() => {
    //     let bscrollDom = this.$refs.bscroll;
    //     this.aBScroll = new BScroll(bscrollDom,{})
    //   })
    // }
  };
  
</script>

<style type="text/css">

  .bscroll{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  p{
    margin: 0;
  }
  .user{
    background-color: rgb(245, 245, 245);
    height: 100%;
    /* display: flex; */
  }

  /* 用户界面 */
  .user-show{
    height: 100vh;
  }
  .uesr-top{
    position: fixed;
    height: 54px;
    width: 100%;
    background:linear-gradient(left, rgb(17, 170, 255), rgb(23, 134, 255));
    padding: 15px 15px 0 15px;
    display: flex;
    justify-content: space-between;
  }
  .uesr-top-left{
    font-size: 19px;
    color: white;
    font-weight: 600;
  }
  .uesr-top-right{
    display: flex;
  }
  .setting-icon{
    margin-left: 20px;
  }
  .login-btn{
    display: flex;
    width: 100vw;
  }
  .user-login{
    height: 140px;
    width: 100%;
    /* background:linear-gradient(left, rgb(1, 170, 255), rgb(1, 134, 255)); */
    /* padding: 30px 15px 0 15px; */
    display: flex;
    margin-top: 52px;
  }
  .login-icon{
    background:linear-gradient(left, rgb(15, 171, 255), rgb(3, 162, 255));
    padding: 25px 0 0 20px;
  }
  .login-main{
    color: white;
    width: 100%;
    background:linear-gradient(left, rgb(3, 162, 255), rgb(23, 134, 255));
    padding: 35px 5px 0 20px; 
    display: flex;
    justify-content: space-between;
  }
  .login-main div p{
    margin-top: 7px;
  }
  .right{
    margin-top: 25px;
  }
  .user-cnt{
    margin-bottom: 67px;
  }
  .money{
    display: flex;
    height: 90px;
    width: 100vw;
    border: 1px solid rgb(240, 240, 240);
    background-color: white; 
  }
  .money-item{
    width: 33.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgb(144, 144, 144);
  }
  .money-item img{
    margin-bottom: 4px;
  }
  .money-item-data{
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .big{
    font-size: 22px;
    margin: 0;
  }
  .small{
    font-size: 12px;
    margin: 0 0 4px 2px;
  }
  .assortment{
    width: 100vw;
    margin-top: 10px;
    border: 1px solid rgb(240, 240, 240);
    border-bottom: 0;
    background-color: white;
  }
  .assortment-item{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 50px;
  }
  .assortment-item-left, .assortment-item-right{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    font-weight: bold;
    font-size: 15px;
  }
  .assortment-item-right p{
    font-size: 12px;
    font-weight: normal;
    color: rgb(156, 156, 156);
  }
  .assortment-item-left img{
    margin-right: 13px;
    height: 21px;
    width: 21px;
  }
  .assortment-item-right img{
    margin-right: 13px;
  }
  
  /* 登陆界面  注册界面 设置界面*/
  .register-show, .login-show, .setting-show{
    height: 100vh;
    width: 100%;
    background-color: rgb(245, 245, 245);
  }
  .login, .register{
    width: 100%;
  }
  .login-top, .register-top, .setting-top{
    height: 54px;
    width: 100%;
    background:linear-gradient(left, rgb(1, 170, 255), rgb(1, 134, 255));
    padding: 0px 20px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 19px;
    font-weight: bold;
  }
  .login-top-left, .register-top-left, .setting-top-left{
    display: flex;
    align-items: center;
  }
  .login-top-left p, .register-top-left p, .setting-top-left p{
    margin: 0 20px;
  }
  .login-cnt, .register-cnt, .setting-cnt{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0 50px 0;
  }
  .setting-cnt{
    padding: 0 0 20px 0;
  }
  .login-account-number, .login-password,
  .register-account-number, .register-password,
  .register-name{
    height: 48px;
    width: 100%;
    padding: 0 10px;
    border: 0;
  }
  .login-botton, .register-botton{
    color: white;
    background-color: rgb(17, 215, 97);
    height: 45px;
    width: 90%;
    border: 0;
    outline: none;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    border-radius: 4px;
  }
  .forget{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 50px;
    padding-right: 5%;
    color: rgb(47, 157, 212);
  }
  .forget p{
    margin: 0;
  }
  .setting-cnt-items{
    margin-top: 10px;
    border: 1px solid rgb(245, 245, 245);
    height: 100%;
    width: 100%;
  }
  .setting-cnt-item, .logoff{
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    background-color: white;
  }
  .bigword{
    font-size: 18px;
    font-weight: bold;
  }
  .smallword{
    font-size: 14px;
    color: rgb(156, 156, 156);
  }
  .logoff{
    font-size: 21px;
    font-weight: bold;
    color: rgb(218, 88, 74);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  /* 弹窗 */
  .bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0 ,0.3);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .pop-up{
    width: 80%;
    height: 190px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    border-radius: 3px;
  }
  .pop-up-header{
    width: 100%;
    color: rgb(75, 75, 75);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
    font-size: 16px;
    font-weight: bold;
  }
  .pop-up-cnt{
    height: 90px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .pop-up-quit{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  /* 动画效果 */
  .fade-enter-active, .fade-leave-active{
    transition: 0.2s;
  }
  .fade-enter, .fade-leave-to{
    margin-left: -100vw;
  }
  .fade-enter-to, .fade-leave{
    margin-left: 0;
  }



  .bottomborder{
    border-bottom: 1px solid rgb(240, 240, 240);
  }
  .rightborder{
    border-right: 1px solid rgb(240, 240, 240);
  }
  .font21{
    font-size: 18px;
    font-weight: 700px;
  }
  .font14{
    font-size: 13px;
  }
</style>