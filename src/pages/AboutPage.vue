<template>
    <div class="w-full flex flex-col items-center mt-10 md:mt-32">
        <h1 class="font-inter-bold tracking-wider text-3xl md:text-6xl"
            :class="{ 'text-light2': isDark, 'text-dark2': !isDark }">
            About Me
        </h1>
        <p :class="{ 'text-light1': isDark, 'text-dark1': !isDark }"
            class="mt-5 font-inter-normal text-lg md:text-lg tracking-normal w-[90vw] md:w-[60vw] text-center ">
            I am a software engineer currently working at Textile Traders, developing a new product to enhance the
            textile industry. I'm also open to freelance opportunities, project collaborations, and exploring new
            challenges in software development and product innovation. If you have a project in mind, I'd love to
            connect and discuss how we can work together to bring your ideas to fruition.
        </p>
        <h1 class="mt-3 font-inter-bold tracking-wider text-xl md:text-4xl text-center"
            :class="{ 'text-light2': isDark, 'text-dark2': !isDark }">
            Feel free to explore my musings on the following subjects
        </h1>
        <div class="flex flex-row items-center justify-center  flex-wrap gap-10 mt-5 mb-6">
            <div class="flex flex-col items-center justify-center cursor-pointer">
                <Vue3Lottie :animationData="ArduinoJSON" :height="computedSize" :width="computedSize" :loop="true"
                    :autoplay="true" speed="1" />
                <h3 :class="{ 'text-light1': isDark, 'text-dark1': !isDark }"
                    class="font-inter-normal text-xl md:text-2xl tracking-wide">Robotics</h3>
            </div>
            <div class="flex flex-col items-center justify-center cursor-pointer">
                <Vue3Lottie :animationData="HillJSON" :height="computedSize" :width="computedSize" :loop="true"
                    :autoplay="true" speed="1" />
                <h3 :class="{ 'text-light1': isDark, 'text-dark1': !isDark }"
                    class="font-inter-normal text-xl md:text-2xl tracking-wide">Trekking</h3>
            </div>
            <div class="flex flex-col items-center justify-center cursor-pointer">
                <Vue3Lottie :animationData="TattooJSON" :height="computedSize" :width="computedSize" :loop="true"
                    :autoplay="true" speed="1" />
                <h3 :class="{ 'text-light1': isDark, 'text-dark1': !isDark }"
                    class="font-inter-normal text-xl md:text-2xl tracking-wide">Tattoos</h3>
            </div>
            <div class="flex flex-col items-center justify-center cursor-pointer">
                <Vue3Lottie :animationData="BeerJSON" :height="computedSize" :width="computedSize" :loop="true"
                    :autoplay="true" speed="1" />
                <h3 :class="{ 'text-light1': isDark, 'text-dark1': !isDark }"
                    class="font-inter-normal text-xl md:text-2xl tracking-wide">Mixology</h3>
            </div>


        </div>
        <div class="flex flex-row justify-center gap-5 mt-4 mb-5">
            <div class="flex flex-col items-center justify-center gap-1">
                <h2 class="font-inter-semi text-3xl md:text-3xl tracking-wider animate-charcter">01</h2>
                <h3 class="font-inter-normal text-lg md:text-xl"
                    :class="{ 'text-light1': isDark, 'text-dark1': !isDark }">Working experience</h3>
            </div>
            <div class="flex flex-col items-center justify-center gap-1">
                <h2 class="font-inter-semi text-3xl md:text-3xl tracking-wider animate-charcter">20+</h2>
                <h3 class="font-inter-normal text-lg md:text-xl"
                    :class="{ 'text-light1': isDark, 'text-dark1': !isDark }">Completed Projects</h3>
            </div>
        </div>
        <button-comp text="Download Resume"></button-comp>
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { Vue3Lottie } from "vue3-lottie";
import ArduinoJSON from '../assets/lottie/Arduino.json'
import HillJSON from '../assets/lottie/Hills.json'
import TattooJSON from '../assets/lottie/Tattoo.json'
import BeerJSON from '../assets/lottie/Beer.json'
import { useMediaQuery } from '@vueuse/core';
import ButtonComp from '../slots/ButtonSlot.vue'
export default {
    components: {
        Vue3Lottie,
        ButtonComp
    },
    setup() {
        const store = useStore();
        const isDark = computed(() => {
            return store.getters.getTheme === "dark";
        });
        const isMobile = useMediaQuery('(max-width: 480px)');
        const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 976px)');
        const computedSize = computed(() => {
            if (isMobile) return 70
            if (isTablet) return 200
            return 250
        })
        return {
            isDark,
            ArduinoJSON,
            HillJSON,
            TattooJSON,
            BeerJSON,
            computedSize
        };
    },
};
</script>

<style scoped>
.animate-charcter {
    text-transform: uppercase;
    background-image: linear-gradient(-225deg,
            #231557 0%,
            #44107a 29%,
            #ff1361 67%,
            #fff800 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}
</style>
