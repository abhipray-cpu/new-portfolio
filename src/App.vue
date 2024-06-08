<template>
  <div v-if="Welcome" class="w-100 h-100 flex flex-col items-center justify-center">
    <Vue3Lottie :animationData="WelcomeJSON" :height="400" :width="400" :loop="true" :autoplay="true" speed="2" />
  </div>
  <div class="main-container absolute inset-0 top-0 left-0 overflow-x-hidden w-full flex flex-col pb-10 md:pb-20"
    :class="{ 'bg-light': isDarkTheme, 'bg-dark': !isDarkTheme }" v-else>
    <cursor-highlight />
    <div class="dot" ref="dot"></div>
    <header-comp></header-comp>
    <home-page></home-page>
    <about-page></about-page>
    <skills-page></skills-page>
    <h1 :class="{ 'text-dark2': !isDarkTheme, 'text-light2': isDarkTheme }"
      class="font-inter-bold text-2xl md:text-5xl tracking-wider text-center mt-5 mb-5 md:mt-12 md:mb-7">Qualifications
    </h1>
    <qualification-page></qualification-page>
    <h1 :class="{ 'text-dark2': !isDarkTheme, 'text-light2': isDarkTheme }"
      class="font-inter-bold text-2xl md:text-5xl tracking-wider text-center mt-5 mb-5 md:mt-12 md:mb-7">Work Experience
    </h1>
    <experience-page></experience-page>
    <work-page></work-page>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";
import HeaderComp from "./components/general/HeaderComp.vue";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import SkillsPage from './pages/SkillsPage.vue'
import WorkPage from './pages/WorkPage.vue'
import QualificationPage from './pages/QualificationPage.vue'
import ExperiencePage from "./pages/ExperiencePage.vue";
import { Vue3Lottie } from "vue3-lottie";
import WelcomeJSON from "./assets/lottie/Welcome.json";
export default {
  components: {
    HeaderComp,
    HomePage,
    AboutPage,
    SkillsPage,
    QualificationPage,
    ExperiencePage,
    WorkPage,
    Vue3Lottie,
  },
  setup() {
    const store = useStore();
    const isDarkTheme = computed(() => store.getters.getTheme === "dark");
    const maxDots = 50;
    const interval = 100;
    const time = ref(0);
    const dots = ref([]);
    const dot = ref(null);
    const dotSize = ref(0);
    const welcome = ref(true);
    const Welcome = computed(() => welcome.value);
    onMounted(() => {
      setTimeout(() => {
        welcome.value = false;
      }, 2000);
      setTimeout(() => {
        dot.value = document.getElementsByClassName("dot")[0];
        dotSize.value = dot.value.offsetWidth;
        document.addEventListener("mousemove", addDot);
      }, 3000);
    });

    const addDot = (event) => {
      if (event.timeStamp > time.value + interval && dots.value.length <= maxDots) {
        time.value = event.timeStamp;
        createDot(event.clientX, event.clientY);
      }
    };

    const createDot = (clientX, clientY) => {
      const dotClone = dot.value.cloneNode();

      dotClone.style.backgroundColor = randomColor();
      dotClone.style.width = dotClone.style.height = randomSize();
      dotClone.style.left = clientX + "px";
      dotClone.style.top = clientY + "px";
      dotClone.style.transform =
        "translate(" + randomLocation() + ", " + randomLocation() + ")";
      document.body.appendChild(dotClone);
      dots.value.push(dotClone);

      if (dots.value.length === maxDots) {
        removeDot();
      }
    };

    const removeDot = () => {
      document.body.removeChild(dots.value[0]);
      dots.value.shift();
    };

    const randomLocation = () => {
      return Math.floor(Math.random() * (dotSize.value * 2)) - dotSize.value + "px";
    };

    const randomSize = () => {
      const max = dotSize.value * 0.8;
      const min = dotSize.value * 0.2;
      return Math.floor(Math.random() * max + min) + "px";
    };

    const randomColor = () => {
      const dotCloneColorR = Math.floor(Math.random() * 255);
      const dotCloneColorG = Math.floor(Math.random() * 255);
      const dotCloneColorB = Math.floor(Math.random() * 255);
      return (
        "rgb(" + dotCloneColorR + ", " + dotCloneColorG + ", " + dotCloneColorB + ")"
      );
    };

    return {
      dot,
      isDarkTheme,
      WelcomeJSON,
      Welcome,
    };
  },
};
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

.main-container {
  height: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  /* Allows vertical scrolling if content overflows */
}

.dot {
  animation: 2s enter, 0.5s glow infinite;
  background-color: #f2326e;
  border-radius: 100%;
  height: 50px;
  left: 50%;
  opacity: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  pointer-events: none;
}

@keyframes enter {
  0% {
    opacity: 0;
    transform: scale(0.5) translate(-100%, -100%);
  }

  50% {
    opacity: 0.5;
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px #f2326f86;
  }

  50% {
    box-shadow: 0 0 20px #f2326f86;
  }

  100% {
    box-shadow: 0 0 5px #f2326f86;
  }
}
</style>
