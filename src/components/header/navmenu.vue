<template>
  <div id="navmenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-nav"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" style="padding: 0 20px">首页</el-menu-item>
      <el-submenu popper-class="subWidth" index="2">
        <template slot="title">关于考试</template>
        <el-menu-item index="2-1">考试介绍</el-menu-item>
        <el-menu-item index="2-2">考试安排</el-menu-item>
        <el-menu-item index="2-3">专家委员会</el-menu-item>
        <el-menu-item index="2-4">执行标准</el-menu-item>
        <el-menu-item index="2-5">试点校办法</el-menu-item>
      </el-submenu>
      <el-submenu popper-class="subWidth" index="3">
        <template slot="title">考试服务</template>
        <el-menu-item index="3-1">考试报名</el-menu-item>
        <el-menu-item index="3-2">考试入口</el-menu-item>
        <el-menu-item index="3-3">考试咨询</el-menu-item>
        <el-menu-item index="3-4">设备检测</el-menu-item>
        <el-menu-item index="3-5">样题解析</el-menu-item>
        <el-menu-item index="3-6">考前自测</el-menu-item>
      </el-submenu>
      <el-submenu popper-class="subWidth" index="4">
        <template slot="title">标准及教材</template>
        <el-menu-item index="4-1">等级标准</el-menu-item>
        <el-menu-item index="4-2">相关教材</el-menu-item>
      </el-submenu>
      <el-submenu popper-class="subWidth" index="5">
        <template slot="title">教师能力认证</template>
        <el-menu-item index="5-1">认证办法</el-menu-item>
        <el-menu-item index="5-2">认证咨询</el-menu-item>
        <el-menu-item index="5-3">认证培训</el-menu-item>
      </el-submenu>
      <el-submenu popper-class="subWidth" index="6">
        <template slot="title">编程一小时</template>
        <el-menu-item index="6-1">活动安排</el-menu-item>
        <el-menu-item index="6-2">活动申请</el-menu-item>
        <el-menu-item index="6-3">活动展示</el-menu-item>
      </el-submenu>
      <el-submenu popper-class="subWidth" index="7">
        <template slot="title">个人中心</template>
        <el-menu-item index="7-1">等级考</el-menu-item>
        <el-menu-item index="7-2">教师能力认证</el-menu-item>
      </el-submenu>
      <el-submenu popper-class="subWidth" index="8">
        <template slot="title">合作单位</template>
        <el-menu-item index="8-1">联合主办</el-menu-item>
        <el-menu-item index="8-2">授牌查询</el-menu-item>
        <el-menu-item index="8-3">管理平台</el-menu-item>
        <el-menu-item index="8-4">合作申请</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key) {
      console.log(key)
      switch (key) {
        case '1':
          this.$router.push('/home')
          break
        case '7-1':
          this.$router.push('/percenter/login')
          break
        case '7-2':
          this.$router.push('/teacenter/login')
          break

        default:
          break
      }
    }
  }
}
</script>

<style scoped>
.el-menu-item {
  padding: 0;
}
.mentItem {
  width: 50px;
}
.subWidth {
  width: 100px;
}
</style>
