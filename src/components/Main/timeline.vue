<template>
  <section id="timeline"
    class="relative flex flex-col items-center justify-center w-full px-8 pb-24 text-accessible"
  >

    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact w-full timeline-vertical sm:w-5/6 md:w-3/4 2xl:w-3/5"
    >
      <li>
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          v-motion-slide-visible-once-right
          class="timeline-start mb-10 text-end"
        >
          <time class="font-mono italic">2021</time>
          <div class="font-bold md:text-xl">
            Golden Square - Auto-entreprenneur
          </div>
          <p class="md:text-base2 hidden sm:flex">
            Golden Square est une entreprise individuelle ainsi qu'une marque de
            vêtements artisanale et responsable. Cette expérience m'a permis de
            développer mes compétences en gestion de projet, en communication,
            en marketing ainsi que des compétences technique tel que les outils
            de DAO (Dessin assistés par ordinateur). J'ai également acquis une
            expérience précieuse dans la gestion des clients et des
            fournisseurs.
          </p>
          <p class="md:text-base2 sm:hidden">
            Marque de vêtements artisanale est responsable. Gestion de projet,
            Communication, Marketing, DAO Gestion des clients et des
            fournisseurs.
          </p>
        </div>
        <hr class="bg-accessible" />
      </li>
      <li>
        <hr class="bg-accessible" />
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div v-motion-slide-visible-once-left class="timeline-end mb-10">
          <time class="font-mono italic">2023-2024</time>
          <div class="font-bold md:text-xl">Ecole O'clock - Étudiant</div>
          <p class="md:text-base2 hidden sm:flex">
            Formation de développeur web et web mobile. Cette formation m'a
            permis d'acquérir des compétences en développement web et web
            mobile. J'ai pu travailler sur des projets en groupe et en
            autonomie.
          </p>
          <p class="md:text-base2 sm:hidden">
            Formation DWWM. Compétences en développement web et web mobile.
            Travaille en équipe et en autonomie.
          </p>
        </div>
        <hr class="bg-accessible" />
      </li>
      <li>
        <hr class="bg-accessible" />
        <div class="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div
          v-motion-slide-visible-once-right
          class="timeline-start mb-10 text-end"
        >
          <time class="font-mono italic">2024</time>
          <div class="font-bold md:text-xl">Gestinvest - Product owner</div>
          <p class="md:text-base2 hidden sm:flex">
            Gestinvest est un projet d'étude. Il s'agit d'une application web de
            gestion de portefeuille d'actif. Cette application permet de suivre
            l'évolution de son portefeuille d'actions en temps réel. J'ai pu
            travailler en équipe sur ce projet et j'ai pu mettre en pratique mes
            compétences en développement web.
          </p>
          <p class="md:text-base2 sm:hidden">
            Projet d'étude. Application web de
            gestion de portefeuille d'actif. Mise en pratique de mes
            compétences en développement web.
          </p>
        </div>
        <hr class="bg-accessible" />
      </li>
    </ul>
  </section>
</template>

<script></script>
