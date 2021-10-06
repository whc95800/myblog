import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/login/Login";
import Home from "@/components/home/Home";
import blogCreat from "@/components/users/blogCreat";
import blogEdit from "@/components/users/blogEdit";
import blogList from "@/components/users/blogList";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden:true
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden:true,
  },

  {
    path: '/blogList',
    name: 'blogList',
    component: blogList,
    beforeEnter:(to,from,next)=>{
      let token = sessionStorage.getItem("token")
      if(token){
        next();
      }else {
        next("/login");
      }
    },
    children:[
      {
        path: '/blogList/blogedit',
        name: '博文编辑',
        component: blogEdit,
      },
      {
        path: '/blogList/blogcreat',
        name: '新建博文',
        component: blogCreat,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
