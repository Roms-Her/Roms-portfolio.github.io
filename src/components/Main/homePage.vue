<template>
    <section class="flex flex-col sm:items-center text-accessible">

        <div v-motion-slide-visible-once-left class="flex p-8 flex-col w-full sm:w-5/6  md:mb-10 lg:flex-row-reverse lg:mb-14 xl:w-3/4 2xl:w-3/5">
            <div class="portrait flex w-40 h-40 bg-card bg-opacity-30  rounded-full justify-center mb-8 m-auto md:mb-12 lg:m-auto lg:w-60 lg:h-60 xl:w-64 xl:h-64 ">
            </div>
            <div class="md:pr-8">

                <p class="mb-2 text-base2 md:mb-4">Bonjour, je suis Romain Hernandez</p>
                <h1 class="mb-8 leading-none max-w-xl font-bold  md:text-max md:mb-10">Bienvenue sur mon portfolio!</h1>
                <p class="mb-6 text-base2 md:mb-8">Développeur full stack. Créatif et passionné.</p>
                <ul class="flex gap-2 flex-wrap md:gap-4 xl:gap-4">

                    <li v-for="(item, index) in homeLinks" :key="index" class="flex items-center justify-center  ">
                        <a :href="generateLink(item)"
                            class=" bg-solid px-6 py-3 rounded-xl uppercase border border-solid tracking-widest font-medium text-sm hover:bg-accessible hover:text-backgroundColor hover:shadow-xl transition-all ease-out duration-200"
                            target="blank">{{ item }}</a>
                    </li>

                </ul>
            </div>
        </div>
        <div class="flex bottom-0 right-0 gap-8 items-center justify-end p-8 sm:w-5/6 md:mb-10 lg:mb-14 xl:w-3/4 2xl:w-3/5">
            <div class="text-end uppercase leadin-4">
                <p class="text-3xl">Let's go !</p>
                <p class="md:text-base2">Plus d'informations par ici</p>
            </div>

            <div>
                <svg @click="scrollPage" class="black-arrow lg:h-30" xmlns="http://www.w3.org/2000/svg" width="30" height="70" viewBox="0 0 30 109"
                    fill="none">
                    <path
                        d="M15 53.5052L17 53.5052L15 53.5052ZM13.5858 107.654C14.3668 108.435 15.6332 108.435 16.4142 107.654L29.1421 94.9264C29.9232 94.1453 29.9232 92.879 29.1421 92.098C28.3611 91.3169 27.0948 91.3169 26.3137 92.098L15 103.412L3.68629 92.098C2.90524 91.3169 1.63891 91.3169 0.857865 92.098C0.0768164 92.879 0.0768163 94.1453 0.857865 94.9264L13.5858 107.654ZM13 0.770325L13 53.5052L17 53.5052L17 0.770325L13 0.770325ZM13 53.5052L13 106.24L17 106.24L17 53.5052L13 53.5052Z"
                        fill="#f1f4fd" />
                </svg>
            </div>
        </div>

    </section>
</template>

<style>
.portrait{
    background-image: url('../../assets/img/roms.png');
    background-size: cover;
    border: 1px solid;
    box-shadow: var(--customs-shadow-box);
    backdrop-filter: blur(30px);
}</style>

<script>
export default {
    data() {
        return {
            homeLinks: [
                "github",
                "linkedin",
                "x",
                "email"
            ],
            socialLinks: {
                github: 'https://github.com/Roms-Her',
                linkedin: 'https://www.linkedin.com/in/romain-hernandez-romsher',
                x: 'https://twitter.com/dev_roms',
                email: 'mailto:romsher.dev@gmail.com'
            }
        };
    },
    methods: {
        generateLink(item) {
            const lowerCaseItem = item.toLowerCase();
            return this.socialLinks[lowerCaseItem] || ' ';
        },

        scrollPage(){ 
            const projectPage = document.querySelector('#project-page');
            projectPage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    },
    name: "homePage"
}
</script>