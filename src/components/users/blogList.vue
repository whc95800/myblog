<template>
  <div>
    <el-table :data="
      tableData.filter(
        (data) =>
          !search || data.title.toLowerCase().includes(search.toLowerCase())
      )
    "
        style="width: 100%">
      <el-table-column label="Date" prop="date"/>
      <el-table-column label="Title" prop="title" />
      <el-table-column align="right">
        <template #header>
          <el-input v-model="search" size="mini" placeholder="搜索" />
        </template>
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
          >
          <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
  <el-footer>
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
  </el-footer>
</template>

<script>

import {ref,onBeforeMount} from "vue";
import {blogRemove, getBlogList} from "@/api";
import router from "@/router";
import { useStore } from 'vuex'

export default {
  name: "blogList",

  setup() {
    const tableData =ref([])
    const search = ref('')
    const pages = ref({page:1, size:5})
    const totalPage = ref(0)
    const store = useStore()

    const handleSizeChange = (val) => {
      pages.value.size = val
      getList()
    }
    const handleCurrentChange = (val) => {
      pages.value.page = val
      getList()
    }

    onBeforeMount(() => {
      getList()
  })

    function getList(){
      getBlogList(pages)
          .then(res=>{
            tableData.value = []
            for(let i=0;i<res.data.list.length;i++) {
              let arr={date: res.data.list[i].creatDate, title: res.data.list[i].title, id:res.data.list[i]._id}
              tableData.value.push(arr)
            }
            totalPage.value = res.data.total
          })
          .catch( err => {
            console.log(err);
          })
    }

    function handleEdit(index, row) {
      store.commit('getBlogId',row.id)
      router.push({path:`/blogEdit/${row.id}`})
    }
    function handleDelete(index, row) {
      store.commit('getBlogId',row.id)
      blogRemove(row.id).then(res => {
        if (res.data.code === 1) {
          alert("删除成功！");
          router.push({path:'/management'})
        }
      })
          .catch(err => {
            console.log(err);
          })
    }

    return {
      tableData,search,pages,totalPage,handleEdit,handleDelete,handleCurrentChange,handleSizeChange,
    }
  },
}
</script>

<style lang="less" scoped>

.el-footer {
  background-color: #d3dce6 ;
}
</style>