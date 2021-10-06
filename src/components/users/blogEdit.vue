<template>
<div>test2</div>
</template>

<script>
import {onMounted} from "vue";
import {getBlogList} from "@/api";

export default {
  name: "blogEdit",
  setup(){
    onMounted(() => {
      getBlogList(sessionStorage.getItem('token'))
          .then(res=>{
            console.log(res)
          })
          .catch( err => {
            console.log(err);
          })
    })
    return {};
  }
}
</script>

<style scoped>

</style>