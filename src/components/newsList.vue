<template>
    <div>
        <ul class="mui-table-view">
            <router-link :to = "'/newsInfo/'+item.id"  tag = "li"  class="mui-table-view-cell mui-media" v-for = "(item,i) in newslist" :key = "i">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{ item.title}}
                        <p class='mui-ellipsis'>发表于 {{ item.add_time | dateFmt }}</p>
                    </div>
            </router-link>
            
        </ul>
        <!-- <div class="mui-card-header mui-card-media" v-for = "(item,i) in newslist" :key = "i">
	        <img :src="item.img_url" />
	        <div class="mui-media-body">
		        {{ item.title }}
		        <p>发表于{{ item.add_time }}</p>
	        </div>
</div> -->
    </div>
</template>
<script>
import moment from 'moment'
export default {
    data(){
        return {
            newslist:[]
        }
    },
    methods:{
        getNewsList(){
            this.axios.get('/api/getnewslist').then(res=>{
                this.newslist = res.data.message
                console.log(this.newslist)
            })
        }
    },
    created(){
        this.getNewsList()
    },
    // },
    filters:{
        'dateFmt':function(date,pattern="YYYY-MM-DD HH:mm:ss"){
            return moment(date).format(pattern)
        }
    }
}
</script>
<style lang="scss" scoped>
    .mui-card-media{
        img{
            width: 40px;
        }
    }
</style>


