<template>
  
  <header class="flex justify-center w-full">
    <sphere />
    <navbar />
  </header>
  
  <main>
    <home-page />
    <project-page />
    <presentation-page />
    <time-line />
    <more-informations class="bg-backgroundInfo"/>
  </main>

  <footer>
    <footer-vue class="bg-backgroundInfo"/>
  </footer>

</template>


<style></style>


<script setup>

import sphere from './components/Main/Animation/sphere.vue';
import navbar from './components/Navbar/navbar.vue';
import homePage from './components/Main/homePage.vue';
import presentationPage from './components/Main/presentationPage.vue';
import projectPage from './components/Main/projectsPage.vue';
import timeLine from './components/Main/timeline.vue';
import moreInformations from './components/Main/moreInformations.vue';
import footerVue from './components/Footer/footer.vue';

</script>
