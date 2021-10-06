<template>
  <el-container class="home">
    <el-header>
        <div class="left">
          <h2>欢迎来到我的博客</h2>
        </div>
        <div class="right">
          <div>
            <el-menu
                :default-active="activeIndex"
                mode="horizontal"
                background-color="transparent"
                text-color="cornflowerblue"
                router
               >
              <el-sub-menu index="" v-if="user">
                <template #title><el-avatar v-show="user" icon="el-icon-user-solid"></el-avatar></template>
                <el-menu-item index="/blogList">博文编辑</el-menu-item>
                <el-menu-item>注销当前用户</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
          <div class="login">
            <router-link to="/login">登录/注册</router-link>
          </div>
        </div>
    </el-header>
    <el-main><Main/></el-main>
  </el-container>
</template>

<script>
import Main from "@/components/home/Main";
import {ref} from "vue";
export default {
  name: "Home",
  components: {Main},
  setup(){
    const user = sessionStorage.getItem('user')
    const activeIndex = ref('1')
    return{user,activeIndex}
  }
}
</script>

<style lang="less" scoped>
a{
  text-decoration: none;
  color: cornflowerblue;
}
.el-container {
  .el-header {
    width: 100%;
    height: 60px;
    padding: 0;
    background: linear-gradient(135deg, rgb(57, 167, 176), rgb(56, 183, 145));
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    h2{
      width: 200px;
      color: aqua;
    }
    .left {
        padding-left: 50px;
      }
    .right {
      width: auto;
      display: flex;
      align-items: center;
      .el-menu{
        justify-content: center;
        width: 200px;
        align-items: center;
        border-bottom: none;
        }
      .login {
        width: auto;
        margin-right: 20px;
      }
      }
    }
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
    margin-top: 40px;
    height:auto;
  }
</style>