<template>
  <div class="percenter-register">
    <basebread></basebread>

    <div class="register-center">
      <el-form
        :model="ruleForm"
        class="cy-register-form"
        label-width="110px"
        ref="ruleForm"
        :rules="rules"
      >
        <div class="form-title">考生个人注册</div>

        <el-form-item prop="peoname" label="考生姓名">
          <el-input
            v-model="ruleForm.peoname"
            placeholder="请输入考生姓名"
          ></el-input>
        </el-form-item>

        <el-form-item prop="peoidcard" label="身份证号">
          <el-input
            v-model="ruleForm.peoidcard"
            placeholder="请输入身份证号"
          ></el-input>
        </el-form-item>

        <el-form-item prop="peophone" label="手机号码">
          <el-input
            v-model="ruleForm.peophone"
            placeholder="请输入手机号码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="peopassword" label="设置登录密码">
          <el-input
            v-model="ruleForm.peopassword"
            placeholder="请输入登录密码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="peopasswordagain" label="再次登录密码">
          <el-input
            v-model="ruleForm.peopasswordagain"
            placeholder="请输入再次登录密码"
          ></el-input>
        </el-form-item>

        <el-form-item prop="verificacode" label="输入验证码">
          <el-input v-model="ruleForm.verificacode" placeholder="请输入验证码">
            <el-button slot="append" v-show="isTimer" @click="getVeri()">
              获取验证码
            </el-button>
            <el-button
              slot="append"
              class="primarysss"
              v-show="!isTimer"
              style="margin-left: 10px"
            >
              {{ count }}
            </el-button>
            <el-button
              slot="append"
              class="Tips"
              v-show="!ComInputVerificaCode"
            >
              请您输入验证码
            </el-button>
          </el-input>
        </el-form-item>

        <div class="register-btn">
          <div class="paatButton" @click="OnSubmit('ruleForm')">注册</div>
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
      count: 60,
      isTimer: true,
      ComInputVerificaCode: true,
      loading: false,
      ruleForm: {
        peoname: '',
        peoidcard: '',
        peophone: '',
        peopassword: '',
        peopasswordagain: '',
        verificacode: ''
      },
      rules: {
        idcard: [{ validator: idcardRule, trigger: 'blur' }],
        password: [{ validator: passwordRule, trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 自定义函数- 拼图完成之后的函数操作
    UserLogin(data) {},

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
    }
  }
}
</script>

<style lang="scss" scoped>
.percenter-register {
  width: 100%;
  height: 100%;
  .register-center {
    display: flex;
    justify-content: center;
    width: 100%;
    .ms-title {
      line-height: 30px;
      text-align: center;
      color: #fff;
      // border-bottom: 1px solid #ccc;
    }
    .cy-register-form {
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
      .register-btn {
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
