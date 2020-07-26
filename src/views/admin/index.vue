<template>
  <div>
    <el-card class="box-card">
      <!--      搜索框-->
      <div class="block">
        <el-input v-model="input" placeholder="请输入用户名" style="width: 150px"/>
        <el-button icon="el-icon-search" plain></el-button>
        <el-button type="primary" style="float: right">新增用户</el-button>
      </div>
      <el-divider />
      <!--      表格-->
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="创建日期" width="180"></el-table-column>
        <el-table-column prop="name" label="用户名" width="180"></el-table-column>
        <el-table-column prop="role" label="权限"></el-table-column>
      </el-table>
      <el-divider />
      <!--      分页-->
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
