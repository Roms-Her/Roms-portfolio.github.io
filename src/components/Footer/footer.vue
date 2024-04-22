<template>

  <section class="footer relative footer-center w-full m-auto p-10 text-accessible gap-4">
    <div class="flex flex-col gap-4">

      <aside>
        <h3 class="font-bold text-2xl mb-4 md:text-35xl">Merci pour votre temps.</h3>
        <p class="font-bold text-base">
          Conçu et créé par Romain Hernandez.
        </p>
        <p class="text-base">Copyright © 2024 - Romain Hernandez</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col">
          <ul class="flex gap-4">
            <li v-for="(item, index) in socialIcons" :key="index" class="flex items-center justify-center">
              <a :href="item.link" class="w-10 rounded-xl uppercase tracking-widest font-medium"
                target="_blank">
                <img class="icon" :src="item.icon" :alt="item.name">
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>

</template>

<script>
import githubSvg from '../../assets/icons/github.svg'
import linkedinSvg from '../../assets/icons/linkedin.svg'
import mailSvg from '../../assets/icons/mail.svg'
import xSvg from '../../assets/icons/x.svg'

export default {
  data() {
    return {
      socialIcons: [
        {
          name: "Linkedin",
          icon: linkedinSvg,
          link: "https://www.linkedin.com/in/romain-hernandez-romsher"
        },
        {
          name: "X",
          icon: xSvg,
          link: "https://twitter.com/dev_roms"
        },
        {
          name: "Github",
          icon: githubSvg,
          link: "https://github.com/Roms-Her"
        },
        {
          name: "mail",
          icon: mailSvg,
          link: "mailto:romsher.dev@gmail.com"
        }
      ]
    }
  }
}
</script>