<template>
  <div>
    <el-table :data="
      tableData.filter(
        (data) =>!search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
      <el-table-column label="Date" prop="date" />
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
        v-model:currentPage="currentPage"
        :page-sizes="[5, 10, 15, 20, 50, 100]"
        :page-size="currentSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    >
    </el-pagination>
  </el-footer>
</template>

<script>

import {ref, onMounted} from "vue";
import {getBlogList} from "@/api";

export default {
  name: "blogEdit",
  setup() {
    const tableData =ref([])
    const search = ref('')
    const pages = ref({page:currentPage.value, size:currentSize.value})
    const totalPage = ref(0)
    const currentPage = ref(1)
    const currentSize = ref(5)

    const handleSizeChange = (val) => {
      currentSize.value = val
      console.log(`${pages.value.size} items per page`)
    }
    const handleCurrentChange = (val) => {
      currentPage.value = val
      console.log(`${pages.value.page} items per page`)
    }


    onMounted(() => {
      getBlogList(pages)
          .then(res=>{
            console.log(res)
            tableData.value = [{date:res.data.list[0].creatDate,
                        title:res.data.list[0].title}]
            totalPage.value = res.data.total
            console.log(totalPage.value)
          })
          .catch( err => {
            console.log(err);
          })
  })

    function handleEdit(index, row) {
      console.log(index, row)
    }
    function handleDelete(index, row) {
      console.log(index, row)
    }

    return {
      tableData, search,pages,totalPage,currentSize,handleEdit,handleDelete,handleCurrentChange,handleSizeChange,currentPage
    }
  },
}
</script>

<style scoped>

</style>