<template>
     <div class = "main">    
        <lunbo ref = "lunbo"></lunbo>
         <div class = "list">
             <ul>
                 <li>
                     <router-link to = "/newsList">
                         <img src="../images/menu1(1).png" alt="">
                        <p>
                            新闻列表
                        </p>
                     </router-link>
                 </li>
                 <li>
                     <router-link to = "/photoList">
                           <img src='../images/menu2.png' alt="">
                           <p>图片分享</p>
                     </router-link>
                 </li>
                 <li>
                    <router-link to = "/productList">
                        <img src="../images/menu3.png" alt="">
                        <p>商品购买</p>
                    </router-link>
                 </li>
                 <li>
                     <img src="../images/menu4.png" alt="">
                     <p>留言反馈</p>
                 </li>
                 <li>
                     <img src="../images/menu5.png" alt="">
                    <p>视频专区</p>
                 </li>
                 <li>
                     <img src="../images/menu6.png" alt="">
                    <p>联系我们</p>
                 </li>
             </ul>
         </div>     
     </div>
     
</template>
<script>
import lunbo from './subComponent/lunbotu.vue'

export default {
    data(){
        return {
            list:[]
        }
           
    },
    methods:{
  
    },
    components:{
        lunbo
    },
    created(){
        
    },
    mounted(){
        this.$refs.lunbo.getInfo('/api/getlunbo')
    }
}
</script>
<style lang="scss" scoped>
    .main{
       
        .list{
            ul{
                width:100%;
                padding:10px;
                box-sizing:border-box;
                overflow: hidden;
                
                li{
                    width:33.3%;
                    list-style:none;
                    float:left;
                    text-align: center;
                   
                    img{
                        width: 80px;
                        height: 80px;
                    }
                    p{
                        padding:0;
                        margin:10px 0;
                    }
                }
            }
        }
         .lunbo{
            height: 400px;
            .mint-swipe img{
                width:100%;
                height:400px;
            }
        }
    }
    
   
  
</style>





