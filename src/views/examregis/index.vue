<template>
  <div id="examregis">
    <basebread></basebread>
    <div class="examreg">
      <div class="exam-content">
        <div class="header">
          <div class="headtit1">2022 PAAT</div>
          <div class="headtit2">全国青少年编程能力等级考试</div>
          <div class="headtit2">在线报名</div>
        </div>
        <div class="content">
          <ul class="con-head">
            <li :class="Current === 1 ? 'isactive' : ''" @click="Current = 1">
              1. 填写考试信息
            </li>
            <li :class="Current === 2 ? 'isactive' : ''" @click="Current = 2">
              2. 填写考生信息
            </li>
            <li :class="Current === 3 ? 'isactive' : ''" @click="Current = 3">
              3. 核对报名信息
            </li>
            <li :class="Current === 4 ? 'isactive' : ''" @click="Current = 4">
              4. 缴纳考试费用
            </li>
          </ul>

          <div class="con-level" v-show="Current === 1">
            <el-form
              :model="ruleForm"
              class="cy-register-form"
              label-width="110px"
              ref="ruleForm"
            >
              <el-form-item prop="testname" label="考试名称">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入考试名称"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testtype" label="考试科目">
                <el-select
                  v-model="ruleForm.testtype"
                  placeholder="请选择考试科目"
                ></el-select>
              </el-form-item>

              <el-form-item prop="testgrade" label="考试等级">
                <el-select
                  v-model="ruleForm.testgrade"
                  placeholder="请选择考试等级"
                ></el-select>
              </el-form-item>

              <el-form-item prop="testtime" label="考试时间">
                <el-select
                  v-model="ruleForm.testtime"
                  placeholder="请选择考试时间"
                ></el-select>
              </el-form-item>

              <div class="register-btn">
                <div class="paatButton" @click="OnSubmit('ruleForm')">
                  下一步
                </div>
              </div>
            </el-form>
          </div>
          <div class="con-level" v-show="Current === 2">
            <el-form
              :model="ruleForm"
              class="cy-register-form"
              label-width="110px"
              ref="ruleForm"
            >
              <el-form-item prop="testname" label="考生姓名">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入考生姓名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="testname" label="手机号">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入手机号"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testname" label="考生身份证号码">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入考生身份证号码"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testtime" label="所在省市">
                <el-select
                  v-model="ruleForm.testtime"
                  placeholder="请选择所在省市"
                ></el-select>
              </el-form-item>

              <el-form-item prop="testtime" label="证书收件地址">
                <el-input
                  v-model="ruleForm.testtime"
                  placeholder="请输入证书收件地址"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testtime" label="所属机构">
                <el-select
                  v-model="ruleForm.testtime"
                  placeholder="请选择所属机构"
                ></el-select>
              </el-form-item>
              <div class="form-upload">
                <el-upload
                  class="avatar-uploader"
                  ref="upload"
                  action="#"
                  accept="image/jpeg,image/png,image/jpg"
                  list-type="picture"
                  :before-upload="beforeUpdate"
                  :http-request="handleAvatarSuccess"
                >
                  <img v-if="imgBase64" :src="imgBase64" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </div>

              <div class="Tips">
                <div class="tipstit">考生照片要求</div>
                <div class="tipscont">
                  考生照片要求考生照片要求考生照片要求考生照片要求
                </div>
              </div>
              <div class="register-btn">
                <div class="paatButton" @click="OnSubmit('ruleForm')">
                  下一步
                </div>
              </div>
            </el-form>
          </div>
          <div class="con-level" v-show="Current === 3">
            <el-form
              :model="ruleForm"
              class="cy-register-form"
              label-width="110px"
              ref="ruleForm"
            >
              <el-form-item prop="testname" label="考生姓名">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入考生姓名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="testname" label="考试科目">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入考试科目"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testname" label="考试等级">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入考试等级"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testname" label="身份证号码">
                <el-input
                  v-model="ruleForm.testname"
                  placeholder="请输入身份证号码"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testtime" label="所在省市">
                <el-select
                  v-model="ruleForm.testtime"
                  placeholder="请选择所在省市"
                ></el-select>
              </el-form-item>

              <el-form-item prop="testtime" label="证书收件地址">
                <el-input
                  v-model="ruleForm.testtime"
                  placeholder="请输入证书收件地址"
                ></el-input>
              </el-form-item>

              <el-form-item prop="testtime" label="所属机构">
                <el-select
                  v-model="ruleForm.testtime"
                  placeholder="请选择所属机构"
                ></el-select>
              </el-form-item>

              <div class="register-btn">
                <div class="paatButton" @click="OnSubmit('ruleForm')">
                  下一步
                </div>

                <div class="primaryBut">修改信息</div>
              </div>
            </el-form>
          </div>

          <div class="con-level" v-show="Current === 4">
            <div class="overregis">
              <div class="title">PAAT 考试报名费</div>
              <div class="cont">300 元 / 科目</div>
              <div class="main">
                <!-- <img src="" alt="" srcset=""> -->
                二维码截图
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Basebread from '@/components/breadcrumb'
export default {
  components: {
    Basebread
  },
  data() {
    return {
      Current: 1,
      ruleForm: {
        testname: '',
        testtype: '',
        testgrade: '',
        testtime: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#examregis {
  width: 100%;
  height: 100%;
  .examreg {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .exam-content {
      width: 800px;
      height: 100%;
      .content {
        margin-top: 20px;
        border: 2px solid #ccc;
        .con-level {
          padding: 20px 40px 20px 40px;
          box-sizing: border-box;
          .overregis {
            width: 100%;
            height: 100%;
            .title {
              text-align: center;
              font-size: 24px;
              font-weight: 500;
            }
            .cont {
              font-size: 24px;
              font-weight: 500;
              text-align: center;
            }
            .main {
              text-align: center;
            }
          }
          .cy-register-form {
            .Tips {
              margin-top: 20px;
              width: 100%;
              text-align: center;
            }
            .form-upload {
              display: flex;
              justify-content: center;
              .avatar-uploader {
                width: 178px;
                height: 178px;
                border: 1px solid #ccc;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
            .register-btn {
              margin-top: 40px;
              display: flex;
              justify-content: center;
              .primaryBut {
                margin-left: 10px;
              }
            }
          }
        }
        .con-head {
          display: flex;
          .isactive {
            background: rgba(33, 77, 160, 1) !important;
          }
          li {
            flex: 1;
            height: 40px;
            line-height: 40px;
            font-size: 22px;
            text-align: center;
            background: #ccc;
            color: #fff;
            cursor: pointer;
          }
          li + li {
            border-left: 2px solid #fff;
          }
        }
      }
      .header {
        // padding: 20px;
        height: 180px;
        border: 1px solid #000;
        background: rgba(33, 77, 160, 1);
        box-sizing: border-box;
        .headtit1 {
          font-size: 38px;
          text-align: center;
          color: #fff;
        }
        .headtit2 {
          font-size: 28px;
          text-align: center;
          color: #fff;
        }
        .headtit2 {
          font-size: 32px;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
}
</style>

<style scoped>
.el-select {
  width: 100%;
}
</style>
