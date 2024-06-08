<template>
    <div class="w-full flex flex-col items-center mt-10 md:mt-32">
        <h1 class="font-inter-bold tracking-wider text-3xl md:text-6xl"
            :class="{ 'text-light2': isDark, 'text-dark2': !isDark }">
            Services I offer
        </h1>
        <div
            class="w-[80vw] md:w-full flex flex-col md:flex-row flex-wrap items-center justify-center mt-5 md:mt-16 gap-10 md:gap-20">
            <Vue3Lottie :animationData="WorkJSON" :height="size" :width="size" :loop="true" :autoplay="true"
                speed="2" />
            <service-card
                img="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/Group%2044.png?alt=media&token=6fa20db8-a06a-4d20-a139-a5d23c7b9e33"></service-card>
            <service-card
                img="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/Group%2045.png?alt=media&token=d5d5fb62-2089-4c8a-9bc1-9d48865dd01d"></service-card>
            <service-card
                img="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/Group%2046.png?alt=media&token=86191b63-8a4b-48e3-aa59-378e30d06530"></service-card>
            <Vue3Lottie :animationData="FlowJSON" :height="size" :width="size" :loop="true" :autoplay="true"
                speed="2" />
        </div>
    </div>
</template>


<script>
import ServiceCard from '../components/work/ServiceCard.vue'
import { Vue3Lottie } from "vue3-lottie";
import FlowJSON from '../assets/lottie/Workflow.json'
import WorkJSON from '../assets/lottie/Work.json'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core';
export default {
    components: { ServiceCard, Vue3Lottie },
    setup() {
        const store = useStore()
        const isDark = computed(() => {
            return store.getters.getTheme === 'dark'
        })
        const isMobile = useMediaQuery('(max-width: 480px)');
        const size = computed(() => {
            if (isMobile.value === true) return 150
            else return 250
        })
        return {
            isDark,
            FlowJSON,
            WorkJSON,
            size
        }
    },
}
</script>

<style scoped></style>