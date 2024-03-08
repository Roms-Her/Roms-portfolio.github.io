<template>
  
  <header class="flex justify-center w-full">
    <sphere />
    <navbar />
  </header>
  
  <main>
    <home-page />
    <project-page />
    <presentation-page />
    <more-informations />
  </main>

  <footer>
    <footer-vue />
  </footer>

</template>


<style></style>


<script setup>

import sphere from './components/sphere.vue';
import navbar from './components/navbar_mobile.vue';
import homePage from './components/homePage_mobile.vue';
import presentationPage from './components/presentationPage.vue';
import projectPage from './components/projectsPage_mobile.vue';
import moreInformations from './components/moreInformations.vue';
import footerVue from './components/footer.vue';

</script>
