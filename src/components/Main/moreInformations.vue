<template>
  <section id="about" class="relative flex flex-col px-8 pt-24 pb-8 items-center text-accessible">

    <div class="flex flex-col justify-center items-center sm:w-5/6 xl:w-3/4 2xl:w-3/5">
      <p class=" text-3xl text-center w-3/4 mb-10 sm:w-2/5 md:text-3xl uppercase font-semibold">Développeur full stack passionné.</p>
  
      <p class="mb-8 text-center sm:w-5/6 md:text-base2">Ayant effectué une reconversion professionnelle, j'ai enrichi mes compétences grâce à une formation approfondie dans une grande école du <span class="important">numérique</span>, me spécialisant en tant que développeur <span class="important">web et web mobile</span>. Au cours de cette expérience, j'ai eu l'opportunité de collaborer sur divers projets, ce qui m'a permis d'acquérir une compréhension approfondie des <span class="important">technologies modernes</span>. Mon parcours professionnel m'a conduit à concevoir et développer des sites web ainsi que des applications dynamiques complètes, mettant ainsi en pratique mes connaissances et démontrant ma capacité à créer des solutions de développement innovantes.</p>

      <p class="text-center sm:w-5/6 md:text-base2 mb-12">Je suis <span class="important">déterminé</span> à poursuivre mon chemin dans le développement en explorant de nouvelles technologies, en participant à des projets ambitieux et en m'engageant dans des initiatives de formation continue. Mon objectif est de <span class="important">devenir un développeur web et mobile d'excellence</span>, capable de fournir des solutions innovantes et efficaces aux défis complexes du monde numérique.</p>

        <a class="bg-solid px-4 py-2 rounded-xl uppercase font-medium text-sm border border-solid hover:bg-accessible hover:text-backgroundColor hover:shadow-xl transition-all ease-out duration-200" :href="cvPdf" download="CV_romain-hernandez" target="_blank">Télécharger le CV</a>
    </div>

    

  </section>
</template>

<script>
import cv from '../../assets/pdf/cv-romain-hernandez.pdf'
export default {
  data() {
    return {
      cvPdf: cv
    }
  }
}
</script>