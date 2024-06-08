<template>
  <div class="carousel">
    <ul class="carousel__list" @click="handleClick">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="carousel__item"
        :data-pos="item.pos"
        :class="{ carousel__item_active: item.pos === 0 }"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "1", pos: -2 },
        { text: "2", pos: -1 },
        { text: "3", pos: 0 },
        { text: "4", pos: 1 },
        { text: "5", pos: 2 },
      ],
    };
  },
  methods: {
    handleClick(event) {
      const newActive = event.target.closest(".carousel__item");
      if (!newActive || newActive.classList.contains("carousel__item_active")) {
        return;
      }
      this.update(newActive);
    },
    update(newActive) {
      const newActivePos = parseInt(newActive.dataset.pos, 10);
      this.items.forEach((item) => {
        item.pos = this.getPos(item.pos, newActivePos);
      });
    },
    getPos(current, active) {
      const diff = current - active;
      if (Math.abs(diff) > 2) {
        return -current;
      }
      return diff;
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-family: Arial;
}

.carousel__list {
  display: flex;
  list-style: none;
  position: relative;
  width: 100%;
  height: 300px;
  justify-content: center;
  perspective: 300px;
}

.carousel__item {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  width: 150px;
  height: 250px;
  border-radius: 12px;
  box-shadow: 0px 2px 8px 0px rgba(50, 50, 50, 0.5);
  position: absolute;
  transition: all 0.3s ease-in;
}

.carousel__item:nth-child(1) {
  background: linear-gradient(45deg, #2d35eb 0%, #904ed4 100%);
}

.carousel__item:nth-child(2) {
  background: linear-gradient(45deg, #2d35eb 0%, #fdbb2d 100%);
}

.carousel__item:nth-child(3) {
  background: linear-gradient(45deg, #2d35eb 0%, #22c1c3 100%);
}

.carousel__item:nth-child(4) {
  background: linear-gradient(45deg, #fdbb2d 0%, #904ed4 100%);
}

.carousel__item:nth-child(5) {
  background: linear-gradient(45deg, #22c1c3 0%, #904ed4 100%);
}

.carousel__item[data-pos="0"] {
  z-index: 5;
}

.carousel__item[data-pos="-1"],
.carousel__item[data-pos="1"] {
  opacity: 0.7;
  filter: blur(1px) grayscale(10%);
}

.carousel__item[data-pos="-1"] {
  transform: translateX(-40%) scale(0.9);
  z-index: 4;
}

.carousel__item[data-pos="1"] {
  transform: translateX(40%) scale(0.9);
  z-index: 4;
}

.carousel__item[data-pos="-2"],
.carousel__item[data-pos="2"] {
  opacity: 0.4;
  filter: blur(3px) grayscale(20%);
}

.carousel__item[data-pos="-2"] {
  transform: translateX(-70%) scale(0.8);
  z-index: 3;
}

.carousel__item[data-pos="2"] {
  transform: translateX(70%) scale(0.8);
  z-index: 3;
}
</style>
