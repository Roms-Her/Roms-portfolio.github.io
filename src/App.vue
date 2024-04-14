<template>
  
  <header class="flex justify-center w-full">
    <sphere />
    <navbar />
  </header>
  
  <main>
    <home-page />
    <project-page />
    <presentation-page />
    <time-Line />
    <more-informations class="bg-backgroundInfo"/>
  </main>

  <footer>
    <footer-vue class="bg-backgroundInfo"/>
  </footer>

</template>


<style></style>


<script setup>

import sphere from './components/sphere.vue';
import navbar from './components/navbar.vue';
import homePage from './components/homePage.vue';
import presentationPage from './components/presentationPage.vue';
import projectPage from './components/projectsPage.vue';
import timeLine from './components/timeline.vue';
import moreInformations from './components/moreInformations.vue';
import footerVue from './components/footer.vue';

</script>
