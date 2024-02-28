<template>
  <section
    id="project-page"
    class="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14"
  >
    <div class="flex flex-wrap gap-6 sm:w-5/6 xl:w-3/4 2xl:w-3/5 justify-center small:flex-col small:w-full">

        <div v-motion-pop-visible v-for="(project, index) in projects" :key="index" class="card w-2/5 max-h-80 text-accessible small:w-full">
          <div class="card-body items-center text-center md:h-56 bg-card border border-solid rounded-3xl bg-opacity-70">
            <h2  class="card-title md:text-xl uppercase">{{ project.name }}</h2>
            <p class="md:text-base">{{ project.technos }}</p>
            <div class="card-actions">
              <a :href="project.link"
                class="btn btn-primary bg-[#0090FF] text-[#d6e1ff] md:text-base2 hover:bg-separator">En savoir plus</a>
            </div>
          </div>
          <div></div>
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
      projects: [
        {
          name: "Nicoles",
          picture:
            "https://cdn.pixabay.com/photo/2023/08/16/18/05/homes-8194751_1280.png",
          technos: "Vue JS, SwiperJS",
          link: "lien1",
        },
        {
          name: "Ocolis",
          picture:
            "https://cdn.pixabay.com/photo/2022/04/15/21/52/digital-graphics-7135248_1280.jpg",
          technos: "Node JS, Sequilize, Express",
          link: "lien2",
        },
        {
          name: "O'news",
          picture:
            "https://cdn.pixabay.com/photo/2020/05/19/13/48/cartoon-5190942_1280.jpg",
          technos: "React, Bulma",
          link: "lien3",
        },
        {
          name: "JPB photographie",
          picture:
            "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_1280.png",
          technos: "Docker, Sequelize, Node JS",
          link: "lien4",
        },
      ],
    };
  },
  // mounted(){
  //     const
  // }
};
</script>
