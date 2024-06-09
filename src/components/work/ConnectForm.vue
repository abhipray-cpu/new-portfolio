<template>
    <div class="flex flex-col items-start justify-center gap-5 ml-5 md:ml-56 mt-10">
        <h2 class="font-inter text-fuchsia-50 w-full sm:w-[80vw] font-bold  text-xl md:text-2xl tracking-wide">
            Let's
            Connect
        </h2>
        <div v-if="cheer" class="md:-ml-28">
            <Vue3Lottie :animationData="CheerJSON" :height="400" :width="400" :loop="true" :autoplay="true" speed="1" />
        </div>
        <form ref="form" class="flex flex-col gap-6" v-else>
            <input type="text"
                class="w-[90vw] md:w-[30vw] h-[10vh] md:h-[8vh] rounded-md bg-slate-700 border-none focus:outline-none font-inter-normal text-gray-200 px-4 font-normal text-lg md:text-xl"
                placeholder="Name" v-model="name" name="from_name">
            <input type="email"
                class="w-[90vw] md:w-[30vw] h-[10vh] md:h-[8vh] rounded-md bg-slate-700 focus:outline-none font-inter-normal text-gray-200 px-4 font-normal text-lg md:text-xl"
                placeholder="Email" v-model="email" name="from_email">
            <input type="text"
                class="w-[90vw] md:w-[30vw] h-[10vh] md:h-[8vh] rounded-md bg-slate-700 focus:outline-none font-inter-normal text-gray-200 px-4 font-normal text-lg md:text-xl"
                placeholder="Contact" v-model="contact" name="from_contact">
            <textarea name="message" id="message"
                class="w-[90vw] md:w-[30vw] h-[15vh] md:h-[12vh] rounded-md bg-slate-700 focus:outline-none font-inter-normal text-gray-200 px-4 py-2 font-normal text-lg md:text-xl"
                v-model="message" placeholder="Message"></textarea>
        </form>

        <button-comp text="Send" @click="sendEmail"></button-comp>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import ButtonComp from '../../slots/ButtonSlot.vue'
import emailjs from '@emailjs/browser';
import { Vue3Lottie } from "vue3-lottie";
import CheerJSON from '../../assets/lottie/Success.json'
export default {
    components: { ButtonComp, Vue3Lottie },
    setup() {
        const name = ref('');
        const email = ref('');
        const contact = ref('');
        const message = ref('');
        const show = ref(false)
        const form = ref(null);
        const cheer = computed(() => {
            return show.value;
        })
        const toggle = () => {
            show.value = true;
            setTimeout(() => {
                show.value = false
            }, 2000)
        }
        const sendEmail = () => {
            if (name.value !== '' && email.value !== '' && contact.value !== '' && message.value != '') {
                emailjs
                    .sendForm('service_fph93rk', 'template_i4z2zke', form.value, {
                        publicKey: 'lmVfpFdCb2s6x_SqC',
                    })
                    .then(
                        () => {
                            email.value = ''
                            name.value = ''
                            contact.value = ''
                            message.value = ''
                            toggle()
                        },
                        (error) => {
                            console.log(error)
                        },
                    );
            }
        }
        return {
            name,
            email,
            contact,
            message,
            sendEmail,
            form,
            cheer,
            CheerJSON
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