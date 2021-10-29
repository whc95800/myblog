import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/components/login/Login";
import Blogs from "@/components/home/Blogs";
import Home from "@/components/home/Home";
import blogCreat from "@/components/users/blogCreat";
import managementPage from "@/components/users/managementPage";
import blogList from "@/components/users/blogList";
import userEdit from "@/components/users/userEdit";
import blogContents from "@/components/home/blogContents";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    hidden:true,
    children:[
      {
        path: '/blogs',
        name: 'Blogs',
        component: Blogs,
      },
      {
        path: '/blogs/:id',
        name: 'blogContents',
        component: blogContents,
      },
      ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    hidden:true,
  },

  {
    path: '/management',
    name: 'management',
    component: managementPage,
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
        path: '/management/blogList',
        name: 'blogList',
        component: blogList,
      },
      {
        path: '/management/blogCreat',
        name: 'blogcreat',
        component: blogCreat,
      },
      {
        path: '/blogEdit/:id',
        name: 'blogEdit',
        component: userEdit,
        hidden:true,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
