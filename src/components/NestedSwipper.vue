<template>
  <section>
    <h1>Recent holiday locations</h1>
    <swiper 
    :prevent-clicks="false"
        :slide-to-clicked-slide="false"
        :slidesPerView="2"
        :spaceBetween="30"
        :keyboard="{
          enabled: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
    :breakpoints="swiperOptions.breaks"
      class="swiper__bg">
      <swiper-slide v-for="item in 5" v-bind:key="item" class="slide">
          <SeipperCart />
           <SeipperCart />

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
import SeipperCart from './SeipperCart.vue';


// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    SeipperCart
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
  },
  data() {
    return {
      swiperOptions: {
        breaks: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          1366: {
            slidesPerView: 2,
            spaceBetween: 10,
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
    padding-top: 50px;
    color: black;
   
    text-align: center;
    font-weight: 100;
    font-size: 50px;

    padding-bottom: 30px;

    @media (max-width:770px) {
      font-size: 34px;
      padding-top: 40px;
      padding-bottom: 20px;
    }

    @media (max-width:426px) {
      font-size: 26px;
    }
  }

  .swiper__bg {
   
    padding-bottom: 4%;
  

    .swiper-horizontal>.swiper-scrollbar {
      width: 100%;
    }

    .slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
      overflow: hidden;
  

      .container {
        width: 95%;
        height: 95%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;

        @media (max-width: 426px) {
          flex-direction: column;
          flex-wrap: nowrap;

        }

      }

    }
  }

}
</style>