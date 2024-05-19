<template>
  <section id="project-page" class="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14 text-accessible">
    <div id="project-back"
      class="flex flex-wrap gap-10 sm:w-5/6 xl:w-3/4 2xl:w-3/5 justify-center small:flex-col small:w-full">
      <div v-motion-pop-visible-once v-for="(project, index) in projects" :key="index"
        class="card card-content w-2/5 max-h-80 small:w-full rounded-3xl ">
        <div class=" card-body items-center text-center md:h-56">
          <h2 class="card-title md:text-xl uppercase ">{{ project.name }}</h2>
          <p class="md:text-base">{{ project.poste }}</p>
          <div class="card-actions">
            <button @click="openModal(project)"
              class="bg-solid px-4 py-2 rounded-xl uppercase font-medium text-sm border border-solid hover:bg-accessible hover:text-backgroundColor hover:shadow-lg transition duration-200">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>

   <div id="modal" v-if="modalVisible"
      class="absolute z-50 flex flex-col h-5/6 w-5/6 bg-accessible items-center rounded-3xl text-backgroundColor shadow-modal">
      <span @click="closeModal"
        class="absolute z-50 flex justify-center w-10 top-4 right-4 cursor-pointer text-35xl text-backgroundColor">&times;</span>
      <figure class="relative w-full h-2/4 flex rounded-3xl">
        <img class="flex w-full  p-12 md:p-20 rounded-t-3xl object-contain" :src="selectedProject.picture" :alt="selectedProject.alt" />
      </figure>
      <div class="flex flex-col items-center p-8 overflow-y-auto h-full">
        <div class="flex flex-col gap-4  sm:w-3/4 ">
          <h3 class="text-center mb-4 font-bold text-gray-600">{{ selectedProject.name }}</h3>
          <p class="text-center">
            {{ selectedProject.text }}
          </p>
          <p class="text-center mb-4">
            {{ selectedProject.texte2 }}
          </p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <h4 class="text-center font-bold text-gray-600">Technos utilisées:</h4>
          <p class="text-center mb-6">{{ selectedProject.technos }}</p>
          <a :href="selectedProject.link" class="text-sm uppercase font-bold text-solid" target="_blank" >Cliquez ici pour visiter le site web !</a>
        </div>
      </div>
</div>
  </section>
</template>

<style></style>

<script>
import gestinvest from '../../assets/img/gestinvest-logo.png';
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
          alt: 'image du logo gestinvest',
          technos: "React, Node JS, Express, Sqitch, Tailwildcss, Jest, PostgreSQL, Heroku",
          text: "Gestinvest est une application de gestion de portefeuille d'actifs. Elle permet de suivre l'évolution de ses investissements en temps réel. J'ai travaillé sur ce projet en tant que Product Owner. Créé pour un projet d'étude, nous étions 5 développeurs (2 front, 3 back) et avions un mois composé de 4 sprints, en comptant le sprint 0, pour le réaliser. J'ai essentiellement développé la partie back-end de l'application en Node.js et Express (API REST) qui permet de communiquer entre le front et le back.",
          texte2: "La sécurité est un point important de notre application, c'est pourquoi nous avons choisi de mettre l'accent sur celle-ci. Nous avons développé des algorithmes de calcul de performance pour les actifs financiers détenus par les utilisateurs. Les données des actifs sont mises à jour automatiquement via un CRON que nous avons mis en place, lequel fait appel à différentes API externes pour insérer le prix des actifs à certains moments de la journée. Aujourd'hui, nous continuons d'améliorer le contenu de Gestinvest et de le maintenir en ligne par passion pour ce projet.",
          poste: "Product Owner",
          link: "https://gestinvest-front-8af1ad4ce95a.herokuapp.com/",
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
