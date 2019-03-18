<template>
  <div id="app">
       <!-- fixed head -->
       <mt-header fixed title="FFancy" icon="back">
           
                <mt-button slot="left" icon="back" @click="back" v-show = "this.$route.path == '/' ? false : true">back</mt-button>
                
       </mt-header>
       <!-- 中间内容块 -->
      <div class = "content">
          <transition>
              <router-view></router-view>
          </transition>     
      </div> 
      <!-- 底部 footer -->
      <div class = "footer">
          <mt-tabbar>
              <router-link to="/" tag = "div" class = "mint-tab-item"> 
                  <mt-tab-item> 
                    <img slot="icon" src="./font/home-fill.svg">
                        首页  
                  </mt-tab-item>
              </router-link> 
            <router-link to="/memberPage" tag = "div" class = "mint-tab-item">
              <mt-tab-item>
                  <img slot="icon" src="./font/user.svg">
                        会员
              </mt-tab-item>
            </router-link>
            <router-link  to="/shoppingCar"  tag = "div" class = "mint-tab-item">
                  <mt-tab-item class = "item-ball">
                      <span class = "mui-badge" id  = "badge">{{ this.$store.state.count }}</span>
                      <img slot="icon" src="./font/gouwu.svg">
                          购物车
                         
                  </mt-tab-item>
            </router-link>    
            <router-link  to="/myPage"  class = "mint-tab-item">
                <mt-tab-item>
                  <img slot="icon" src="./font/nan.svg"  tag = "div" class = "mint-tab-item">
                      我的
                </mt-tab-item>
            </router-link>
        </mt-tabbar>
      </div>
  </div>
</template>
<script>
import  store from './store/store.js'
export default {
    store,
    methods:{
        back(){
            window.history.go(-1)
        },
        fn(){
            console.log(this.$route)
        }
    },
    created(){
        this.fn()
    }
}
</script>

<style lang="scss">
      body{
            padding:0;
            margin:0;
            background-color: #eee;
        #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #526375;
          width:100%;
          padding:40px 0 70px 0;
          .mint-header.is-fixed {
            z-index:999;
            font-size:18px;
          }
          li{
            list-style: none;
          }
          .content{
            width:100%;
            background-color: #fff;
            v-enter{
                opacity: 0;

            }
          }
          .footer{
           
            .mint-tabbar{
              position:fixed;
               z-index:9999;
                .item-ball{
                    position: relative;
                    .mui-badge{
                        background-color: #ff0024f2;
                        position:absolute;
                        top:1px;
                        right:58px;
                        color:khaki;
                    }
                }
               
            }
          }
        }
      
    }

</style>
