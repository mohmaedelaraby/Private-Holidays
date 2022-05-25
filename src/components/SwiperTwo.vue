<template>
<h1>See latest vacation ideas</h1>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="swiper__bg"
  >
     <swiper-slide v-for="item in 15" v-bind:key="item" class="slide">
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
    .inner__layout{
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            height: 20%;
            bottom: 30%;
            background-color: white;
            p{
                color: black;
                background-color: white;;
                font-size: 10px;
                border: 1px solid black;
                padding: 13%;


                @media  (max-width:750px) {
                    font-size: 30px;
                }
            }
        }
    
}
}

</style>