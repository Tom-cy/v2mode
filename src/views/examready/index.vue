<template>
  <div id="examready">
    <div class="exam-content">
      <div class="header">
        <div class="header-left"></div>
        <div class="header-right">
          <div class="headtit1">姓名: xxx</div>
          <div class="headtit1">状态: xxxxx</div>
          <div class="headtit1">待考科目: xxxxx</div>
          <div class="headtit1">考生身份证号码: xxxxx</div>
          <div class="headtit1">考场信息: xxxxx</div>
        </div>
      </div>
      <div class="content">
        <ul class="con-head">
          <li :class="Current === 1 ? 'isactive' : ''" @click="Current = 1">
            1. 考生报名
          </li>
          <li :class="Current === 2 ? 'isactive' : ''" @click="Current = 2">
            2. 考前自测
          </li>
          <li :class="Current === 3 ? 'isactive' : ''" @click="Current = 3">
            3. 考试资源
          </li>
          <li :class="Current === 4 ? 'isactive' : ''" @click="Current = 4">
            4. 考生活动
          </li>
          <li :class="Current === 5 ? 'isactive' : ''" @click="Current = 5">
            5. 打印准考证
          </li>
          <li :class="Current === 6 ? 'isactive' : ''" @click="Current = 6">
            6. 模拟登录
          </li>
          <li :class="Current === 7 ? 'isactive' : ''" @click="Current = 7">
            7. 考试入口
          </li>
          <li :class="Current === 8 ? 'isactive' : ''" @click="Current = 8">
            8. 成绩/证书
          </li>
        </ul>

        <div class="con-level" v-show="Current === 1">
          <div class="level-main">
            <div class="main-tit">2022年11月PAAT</div>
            <div class="main-tit">全国青少年编程能力等级考试</div>
            <div class="main-cont">
              <div class="cont">考试时间: 2022年11月26. 27日</div>
              <div class="cont">考试科目: 图形化编程一级/ 图形化二级</div>
              <div class="cont">考试形式: 线上机考</div>
              <div class="cont">考试费用: 300/科</div>
            </div>

            <div class="main-btn">
              <div class="paatButton">考试报名</div>
            </div>
          </div>
        </div>
        <div class="con-level" v-show="Current === 2">
          <div class="level-main">
            <div class="main-tit">PAAT全国青少年编程能力等级考试</div>
            <div class="main-tit">考前自测</div>
            <div class="main-cont">
              <div class="cont">适用范围: 图形化编程， C++编程</div>
              <div class="cont">测试形式: 线上机考</div>
              <div class="cont">测试费用: 20元/科/次</div>
            </div>

            <div class="main-btn">
              <div class="paatButton">开始测试</div>
            </div>
          </div>
        </div>
        <div class="con-level" v-show="Current === 3">
          <div class="level-main">
            <div class="mainRss">
              <div class="main-rss">图形化编程样题下载</div>
              <div class="main-rss">图形化编程标准</div>
              <div class="main-rss">python编程样题下载</div>
              <div class="main-rss">python编程标准</div>
              <div class="main-rss">C++编程样题下载</div>
              <div class="main-rss">C++编程标准</div>
            </div>

            <div class="main-btn">
              <div class="paatButton">更多备考资源</div>
            </div>
          </div>
        </div>

        <div class="con-level" v-show="Current === 4">
          <div class="level-main">
            <div class="main-tit">“编程一小时” 活动介绍</div>
            <div class="main-cont">
              <div class="cont">
                活动内容: 主题编程作品+ 10分钟线上编程科普问答
              </div>
              <div class="cont">
                活动时间: 请于X月X日前将作品上传； X月X日参加线上问答
              </div>
              <div class="cont">编程工具: 图形化编程工具</div>
              <div class="cont">
                活动奖励: 通过线上测试可以获得电子荣誉证书一份及PAAT加五分
              </div>
            </div>

            <div class="main-btn">
              <div class="paatButton">活动报名</div>
              <div class="paatButyellow">上传作品</div>
              <div class="paatButyellow">线上答题</div>
            </div>
          </div>
        </div>

        <div class="con-level" v-show="Current === 5">
          <div class="level-main">
            <div class="main-info">个人信息xxx</div>
            <div class="main-tips">
              <div class="tips1">考生须知</div>
              <div class="tips2">
                考生须知考生须知考生须知考生须知考生须知考生须知考生须知
              </div>
              <div class="tips3">
                考生须知考生须知考生须知考生须知考生须知考生须知考生须知
              </div>
            </div>
            <div class="main-btn">
              <div class="paatButton">打印准考证</div>
            </div>
          </div>
        </div>

        <div class="con-level" v-show="Current === 7">
          <div class="level-main">
            <div class="main-tit">2022年11月PAAT</div>
            <div class="main-tit">全国青少年编程能力等级考试</div>
            <el-table>
              <el-table-column prop="date" label="准考证号"> </el-table-column>
              <el-table-column prop="name" label="科目"> </el-table-column>
              <el-table-column prop="name" label="日期"> </el-table-column>
              <el-table-column prop="name" label="时间"> </el-table-column>
              <el-table-column prop="name" label="考场信息"> </el-table-column>
            </el-table>
            <div class="main-btn">
              <div class="paatButton">开始考试</div>
            </div>
          </div>
        </div>

        <div class="con-level" v-show="Current === 8">
          <div class="level-main">
            <div class="main-tit">2022年11月PAAT</div>
            <div class="main-tit">全国青少年编程能力等级考试成绩</div>
            <el-table>
              <el-table-column prop="date" label="准考证号"> </el-table-column>
              <el-table-column prop="name" label="科目"> </el-table-column>
              <el-table-column prop="name" label="日期"> </el-table-column>
              <el-table-column prop="name" label="时间"> </el-table-column>
              <el-table-column prop="name" label="考场信息"> </el-table-column>
            </el-table>
            <div class="main-img">证书图片</div>
            <div class="main-btn">
              <div class="paatButton">开始考试</div>
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
#examready {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  .exam-content {
    width: 800px;
    height: 100%;
    .content {
      margin-top: 20px;
      border: 2px solid #ccc;
      .con-level {
        padding: 20px 40px 20px 40px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        .level-main {
          width: 100%;
          height: 100%;
          .main-tips {
            width: 100%;
            color: #409eff;
            text-align: center;
          }
          .mainRss {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-top: 20px;
            .main-rss {
              text-align: center;
              cursor: pointer;
              color: #409eff;
              margin-top: 10px;
              width: 50%;
            }
          }
          .main-tit {
            text-align: center;
            font-size: 32px;
            font-weight: 500;
          }
          .main-cont {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            .cont {
              margin-top: 10px;
              margin-left: 150px;
            }
          }
          .main-btn {
            margin-top: 40px;
            display: flex;
            justify-content: center;
            .paatButyellow {
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
          font-size: 16px;
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
      padding: 20px;
      height: 180px;
      border: 1px solid #000;
      background: rgba(33, 77, 160, 1);
      box-sizing: border-box;
      .headtit1 {
        margin-left: 150px;
        font-size: 18px;
        color: #fff;
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
