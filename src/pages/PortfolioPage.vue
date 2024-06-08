<template>
  <mob-card v-if="show"></mob-card>
  <desk-card v-else></desk-card>
</template>

<script>
import DeskCard from "../components/Portfolio/DeskCard.vue";
import MobCard from "../components/Portfolio/MobCard.vue";
import { useMediaQuery } from "@vueuse/core";
import { computed } from "vue";
export default {
  components: {
    DeskCard,
    MobCard,
  },
  setup() {
    const isMobile = useMediaQuery("(max-width: 680px)");
    const show = computed(() => {
      return isMobile.value === true ? true : false;
    });
    return {
      show,
    };
  },
};
</script>
