<template>
    <div class="w-full flex flex-col items-center mt-10 md:mt-32">
        <h1 class="font-inter-bold tracking-wider text-3xl md:text-6xl"
            :class="{ 'text-light2': isDark, 'text-dark2': !isDark }">
            Here's a Joke for you
        </h1>
        <h3 :class="{ 'text-light1': isDark, 'text-dark1': !isDark }"
            class="font-inter-normal tracking-normal text-xl md:text-2xl mt-5 text-center h-24 md:h-14">{{ currentJoke
            }}</h3>
        <button-comp text="Next Joke" @click="clickHandler"></button-comp>
        <h1 class="font-inter-bold tracking-wider text-3xl md:text-6xl mb-5 mt-16 md:mt-32"
            :class="{ 'text-light2': isDark, 'text-dark2': !isDark }">
            Skills
        </h1>
        <carousel-comp></carousel-comp>
    </div>
</template>


<script>
import { useStore } from 'vuex'
import { computed, ref } from "vue";
import ButtonComp from '../slots/ButtonSlot.vue'
import CarouselComp from '../components/skills/CarouselComp.vue'
export default {
    components: {
        ButtonComp,
        CarouselComp
    },
    setup() {
        const jokes = ref([
            "Why did the programmer quit his job? Because he didn't get arrays.",
            "Why do programmers prefer dark mode? Less light, fewer bugs!",
            "Why don't programmers like nature? It has too many bugs.",
            "Why did the computer keep cold? It left its Windows open!",
            "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why was the math book sad? Because it had too many problems.",
            "Why did the programmer always get Christmas and Halloween mixed up? Because Oct 31 === Dec 25!",
            "Why was the JavaScript developer's face always wet? He kept crying NaN tears.",
            "Why do programmers prefer dogs to cats? Dogs have fetch(), but cats have catch().",
            "Why don't programmers like to play hide and seek? Because good players are always caught!",
            "Why did the programmer fall asleep at the keyboard? He was caught in an infinite loop.",
            "Why don't programmers like nature? It has too many bugs.",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why was the computer cold? It left its Windows open!",
            "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why did the computer go to therapy? Because it had too many bytes of emotional baggage.",
            "Why did the programmer call his function? Because he wanted to return his call by reference.",
            "Why was the JavaScript developer sad? He didn't know how to express himself.",
            "Why was the JavaScript developer's coffee so bitter? He didn't 'await' the sugar.",
            "Why did the developer go broke? Because he used up all his cache.",
            "Why do programmers hate nature? It has too many bugs.",
            "Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25!",
            "Why did the JavaScript developer quit his job? He didn't know how to 'null' his feelings.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why do Java developers hate nature? It has too many bugs.",
            "Why don't programmers like to play hide and seek? Because good players are always caught!",
            "Why did the computer go to therapy? Because it had too many bytes of emotional baggage.",
            "Why did the computer keep cold? It left its Windows open!",
            "Why do Java developers hate the beach? Because of all the sand-castle arrays.",
            "Why was the math book sad? Because it had too many problems.",
            "Why did the JavaScript developer go broke? Because he used up all his cache.",
            "Why did the computer get cold? It forgot to close its Windows.",
            "Why was the JavaScript developer sad? He didn't know how to 'null' his feelings.",
            "Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25!",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why do Java developers hate nature? It has too many bugs.",
            "Why don't programmers like to play hide and seek? Because good players are always caught!",
            "Why did the JavaScript developer go broke? Because he used up all his cache.",
            "Why did the computer get cold? It forgot to close its Windows.",
            "Why was the JavaScript developer sad? He didn't know how to 'null' his feelings.",
            "Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25!",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why do Java developers hate nature? It has too many bugs.",
            "Why don't programmers like to play hide and seek? Because good players are always caught!",
            "Why did the JavaScript developer go broke? Because he used up all his cache.",
            "Why did the computer get cold? It forgot to close its Windows.",
            "Why was the JavaScript developer sad? He didn't know how to 'null' his feelings.",
            "Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25!",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why do Java developers hate nature? It has too many bugs.",
            "Why don't programmers like to play hide and seek? Because good players are always caught!",
            "Why did the JavaScript developer go broke? Because he used up all his cache.",
            "Why did the computer get cold? It forgot to close its Windows.",
            "Why was the JavaScript developer sad? He didn't know how to 'null' his feelings.",
            "Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25!",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why do Java developers hate nature? It has too many bugs.",
            "Why don't programmers like to play hide and seek? Because good players are always caught!",
            "Why did the JavaScript developer go broke? Because he used up all his cache.",
            "Why did the computer get cold? It forgot to close its Windows.",
            "Why was the JavaScript developer sad? He didn't know how to 'null' his feelings.",
            "Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25!",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why do Java developers hate nature? It has too many bugs.",
            "Why don't programmers like to play hide and seek? Because good players are always caught!",
            "Why did the JavaScript developer go broke? Because he used up all his cache.",
            "Why did the computer get cold? It forgot to close its Windows.",
            "Why was the JavaScript developer sad? He didn't know how to 'null' his feelings.",
            "Why do programmers always mix up Christmas and Halloween? Because Oct 31 === Dec 25!",
            "Why did the programmer go broke? Because he used up all his cache.",
            "Why did the programmer get stuck in the shower? Because the instructions said 'lather, rinse, repeat'.",
            "Why do Java developers hate nature? It has too many bugs.",
            "Why don't programmers like to play hide and seek? Because good players are always caught!"]);

        const currentIndex = ref(0);
        const store = useStore();

        const clickHandler = () => {
            currentIndex.value = Math.floor(Math.random() * jokes.value.length);
        };

        const isDark = computed(() => {
            return store.getters.getTheme === "dark";
        });

        const currentJoke = computed(() => {
            return jokes.value[currentIndex.value];
        });

        return {
            isDark,
            clickHandler,
            currentJoke
        };
    }
};
</script>
