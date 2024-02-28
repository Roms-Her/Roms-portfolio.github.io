<template>
    <section id="skills" class="flex flex-col p-8 sm:items-center md:mb-10 lg:mb-14">

        <div v-motion-pop-visible class="project skills flex flex-col w-full rounded-3xl p-4 items-center sm:w-5/6 md:p-8 xl:w-3/4 2xl:w-3/5">

            <h2 class="font-bold mb-6 uppercase md:text-3xl">Skills</h2>

            <div class="flex items-center mb-4 w-full">
                <ul class="flex flex-col gap-2 max-w-full flex-wrap justify-center items-center w-1/2 md:gap-4">
                    <p class="font-bold uppercase text-xl md:text-xl">Front-end</p>
                    <li v-for="(item, index) in front" :key="index" class="uppercase font-semibold md:text-base">{{ item }}</li>
                </ul>
                <ul class="flex flex-col gap-2 max-w-full flex-wrap justify-center items-center w-1/2 md:gap-4">
                    <p class="font-bold uppercase text-xl md:text-xl">Back-end</p>
                    <li v-for="(item, index) in back" :key="index" class="uppercase font-semibold md:text-base">{{ item }}</li>
                </ul>
            </div>

        </div>

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
}
</script>