<template>
    <div class="absolute inset-0 top-0 left-0 overflow-x-hidden w-full min-h-full"
        :class="{ 'bg-light': isDarkTheme, 'bg-dark': !isDarkTheme }">
        <header-comp></header-comp>
    </div>
</template>


<script>
import { useStore } from 'vuex';
import { computed } from 'vue'
import HeaderComp from './components/general/HeaderComp.vue'
export default {
    components: {
        HeaderComp
    },
    setup() {
        const store = useStore()
        const isDarkTheme = computed(() => store.getters.getTheme === 'dark');
        return {
            isDarkTheme
        }
    },
}
</script>

<style scoped></style>