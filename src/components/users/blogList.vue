<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu router>
          <el-sub-menu index="1"
                       v-for="(item,index) in $router.options.routes" :key="index" v-show="!item.hidden&&item.name==='blogList'">
            <template #title>
              <span>管理列表</span>
            </template>
              <el-menu-item :index="children.path"
                            v-for="(children,indexj) in item.children" :key="indexj">
                {{children.name}}
              </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span>博客内容</span>
          <button class="bbutton" @click="this.$router.push({path:'/'})">返回主页</button>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
        <el-footer>
          <button class="bbutton" @click="this.$router.push({path:'/'})">返回顶部</button>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "blogList",
}
</script>

<style lang="less">
.common-layout{
  .el-header{
    display: flex;
    justify-content: right;
    span{
      position: absolute;
      width: 100px;
      left: 50%;
    }
  }
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 60px;
    .bbutton{
      width: 100px;
      height: 40px;
      margin: 10px 0;
      border-radius: 24px;
      border: none;
      outline: none;
      background-color: rgb(57,167,176);
      color: #fff;
      font-size: 0.9em;
      cursor: pointer;
    }
  }


  .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 100%;
  }
}

</style>