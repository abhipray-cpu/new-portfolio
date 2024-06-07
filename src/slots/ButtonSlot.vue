<template>
  <div class="fancy btn1 rounded-lg mt-4 h-[10vh] w-[55vw] md:h-[10vh] md:w-[25vw]">
    <div class="fancy-before1"></div>
    <div class="fancy-before2"></div>

    <button class="btn font-inter-semi md:text-2xl tracking-wide">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style scoped>
.btn1 {
  background: linear-gradient(100deg, #344ba8b6 1.85%, #a82acf 49.56%, #f93767 93.6%);
}

.fancy {
  --offset: 3px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
}

/* Conic gradient */
.fancy-before1::before {
  content: "";
  background-image: conic-gradient(transparent 270deg, rgb(255, 255, 255), transparent);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 1;
  width: 100%;
  animation: rotate 2s alternate ease-in-out infinite;
}

.fancy-before2::before {
  content: "";
  background-image: conic-gradient(transparent 270deg, white, transparent);
  transform: rotateX(180deg);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  aspect-ratio: 1;
  width: 100%;
  animation: rotate2 2s alternate ease-in-out infinite;
}

/* Overlay */
.fancy::after {
  content: "";
  background: inherit;
  border-radius: inherit;
  position: absolute;
  inset: var(--offset);
  height: calc(100% - 2 * var(--offset));
  width: calc(100% - 2 * var(--offset));
}

.fancy .btn {
  background: transparent;
  color: white;
  position: absolute;
  inset: 0;
  z-index: 10;
  padding: 1.5rem;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) scale(1.4) rotate(0turn);
  }

  100% {
    transform: translate(-50%, -50%) scale(1.4) rotate(0.24turn);
  }
}

@keyframes rotate2 {
  0% {
    transform: translate(-50%, -50%) scale(1.4) rotate(0.5turn);
  }

  100% {
    transform: translate(-50%, -50%) scale(1.4) rotate(0.75turn);
  }
}
</style>
