<template>
  <div class="container">
    <div class="sphere w-2/6 h-2/6" v-for="(sphere, index) in spheres" :key="index">{{ sphere }}</div>
  </div>
</template>

<style>
.container {
  position: fixed;
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.sphere {
  background-color: var(--customs-solid-color);
  opacity: 0.1;
  border-radius: 50%;
  position: absolute;
  transition: all 10s ease;
}
</style>

<script>
export default {
  data() {
    return {
      spheres: ["", "", ""] // Array of sphere names
    };
  },
  mounted() {
    this.moveSpheres(); // Appeler la fonction moveSpheres() au chargement de la page
  },
  methods: {
    randomPosition(sphere) {
      const container = document.querySelector('.container');
      const posX = Math.random() * (container.offsetWidth - sphere.offsetWidth);
      const posY = Math.random() * (container.offsetHeight - sphere.offsetHeight);
      sphere.style.left = posX + 'px';
      sphere.style.top = posY + 'px';
      sphere.style.transform = `rotate(${posX}deg)`;
    },
    moveSpheres() {
      const spheres = document.querySelectorAll('.sphere');
      spheres.forEach(sphere => {
        this.randomPosition(sphere);
      });

      setInterval(() => {
        spheres.forEach(sphere => {
          this.randomPosition(sphere);
        });
      }, 5000);
    }
  }
};
</script>

