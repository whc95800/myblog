<template>
  <div class="inputBody">
    <el-input
        v-model="blog.title"
        autosize
        type="textarea"
        placeholder="标题"
        maxlength="20"
    />
    <div style="margin: 20px 0"></div>
    <el-input
        v-model="blog.content"
        :autosize="{ minRows: 10 }"
        type="textarea"
        placeholder="博文内容"
    >
    </el-input>
    <div style="margin: 20px 0"></div>
    <el-button @click="edit">递交修改</el-button>
    <el-button @click="$router.back()">取消修改</el-button>
    <el-backtop/>
  </div>
</template>

<script>
import {reactive} from "vue";
import {userBlogEdit,getBlog} from "@/api";
import {onMounted} from "vue";
import {useStore} from "vuex";
import router from "@/router";


export default {
  name: "userEdit",
  setup() {
    const blog = reactive({title:'', content:'', id:''})
    const store = useStore()
    const blogId = store.state.id

    onMounted(()=>{
      getBlog(blogId).then(res=>{
        console.log(res.data)
        blog.title = res.data.blog.title
        blog.content = res.data.blog.content
        blog.id = blogId
      }).catch( err => {
        console.log(err);
      })
    })

    function edit() {
      if (blog.title !== "" && blog.content !== "") {
        userBlogEdit(blog).then(res => {
          if (res.data.code === 1) {
            alert("修改成功！");
            router.push({path:'/management/blogList'})
          }
        })
            .catch(err => {
              console.log(err);
            })
      } else {
        alert("标题或文章不能为空！");
      }
    }
    return {blog,edit,blogId}
  }
}
</script>

<style lang="less" scoped>

</style>