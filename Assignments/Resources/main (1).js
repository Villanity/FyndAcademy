import Vue from 'vue'
// import App from './App.vue'
import navBar from './components/routers/navBar'
import VueRouter from 'vue-router'
import AppRouter from './AppRouter.vue'
import homeDemo from './components/routers/homeDemo';
import aboutDemo from './components/routers/aboutDemo';
import contactDemo from './components/routers/contactDemo';
import pagenotFound from './components/routers/pagenotFound';
import userDemo from './components/routers/userDemo';
import queryDemo from './components/routers/queryDemo'
Vue.use(VueRouter)
Vue.component("navBar",navBar)
const routes=[
  {path:'/', component:homeDemo},
  {path:'/about', component:aboutDemo},
  {path:'/contact', component:contactDemo},
  {path:'/user', component:userDemo},
  {path:'/user/:userid', component:userDemo},
  {path:'/user/:userid/:location', component:userDemo},
  {path:'/querydemo', component:queryDemo},
  {path:'/querydemo',query:{id:'id',username:'username'}, component:queryDemo},
  {path:'*',component:pagenotFound}
]

const router=new VueRouter({mode:'history',routes})
Vue.config.productionTip = false



Vue.directive('size',{
  bind(el,binding){
    console.log(el.textnode);
    if(binding.value=='small'){
      el.style.fontSize='20px'
    }
    else if(binding.value=='big'){
      el.style.fontSize='100px'

    }
    else
    el.style.fontSize='50px'
  }
})


Vue.filter('Ucase',function(val){
  return val.toUpperCase();
})


Vue.filter('perConv',function(val){
  return val*9.5;
})

Vue.filter('conv',function(val){
  return val/80;
})
Vue.directive('changestyle',{
  bind(el){
    el.style.color='tomato'
    el.style.backgroundColor='black'
  }
})

new Vue({
  router:router,
  render: h => h(AppRouter),
}).$mount('#app')
