<template>
    <div class="flex flex-col items-start justify-center gap-5 ml-5 md:ml-56 mt-10">
        <h2 class="font-inter text-fuchsia-50 w-full sm:w-[80vw] font-bold  text-xl md:text-2xl tracking-wide">
            Let's
            Connect
        </h2>
        <input type="text"
            class="w-[90vw] md:w-[30vw] h-[10vh] md:h-[8vh] rounded-md bg-slate-700 border-none focus:outline-none font-inter-normal text-gray-200 px-4 font-normal text-lg md:text-xl"
            v-model="name">
        <input type="text"
            class="w-[90vw] md:w-[30vw] h-[10vh] md:h-[8vh] rounded-md bg-slate-700 focus:outline-none font-inter-normal text-gray-200 px-4 font-normal text-lg md:text-xl"
            v-model="email">
        <input type="text"
            class="w-[90vw] md:w-[30vw] h-[10vh] md:h-[8vh] rounded-md bg-slate-700 focus:outline-none font-inter-normal text-gray-200 px-4 font-normal text-lg md:text-xl"
            v-model="contact">
        <textarea name="" id=""
            class="w-[90vw] md:w-[30vw] h-[15vh] md:h-[12vh] rounded-md bg-slate-700 focus:outline-none font-inter-normal text-gray-200 px-4 py-2 font-normal text-lg md:text-xl"
            v-model="message"></textarea>
        <button-comp text="Send"></button-comp>
    </div>
</template>

<script>
import { ref } from 'vue'
import ButtonComp from '../../slots/ButtonSlot.vue'
export default {
    components: { ButtonComp },
    setup() {
        const name = ref('');
        const email = ref('');
        const contact = ref('');
        const message = ref('');
        return {
            name,
            email,
            contact,
            message
        }
    },
}
</script>

<style scoped>
input,
textarea {
    border: 2px solid transparent;
    /* Initial border state */
    transition: border-color 0.3s;
    /* Smooth transition for border color */
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
    outline: none;
    border-color: blue;
    /* Border color when hovered or focused */
}
</style>