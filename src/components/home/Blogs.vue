<template>
  <div style='height:100%'>
    <el-scrollbar style='height:100%'>
    <el-space direction="vertical" fill wrap>
      <el-card v-for="i in blogLength" :key="i" class="box-card" style="width: 1000px">
        <div class="title"><a>{{tableData[i-1].title}}</a></div>
        <div class="content"><a>{{tableData[i-1].content}}</a></div>
      </el-card>
    </el-space>
    </el-scrollbar>
      <el-pagination
        v-model:currentPage="pages.page"
        :page-sizes="[5, 10, 15, 20, 50, 100]"
        :page-size="pages.size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {getBlogList} from "@/api";
import {useStore} from "vuex";
import router from "@/router";

export default {
  name: "Blogs",
  setup(){
    const pages = ref({page:1, size:5})
    const tableData =ref([])
    const totalPage = ref(0)
    const store = useStore()
    const blogLength = ref(0)
    const handleSizeChange = (val) => {
      pages.value.size = val
      getList()
    }
    const handleCurrentChange = (val) => {
      pages.value.page = val
      getList()
    }

    onMounted(() => {
      getList()
    })

    function inToBlog() {
      store.commit('getBlogId',tableData.value.id)
      router.push({path:`/blogs/${tableData.value.id}`})
    }

    function getList(){
      getBlogList(pages)
          .then(res=>{
            tableData.value = []
            for(let i=0;i<res.data.list.length;i++) {
              let arr={title: res.data.list[i].title, content: res.data.list[i].content, id:res.data.list[i]._id}
              tableData.value.push(arr)
            }
            blogLength.value = res.data.list.length
            totalPage.value = res.data.total
          })
          .catch( err => {
            console.log(err);
          })
    }


    return {inToBlog,pages,totalPage,tableData,blogLength,handleSizeChange,handleCurrentChange,};
  }
}
</script>

<style lang="less" scoped>
html,body{
  height:100%;
  overflow:hidden;
}
.d1{
  margin-top:100px;
  border:1px solid red;
  width:200px;
  height:200px;
  text-align:center;
  line-height:200px;
}
.d2{
  margin-top:80px;
  border:1px solid red;
  width:200px;
  height:200px;
  text-align:center;
  line-height:200px;
}

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
    -webkit-line-clamp: 3;
    word-wrap:break-word;
    word-break:break-all;
    text-align: left;
  }
}


</style>