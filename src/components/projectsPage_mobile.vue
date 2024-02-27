<template>
  <section
    id="project-page"
    class="flex flex-col items-center justify-center p-8 md:mb-10 lg:mb-14"
  >
    <!-- <div
      className="carousel carousel-center w-full space-x-4 rounded-box sm:w-5/6 xl:w-3/4"
    >
      <div className="carousel-item gap-4 md:gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="card w-72 bg-base-100 shadow-xl text-[#253974]"
        >
          <figure class="h-28 md:h-44">
            <img
              :src="project.picture"
              :alt="project.name"
              class="rounded-xl w-full cover"
            />
          </figure>
          <div class="card-body items-center text-center bg-[#d6e1ff] md:h-56">
            <h2 class="card-title md:text-xl">{{ project.name }}</h2>
            <p class="md:text-base2">{{ project.technos }}</p>
            <div class="card-actions">
              <a
                :href="project.link"
                class="btn btn-primary bg-[#0090FF] text-[#d6e1ff] md:text-xl hover:bg-separator"
                >En savoir plus</a
              >
            </div>
          </div>
          <div
            class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          ></div>
        </div>
      </div>
    </div> -->





    <div class="flex flex-wrap gap-6 sm:w-5/6 xl:w-3/4 justify-center small:flex-col small:w-full">

        <div v-motion-pop-visible v-for="(project, index) in projects" :key="index" class="card w-2/5 max-h-80 text-[#253974] small:w-full">
          <div class="card-body items-center text-center bg-[#d6e1ff] md:h-56 rounded-3xl">
            <h2  class="card-title md:text-xl">{{ project.name }}</h2>
            <p class="md:text-base2">{{ project.technos }}</p>
            <div class="card-actions">
              <a :href="project.link"
                class="btn btn-primary bg-[#0090FF] text-[#d6e1ff] md:text-xl hover:bg-separator">En savoir plus</a>
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
