
const app = Vue.createApp({
    data() {
        return {
          slides: [
            {
              image: "./img/01.webp",
              title: "Marvel's Spiderman Miles Morale",
              text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
            },
            {
              image: "./img/02.webp",
              title: "Ratchet & Clank: Rift Apart",
              text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
            },
            {
              image: "./img/03.webp",
              title: "Fortnite",
              text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            },
            {
              image: "./img/04.webp",
              title: "Stray",
              text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
            },
            {
              image: "./img/05.webp",
              title: "Marvel's Avengers",
              text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            },
          ],

          activeImage: 0
        };


    },

    methods: {
        prevImage(){
            if (this.activeImage - 1 < 0){
                this.activeImage = this.slides.length - 1;
            }else {
                this.activeImage--;
            }
        },

        nextImage(){
            if (this.activeImage + 1 >= this.slides.length) {
              this.activeImage = 0;
            } else {
              this.activeImage++;
            }
        },

        switchToImage(i){
            this.activeImage = i;
        },

      

    },

    created(){
        setInterval(() => {
            this.nextImage();
        }, 3000);
    }
    

});

app.mount("#root");



// // * AUTOPLAY
// let autoplayForward = true;

// const autoplay = setInterval(() => {
//     if (autoplayForward) {
//         onNextClick();
//     } else {
//         onPrevClick();
//     }

// }, 3000);

// // * STOP AUTOPLAY
// stopAutoplayButton.addEventListener("click", () => {
//     clearInterval(autoplay);
// });

// // * INVERTI AUTOPLAY

// invertiAutoplayButton.addEventListener("click", () => {
//     autoplayForward = !autoplayForward;
// });