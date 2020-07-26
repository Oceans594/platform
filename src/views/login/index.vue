<template>
  <div class="login" :style="styleSet">
    <div class="login-form">
      <div class="login-header">
        <p>斗鱼业务管理平台</p>
      </div>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" type="password" prefix-icon="el-icon-lock" />
        </el-form-item>
        <el-button type="primary" style="width: 100%;margin-bottom: 18px" @click="Submit('ruleForm')">登录</el-button>
        <div>
          <el-checkbox v-model="ruleForm.checked">记住我</el-checkbox>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { login } from '@/api/user'
export default {
  data() {
    return {
      ruleForm: {
        checked: true,
        username: '',
        password: ''
      },
      styleSet: {
        backgroundImage: 'url(' + require('../../assets/bg.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 10, message: '长度2~10个字符', trigger: 'blur' },
          { required: true, pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9.·-]+$/, message: '用户名不支持特殊字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度6~16个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    Submit: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login({
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            isRemember: this.ruleForm.checked
          }).then(response => {
            if (response.data.error) {
              Message({
                type: 'error',
                message: response.data.error,
                duration: 1500
              })
            } else {
              this.SaveLocalStorage(response.data)
              this.SetCookie(response.data)
              this.$router.push('/home')
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    SaveLocalStorage: function(value) {
      localStorage.dy_token = value.dy_token
      localStorage.dy_username = value.username
      localStorage.dy_role = value.role
    },
    SetCookie: function(value) {
      this.$cookies.set('token', value.dy_token, 60 * 60 * 24 * 7)
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 100%;
    background:  #5e5e5e;
    .login-form{
      width: 300px;
      height: 300px;
      padding: 30px;
      background-color: white;
      text-align: left;
      border-radius: 4px;
      position: relative;
      margin-left: 0;
      margin-right: 0;
      top: -100px;
      zoom: 1;
      display: block;
      .login-header{
        text-align: center;
        font-size: 18px;
        font-family: "Arial Black", serif;
        font-weight: bold;
        margin-bottom: 20px;
      }
    }
  }
</style>
