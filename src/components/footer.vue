<template>

  <div class="footer footer-center 2xl:w-2/5 sm:w-2/4 lg:w-2/4 m-auto p-10 bg-none text-accessible gap-4">
    <aside>
      <h3 class="font-bold mb-4 md:text-35xl">Merci pour votre temps.</h3>
      <p class="font-bold">
        Conçu et créé par Romain Hernandez.
      </p>
      <p>Copyright © 2024 - Romain Hernandez</p>
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

</template>

<style>
  
</style>

<script>
import twitterSvg from '../components/icons/twitter.svg'
import githubSvg from '../components/icons/github.svg'
import linkedinSvg from '../components/icons/linkedin.svg'
import mailSvg from '../components/icons/mail.svg'

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
          name: "Twitter X",
          icon: twitterSvg,
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