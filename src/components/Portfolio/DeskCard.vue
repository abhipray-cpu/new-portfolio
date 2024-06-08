<template>
  <div id="slider-container">
    <div id="main-slider">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :id="'side-' + (index + 1)"
        class="slide card"
        :class="{ active: activeSlide === index + 1 }"
        :style="getSlideStyle(index + 1)"
      >
        <img class="card-img-top" :src="slide.imgSrc" />
        <div class="card-body">
          <h5 class="card-title">{{ slide.title }}</h5>
          <p class="card-text">{{ slide.text }}</p>
          <div class="text-center">
            <a class="btn-contact" href="javascript:void(0)">Demo</a>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-indicator-container">
      <div
        v-for="(slide, index) in slides"
        :key="'indicator-' + index"
        :class="[
          'slide-indicator',
          'indicator-' + (index + 1),
          { active: activeSlide === index + 1 },
        ]"
        @click="goToSlide(index + 1)"
      ></div>
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
            "https://images.pexels.com/photos/2880506/pexels-photo-2880506.jpeg?auto=compress&cs=tinysrgb&h=350",
          title: "Card 1",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi molestias delectus quos!",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/2880506/pexels-photo-2880506.jpeg?auto=compress&cs=tinysrgb&h=350",
          title: "Card 2",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi molestias delectus quos!",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/2880506/pexels-photo-2880506.jpeg?auto=compress&cs=tinysrgb&h=350",
          title: "Card 3",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi molestias delectus quos!",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/2880506/pexels-photo-2880506.jpeg?auto=compress&cs=tinysrgb&h=350",
          title: "Card 4",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi molestias delectus quos!",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/2880506/pexels-photo-2880506.jpeg?auto=compress&cs=tinysrgb&h=350",
          title: "Card 5",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi molestias delectus quos!",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/2880506/pexels-photo-2880506.jpeg?auto=compress&cs=tinysrgb&h=350",
          title: "Card 6",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi molestias delectus quos!",
        },
        {
          imgSrc:
            "https://images.pexels.com/photos/2880506/pexels-photo-2880506.jpeg?auto=compress&cs=tinysrgb&h=350",
          title: "Card 7",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi molestias delectus quos!",
        },
      ],
    };
  },
  methods: {
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
  max-height: 100vh;
}

#main-slider {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200vw;
  margin-top: 6rem;
}

#main-slider .slide {
  height: auto;
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
