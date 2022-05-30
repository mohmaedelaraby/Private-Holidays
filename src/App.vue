<template>

  <div id="app">
    <NavBar></NavBar>
    <HomeBanner></HomeBanner>
    <MiddelPage/>
    <VauldateSection/>
    <FooterPage/>
  </div>

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
}
* {
   margin: 0px;
 
   }

</style>
