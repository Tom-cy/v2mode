<template>
    <div id="logo">
      <img class="logo1" :src="logo1" alt="" />
      <img class="logo2" :src="logo2" alt="" />
    </div>
  </template>
  
  <script>
  const logo1 = require('@/assets/img/logo/logo1.png')
  const logo2 = require('@/assets/img/logo/logo2.png')
  export default {
    data() {
      return {
        logo1,
        logo2
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  #logo {
    width: 310px;
    height: 50px;
    .logo1 {
      width: 50px;
      height: 50px;
    }
    .logo2 {
      width: 250px;
      height: 45px;
      margin-left: 10px;
    }
  }
  </style>
  