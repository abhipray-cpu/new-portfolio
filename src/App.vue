<template>
    <div class="absolute inset-0 top-0 left-0 overflow-x-hidden w-full min-h-full"
        :class="{ 'bg-light': isDarkTheme, 'bg-dark': !isDarkTheme }">
        <cursor-highlight />
        <div class="dot" ref="dot"></div>
        <header-comp></header-comp>
    </div>
</template>


<script>
import { useStore } from 'vuex';
import { computed, ref, onMounted } from 'vue'
import HeaderComp from './components/general/HeaderComp.vue'
export default {
    components: {
        HeaderComp,
    },
    setup() {
        const store = useStore()
        const isDarkTheme = computed(() => store.getters.getTheme === 'dark');
        const maxDots = 50;
        const interval = 100;
        const time = ref(0);
        const dots = ref([]);
        const dot = ref(null);
        const dotSize = ref(0);

        onMounted(() => {
            dot.value = document.getElementsByClassName('dot')[0];
            dotSize.value = dot.value.offsetWidth;
            document.addEventListener('mousemove', addDot);
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
            dotClone.style.left = clientX + 'px';
            dotClone.style.top = clientY + 'px';
            dotClone.style.transform = "translate(" + randomLocation() + ", " + randomLocation() + ")";
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
            return Math.floor(Math.random() * (dotSize.value * 2)) - (dotSize.value) + 'px';
        };

        const randomSize = () => {
            const max = dotSize.value * 0.8;
            const min = dotSize.value * 0.2;
            return Math.floor(Math.random() * max + min) + 'px';
        };

        const randomColor = () => {
            const dotCloneColorR = Math.floor(Math.random() * 255);
            const dotCloneColorG = Math.floor(Math.random() * 255);
            const dotCloneColorB = Math.floor(Math.random() * 255);
            return 'rgb(' + dotCloneColorR + ', ' + dotCloneColorG + ', ' + dotCloneColorB + ')';
        };

        return {
            dot,
            isDarkTheme
        };
    },
}
</script>

<style scoped>
.dot {
    animation: 2s enter;
    background-color: #F2326E;
    border-radius: 100%;
    height: 50px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
}

@keyframes enter {
    0% {
        opacity: 0;
        transform: scale(0.5) translate(-100%, -100%);
    }

    50% {
        opacity: .5;
    }
}
</style>