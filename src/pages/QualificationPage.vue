<template>
    <div class="w-full flex flex-col items-center mt-10 md:mt-22">
        <h1 class="font-inter-bold tracking-wider text-3xl md:text-6xl"
            :class="{ 'text-light2': isDark, 'text-dark2': !isDark }">
            Qualifications
        </h1>
    </div>
</template>

<script>
import MileStone from '../components/qualification/SkillsComp.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
    components: {
        MileStone
    },
    setup() {
        const store = useStore()
        const isDark = computed(() => {
            return store.getters.getTheme === 'dark'
        })
        return {
            isDark
        }
    },
}
</script>

<style scoped></style>