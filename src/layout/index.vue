<template>
  <div id="layout">
    <div class="header">
      <baselogo></baselogo>
      <basenav></basenav>
    </div>
    <router-view />
  </div>
</template>

<script>
// 跟这个文件有关系？
import Baselogo from '@/components/header/logo.vue'
import Basenav from '@/components/header/navmenu.vue'
export default {
  name: 'Layout',
  components: {
    Baselogo,
    Basenav
  }
}
</script>

<style lang="scss" scoped>
#layout {
  max-width: 1250px;
  margin: 0 auto 90px;
  height: 80px;
  .header {
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
