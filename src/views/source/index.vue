<template>
  <div id="index">
    <el-card>
      <el-card class="box-card">
        <!--      搜索框-->
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
          <el-button icon="el-icon-search" plain></el-button>
        </div>
        <el-divider />
        <!--      表格-->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="status" label="状态">
            <el-tag>标签一</el-tag>
          </el-table-column>
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
            @current-change="handleCurrentChange"/>
        </div>
      </el-card>
      <el-card class="box-card">
        <!--      搜索框-->
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
          <el-button icon="el-icon-search" plain></el-button>
        </div>
        <el-divider />
        <!--      表格-->
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180" />
          <el-table-column prop="name" label="姓名" width="180" />
          <el-table-column prop="address" label="地址" />
          <el-table-column prop="status" label="状态">
            <el-tag>标签一</el-tag>
          </el-table-column>
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
            @current-change="handleCurrentChange"/>
        </div>
      </el-card>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      value0: '',
      value1: '',
      value2: '',
      input: '',
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      options1: [{
        value: '1',
        label: '视频'
      }, {
        value: '2',
        label: '直播'
      }, {
        value: '3',
        label: '关注'
      }],
      options2: [{
        value: '1',
        label: '开启'
      }, {
        value: '2',
        label: '待执行'
      }, {
        value: '3',
        label: '执行中'
      }, {
        value: '4',
        label: '关闭'
      }, {
        value: '5',
        label: '全部'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
.box-card{
  margin-bottom: 10px;
}
</style>
