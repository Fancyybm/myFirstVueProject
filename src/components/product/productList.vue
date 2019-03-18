<template>
    <div>
        <scroller :on-refresh="refresh" :on-infinite = "infinite"  ref="myscroller">
        <div class="productlist">
            <ul>
                <li  v-for = "item in productList"  :key = "item.id"   tag = "li"  @click = "goProduct(item.id)" >
                    <img v-lazy="item.img_url" alt="">
                </li> 
            </ul>
        </div>
        </scroller>
    </div>
</template>
<script>
import Vue from 'vue'
import VueScroller from 'vue-scroller'

export default {
    data(){
        return {
            productList:[],
            page:2
        }
    },
    methods:{
        getProductList(){
            this.axios.get('/api/getgoods?pageindex=1').then(res=>{
                res.data.message.forEach(element => {
                    this.productList.push(element)
                });
            })
        },
        // 下拉刷新
        refresh(done){
            this.axios.get('/api/getgoods?pageindex=1').then(res=>{
                  
                    this.productList = res.data.message
            })
            this.timeout = setTimeout(()=>{
                 
                this.$refs.myscroller.finishPullToRefresh()
            }, 1500)
            
        },
        // 上拉加载
        infinite(){
                this.axios.get('/api/getgoods?pageindex=' + this.page ).then(res=>{
                    if(res.data.message.length === 0){
                             this.noDataText ="无更多数据"
                             this.$refs.myscroller.finishInfinite(true) 
                             return
                    }else{
                           res.data.message.forEach(element => {
                                this.productList.push(element)
                            })
                            this.page++
                            this.$refs.myscroller.finishInfinite(false)   
                    }
                })
                
        },
        goProduct(id){
            console.log(id)
            this.$router.push({name:"productInfo",path:'/productInfo',params:{id}})
           
        }
    },
    created(){
        this.getProductList()
         
    },
    munted(){
      
           
    }        
}
</script>
<style lang="scss" scoped>
    .productlist{
    
        ul{
      
            width: 100%;
            overflow: hidden;
            padding:20px 0;
            li{
                float:left;
                width: 48%;            
                margin:1%;
                // box-shadow: 0px 0px 8px #ccc;
                border:1px solid #ccc;
                img{
                    width: 100%;
                    height: 100%;
                      font-size:0;
                      vertical-align: top;
                }
            }
        }
    }
</style>

