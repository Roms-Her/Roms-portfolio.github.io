<template>
  <section id="project-page" class="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14">
    <div id="project-back"
      class="flex flex-wrap gap-10 sm:w-5/6 xl:w-3/4 2xl:w-3/5 justify-center small:flex-col small:w-full">
      <div v-motion-pop-visible-once v-for="(project, index) in projects" :key="index"
        class="card card-content w-2/5 max-h-80 small:w-full rounded-3xl ">
        <div class=" card-body items-center text-center md:h-56">
          <h2 class="card-title md:text-xl uppercase">{{ project.name }}</h2>
          <p class="md:text-base">{{ project.poste }}</p>
          <div class="card-actions">
            <button @click="openModal(project)"
              class="social-a px-4 py-2 rounded-xl uppercase font-medium text-sm border border-solid">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>

    <div id="modal" v-if="modalVisible"
      class="absolute z-50 flex flex-col h-5/6 w-5/6 bg-accessible items-center rounded-3xl text-backgroundColor shadow-modal">
      <span @click="closeModal"
        class="absolute flex justify-center text-35xl w-10 top-4 right-4 cursor-pointer text-white text-3xl">&times;</span>
      <figure class="w-full h-2/4 flex rounded-3xl">
        <img class="flex w-full rounded-t-3xl object-cover" :src="selectedProject.picture" alt="" />
      </figure>
      <div class="flex flex-col items-center p-8 overflow-y-auto h-full justify-center">
        <div class="flex flex-col sm:w-3/4">
          <h3 class="text-center mb-4 font-bold">{{ selectedProject.name }}</h3>
          <p class="text-center mb-4 ">
       {{ selectedProject.text }}
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <h4 class="text-center">Technos utilisées:</h4>
          <p>{{ selectedProject.technos }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>

<script>
import gestinvest from '../../public/img/Gestinvest.png'
export default {
  data() {
    return {
      isVisible: true,
      modalVisible: false,
      selectedProject: null,

      projects: [
        {
          name: "Gestinvest",
          picture:
            gestinvest,
          technos: "React, Node JS, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
          text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. J'ai pu mettre en pratique mes compétences en développement web et en gestion de projet. Créé pour un projet d'étude, nous étions 5 (2  front, 3 back) et avions un mois composé de 4 sprints en comptant le sprint 0 pour le réaliser.",
          poste: "Product Owner",
          link: "lien1",
        },
        {
          name: "Gestinvest",
          picture: gestinvest,
          technos: "React, Node JS, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
          text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. J'ai pu mettre en pratique mes compétences en développement web et en gestion de projet. Créé pour un projet d'étude, nous étions 5 (2  front, 3 back) et avions un mois composé de 4 sprints en comptant le sprint 0 pour le réaliser.",
          poste: "Product Owner",
          link: "lien1",
        },
        {
          name: "Gestinvest",
          picture: gestinvest,
          technos: "React, Node JS, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
          text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. J'ai pu mettre en pratique mes compétences en développement web et en gestion de projet. Créé pour un projet d'étude, nous étions 5 (2  front, 3 back) et avions un mois composé de 4 sprints en comptant le sprint 0 pour le réaliser.",
          poste: "Product Owner",
          link: "lien1",
        },
        {
          name: "Gestinvest",
          picture: gestinvest,
          technos: "React, Node JS, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
          text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. J'ai pu mettre en pratique mes compétences en développement web et en gestion de projet. Créé pour un projet d'étude, nous étions 5 (2  front, 3 back) et avions un mois composé de 4 sprints en comptant le sprint 0 pour le réaliser.",
          poste: "Product Owner",
          link: "lien1",
        },
      ],

    };

  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
      this.modalVisible = true;

    },
    closeModal() {
      this.modalVisible = false;
    },
  },
  mounted() {
    const page = document.getElementById('project-page');

    window.addEventListener('click', (event) => {
      if (this.modalVisible) {
        if (!page.contains(event.target)) {
          this.modalVisible = false;
        }
      }
    });
  }
};

</script>
