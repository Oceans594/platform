<template>
  <div id="index">
    <el-card class="box-card">
      <!--      搜索框-->
      <search-bar :searches="search_filter" />
      <!--      表格-->
      <base-table />
    </el-card>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar'
import BaseTable from '@/components/Table'

export default {
  name: 'Index',
  components: {
    SearchBar,
    BaseTable
  },
  data() {
    return {
      search_filter: {
        range: true,
        fuzzy: true,
        type: true,
        add: true,
        status: true
      }
    }
  }
}
</script>

<style scoped>

</style>
