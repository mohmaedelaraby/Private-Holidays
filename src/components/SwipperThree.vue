<template>

   <h1>Why we are different</h1>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
   
    class="swiper__bg"
  >
     <swiper-slide v-for="item in 5" v-bind:key="item" class="slide">
        <img src="@/assets/Ellipse.png" alt="slider" loading="lazy"/>
        <p class="slide__header">Tailor-Made Packages </p>
        <p class="slide__txt">When it comes to delivering the best planned holiday package to you, we strive to exceed your expectations. For us, it has to be spot-on. We do what we do in the ideal way possible.</p>
    </swiper-slide>
  </swiper>

 
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
        Scrollbar:{
          el:".swiper-scrollbar"
        },
        Pagination:".swiper-pagination"
      };
    },
  };
</script>

<style lang="scss" scoped>
h1{
  color: black;
  background-color: #ecf0f1;
  text-align: center;
  font-weight: 100;
  font-size: 50px;
  padding-top: 50px;
   padding-bottom: 30px;
     @media  (max-width:770px) {
                      font-size: 34px;
    padding-top: 40px;
    padding-bottom: 20px;
                }
                 @media  (max-width:426px) {
                    font-size: 26px;
                }
}
.swiper__bg{
    background-color: #ecf0f1;
    height: 50vh;

    .swiper-horizontal>.swiper-scrollbar{
        width: 100%;
    }
   
.slide{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    img{
        margin-top: 25px;
    }
    .slide__header{
        font-size: 30px;
        color: black;
        font-weight: 400;
        margin-top: 15px;
        @media  (max-width:770px) {
                         font-size: 16px;
                         font-weight: 500;
                }
                 @media  (max-width:426px) {
                   font-size: 10px;
                }
    }
    .slide__txt{
        width: 70%;
        font-size: 16px;
        font-weight: 200;
        color: black;
        margin-top: 15px;margin-bottom: 15px;
        @media (max-width:770px) {
          width: 67%;
          font-size: 12px;
        }
        @media (max-width:426px) {
          width: 67%;
    font-size: 9px;
        }
          
    }
}
}

</style>