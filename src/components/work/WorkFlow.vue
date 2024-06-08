<template>
  <h2>My Workflow</h2>
  <p>
    As an advocate of the Agile methodology, I meticulously gather client requirements and
    embrace continuous iterations and modifications to ensure each version aligns
    perfectly with client expectations.
  </p>
  <ul>
    <li>Gather Client requirements</li>
    <li>Gather necessary details and develop a roadmap</li>
    <li>Gathering beuget details and coressponding available resources</li>
    <li>Building a mockup and requirement verifications</li>
    <li>Building a UI</li>
    <li>Building a wireframe</li>
    <li>Building a complete backed system design aligning with UI</li>
    <li>Test driven backend development</li>
    <li>API documentation</li>
  </ul>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const isDark = computed(() => {
      return store.getters.getTheme === "dark";
    });
    return {
      isDark,
    };
  },
};
</script>
