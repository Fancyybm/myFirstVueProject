import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import indexPage from './components/indexPage.vue'
import memberPage from './components/memberPage.vue'
import myPage from './components/myPage.vue'
import carPage from './components/carPage.vue'
import newsList from './components/newsList.vue'
import newsInfo from './components/newsInfo'
import photoList from './components/photo/photoList'
import photoInfo from './components/photo/photoInfo'
// import productList from './components/product/productList'
// import productInfo from './components/product/productInfo'
export default new Router({
  routes: [
      {path:'/',component:indexPage},
      {path:'/memberPage',component:memberPage},
      {path:'/myPage',component:myPage},
      {path:'/carPage',component:carPage},
      {path:'/newsList',component:newsList},
      {path:'/newsIonfo/:id',component:newsInfo},
      {path:'/photoList',component:photoList},
      {path:'/photoInfo/:id',component:photoInfo},
      {path:'/productList',component: ()=>import('./components/product/productList')},
      {name:'productInfo',path:'/productInfo',component:()=>import('./components/product/productInfo')},
      {path:'shoppingCar',path:'/shoppingCar', component: ()=> import ('./components/product/shoppingCar')}
  ]
})
