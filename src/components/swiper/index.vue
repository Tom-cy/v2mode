<template>
  <div class="swiper-container">
    <swiper :options="swiperOptions" ref="mySwiper">
      <swiper-slide :key="banner.id" v-for="banner in slider">
        <a :href="banner.url" target="_blank" rel="noopener noreferrer">
          <img :src="banner.src" />
        </a>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'carrousel',
  data() {
    return {
      slider: [
        {
          id: 12,
          src: require('@/assets/img/swiper/a.jpg'),
          url: ''
        },
        {
          id: 11,
          src: require('@/assets/img/swiper/l.jpg'),
          url: 'https://paat.creacu.org.cn/%E5%85%B3%E4%BA%8E%E8%81%94%E5%90%88%E5%8F%91%E5%B8%83%E9%9D%92%E5%B0%91%E5%B9%B4%E7%BC%96%E7%A8%8B%E8%83%BD%E5%8A%9B%E7%AD%89%E7%BA%A7%E5%9B%A2%E4%BD%93%E6%A0%87%E5%87%865%E9%83%A8%E5%88%86%E7%9A%84%E5%85%AC%E5%91%8A.pdf'
        },
        {
          id: 6,
          src: require('@/assets/img/swiper/aaa.jpg'),
          url: 'https://paat.creacu.org.cn/%E5%85%B3%E4%BA%8E%E5%BC%80%E5%B1%95%E2%80%9CPAAT%20%E7%BC%96%E7%A8%8B%E4%B8%80%E5%B0%8F%E6%97%B6%E2%80%9D%E7%A7%91%E6%99%AE%E6%B4%BB%E5%8A%A8%E7%9A%84%E9%80%9A%E7%9F%A5.pdf'
        },
        {
          id: 5,
          src: require('@/assets/img/swiper/h.jpg'),
          url: 'https://paat.creacu.org.cn/%E3%80%8A%E9%9D%92%E5%B0%91%E5%B9%B4%E7%BC%96%E7%A8%8B%E8%83%BD%E5%8A%9B%E7%AD%89%E7%BA%A7%E3%80%8B%E5%9B%A2%E4%BD%93%E6%A0%87%E5%87%86%E5%BB%BA%E8%AE%BE%E4%B8%8E%E5%AE%9E%E6%96%BD%E6%84%8F%E4%B9%89.pdf'
        },

        {
          id: 1,
          src: require('@/assets/img/swiper/b.jpg'),
          url: 'http://paat.creacu.org.cn/about'
        },
        {
          id: 0,
          src: require('@/assets/img/swiper/f.jpg'),
          url: 'http://paat.creacu.org.cn/about'
        },
        {
          id: 2,
          src: require('@/assets/img/swiper/c.jpg'),
          url: 'http://paat.creacu.org.cn/sampleTest'
        },
        {
          id: 3,
          src: require('@/assets/img/swiper/d.jpg'),
          url: 'http://paat.creacu.org.cn/Cosponsored'
        }
      ],
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        notNextTick: true,
        //循环
        loop: true,
        //设定初始化时slide的索引
        initialSlide: 0,
        //自动播放
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        //滑动速度
        speed: 800,
        //滑动方向
        direction: 'horizontal',
        //小手掌抓取滑动
        grabCursor: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
  background-color: #fff;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
      }
    }
  }
}
</style>
<style scoped>
.swiper-container /deep/ .swiper-pagination-bullet {
  background: rgb(30, 203, 226);
}
/* .swiper-container /deep/ .swiper-pagination-bullet-active {
  opacity: 1;
  background: #007aff;
} */
</style>
