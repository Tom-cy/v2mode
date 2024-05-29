<template>
  <div id="Curd">
    <div class="top">
      <span>
        <img :src="imgSrc" alt="" />
      </span>
      <h2>编程一小时</h2>
    </div>
    <div class="buttom">
      <div
        class="bottom-level"
        v-for="(item, index) in curData"
        :key="index"
        @click="gotoFuck(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require('@/assets/img/curd/3.png'),
      curData: [
        {
          name: '活动安排',
          url: ''
        },
        {
          name: '活动申请',
          url: ''
        },
        {
          name: '活动展示',
          url: ''
        }
      ]
    }
  },
  methods: {
    gotoFuck(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
#Curd {
  box-sizing: border-box;
  width: 20%;
  height: auto;
  margin-right: 23px;
  margin-bottom: 20px;
  border: solid 1px #e4e4e4;
  background: rgb(250, 250, 250);
  border-radius: 2px;
  padding: 0 10px 10px;
  position: relative;
  &:last-of-type {
    margin-right: 0;
    .bottom {
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .el-button--info {
        width: 45%;
        margin-top: 10px;
        margin-left: 0;
      }
    }
  }
  .top {
    margin: 0 7px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    align-items: center;
    span {
      display: block;
      width: 50px;
      height: 60px;
      border-radius: 50%;
      margin: 12px 20px 10px 5px;
      img {
        height: 100%;
      }
    }
    h2 {
      font-size: 23px;
      color: rgb(16, 16, 16);
      font-weight: 400;
    }
  }
  .buttom {
    display: flex;
    padding-bottom: 10px;
    flex-wrap: wrap;
    box-sizing: border-box;
    // justify-content: space-between;
    // padding: 0 40px;
    .bottom-level {
      width: 50%;
      text-align: center;
      margin-top: 10px;
      cursor: pointer;
    }
    .bottom-level:hover {
      color: #214da080;
    }
    // h4 {
    //   color: #646464;
    //   font-size: 14px;
    //   padding-top: 15px;
    //   line-height: 200%;
    // }
    // i {
    //   display: block;
    //   width: 24px;
    //   height: 24px;
    //   font-size: 24px;
    //   position: absolute;
    //   right: 23px;
    //   bottom: 14px;
    // }
  }
}
</style>
