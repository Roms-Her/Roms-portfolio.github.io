<template>
    <section class="home-page">

<div class="home-page__first-coat container-coat">
    <svg class="home-page__green-back" width="1325" height="830" viewBox="0 0 1325 830" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M257.007 258.611C311.419 199.026 291.112 185.351 340.259 134.784C417.751 55.0588 573.887 -19.6746 689.665 4.7496C813.566 30.8997 781.351 147.427 915.093 182.506C1033.98 213.685 1109.94 134.866 1208.45 173.617C1312.31 214.471 1320.37 338.473 1323.37 384.762C1326.42 431.721 1333.95 547.886 1223.35 643.002C1152.53 703.924 1047.79 743.673 948.967 745.003C803.973 746.947 782.273 664.709 647.127 675.116C540.198 683.35 529.748 736.692 408.067 752.392C311.362 764.87 197.446 746.737 116.22 688.212C30.1745 626.214 -32.9803 508.91 22.0827 424.289C68.5874 352.825 160.86 363.911 257.007 258.611Z" fill="#0090FF"/>
    </svg>
    <svg class="home-page__green-back-small-windows" width="1325" height="300" viewBox="0 0 1325 830" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M257.007 258.611C311.419 199.026 291.112 185.351 340.259 134.784C417.751 55.0588 573.887 -19.6746 689.665 4.7496C813.566 30.8997 781.351 147.427 915.093 182.506C1033.98 213.685 1109.94 134.866 1208.45 173.617C1312.31 214.471 1320.37 338.473 1323.37 384.762C1326.42 431.721 1333.95 547.886 1223.35 643.002C1152.53 703.924 1047.79 743.673 948.967 745.003C803.973 746.947 782.273 664.709 647.127 675.116C540.198 683.35 529.748 736.692 408.067 752.392C311.362 764.87 197.446 746.737 116.22 688.212C30.1745 626.214 -32.9803 508.91 22.0827 424.289C68.5874 352.825 160.86 363.911 257.007 258.611Z" fill="#0090FF"/>
    </svg>
</div>

<div class="home-page__second-coat container-coat">
    <div class="black-line line-x"></div>
    <div class="black-line line-y"></div>
    <div  class="DWWM">
        <p class="name">Hi ! i'm Roms</p>
        <div class="welcome"><p>Welcome</p><p>to my</p><p>portfolio</p></div>
    </div>
    <div class="social">
        <ul class="social__list">

            <li v-for="(item, index) in homeLinks" :key="index" class="social__list--li">
                <a :href="generateLink(item)" class="social__list--li--a" target="blank">{{ item }}</a>
            </li>

        </ul>
    </div>
</div>

<div class="absolute p-8 flex bottom-0 right-0 gap-8 items-center">
    <div class="text-end uppercase leadin-4">
        <h1 class="text-3xl">Let's go!</h1>
        <p>Swipe down for more information</p>
    </div>

    <div>
        <svg class="black-arrow" xmlns="http://www.w3.org/2000/svg" width="30" height="70" viewBox="0 0 30 109" fill="none">
        <path d="M15 53.5052L17 53.5052L15 53.5052ZM13.5858 107.654C14.3668 108.435 15.6332 108.435 16.4142 107.654L29.1421 94.9264C29.9232 94.1453 29.9232 92.879 29.1421 92.098C28.3611 91.3169 27.0948 91.3169 26.3137 92.098L15 103.412L3.68629 92.098C2.90524 91.3169 1.63891 91.3169 0.857865 92.098C0.0768164 92.879 0.0768163 94.1453 0.857865 94.9264L13.5858 107.654ZM13 0.770325L13 53.5052L17 53.5052L17 0.770325L13 0.770325ZM13 53.5052L13 106.24L17 106.24L17 53.5052L13 53.5052Z" fill="#D6E1FF"/>
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
                "twitter"
            ],
            socialLinks: {
                github: 'https://github.com/Roms-Her',
                linkedin: 'https://www.linkedin.com/in/romain-hernandez-romsher',
                twitter: 'https://twitter.com/dev_roms'
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