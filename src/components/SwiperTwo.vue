<template>
<section>
   <h1>See latest vacation ideas</h1>
  <swiper 
  :modules="modules" 
  :slides-per-view="3" 
  :space-between="50"
   :keyboard="{enabled: true, }"
    navigation
    
     :pagination="{ clickable: true }" 
     :breakpoints="swiperOptions.breaks"
      class="swiper__bg">
    <swiper-slide v-for="item in 5" v-bind:key="item" class="slide">
    <div class="container">
        <img src="@/assets/swiper.png" alt="slider" loading="lazy" />
      <div class="inner__layout">
        <div class="inner__layoutTwo">
               <p>Beachfront Escapes</p>
        </div>
      </div>
    </div>
    
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

section{
  background-color: #ecf0f1;

 
h1 {
  color: black;

  text-align: center;
  font-weight: 100;
  font-size: 50px;
  padding-top: 80px;
  padding-bottom: 30px;

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
  height: 50vh;
  padding-top: 4%;
  @media (max-width:770px) {
    height: 26vh;
  }

  @media (max-width:426px) {
    padding-top: 10%;
    height: 22vh;
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
   



    .container{
     
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      
    img {
      width: 95%;

      @media (max-width:770px) {
        width: 85%;
       
      }

      @media (max-width:426px) {
       
      }
    }

    .inner__layout {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 35%;
      bottom: 10%;
      left: 10%;
      background-color: white;

      @media (max-width:770px) {
        width: 60%;
      height: 35%;
      bottom: 10%;
      left: 20%;
      }

      @media (max-width:426px) {
        width: 60%;
      height: 35%;
      bottom: 10%;
      left: 20%;


      }
      .inner__layoutTwo{
         border: 1px dotted gray;
        width: 90%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        p {
        color: gray;
        font-size: 24px;
        font-weight: 500;
        margin: 0;
       
        @media (max-width:770px) {
          font-size: 14px;
        }

        @media (max-width:426px) {
            font-size: 14px;
        }

        @media (max-width:320px) {
            font-size: 12px;
        }

      }

      }

      
    }

    }



  }
}
}

</style>