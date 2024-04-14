<template>
  <section
    id="skills"
    class="flex flex-col p-8 mb-10 sm:items-center md:mb-24"
  >
    <div
      v-motion-slide-visible-once-left
      class="card-content flex flex-col w-full rounded-3xl p-4 items-center sm:w-5/6 md:p-8 xl:w-3/4 2xl:w-3/5 mb-10"
    >
      <h2 class="font-bold mb-6 uppercase text-accessible text-2xl">
        Hards Skills
      </h2>
      <div class="flex mb-4 w-full justify-center">
        <ul
          class="flex gap-4 md:gap-8 max-w-full flex-wrap justify-center items-center w-full md:gap-8 lg:w-4/5"
        >
          <li
            v-for="(item, index) in hardSkills"
            :key="index"
            class="uppercase font-semibold md:text-base"
          >
            <div class="rigolo w-20 h-20 p-4 card-content rounded-3xl">
              <a :href="item.doc" target="_blank">
                <img class="w-full" :src="item.logo" :alt="item.alt" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div
      v-motion-slide-visible-once-right
      class="card-content flex flex-col w-full rounded-3xl p-4 items-center sm:w-5/6 md:p-8 xl:w-3/4 2xl:w-3/5"
    >
      <h2 class="font-bold mb-6 uppercase text-accessible text-2xl">
        Softs Skills
      </h2>

      <div class="flex mb-4 w-full justify-center">
        <ul
          class="flex gap-4 md:gap-8 max-w-full flex-wrap justify-center items-center w-full md:gap-10 lg:w-4/5"
        >
          <li
            v-for="(item, index) in softSkills"
            :key="index"
            class="uppercase font-semibold md:text-base"
          >
            <figure class="flex flex-col items-center justify-center gap-4">
              <a :href="item.doc" target="_blank">
                <img
                  class="rigolo w-20 h-20 p-4 card-content rounded-3xl"
                  :src="item.logo"
                  :alt="item.alt"
                />
              </a>
              <figcaption class="md:text-base2">{{ item.description }}</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style>
.rigolo {
  transition: 1.2s;
}

.rigolo:hover {
  rotate: 360deg;
}
</style>

<script>
import logoCss from "../../public/img/css-3.png";
import logoExpressJs from "../../public/img/express-js.png";
import logoHtml from "../../public/img/html-5.png";
import logoJavascript from "../../public/img/javascript.png";
import logoNodeJs from "../../public/img/node-js.png";
import logoPostgresql from "../../public/img/postgresql.png";
import logoTailwinsCss from "../../public/img/tailwind-css.png";
import logoVueJs from "../../public/img/vue-js.png";
import logoSequelize from "../../public/img/sequelize.svg";
import logoSqitch from "../../public/img/sqitch.svg";
import logoGit from "../../public/img/git.png";
import logoGithub from "../../public/img/github.png";

import logoCreatif from "../../public/img/creatif.png";
import logoCurieux from "../../public/img/curieux.png";
import logoCoworking from "../../public/img/travail-equipe.png";
import logoPassionne from "../../public/img/passionne.png";
import logoCofee from "../../public/img/cofee.png";

export default {
  data() {
    return {
      hardSkills: [
        {
          logo: logoHtml,
          alt: "logo HTML",
          doc: "https://developer.mozilla.org/fr/docs/Web/HTML",
        },
        {
          logo: logoCss,
          alt: "logo CSS",
          doc: "https://developer.mozilla.org/fr/docs/Web/CSS",
        },
        {
          logo: logoJavascript,
          alt: "logo Javascript",
          doc: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        },
        { logo: logoVueJs, alt: "Logo Vue JS", doc: "https://vuejs.org/" },
        {
          logo: logoTailwinsCss,
          alt: "logo Tailwind CSS",
          doc: "https://tailwindcss.com/",
        },
        {
          logo: logoNodeJs,
          alt: "logo Node JS",
          doc: "https://nodejs.org/en/about",
        },
        {
          logo: logoExpressJs,
          alt: "logo Express JS",
          doc: "https://expressjs.com",
        },
        {
          logo: logoSequelize,
          alt: "logo Sequelize",
          doc: "https://sequelize.org/",
        },
        {
          logo: logoPostgresql,
          alt: "logo Postgres sql",
          doc: "https://www.postgresql.org/",
        },
        { logo: logoSqitch, alt: "logo Sqitch", doc: "https://sqitch.org/" },
        { logo: logoGit, alt: "logo Git", doc: "https://git-scm.com/" },
        { logo: logoGithub, alt: "logo Github", doc: "https://github.com/" },
      ],
      softSkills: [
        {
          logo: logoCofee,
          alt: "image de tasse a café",
          description: "Café",
          doc: "https://www.maisonducafe.com/cafes/histoire/",
        },
        {
          logo: logoCreatif,
          alt: "image 'Créatif'",
          description: "Créatif",
          doc: "https://www.bloom-idees.fr/etre-creatif-etre-soi/#:~:text=%C3%8Atre%20cr%C3%A9atif%2C%20%C3%A7a%20veut%20dire,s'adapter%20au%20monde%20environnant.",
        },
        {
          logo: logoCurieux,
          alt: "image 'Curiosité'",
          description: "Curieux",
          doc: "https://www.penserchanger.com/7-raisons-detre-curieux/",
        },
        {
          logo: logoPassionne,
          alt: "image 'Passion'",
          description: "Passionné",
          doc: "https://www.radiofrance.fr/franceculture/podcasts/le-pourquoi-du-comment-philo/pourquoi-faut-il-etre-passionne-4305197",
        },
        {
          logo: logoCoworking,
          alt: "image 'Co-Working'",
          description: "équipe",
          doc: "https://asana.com/fr/resources/teamwork-in-the-workplace",
        },
      ],
    };
  },
  name: "presentation-page",
};
</script>
