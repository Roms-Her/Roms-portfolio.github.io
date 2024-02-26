<template>
    <section class="flex flex-col p-8">

        <section  v-motion-pop-visible class="project skills flex flex-col w-full rounded-3xl p-4 items-center ">

            <h2 class="font-bold mb-6 uppercase">Skills</h2>

            <div class="flex items-center mb-4 w-full">
                <ul class="flex flex-col gap-2 max-w-full flex-wrap justify-center items-center w-1/2">
                    <p class="font-bold uppercase text-xl ">Front-end</p>
                    <li v-for="(item, index) in front" :key="index" class="uppercase font-semibold">{{ item }}</li>
                </ul>
                <ul class="flex flex-col gap-2 max-w-full flex-wrap justify-center items-center w-1/2">
                    <p class="font-bold uppercase text-xl ">Back-end</p>
                    <li v-for="(item, index) in back" :key="index" class="uppercase font-semibold">{{ item }}</li>
                </ul>
            </div>

        </section>

        <!-- <section class="presentation-page--me">

            <div class="presentation-page__first-coat container-coat">
                <div class="profile">
                    <div class="job">
                        <p class="job__designation">I'm a passionate full
                            stack JS developer</p>
                    </div>

                    <div class="profile-back">
                        <div class="profile-back__color">
                        </div>
                    </div>
                </div>

                <div class="school">
                    <div class="school-div">
                        <p class="school__history">I enriched my skills through in-depth training at a leading <span
                                class="important">digital school</span>, specializing as a <span class="important">web and
                                mobile web developer</span>. During this experience, I had the opportunity to collaborate on
                            a variety of projects, enabling me to acquire an in-depth understanding of <span
                                class="important">modern technologies</span>. My career path led me to design and develop
                            websites as well as full-featured, dynamic applications, putting my knowledge into practice and
                            demonstrating my ability to create innovative development solutions.</p>
                        <p class="school__history text-facultatif">So I'm <span class="important">determined</span> to
                            pursue my path in development by exploring new technologies, taking part in ambitious projects
                            and engaging in continuing education initiatives. My goal is to <span class="important">become a
                                web and mobile web developer of excellence</span>, capable of providing innovative and
                            effective solutions to the complex challenges of the digital world.</p>
                    </div>
                    <div>
                        <svg class="black-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="70"
                            viewBox="0 0 30 109" fill="none">
                            <path
                                d="M15 53.5052L17 53.5052L15 53.5052ZM13.5858 107.654C14.3668 108.435 15.6332 108.435 16.4142 107.654L29.1421 94.9264C29.9232 94.1453 29.9232 92.879 29.1421 92.098C28.3611 91.3169 27.0948 91.3169 26.3137 92.098L15 103.412L3.68629 92.098C2.90524 91.3169 1.63891 91.3169 0.857865 92.098C0.0768164 92.879 0.0768163 94.1453 0.857865 94.9264L13.5858 107.654ZM13 0.770325L13 53.5052L17 53.5052L17 0.770325L13 0.770325ZM13 53.5052L13 106.24L17 106.24L17 53.5052L13 53.5052Z"
                                fill="#D6E1FF" />
                        </svg>
                    </div>
                </div>

            </div>
        </section> -->


    </section>
</template>

<script>
export default {
    data() {
        return {
            front: [
                "HTML",
                "CSS",
                "JAVASCRIPT",
                "VueJS",
                "Tailwind"
            ],
            back: [
                "NODE JS",
                "SQL",
                "Express",
                "Sequelize",
                "Postgres"
            ],
        }
    },
    name: 'presentation-page',
    // mounted() {
    //     const arrows = document.querySelectorAll(".black-arrow");

    //     arrows.forEach(arrow => arrow.addEventListener("click", (event) => {
    //         const windowHeight = window.innerHeight;
    //         const scrollTop = window.scrollY;

    //         window.scrollTo({
    //             top: scrollTop + windowHeight, // Faites défiler de la hauteur de la fenêtre actuelle
    //             behavior: 'smooth'
    //         });
    //     }));
    // }
}
</script>