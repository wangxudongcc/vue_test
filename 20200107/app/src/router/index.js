import Vue from 'vue'
import VueRouter from 'vue-router'
import BeforeEach from '../components/beforeEach.vue'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:BeforeEach,
        children:[
            {
                path:'foo2',
                component:()=>import('../components/foo2.vue'),
                meta:{requireAuth:true}
            },{
                path:'foo3',
                component:()=>import('../components/foo3.vue'),
                meta:{requireAuth:true}
            },
            {
                path:'foo4',
                component:()=>import('../components/foo4.vue')
            },
        ]
    },{
        path:'/login',
        component:()=>import('../components/login.vue')
    },{
        path:'*',
        component:()=>import('../views/404.vue')
    }
]
const router = new VueRouter({
    mode:'history',
    routes
})

let toPath = '';
router.beforeEach((to,from,next)=>{
    if(to.matched.some(item=>item.meta.requiresAuth)){
      if(toPath != to.path){
          toPath =to.path;
          fetch('http://localhost:80/islogin').then(e=>e.json()).then(data=>{
              if(data.code ===0){
                  next();
              }else{
                  next({
                      path:'/login',
                      replace:true
                  })
              }
          })
      } 
      if(!localStorage.getItem('login')){
          next({
              path:'/login?topath='+to.path
          });
      }else{
          next();
      }
      
    }
    else {
        next();
    }
})

export default router;