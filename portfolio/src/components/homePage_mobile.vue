<template>
    <section class="flex flex-col">

        <div v-motion-slide-visible-once-left class="flex p-8 flex-col w-full">
            <div class="portrait shadow flex w-40 h-40 rounded-full justify-center mb-8 m-auto">
            </div>
            <p class="mb-4 text-xl">Hi, i'm Romain Hernandez</p>
            <h1 class="mb-8 leading-none font-bold ">Welcome to my portfolio !</h1>
            <p class="mb-6 text-xl ">Full stack java script developer. Creative and passionate.</p>
            <ul class="flex gap-2 mb-10 flex-wrap">

                <li v-for="(item, index) in homeLinks" :key="index" class="flex items-center justify-center">
                    <a :href="generateLink(item)"
                        class="social__list--li--a px-4 py-2 rounded-xl uppercase tracking-widest font-medium"
                        target="blank">{{ item }}</a>
                </li>

            </ul>
        </div>
        <div class=" flex bottom-0 right-0 gap-8 items-center justify-end p-8">
            <div class="text-end uppercase leadin-4">
                <p class="text-3xl">Let's go!</p>
                <p>Swipe down for more information</p>
            </div>

            <div>
                <svg class="black-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="70" viewBox="0 0 30 109"
                    fill="none">
                    <path
                        d="M15 53.5052L17 53.5052L15 53.5052ZM13.5858 107.654C14.3668 108.435 15.6332 108.435 16.4142 107.654L29.1421 94.9264C29.9232 94.1453 29.9232 92.879 29.1421 92.098C28.3611 91.3169 27.0948 91.3169 26.3137 92.098L15 103.412L3.68629 92.098C2.90524 91.3169 1.63891 91.3169 0.857865 92.098C0.0768164 92.879 0.0768163 94.1453 0.857865 94.9264L13.5858 107.654ZM13 0.770325L13 53.5052L17 53.5052L17 0.770325L13 0.770325ZM13 53.5052L13 106.24L17 106.24L17 53.5052L13 53.5052Z"
                        fill="#D6E1FF" />
                </svg>
            </div>
        </div>

    </section>
</template>


<script>
export default {
    data() {
        return {
            homeLinks: [
                "github",
                "linkedin",
                "twitter",
                "email"
            ],
            socialLinks: {
                github: 'https://github.com/Roms-Her',
                linkedin: 'https://www.linkedin.com/in/romain-hernandez-romsher',
                twitter: 'https://twitter.com/dev_roms',
                email:'mailto:romsher.dev@gmail.com'
            }
        };
    },
    methods: {
        generateLink(item) {
            const lowerCaseItem = item.toLowerCase();
            return this.socialLinks[lowerCaseItem] || '/';
        }
    },
    name: "homePage"
}
</script>