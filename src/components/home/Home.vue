<template>
  <el-container class="home">
    <el-header>
        <div class="left">
          <h2>欢迎来到我的博客</h2>
        </div>
        <div class="right">
          <div class="home">
            <router-link to="/">首页</router-link>
          </div>
          <div class="login">
            <router-link to="/blogList">博文编辑</router-link>
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
export default {
  name: "Home",
  components: {Main},
}
</script>

<style lang="less" scoped>
.el-container {
  .el-header {
    width: 100%;
    height: auto;
    padding: 0;
    background: linear-gradient(135deg, rgb(57, 167, 176), rgb(56, 183, 145));
    text-align: center;
    line-height: 60px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    h2{
      width: 200px;
      color: aqua;
    }
    a{
        text-decoration: none;
        color: cornflowerblue;
      }
    .left {
        padding-left: 50px;
      }
    .right {
        .home, .sort, .text, .login {
          display: inline-block;
          width: 100px;
          text-align: center;
        }
      }
    }
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
    margin-top: 60px;
    height: 1000px;
  }
</style>