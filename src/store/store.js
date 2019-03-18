//导入vuex 
import Vue from 'Vue'
import Vuex from 'Vuex'
Vue.use(Vuex)

export default  
new  Vuex.Store({
        state:{
            count:0
        },
        mutations:{
            getQuantity(state){
               
                let goods = JSON.parse(localStorage.getItem('goods'))
                let sum = 0
                goods.forEach(element => {
                    sum += parseInt(element.count);
                    
                });
                state.count = sum
                console.log(sum)

            }
        },
        getters:{}
})