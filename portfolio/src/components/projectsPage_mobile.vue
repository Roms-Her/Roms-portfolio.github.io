<template>
    <section v-motion-pop-visible class="flex flex-col items-center justify-center p-8">
        <!-- <h2 class="font-bold uppercase mb-8">Projects</h2> -->

        <div className="carousel carousel-center w-full space-x-4 rounded-box">

            <div className="carousel-item gap-4">

                <div v-for="(project, index) in projects" :key="index" class="card w-72 bg-base-100 shadow-xl text-[#253974]">
                    <figure class="h-28">
                        <img :src="project.picture" :alt="project.name" class="rounded-xl w-full cover" />
                    </figure>
                    <div class="card-body items-center text-center bg-[#d6e1ff]">
                        <h2 class="card-title">{{ project.name }}</h2>
                        <p>{{ project.technos }}</p>
                        <div class="card-actions">
                            <a :href="project.link" class="btn btn-primary bg-[#0090FF] text-[#d6e1ff]">En savoir plus</a>
                        </div>
                    </div>
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
            isVisible: true, // Contrôle de la visibilité de la section
            projects: [
                {
                    name: "Nicoles",
                    picture: "https://cdn.pixabay.com/photo/2023/08/16/18/05/homes-8194751_1280.png",
                    technos: "Vue JS, SwiperJS",
                    link: "lien1"
                },
                {
                    name: "Ocolis",
                    picture: "https://cdn.pixabay.com/photo/2022/04/15/21/52/digital-graphics-7135248_1280.jpg",
                    technos: "Node JS, Sequilize, Express",
                    link: "lien2"
                },
                {
                    name: "O'news",
                    picture: "https://cdn.pixabay.com/photo/2020/05/19/13/48/cartoon-5190942_1280.jpg",
                    technos: "React, Bulma",
                    link: "lien3"
                },
                {
                    name: "JPB photographie",
                    picture: "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_1280.png",
                    technos: "Docker, Sequelize, Node JS",
                    link: "lien4"
                }
            ]
        };
    },
};
</script>
