<template>
  <div class="carousel mt-10">
    <ul class="carousel__list" @click="handleClick">
      <li v-for="(item, index) in items" :key="index" class="carousel__item" :data-pos="item.pos"
        :class="{ carousel__item_active: item.pos === 0 }">
        <div>
          <img :src="item.img" :alt="item" class="h-[250px] w-[150px] rounded-lg">
          <h1 class="text-center font-inter font-bold tracking-tight text-gray-100 text-xl mt-2"
            @click="clickHandler(item.link)">{{ item.text }}</h1>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { link: "https://code-granth.pages.dev/home", text: "Code Granth", img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/mete-mob.jpg?alt=media&token=8555aafb-5cf3-4385-a478-315cbb554546", pos: 1 },
        { link: "https://capy-notes.pages.dev/", text: "Cappy Notes", img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/images%2Fcapp-2.jpg?alt=media&token=bf80baa5-fb7e-4c18-b7a1-cf5a5f1c11f4", pos: 2 },
        { link: "https://geeta-rho.vercel.app/", text: "Geeta", img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/geeta-mob.jpg?alt=media&token=851e426f-8421-472d-b13b-42fcb5b6b930", pos: -1 },
        { link: "https://meteormate-d8fd.vercel.app/", text: "Metor Mate", img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/mete.jpg?alt=media&token=5e62dd6d-c066-44b7-921a-08de083a03d0", pos: 0 },
        { link: "https://shayrana.pages.dev/home", text: "Shayrana", img: "https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/shayrana.jpg?alt=media&token=c4670326-ee55-496e-a533-8e6f617f4c88", pos: -2 },
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
    clickHandler(value) {
      window.open(value, '_blank');
    },
    update(newActive) {
      const newActivePos = parseInt(newActive.dataset.pos, 10);
      this.items.forEach((item) => {
        item.pos = this.getPos(item.pos, newActivePos);
      });
    },
    getPos(current, active) {
      const diff = current - active;
      console.log(diff)
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
  height: 300px;
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
