<template>
    <div>
          <div class="lunbo">
              <mt-swipe :auto="4000" >
                    <mt-swipe-item  v-for = "item in list" :key = "item.id">   
                            <img :src="item.img" alt="">
                    </mt-swipe-item>
                </mt-swipe>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list:[]
        }
    },
    methods:{
        getInfo(url){
                 this.axios.get(url).then(res=>{
                     res.data.message.forEach(element => {
                         if(!element.img){
                            element.img= element.src
                         }
                     
                         this.list.push(element)
                     });
                  
                })
            }
    },
    created(){
                                                                                                 
    }
}
</script>
<style lang="scss" >
    .lunbo{
            height: 400px;
            .mint-swipe img{
                width:100%;
                height:400px;
            }
        }
</style>