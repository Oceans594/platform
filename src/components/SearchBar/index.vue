<template>
  <div class="block">
    <el-date-picker v-if="searches.date" v-model="dateValue" type="date" placeholder="选择日期" />
    <el-date-picker v-if="searches.range" v-model="rangeValue" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"/>
    <el-input v-if="searches.fuzzy" v-model="fuzzyValue" placeholder="请输入内容" prefix-icon="el-icon-search" style="width: 200px" />
    <el-select v-if="searches.type" v-model="typeValue" placeholder="业务类型">
      <el-option v-for="item in options_type" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-select v-if="searches.filter" v-model="filterValue" placeholder="业务筛选" filterable="true">
      <el-option v-for="item in options_filter" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-select v-if="searches.user" v-model="userValue" placeholder="客户筛选" filterable="true">
      <el-option v-for="item in options_user" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-select v-if="searches.status" v-model="statusValue" placeholder="业务状态">
      <el-option v-for="item in options_status" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <el-button icon="el-icon-search" @click="Search"/>
    <el-button v-if="searches.add" type="primary" style="float: right">新增业务</el-button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: ['searches'],
  data() {
    return {
      dataValue: '',
      fuzzyValue: '',
      rangeValue: '',
      typeValue: '',
      filterValue: '',
      userValue: '',
      statusValue: '',
      options_type: [
        {
          value: '1',
          label: '视频'
        }, {
          value: '2',
          label: '直播'
        }, {
          value: '3',
          label: '关注'
        }, {
          value: '4',
          label: '全部'
        }
      ],
      options_filter: [], // 动态请求
      options_user: [], // 动态请求
      options_status: [
        {
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
        }
      ]
    }
  },
  methods: {
    Search: function() {
      // 发送请求更新表格数据
      console.log(this.searches)
      console.log(
        this.rangeValue,
        this.typeValue,
        this.filterValue,
        this.userValue,
        this.statusValue,
        this.fuzzyValue
      )
    }
  }
}
</script>

<style scoped>

</style>
