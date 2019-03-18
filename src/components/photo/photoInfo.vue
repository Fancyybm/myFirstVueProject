<template>
     <div class = "photoInfo">
        <h3 class = "title">{{ ImgInfo.title }}</h3>
        <p class = "subtitle">
            <span>发表时间:{{ImgInfo.add_time | dateFmt}}</span>
            <span>点击：{{ ImgInfo.click}}</span>
        </p>
        <hr>
        <div class="smallImg">
           <vue-preview
                :list = "list"
                 :thumbImageStyle="{width: '300px', height: '200px', margin: '10px'}"
                :previewBoxStyle="{border: '1px solid #eee'}"
                :tapToClose="true"
                @close="closeHandler"
                @destroy="destroyHandler"
            />
        </div>
        <div class = "content" >
            <p v-html = "ImgInfo.content"></p>
        </div>
       <comments></comments>
    </div>
</template>
<script>
import   { getNew,getComment}   from '../../api/index.js'
import comments from '../comments'
export default {
    data(){
        return {
            list: [],
            ImgInfo:{}
            
        }
    },
    methods:{
         getSmallImg(id){
             this.axios.get('/api/getthumimages/'+id).then(res=>{
                 res.data.message.forEach(element => {
                    element.w = 600
                    element.h = 400
                    element.msrc = element.src
                    this.list.push(element)
                 });
                 
             })
         },
         getImgeInfo(id){
            this.axios.get('/api/getimageInfo/'+id).then(res=>{
                this.ImgInfo = res.data.message[0]
            })
         },
        closeHandler() {
            console.log('closeHandler')
        },
            // 完全关闭之后，调用这个函数清理资源
        destroyHandler() {
            console.log('destroyHandler')
        }
  
    },
    components:{
        comments
    },
    created(){
        this.getSmallImg(this.$route.params.id)
        this.getImgeInfo(this.$route.params.id)
    }
}
</script>
<style lang = "scss">
    .photoInfo{
         .title{
            text-align: center;
            padding:15px 0 10px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            color:chocolate;
            font-size:16px;
            padding: 0 5px;
        }
        .content{
            padding: 10px 10px;
            p{
                color:cadetblue;
                font-size:18px;
                line-height: 24px;
                
            }
            
        }
    }
     
</style>
