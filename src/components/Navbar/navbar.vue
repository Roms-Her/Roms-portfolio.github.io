<template>
  <nav
    class="navbar flex justify-between p-6 items-center w-full h-full mb-8 sm:w-5/6 sm:pt-10 xl:w-3/4 2xl:w-3/5 xl:mb-20 z-20"
  >
    <a href="/" class="logo-a logo"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="110"
        height="41"
        viewBox="0 0 211 41"
        fill="none"
      >
        <path
          d="M6.81026 39.5132C0.632202 41.9315 -2.99731 32.1049 3.24914 29.8703C9.4272 27.452 13.0567 37.2786 6.81026 39.5132Z"
          fill="#f1f4fd"
        />
        <path
          d="M163.424 1.46762V39.8931H153.869V10.7525H142.721V21.936H132.747V10.7525H122.019V39.7877L112.024 39.8931V1.46762H163.424Z"
          fill="#f1f4fd"
        />
        <path
          d="M65.9739 39.8159C65.151 38.9882 49.0741 22.8231 48.9674 22.7115C62.4832 22.7209 66.7418 5.92014 53.0685 2.54475C47.049 0.749558 24.9361 1.739 17.5496 1.49686V39.8159H28.4547V22.9046H34.8742L51.774 39.9234H66.0806L65.9739 39.8159ZM36.5118 17.7016H28.4547V7.98252C31.8355 8.00027 43.2484 7.92094 44.9077 8.1109C49.1062 8.17561 52.2642 12.2346 49.3716 15.6257C45.5866 18.45 43.9905 17.3311 36.5107 17.7016H36.5118Z"
          fill="#f1f4fd"
        />
        <path
          d="M86.098 0.789185C60.2633 0.903994 60.2654 40.4609 86.099 40.5715C111.904 40.4536 111.902 0.90295 86.098 0.789185ZM86.098 31.9859C71.5063 32.2061 71.5063 9.15354 86.098 9.37481C100.659 9.15667 100.66 32.2051 86.098 31.9859Z"
          fill="#f1f4fd"
        />
        <path
          d="M210.71 28.2296C210.71 30.4558 209.893 32.5631 208.28 34.495C206.717 36.3664 204.471 37.8328 201.604 38.8494C198.819 39.8388 195.654 40.3419 192.197 40.3419C187.861 40.3419 184.159 39.8378 181.19 38.8463C178.127 37.8213 175.678 36.2453 173.91 34.1568C172.103 32.0245 171.138 29.5728 171.045 26.8696L171 25.6182L179.236 25.0588L179.415 26.234C179.651 27.7839 180.196 29.0614 181.036 30.0258C181.884 31.0038 183.275 31.8231 185.166 32.4598C187.143 33.1277 189.411 33.4649 191.911 33.4649C194.128 33.4649 196.1 33.2091 197.773 32.705C199.346 32.2312 200.508 31.6008 201.225 30.8295C201.88 30.126 202.198 29.4038 202.198 28.621C202.198 27.8382 201.914 27.1775 201.306 26.5701C200.615 25.8812 199.386 25.2717 197.652 24.7613C196.445 24.396 193.698 23.8136 189.483 23.0298C185.074 22.2084 182.05 21.4475 180.234 20.7002C177.824 19.7201 175.976 18.4614 174.753 16.9585C173.472 15.3908 172.823 13.6008 172.823 11.6418C172.823 9.51154 173.6 7.50969 175.131 5.69153C176.617 3.92661 178.785 2.57812 181.569 1.68574C184.248 0.827808 187.256 0.392578 190.509 0.392578C194.083 0.392578 197.291 0.848683 200.045 1.74837C202.901 2.68249 205.144 4.0936 206.713 5.9462C208.315 7.83533 209.188 10.0115 209.308 12.4141L209.372 13.6958L201.004 14.1843L200.84 13.0038C200.575 11.098 199.711 9.70463 198.2 8.74128C196.583 7.71321 194.081 7.1924 190.763 7.1924C187.446 7.1924 184.776 7.66103 183.284 8.58889C181.335 9.79961 181.335 10.9446 181.335 11.3203C181.335 11.863 181.465 12.6761 182.59 13.4589C183.178 13.8722 185.086 14.7218 191.381 15.8239C196.508 16.7247 199.949 17.4949 201.9 18.1827C204.815 19.2254 207.016 20.5885 208.45 22.2355C209.947 23.9587 210.707 25.9741 210.707 28.2264L210.71 28.2296Z"
          fill="#f1f4fd"
        /></svg
    ></a>

    <div class="ms:hidden">
      <ul class="flex items-center gap-2 text-base2">
        <li v-for="(item, index) in navLinks" :key="index">
          <a
            :href="item.url"
            class="text-accessible hover:bg-none hover:shadow-none uppercase hover:text-solid text-sm p-4 transition-all duration-200"
          >
            <span class="">{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </div>

    <div
      class="absolute top-0 left-0 w-full h-dvh flex justify-center items-center navbar__liens"
    >
      <ul class="flex flex-col gap-2 sm:gap-6 items-center md:gap-8 text-backgroundColor">
        <li
          v-for="(item, index) in navLinks"
          :key="index"
          class="bg-accessible w-full py-3 px-10 text-center rounded-3xl"
        >
          <a :href="item.url" class="">
            <span class="text-components">{{ item.title }}</span>
          </a>
        </li>
      </ul>

      <svg
        id="arrow-pop"
        class="flex absolute z-1000 rotate-180 bottom-10"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="70"
        viewBox="0 0 30 109"
        fill="none"
      >
        <path
          d="M15 53.5052L17 53.5052L15 53.5052ZM13.5858 107.654C14.3668 108.435 15.6332 108.435 16.4142 107.654L29.1421 94.9264C29.9232 94.1453 29.9232 92.879 29.1421 92.098C28.3611 91.3169 27.0948 91.3169 26.3137 92.098L15 103.412L3.68629 92.098C2.90524 91.3169 1.63891 91.3169 0.857865 92.098C0.0768164 92.879 0.0768163 94.1453 0.857865 94.9264L13.5858 107.654ZM13 0.770325L13 53.5052L17 53.5052L17 0.770325L13 0.770325ZM13 53.5052L13 106.24L17 106.24L17 53.5052L13 53.5052Z"
          fill="#f1f4fd"
        />
      </svg>
    </div>
    <svg
      class="menu-hamburger right-6 w-10 h-10 xl:hidden"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.5L3.11612 6.11612C3.68206 6.68206 4.44964 7 5.25 7C6.05036 7 6.81794 6.68206 7.38388 6.11612L7.61612 5.88388C8.18206 5.31794 8.94964 5 9.75 5C10.5504 5 11.3179 5.31794 11.8839 5.88388L12.1161 6.11612C12.6821 6.68206 13.4496 7 14.25 7C15.0504 7 15.8179 6.68206 16.3839 6.11612L16.6161 5.88388C17.1821 5.31794 17.9496 5 18.75 5C19.5504 5 20.3179 5.31794 20.8839 5.88388L21.5 6.5M2.5 11.5L3.11612 12.1161C3.68206 12.6821 4.44964 13 5.25 13C6.05036 13 6.81794 12.6821 7.38388 12.1161L7.61612 11.8839C8.18206 11.3179 8.94964 11 9.75 11C10.5504 11 11.3179 11.3179 11.8839 11.8839L12.1161 12.1161C12.6821 12.6821 13.4496 13 14.25 13C15.0504 13 15.8179 12.6821 16.3839 12.1161L16.6161 11.8839C17.1821 11.3179 17.9496 11 18.75 11C19.5504 11 20.3179 11.3179 20.8839 11.8839L21.5 12.5M2.5 17.5L3.11612 18.1161C3.68206 18.6821 4.44964 19 5.25 19C6.05036 19 6.81794 18.6821 7.38388 18.1161L7.61612 17.8839C8.18206 17.3179 8.94964 17 9.75 17C10.5504 17 11.3179 17.3179 11.8839 17.8839L12.1161 18.1161C12.6821 18.6821 13.4496 19 14.25 19C15.0504 19 15.8179 18.6821 16.3839 18.1161L16.6161 17.8839C17.1821 17.3179 17.9496 17 18.75 17C19.5504 17 20.3179 17.3179 20.8839 17.8839L21.5 18.5"
        stroke="#f1f4fd"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </nav>
</template>

<style>
.logo:hover {
  box-shadow: none;
}

.navbar .menu-hamburger {
  z-index: 1000;
  transition: 0.5s ease;
}

.logo {
  z-index: 1001;
}
.menu-hamburger-rotate {
  rotate: 90deg;
}
.navbar__liens {
  background-color: var(--customs-background-gradient);
  margin-top: -100vh;
  backdrop-filter: blur(20px);
  transition: all 0.5s ease;
  z-index: 1000;
}

.mobile-menu {
  margin-top: 0;
}
</style>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          title: "Accueil",
          url: "",
        },
        {
          title: "Projets",
          url: "#project-page",
        },
        {
          title: "Skills",
          url: "#skills",
        },
        {
          title: "Parcours",
          url: "#timeline",
        },
        {
          title: "Contact",
          url: "mailto:romsher.dev@gmail.com",
        },
        {
          title: "About",
          url: "#about",
        },
      ],
    };
  },
  name: "navbar",
  mounted() {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".navbar__liens");
    const arrow = document.querySelector("#arrow-pop");

    function fermerPopUp() {
      menuHamburger.classList.remove("menu-hamburger-rotate");
      navLinks.classList.remove("mobile-menu");
    }

    menuHamburger.addEventListener("click", () => {
      menuHamburger.classList.toggle("menu-hamburger-rotate");
      navLinks.classList.toggle("mobile-menu");
    });

    arrow.addEventListener("click", () => {
      fermerPopUp();
    });

    window.addEventListener("scroll", () => {
      fermerPopUp();
    });
  },
};
</script>
