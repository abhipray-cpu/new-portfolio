<template>
    <a class="card w-[160px] h-[190px] md:w-[200px] md:h-[240px]" target="_blank" ref="card" @mousemove="move"
        @mouseleave="leave" @mouseover="over">
        <div class="reflection" ref="refl"></div>
        <img :src="img" />
    </a>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
    name: 'PhotoCard',
    props: {
        img: String,
    },
    setup(props) {
        const card = ref(null);
        const refl = ref(null);
        const debounce = ref(null);

        const over = () => {
            refl.value.style.opacity = 1;
        };

        const leave = () => {
            card.value.style.transform = `perspective(500px) scale(1)`;
            refl.value.style.opacity = 0;
        };

        const move = (event) => {
            const relX = (event.offsetX + 1) / card.value.offsetWidth;
            const relY = (event.offsetY + 1) / card.value.offsetHeight;
            const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
            const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
            card.value.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;

            const lightX = scale(relX, 0, 1, 150, -50);
            const lightY = scale(relY, 0, 1, 30, -100);
            const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
            const lightOpacity = scale(lightConstrain, 0.3, 1, 1, 0) * 255;
            const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
            const lightShadeBlack = `rgba(0, 0, 0, 1)`;
            refl.value.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
        };

        const scale = (val, inMin, inMax, outMin, outMax) =>
            outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin);

        onMounted(() => { });

        return {
            card,
            refl,
            over,
            leave,
            move
        };
    }
};
</script>

<style scoped>
.card {
    background-color: #ccc;
    transition: all 0.1s ease;
    border-radius: 3px;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0);
    overflow: hidden;
    cursor: pointer;
}

#grid .card:hover {
    transform: scale(2);
    z-index: 2;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

#grid .card:hover img {
    filter: grayscale(0);
}

#grid .card .reflection {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    left: 0;
    top: 0;
    transition: all 0.1s ease;
    opacity: 0;
    mix-blend-mode: soft-light;
}

#grid .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.65);
    transition: all 0.3s ease;
}
</style>
