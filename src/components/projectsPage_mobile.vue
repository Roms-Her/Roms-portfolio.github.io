<template>
  <section id="project-page" class="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14">
    <div id="project-back" class="flex flex-wrap gap-6 sm:w-5/6 xl:w-3/4 2xl:w-3/5 justify-center small:flex-col small:w-full">
      <div v-motion-pop-visible v-for="(project, index) in projects" :key="index"
        class="card w-2/5 max-h-80 text-accessible small:w-full">
        <div class="card-body items-center text-center md:h-56 bg-card border border-solid rounded-3xl bg-opacity-70">
          <h2 class="card-title md:text-xl uppercase">{{ project.name }}</h2>
          <p class="md:text-base">{{ project.technos }}</p>
          <div class="card-actions">
            <button @click="openModal(project)"
              class="btn btn-primary bg-[#0090FF] text-[#d6e1ff] md:text-base2 hover:bg-separator">
              En savoir plus
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>

    <div id="modal" v-if="modalVisible"
      class="absolute z-50 flex flex-col h-5/6 w-5/6 bg-accessible items-center rounded-3xl border border-solid text-backgroundColor shadow-modal">
      <span @click="closeModal" class="absolute flex justify-center text-35xl w-10 top-4 right-4 cursor-pointer text-white text-3xl">&times;</span>
      <figure class="w-full h-2/4 flex rounded-3xl">
        <img class="flex w-full rounded-t-3xl object-cover"
          :src="selectedProject.picture" alt="" />
      </figure>
      <div class="flex flex-col items-center p-8 overflow-y-auto">
        <div class="flex flex-col">
          <h3 class="text-center mb-4 font-bold">{{ selectedProject.name }}</h3>
          <p class="text-center mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quasi
            illum consequuntur voluptate doloremque sapiente, exercitationem
            pariatur quo facere quae facilis, fugiat enim magni aut ex nesciunt
            inventore labore dolorum! Repellat, laboriosam sit. Ipsa rerum iste
            nobis at quasi ullam corporis eos praesentium enim perspiciatis
            atque, voluptatem ex dignissimos sunt!
          </p>
        </div>
        <div class="flex flex-col">
          <h4 class="text-center">Technos utilisées:</h4>
         <p>{{ selectedProject.technos }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>

<script>
export default {
  data() {
    return {
      isVisible: true,
      modalVisible: false,
      selectedProject: null,

      projects: [
        {
          name: "Nicoles",
          picture:
            "https://cdn.pixabay.com/photo/2017/12/12/11/37/bastei-3014467_640.jpg",
          technos: "Vue JS, SwiperJS",
          link: "lien1",
        },
        {
          name: "Ocolis",
          picture:
            "https://cdn.pixabay.com/photo/2016/01/08/18/00/antelope-canyon-1128815_1280.jpg",
          technos: "Node JS, Sequilize, Express",
          link: "lien2",
        },
        {
          name: "O'news",
          picture:
            "https://cdn.pixabay.com/photo/2016/04/02/20/54/road-1303617_1280.jpg",
          technos: "React, Bulma",
          link: "lien3",
        },
        {
          name: "JPB photographie",
          picture:
            "https://cdn.pixabay.com/photo/2020/03/17/13/04/desert-4940300_1280.jpg",
          technos: "Docker, Sequelize, Node JS",
          link: "lien4",
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
  mounted(){
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
