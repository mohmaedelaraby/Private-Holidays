<template>
  <section>
    <h1>Why we are different</h1>
    <swiper :modules="modules" :slides-per-view="3" :space-between="50" :keyboard="{ enabled: true, }" navigation
      :pagination="{ clickable: true }" :breakpoints="swiperOptions.breaks" class="swiper__bg">
      <swiper-slide v-for="item in 5" v-bind:key="item" class="slide">
        <span>
          <img src="@/assets/Ellipse.png" alt="slider" loading="lazy" />
          <img src="@/assets/VectorSmartObject.svg" alt="slider" loading="lazy" class="vector" />
        </span>
        <p class="slide__header">Tailor-Made Packages </p>
        <p class="slide__txt">When it comes to delivering the best planned holiday package to you, we strive to exceed
          your expectations. For us, it has to be spot-on. We do what we do in the ideal way possible.</p>
      </swiper-slide>
    </swiper>

  </section>
</template>
<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {

    return {

      modules: [Navigation, Pagination, Scrollbar, A11y],
      speed: 500,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      Scrollbar: {
        el: ".swiper-scrollbar"
      },
      Pagination: ".swiper-pagination"
    };
  }, data() {
    return {
      swiperOptions: {
        breaks: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
    }

  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: #ecf0f1;

  h1 {
    color: black;

    text-align: center;
    font-weight: 100;
    font-size: 50px;
    padding-top: 80px;


    @media (max-width:770px) {
      font-size: 34px;
      padding-top: 40px;
      padding-bottom: 0px;
    }

    @media (max-width:426px) {
      font-size: 26px;
      padding-bottom: 0;
    }
  }

  .swiper__bg {
    background-color: #ecf0f1;
    height: 40vh;
    padding-top: 4%;

    @media (max-width:770px) {
      height: 35vh;
    }

    @media (max-width:426px) {
      padding-top: 10%;
      height: 35vh;
    }

    .swiper-horizontal>.swiper-scrollbar {
      width: 100%;
    }

    .slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;

      span {
        
           position: relative;
        img {
          margin-top: 25px;
        }
        .vector{
          position: absolute;
    top: 43%;
    left: 0;
    transform: translate(50%, -50%);
        }
      }




      .slide__header {
        font-size: 30px;
        color: black;
        font-weight: 400;
        margin-top: 15px;

        @media (max-width:770px) {
          font-size: 30px;
          font-weight: 500;
        }

        @media (max-width:426px) {
          font-size: 25px;
        }
      }

      .slide__txt {
        width: 70%;
        font-size: 16px;
        font-weight: 200;
        color: black;
        margin-bottom: 15px;
        text-align: center;

        @media (max-width:770px) {
          width: 67%;
          font-size: 17px;
        }

        @media (max-width:426px) {
          width: 67%;
          font-size: 17px;
        }

      }
    }
  }
}
</style>