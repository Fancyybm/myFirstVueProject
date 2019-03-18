<template>
    <div class = "newsInfo">
        <h3 class = "title">{{info.title}}</h3>
        <p class = "subtitle">
            <span>{{info.add_time}}</span>
            <span>点击：{{info.click}}</span>
        </p>
        <hr>
        <div class = "content" v-html = "info.content">
        </div>
       <comments></comments>
    </div>
</template>
<script>

import   { getNew,getComment}   from '../api/index.js'
import comments from './comments'
export default {
    data(){
        return {
            info:{}
          
        }
    },
    methods:{

    },
    components:{
        comments
    },
    created(){
        getNew({id:this.$route.params.id}).then(res=>{this.info = res.data.message[0]});
    }

}
</script>
<style lang="scss" scoped>
    .newsInfo{
        .title{
            text-align: center;
            padding:15px 0 10px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            color:blue;
            padding: 0 5px;
        }
      
    }
</style>

