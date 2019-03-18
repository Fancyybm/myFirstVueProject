<template>
    <div>
        <div class = "prolunbo">   
            <lunbo ref = "lunbo"></lunbo>
        </div>
        <div class="mui-card">
            <!--页眉，放置标题-->
            <div class="mui-card-header">商品名称</div>
            <!--内容区-->
            <div class="mui-card-content">
                <ul>
                    <li>
                         市场价: <del>￥9999</del>&nbsp;&nbsp;
                         销售价：<strong> ￥1 </strong>
                    </li>
                    <li>
                        
                      购买数量：
                        <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
                            <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                            <input class="mui-numbox-input" type="number" ref = "store_quantity"/>
                            <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                        </div>
                    </li>
                    <li class = "right">
                        <button class = "mui-btn mui-btn-primary">立即购买</button>&nbsp;&nbsp;
                        <button class = "mui-btn mui-btn-danger" @click = "addToCar">加入购物车</button>
                        <transition
                            @before-enter = "beforeEnter"
                            @enter = "enter"
                            @after-enter = "afterEnter"
                        >
                            <span class = "ball" v-if = "ballFlag"  ref = "ball"></span>
                        </transition>
                    </li>
                </ul>
            </div>
            <!--页脚，放置补充信息或支持的操作-->
            <!-- <div class="mui-card-footer">页脚</div> -->
        </div>
    </div>
   
     
</template>
<script>
import lunbo from '../subComponent/lunbotu.vue';
import mui from '@/mui/js/mui.js'

export default {
    data(){
        return {
            list:[],
            ballFlag:false
        }
           
    },
    methods:{
            addToCar(){
                this.ballFlag = !this.ballFlag
        
                //同步购物车图标数量
                this.timeout = setTimeout(()=>{
                        this.$store.commit("getQuantity",this.$refs.store_quantity.value)
                }, 500)

                //将商品id和count存储在本地
                const gbuy = {id:this.$route.params.id,count:this.$refs.store_quantity.value}
                if(!localStorage.getItem('goods')){
                    var arr = [] 
                    arr.push(gbuy)
                }else{
                    var arr = JSON.parse(localStorage.getItem('goods'))
                    arr.some(v=>{
                       v.count = parseInt(v.count)
                       if(v.id == gbuy.id)  v.count += parseInt(gbuy.count)
                       else arr.push(gbuy)
                   }) 
                }
                
                 localStorage.setItem('goods',JSON.stringify(arr))


            },
            beforeEnter(el){
                el.style.transition = "translate(0,0)"
            },
            enter(el,done){
                //让页面实时刷新
                el.offsetWidth
                
                //获取小球在页面上面的位置
                const ballPosition = this.$refs.ball.getBoundingClientRect();
                const badgePosition = document.getElementById('badge').getBoundingClientRect()
              

                const distanceX =  badgePosition.left -  ballPosition.left + 'px'
                const distanceY =   badgePosition.top - ballPosition.top + 20 + 'px'

               
                el.style.transform = `translate(${distanceX},${distanceY})`
                el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
                done()
            },
            afterEnter(el){
                this.ballFlag = !this.ballFlag
        
                 
            }
    },
    components:{
        lunbo
    },
    created(){
       
        
    },
    
    mounted(){
        this.$refs.lunbo.getInfo('/api/getthumimages/'+ this.$route.params.id)
        mui('.mui-numbox').numbox().getValue()
    }
}
</script>
<style lang="scss" scoped>
    .prolunbo{
        padding:20px 40px;
        margin:20px 20px;
        border:1px solid #ccc;
        box-shadow: 0px 0px 8px #ccc;
         /deep/ .lunbo{
            height: 200px;
            text-align: center;
            .mint-swipe img{
                width: 400px;
            }
        }
    }
    .mui-card{
         overflow:inherit;
        
        .mui-card-header{
            font-size:20px;
        }
        .mui-card-content{
            padding:5px 15px;
            color:#999;
            ul{
                padding:0;
                li{
                    font-size:18px;
                    margin-top:10px;
                }
                .right{
                    position:relative;
                    .ball{
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        border-radius: 7px;
                        background-color:cornflowerblue;
                        position:absolute;
                        top:-18px;
                        left:136px;
                        z-index:99999999;
                    }
                }
            }
        }
    }
  
</style>





