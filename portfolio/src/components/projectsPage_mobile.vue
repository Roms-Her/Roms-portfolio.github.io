<template>
     <section class="project-page">

        <h1>Projects</h1>
        
        <div class="carrousel">
            <swiper-container class="mySwiper" pagination="true" effect="cube" grab-cursor="true" cube-effect-shadow="true"
                cube-effect-slide-shadows="true" cube-effect-shadow-offset="20" cube-effect-shadow-scale="0.94">
                <swiper-slide v-for="(item, index) in projectPicture" :key="index">
                    <p>Techno: {{ projectTechnos[index] }}</p>
                    <a :href="projectLink[index]"><img :src="projectPicture[index]" /></a>
                    <p class="project-name">Name - {{ projectName[index] }}</p>
                </swiper-slide>
            </swiper-container>
        </div>

     </section>
</template>

<style>

swiper-container {
      width: 15em;
      height: 15em;
      position: absolute;
      /* left: 50%;
      top: 50%; */
      /* margin-left: -150px;
      margin-top: -150px; */
    }

    swiper-slide {
      background-position: center;
      background-size: cover;
    }

    swiper-slide a img {
      display: block;
      width: 100%;
    }

    swiper-slide a {
        display: flex;
        height: 100%;
        width: 100%;
        margin: 1rem 0 1rem;
    }

    .project-name {
       text-align: end;
       font-weight: 600;
    }

</style>

<script>
    export default {
        data(){
            return {
                projectPicture: [
                "https://cdn.pixabay.com/photo/2023/08/16/18/05/homes-8194751_1280.png",
                "https://cdn.pixabay.com/photo/2022/04/15/21/52/digital-graphics-7135248_1280.jpg",
                "https://cdn.pixabay.com/photo/2020/05/19/13/48/cartoon-5190942_1280.jpg",
                "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_1280.png",
                ],

                projectLink: [
                "https://cdn.pixabay.com/photo/2023/08/16/18/05/homes-8194751_1280.png",
                "https://cdn.pixabay.com/photo/2022/04/15/21/52/digital-graphics-7135248_1280.jpg",
                "https://cdn.pixabay.com/photo/2020/05/19/13/48/cartoon-5190942_1280.jpg",
                "https://cdn.pixabay.com/photo/2022/03/31/14/53/camp-7103189_1280.png",
                ],

                projectName: [
                    "Nicoles",
                    "Ocolis",
                    "O'news",
                    "JPB photographie"
                ],

                projectTechnos: [
                    "Vue JS, SwiperJS",
                    "Node JS, Sequilize, Express",
                    "React, Bulma",
                    "Docker, Sequelize, Node JS"
                ]
            }
        }
    }
</script>