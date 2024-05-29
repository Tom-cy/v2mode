<template>
  <div class="percenter-login">
    <basebread></basebread>

    <div class="login-center">
      <el-form
        :model="ruleForm"
        class="cy-login-form"
        label-width="80px"
        ref="ruleForm"
        :rules="rules"
      >
        <div class="form-title">教师能力认证个人中心</div>

        <el-form-item prop="idcard" label="身份证号">
          <el-input
            v-model="ruleForm.idcard"
            placeholder="请输入身份证号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password" label="登录密码">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入登录密码"
          >
            <el-button slot="append" @click="forgetPass()">忘记密码</el-button>
          </el-input>
        </el-form-item>

        <div class="login-btn">
          <div
            class="paatButton"
            @click="OnSubmit('ruleForm')"
            :loading="loading"
          >
            登录
          </div>
          <div class="primaryBut" @click="gotoRegister()">教师注册</div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { setCookies } from '@/utils/auth'
import Basebread from '@/components/breadcrumb'
export default {
  components: {
    Basebread
  },
  data() {
    let idcardRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入身份证号'))
      }
      callback()
    }
    let passwordRule = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 2 || value.length > 12) {
        callback(new Error('密码长度至少2位最多12位'))
      }
      callback()
    }
    return {
      loading: false,
      ruleForm: {
        idcard: '',
        password: '',
        typename: ''
      },
      rules: {
        idcard: [{ validator: idcardRule, trigger: 'blur' }],
        password: [{ validator: passwordRule, trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 自定义函数- 拼图完成之后的函数操作
    UserLogin(data) {
      this.loading = false
      this.$store.dispatch('user/login', data).then(async (response) => {
        if (response.head.code === '1000') {
          setCookies('token', response.body.token)
          await this.$router.push({ path: '/' }, () => {})
        }
      })
    },

    OnSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = {
            idcard: this.ruleForm.idcard,
            password: this.ruleForm.password
          }
          console.log('data', data)
          // this.UserLogin(data)
        } else {
          return false
        }
      })
    },
    forgetPass() {
      console.log('忘记密码')
    },
    gotoRegister() {
      this.$router.push('/teacenter/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.percenter-login {
  width: 100%;
  height: 100%;
  .login-center {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    max-height: 350px;
    .ms-title {
      line-height: 30px;
      text-align: center;
      color: #fff;
      // border-bottom: 1px solid #ccc;
    }
    .cy-login-form {
      background: rgba(204, 204, 204, 0.203);
      width: 500px;
      padding: 25px;
      .form-title {
        // color: rgba(0, 0, 0, 0.692);
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 25px;
        // margin: 0 0 15px 0;
      }
      .login-btn {
        width: 100%;
        text-align: center;
        .primaryBut {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
