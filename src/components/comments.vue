<template>
     <div class="comment">
            <h4>发表评论</h4>
            <hr>
            <div>
                <textarea maxlength="100" placeholder="请输入要吐槽的内容(100字不能更多了)" v-model = "mycmt" @keyup.enter = "addComment"></textarea>
                <button type="button" class="mui-btn mui-btn-primary comm" @click = "addComment">发表评论</button> 
            </div>
            <div class="cmtlist">
               <div class="item" v-for = "(item,i) in comment" :key = "i">
                   <div class = "item_hd">
                       <span> 第{{ i+1 }}楼</span>
                       <span> 用户: {{ item.user_name }} </span>
                       <span> 发表时间: {{ item.add_time | dateFmt }} </span> 
                   </div>
                   <div class = "item_body">
                       {{ item.content }}
                   </div>
               </div>
               <button type="button" class="mui-btn mui-btn-primary comm" @click = "getMore">加载更多</button>
            </div>
        </div>
        
</template>
<script>
import   { getNew,getComment}   from '../api/index.js'
import comments from './comments'
export default {
    data(){
        return {
              comment:[],
                page:1,
                mycmt:null
        }
    },
    methods:{
         getMore(){
           this.page++;
           getComment({id:this.$route.params.id,page:this.page}).then(res=>{
            console.log(res.data.message);
            this.comment = this.comment.concat(res.data.message)})
        },
           addComment(){
            const data = {artid:this.$route.params.id,content:this.mycmt,add_time:Date.now()}
            this.axios.post('/api/postcomment/'+this.$route.params.id,data).then(res=>{
                this.comment.unshift(data)
                this.mycmt = ''
            })
        }
    },
  
    created(){
        getComment({id:this.$route.params.id,page:this.page}).then(res=>{
            console.log(res.data.message);
            this.comment = res.data.message})
        
    }
}
</script>
<style lang = "scss">
      .comment{
            margin-top:20px;
            padding: 0 10px;
            .comm{
                width: 100%;
                height: 40px;
            }
            .cmtlist{
                margin-top:20px;
                .item_hd{
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    background-color: #ccc;
                    padding:0 5px;
                    span{
                        display: inline-block;
                        margin-left:20px;
                    }
                }
                .item_body{
                    width: 100%;
                    min-height: 30px;
                    padding: 10px;

                }
            }
        }
</style>


