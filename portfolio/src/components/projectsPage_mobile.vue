<template>
     <section class="project-page">

        <h1>Projects</h1>
        <div class="carousel">
            <p>le nom du projet</p>

           <div class="carousel-box">
            <!-- <img src="https://4kwallpapers.com/images/wallpapers/neon-lights-3d-3440x1440-12485.jpg" alt=""> -->
            <div class="carousel-box--swipe">
                <div class="carousel-swipe left"></div>
                <div class="carousel-swipe right"></div>
            </div>

           </div>
        </div>
     </section>
</template>

<style>
    .project-page {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        
    }

    .carousel {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        height: 50%;
        margin-top: 5rem;
        gap: 2rem;
    }
    .carousel-box {
        display: flex;
        background-image: url('https://4kwallpapers.com/images/wallpapers/neon-lights-3d-3440x1440-12485.jpg');
        background-size: cover;
        position: relative;
        height: 100%;
        width:100% ;
        border-radius: 2em;
        box-shadow: 0px 0px 33px 3px rgba(68, 98, 248, 0.8);
    }
    .carousel-box img {
        width: 100%;
        border-radius: 2em;
    }

    .carousel-box--swipe {
        position: absolute;
        /* background-image: url('https://4kwallpapers.com/images/wallpapers/neon-lights-3d-3440x1440-12485.jpg'); */
        /* background-color: red; */
        width: 100%;
        height: 100%;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .carousel-swipe {
        height: 2rem;
        background-color: white;
        width: 2rem;
    }

</style>

<script>
    export default {
        name: 'project-page',
    }
</script>