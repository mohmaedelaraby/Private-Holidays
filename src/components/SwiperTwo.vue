<template>
<h1>See latest vacation ideas</h1>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
   
    class="swiper__bg"
  >
     <swiper-slide v-for="item in 5" v-bind:key="item" class="slide">
        <img src="@/assets/swiper.png" alt="slider" loading="lazy"/>
         <div class="inner__layout">
                <p>ENJOY FREEDOM LAND</p>
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
      @media  (max-width:426px) {
                    height: 37vh;
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
    img{
        margin-top: 25px;
        @media  (max-width:770px) {
                  width: 85%;
                  height: 60%;
                }
                 @media  (max-width:426px) {
                        height: 37%;
                }
    }
    .inner__layout{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38%;
            height: 20%;
            bottom: 30%;
            background-color: white;
             @media  (max-width:770px) {
                     bottom: 41%;
                     width: 53%;
                     height: 12%;
                }
                 @media  (max-width:426px) {
                   bottom: 59%;width: 56%;height: 11%;
                   
                   
                }
            
            p{
                color: black;
                background-color: white;;
                font-size: 10px;
                border: 1px solid black;
                padding: 13%;
                 @media  (max-width:770px) {
                     padding: 6px;
                     font-size: 8px;
                }
                 @media  (max-width:376px) {
              
                }

            }
        }
    
}
}

</style>