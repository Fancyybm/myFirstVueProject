<template>
    <div id = "photo">
       <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
                <a :class="['mui-control-item', i==0 ? 'mui-active':''] "  v-for = "(item,i) in data" :key = "item.id"  @click = "toggleImg(item.id)">
                    {{ item.title }}
                </a>
            </div>
            <div class="img">
                <ul>
                    <router-link v-for = "item in photolist"  :key = "item.id" class = "photolist" @click = "getImgInfo(item.id)" :to = "'/photoInfo/'+item.id" >
                        <img :src="item.img_url" alt="">
                       
                        <div class="cover">
                            <h4>{{ item.title }}</h4>
                            {{ item.zhaiyao }}
                        </div>
                    </router-link>
                </ul>
            </div>
        </div> 
    </div>
</template>
<script>
    import mui from '@/mui/js/mui.js'
    export default {
        data(){
            return {
                data:[],
                photolist:[]
             
            }
        },
        methods:{
            getCategories(){
                this.axios.get('/api/getimgcategory').then(res=>{
                 
                    this.data = res.data.message
                    this.data.unshift({ title: "全部", id:0 })
                    
                })
            },
            getImg(){
                this.axios.get('/api/getimages/0').then(res=>{
                  
                    this.photolist = res.data.message
                
                })
            },
            toggleImg(id){
                this.axios.get('/api/getimages/'+id).then(res=>{
                        this.photolist = res.data.message
                       
                })
            },
            getImgInfo(id){
                this.axios.get('/api/getthumimages/'+ id ).then(res=>{
                   
                   
                })
            }
        },
        created(){
            this.getCategories()
            this.getImg()
           
        },
        mounted(){
             mui('.mui-scroll-wrapper').scroll({
	            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        }
    }
</script>
<style lang ="scss" scoped>
    #photo{
        ul{
            padding: 20px 40px;
            .photolist{
                position:relative;
                list-style: none;
                margin-top:10px;
                img{
                    width: 100%;
                    text-align: center;
                }
                .cover{
                    width: 100%;
                    position:absolute;
                    bottom: 0;
                    left:0;
                    background-color: rgba(0,0,0,0.3);
                    color:#fff;
                    text-align: left;
                    line-height: 20px;
                    
                    h4{
                         font-weight: normal;
                    }
                   
                }
            }
        }
        
    }
</style>


