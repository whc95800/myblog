<template>
  <div class="inputBody">
    <el-input
        v-model="blogForm.title"
        autosize
        type="textarea"
        placeholder="标题"
        maxlength="20"
    />
    <div style="margin: 20px 0"></div>
    <el-input
        v-model="blogForm.content"
        :autosize="{ minRows: 10 }"
        type="textarea"
        placeholder="博文内容"
    >
    </el-input>
    <div style="margin: 20px 0"></div>
    <el-button @click="creat">发表博文</el-button>
    <el-backtop/>
  </div>
</template>

<script>
import {reactive} from "vue";
import {userBlogCreat} from "@/api";

export default {
  name: "blogCreat",
  setup(){
    let blogForm = reactive({title:'', content:''})
    function creat() {
      if (blogForm.title !== "" && blogForm.content !== "") {
        userBlogCreat(blogForm).then( res => {
          if(res.data.code === 1) {
            alert("发表成功！");
          }})
            .catch( err => {
              console.log(err);
            })
      }else{
        alert("标题或文章不能为空！");
      }
    }
    return{creat,blogForm}
  }
}
</script>

<style lang="less" scoped>

</style>