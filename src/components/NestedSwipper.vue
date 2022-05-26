<template>

   <h1>Recent holiday locations</h1>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper__bg"
  >
     <swiper-slide v-for="item in 15" v-bind:key="item" class="slide">
     <div class="container">
         <SeipperCart/>
         <SeipperCart/>
         <SeipperCart/>
         <SeipperCart/>
     </div>
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
import SeipperCart from './SeipperCart.vue';


  // Import Swiper styles
  export default {
    components: {
    Swiper,
    SwiperSlide,
    SeipperCart
},
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
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
    height: 80vh;
    @media (max-width: 426px) {
      height:  171vh;
    }

    .swiper-horizontal>.swiper-scrollbar{
        width: 100%;
    }
   
.slide{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    .container{
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

</style>