<template>
  <div>
    <el-table :data="tableData" border style="width: 100%; margin-top: 10px">
      <el-table-column
        v-for="(item, index) in table_title"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width?item.width:null"
        :min-width="item.minwidth?item.minwidth:null"
        :sortable="item.sortable?item.sortable:false"
        :align="item.columnAlign"
        :fixed="item.fix"
      >
      </el-table-column>
    </el-table>
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[10, 15, 20]"
      :page-size="currentSize"
      style="margin-top: 10px"
      layout="total, sizes, prev, pager, next, jumper"
      :total="dataTotal"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { ManagerTableList } from '@/config/table'
import { managerTable } from '@/api/table'

export default {
  data() {
    return {
      table_title: ManagerTableList,
      tableData: null,
      currentPage: 1,
      currentSize: 10,
      dataTotal: null
    }
  },
  watch: {
    currentPage(val) {
      this.loadTable()
    }
    // currentSize: this.loadTable()
  },
  created() {
    this.loadTable()
  },
  methods: {
    loadTable() {
      managerTable({
        page: this.currentPage,
        limit: this.currentSize
      }).then(response => {
        this.tableData = response.data.data
        this.dataTotal = response.data.total
      })
    },
    handleSizeChange() {
      console.log(this.currentPage, this.currentSize)
    },
    handleCurrentChange() {
      console.log(this.currentPage, this.currentSize)
    }
  }
}
</script>

<style scoped>

</style>
