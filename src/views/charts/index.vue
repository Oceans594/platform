<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="8">
          <div class="layout">
            <el-card>
              <div slot="header">
                <span>账号情况</span>
              </div>
              <ve-pie :data="userData" :settings="pieSettings" />
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="layout">
            <el-card>
              <div slot="header">
                <span>账号类型</span>
              </div>
              <ve-pie :data="typeData" :settings="pieSettings" />
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="layout">
            <el-card>
              <div slot="header">
                <span>账号等级</span>
              </div>
              <ve-pie :data="levelData" :settings="pieSettings" />
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="layout">
          <el-card>
            <div slot="header">
              <span>账号情况</span>
            </div>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
              <el-button-group class="btn-group">
                <el-button type="">日</el-button>
                <el-button type="">时</el-button>
                <el-button type="">分</el-button>
              </el-button-group>
              <el-button-group class="btn-group">
                <el-button>全部</el-button>
                <el-button type="" autofocus="true">斗鱼</el-button>
                <el-button type="">微博</el-button>
                <el-button type="">QQ</el-button>
              </el-button-group>
            </div>
            <ve-line :data="userLineData" :settings="lineSettings" />
          </el-card>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="layout">
          <el-card>
            <div slot="header">
              <span>账号资源情况</span>
            </div>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
              <el-button-group class="btn-group">
                <el-button type="">日</el-button>
                <el-button type="">时</el-button>
                <el-button type="">分</el-button>
              </el-button-group>
              <el-button-group class="btn-group">
                <el-button>全部</el-button>
                <el-button type="">斗鱼</el-button>
                <el-button type="">微博</el-button>
                <el-button type="">QQ</el-button>
              </el-button-group>
            </div>
            <ve-line :data="sourceLineData" :settings="lineSettings" />
          </el-card>
        </div></el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><div class="layout">
          <el-card>
            <div slot="header">
              <span>账号行为分析</span>
            </div>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              />
              <el-button-group class="btn-group">
                <el-button type="">日</el-button>
                <el-button type="">时</el-button>
                <el-button type="">分</el-button>
              </el-button-group>
              <el-button-group class="btn-group">
                <el-button>全部</el-button>
                <el-button type="">斗鱼</el-button>
                <el-button type="">微博</el-button>
                <el-button type="">QQ</el-button>
              </el-button-group>
            </div>
            <ve-line :data="activeLineData" :settings="lineSettings" />
          </el-card>
        </div></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
import VePie from 'v-charts/lib/pie.common'
export default {
  components: {
    VeLine,
    VePie
  },
  data() {
    return {
      value1: '',
      userData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      typeData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      levelData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      userLineData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      sourceLineData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      activeLineData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style scoped>
.layout{
  margin: 10px;
}
</style>
