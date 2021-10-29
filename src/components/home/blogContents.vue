<template>
  <div class="title"><a>{{blog.title}}</a></div>
  <div class="content"><a>{{blog.content}}</a></div>
</template>

<script>
import {onMounted, reactive} from "vue";
import {useStore} from "vuex";
import {getBlog, userBlogEdit} from "@/api";
import router from "@/router";

export default {
  name: "blogContents",
  setup() {
    const blog = reactive({title:'', content:'', id:''})
    const store = useStore()
    const blogId = store.state.id
    onMounted(()=>{
      getBlog(blogId).then(res=>{
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
.title{
  margin-bottom: 20px;
a{
  font-size:20px;
  width:100%;
  display:block;
  overflow:hidden;
  word-break:keep-all;
  white-space:nowrap;
  text-overflow:ellipsis;
}
}
.content{
a{
  font-size:14px;
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-wrap:break-word;
  word-break:break-all;
  text-align: left;
}
}
</style>