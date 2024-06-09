<template>
  <div id="slider-container">
    <div id="main-slider">
      <div v-for="(slide, index) in slides" :key="index" :id="'side-' + (index + 1)" class="slide card"
        :class="{ active: activeSlide === index + 1 }" :style="getSlideStyle(index + 1)">
        <img class="card-img-top" :src="slide.imgSrc" />
        <div class="card-body">
          <h5 class="card-title">{{ slide.title }}</h5>
          <p class="card-text">{{ slide.text }}</p>
          <div class="text-center">
            <a class="btn-contact" href="javascript:void(0)" @click="clickHandler(slide.link)">Demo</a>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-indicator-container">
      <div v-for="(slide, index) in slides" :key="'indicator-' + index" :class="[
        'slide-indicator',
        'indicator-' + (index + 1),
        { active: activeSlide === index + 1 },
      ]" @click="goToSlide(index + 1)"></div>
    </div>
    <div class="slider-controls">
      <div id="pre" class="slider-btn" @click="prevSlide">Prev</div>
      <div id="nex" class="slider-btn" @click="nextSlide">Next</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSlide: 1,
      slides: [
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/images%2Fyelli-1.png?alt=media&token=2dd04acf-ac81-4628-84c6-4f2b8b2424a8",
          title: "Shoe Store",
          text:
            "An online responsive shoe store inspired bt NIKE online shoe store, it is based on material design and is built using firebase,vue and vuetify",
          link: "https://yeli-shoes.pages.dev/"
        },
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/images%2Ffacility%20desktop.png?alt=media&token=1256e593-3164-4762-a71b-96d2e7cf32c0",
          title: "Facility Finder",
          text:
            "A server rendered full functional resposive app built using nodejs, this app helps user to find nearby facilities based on their current location",
          link: "http://13.201.79.69:8081/"
        },
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/images%2Fsasta-IMDB.png?alt=media&token=415cae08-d643-442e-86da-49ca646473ce",
          title: "IMDB Replica",
          text:
            "This is a replicas of IMDB built using DJANGO it has all the basic feature provided by the original platform,this is a server rendered app.",
          link: "http://13.201.12.179:4000/"
        },
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/meteor.png?alt=media&token=bf0e5c74-76a9-46f7-b3f9-f89784851041",
          title: "Meteor Mate",
          text:
            "This is a weather app with some other advanced measuring metrics built using reactjs and nodejs this is a responsive application",
          link: "https://meteormate-d8fd.vercel.app/"
        },
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/images%2Finto-the-wild-2.png?alt=media&token=6fed654e-2bdd-4264-99f2-b90790cd6e8e",
          title: "Into The Wild",
          text:
            "This is a website dedicated to my favorite movie INTO THE WILD",
          link: "http://13.235.23.181:3000/"
        },
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/Geeta.png?alt=media&token=2653174e-f7b0-4898-b8b8-5861048a9623",
          title: "Geeta",
          text:
            "For all the spiritual people out there this is a catalog containing all the verses of geeta  with both hindi and english translation",
          link: "https://geeta-rho.vercel.app/"
        },
        {
          imgSrc:
            "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/images%2Ftext-editor1.png?alt=media&token=9958a023-16b7-4fe6-bb44-e5d06030a833",
          title: "Text Editor",
          text:
            "This a desktop application built upon QT platform, it is a replica of the classic windows text editor with all the features",
          link: "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/text-editor.exe?alt=media&token=26862a13-8532-4e27-9145-8a7834de0280"
        },
      ],
    };
  },
  methods: {
    clickHandler(value) {
      window.open(value, '_blank')
    },
    getSlideStyle(slideIndex) {
      let centerSlide = this.activeSlide;
      let numSlides = this.slides.length;
      let middleOfSlider = numSlides / 2;
      let xCoef = 300 * ((middleOfSlider - centerSlide) / middleOfSlider);

      if (window.innerWidth <= 450) {
        xCoef = 0;
      }

      if (slideIndex === centerSlide) {
        return {
          zIndex: 999,
          transform: `translateX(${xCoef - 100}%) scale(1.5)`,
        };
      }

      return {
        zIndex: 9,
        transform: `translateX(${xCoef}%) scale(1)`,
      };
    },
    goToSlide(slideIndex) {
      this.activeSlide = slideIndex;
    },
    nextSlide() {
      this.activeSlide = (this.activeSlide % this.slides.length) + 1;
    },
    prevSlide() {
      this.activeSlide =
        ((this.activeSlide - 2 + this.slides.length) % this.slides.length) + 1;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.goToSlide(1);
    });
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}

#slider-container {
  max-height: 80vh;
}

#main-slider {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200vw;
  margin-top: 6rem;
}

#main-slider .slide {
  height: 40vh;
  width: 18rem;
  transition: all 0.5s;
  background-color: #ffffff;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.523);
}

.slide.card {
  border-radius: 10px;
}

.slide .card-title {
  font-size: 0.9rem;
}

.slide .card-body {
  padding: 0.8rem;
}

.slide img {
  border-radius: 10px 10px 0 0;
  filter: grayscale(100%);
  transition: all 1s;
}

.slide .card-body p {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  transition: all 1s;
  opacity: 0;
}

.slide.active img {
  filter: none;
  height: 20vh;
}

.slide.active .card-body p {
  opacity: 1;
}

#side-1 {
  z-index: 99;
  transform: translateX(100%) scale(1.5);
}

.slider-controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto 3rem auto;
}

.slider-btn {
  border-radius: 50px;
  height: 2rem;
  width: 3rem;
  border: 1px solid #6e6e6e;
  font-size: 15px;
  color: #6e6e6e;
  text-align: center;
  line-height: 30px;
  padding-top: 0.1rem;
  margin: 0.5rem;
}

.slider-btn:hover {
  cursor: pointer;
  color: #fff;
  background-color: rgb(216, 5, 90);
  border: none;
}

.slide-indicator-container {
  margin: 6rem auto 1rem auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.slide-indicator {
  border-radius: 50%;
  height: 0.5rem;
  width: 0.5rem;
  margin: 0.2rem;
  border: 1px solid #6e6e6e;
}

.slide-indicator:hover {
  cursor: pointer;
}

.slide-indicator.active {
  background-color: rgb(216, 5, 90);
  border-color: rgb(216, 5, 90);
}

.btn-contact {
  background-color: #fff;
  border: 1px solid #b3b3b3;
  border-radius: 50px;
  color: #a5a5a5;
  padding: 0.3rem 0.5rem;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
  transition: all 1s;
}

.slide.active .btn-contact {
  background-color: rgb(216, 5, 90);
  color: #fff;
  border: transparent;
}

.btn-contact:hover,
.slide.active .btn-contact:hover {
  text-decoration: none;
  color: #000;
  background-color: rgb(216, 5, 90);
  border: transparent;
}
</style>
