<template>

 
    <NavBar></NavBar>
    <HomeBanner></HomeBanner>
    <MiddelPage/>
    <VauldateSection/>
    <FooterPage/>
 

</template>

<script>
import NavBar from './components/NavBar.vue';
import HomeBanner from './components/HomeBanner.vue';
import FooterPage from './components/FooterPage.vue';
import VauldateSection from './components/VauldateSection.vue';
import MiddelPage from './components/MiddelPage.vue';



export default {
  name: 'App',
  components: {
    NavBar,
    HomeBanner,
    FooterPage,
    VauldateSection,
    MiddelPage,

}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-display:swap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
* {
   margin: 0px;
 
   }
   .swiper-button-next,
.swiper-button-prev {
   opacity: 0 !important;
}

.swiper-pagination{
  top: 0px;
  border-radius: 0px;
}

 .swiper-pagination-bullet {
      border-radius: 0px;
      background: transparent;
      transform: rotate(45deg);
      width: 5px;
      height: 5px;
      border: 0.5px solid;
      opacity: 1;
 }

 .swiper-pagination-bullet-active {
    background-color: black;
    transform: rotate(45deg);
      width: 7px;
      height: 7px;
   
  }
  .swiper-pagination{
    height: 20px;
  }
  
</style>
