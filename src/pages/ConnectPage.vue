<template>
    <div class="w-full flex flex-col items-center mt-10 md:mt-18">
        <h1 class=" font-inter-bold tracking-wider text-3xl md:text-6xl"
            :class="{ 'text-light2': isDark, 'text-dark2': !isDark }">
            Contact
        </h1>
        <div class="w-full bg-[#031625] min-h-[50vh] mt-3 md:md-8 flex flex-col md:flex-row">
            <div class="flex flex-row items-center mt-10">
                <div class="hidden md:block">
                    <Vue3Lottie :animationData="HandJSON" :height="size" :width="size" :loop="true" :autoplay="true"
                        speed="1" />
                </div>
                <div class="flex flex-col items-start justify-center ml-4 gap-5 md:gap-8 ">
                    <div class="flex flex-row items-center justify-center">
                        <Vue3Lottie :animationData="MailJSON" :height="size2" :width="size2" :loop="true"
                            :autoplay="true" speed="1" />
                        <h2 class="font-inter font-bold tracking-wider text-lg md:text-xl text-blue-700">
                            dumkaabhipray@gmail.com
                        </h2>
                    </div>
                    <div class="flex flex-row items-center justify-center">
                        <Vue3Lottie :animationData="CallJSON" :height="size2" :width="size2" :loop="true"
                            :autoplay="true" speed="1" />
                        <h2 class="font-inter font-bold tracking-wider text-lg md:text-xl text-blue-700 ">+91-7895724996
                        </h2>
                    </div>
                    <div class="flex flex-row items-center justify-center">
                        <Vue3Lottie :animationData="WhatsappJSON" :height="size2" :width="size2" :loop="true"
                            :autoplay="true" speed="1" />
                        <h2 class="font-inter font-bold tracking-wider text-lg md:text-xl text-blue-700">+91-7895724996
                        </h2>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { Vue3Lottie } from 'vue3-lottie';
import HandJSON from '../assets/lottie/Contact.json'
import WhatsappJSON from '../assets/lottie/whatsapp.json'
import MailJSON from '../assets/lottie/mail.json'
import CallJSON from '../assets/lottie/call.json'
import { useMediaQuery } from '@vueuse/core';
export default {
    components: { Vue3Lottie },
    setup() {
        const store = useStore()
        const isDark = computed(() => {
            return store.getters.getTheme === 'dark'
        })
        const isMobile = useMediaQuery('(max-width: 480px)');
        const size = computed(() => {
            if (isMobile.value === true) {
                return 75
            }
            else return 250
        })
        const size2 = computed(() => {
            if (isMobile.value === true) {
                return 100
            }
            else return 80
        })
        return {
            isDark,
            HandJSON,
            WhatsappJSON,
            MailJSON,
            CallJSON,
            size,
            size2
        }
    },
}
</script>