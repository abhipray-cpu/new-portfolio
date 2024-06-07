<!-- ConfigurableIcon.vue -->
<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="computedSize" :height="computedSize" viewBox="0 0 50 50"
        :class="{ 'fill-slate-200 hover:fill-white': !isDark, 'fill-slate-800 hover:fill-slate-950': isDark }"
        class="cursor-pointer mb-4  md:mb-9 " @click="clickFunction">
        <slot></slot>
    </svg>
    <h1>{{ colorClass }}</h1>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useMediaQuery } from '@vueuse/core';
export default {
    props: {
        link: {
            type: [String],
            default: 'https://www.linkedin.com/in/abhipray-dumka-92963a165/',
        },
        type: {
            type: [String],
            default: '1'
        }
    },
    setup(props) {
        const store = useStore();
        const mobileSize = ref(45);
        const tabSize = ref(65);
        const desktopSize = ref(65);
        const isMobile = useMediaQuery('(max-width: 480px)');
        const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 976px)');
        const clickFunction = () => {
            props.type === '1' ? window.open(props.link, "_blank") : window.location.href = `mailto:${props.link}`
        }
        const computedSize = computed(() => {
            if (isMobile.value) return mobileSize.value;
            if (isTablet.value) return tabSize.value;
            return desktopSize.value;
        });
        const isDark = computed(() => {
            return store.getters.getTheme === 'dark';
        })
        return {
            computedSize,
            isDark,
            clickFunction
        };
    },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
