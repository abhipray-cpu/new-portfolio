<template>
  <section id="timeline" class="flex justify-center flex-row">
    <div class="tl-item h-[80vh]">
      <div
        class="tl-bg"
        style="background-image: url(https://placeimg.com/803/803/nature)"
      ></div>

      <div class="tl-year">
        <p class="f2 heading--sanSerif">2023</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu text-center text-lg md:text-2xl">
          B.E Electronics & Communication
        </h1>
        <p>
          My BE in ECE was more than just a degree; it ignited my passion for software
          engineering and robotics.
          <span class="hidden md:block">
            Immersed in cutting-edge technology, I discovered the thrill of creating
            intelligent systems and innovative solutions. This journey propelled me
            towards a future where innovation knows no bounds.
          </span>
        </p>
      </div>
    </div>
    <div class="tl-item h-[80vh]">
      <div
        class="tl-bg"
        style="background-image: url(https://placeimg.com/802/802/nature)"
      ></div>

      <div class="tl-year">
        <p class="f2 heading--sanSerif">2018</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu text-center text-lg md:text-2xl">XII 90%</h1>
        <p>
          I completed my 12th with PCM (Physics, Chemistry, and Mathematics), paving the
          way for a future rooted in scientific exploration and mathematical reasoning.
          <span class="hidden md:block">
            Throughout my academic pursuit, I immersed myself in the intricacies of these
            subjects, fostering a passion for problem-solving and analytical thinking.
          </span>
        </p>
      </div>
    </div>
    <div class="tl-item h-[80vh]">
      <div
        class="tl-bg"
        style="background-image: url(https://placeimg.com/801/801/nature)"
      ></div>

      <div class="tl-year">
        <p class="f2 heading--sanSerif">2016</p>
      </div>

      <div class="tl-content">
        <h1 class="f3 text--accent ttu text-center text-lg md:text-2xl">X 94.5%</h1>
        <p>
          I completed my 10th at St. Joseph's Convent School, marking a significant
          milestone in my academic journey.
          <span class="hidden md:block"
            >With a focus on science subjects, I delved deep into the realms of physics,
            chemistry, and biology, broadening my understanding of the natural
            world.</span
          >
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#timeline {
  background-color: #031625;
}

#timeline:hover .tl-item {
  width: 33.3333%;
}

.tl-item {
  transform: translate3d(0, 0, 0);
  position: relative;
  width: 30%;
  min-height: 600px;
  color: #fff;
  overflow: hidden;
  transition: width 0.5s ease;
}

.tl-item:before,
.tl-item:after {
  transform: translate3d(0, 0, 0);
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.tl-item:after {
  background: rgba(3, 22, 37, 0.85);
  opacity: 1;
  transition: opacity 0.5s ease;
}

.tl-item:before {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%);
  z-index: 1;
  opacity: 0;
  transform: translate3d(0, 0, 0) translateY(50%);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.tl-item:hover {
  width: 90% !important;
}

.tl-item:hover:after {
  opacity: 0;
}

.tl-item:hover:before {
  opacity: 1;
  transform: translate3d(0, 0, 0) translateY(0);
  transition: opacity 1s ease, transform 1s ease 0.25s;
}

.tl-item:hover .tl-content {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.75s ease 0.5s;
}

.tl-item:hover .tl-bg {
  filter: grayscale(0);
}

.tl-content {
  transform: translate3d(0, 0, 0) translateY(25px);
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 0 1.618em;
  top: 55%;
  opacity: 0;
}

.tl-content h1 {
  font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  color: #1779cf;
  font-weight: normal;
}

.tl-year {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.tl-year p {
  font-family: "Pathway Gothic One", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1.728rem;
  line-height: 0;
}

.tl-bg {
  transform: translate3d(0, 0, 0);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
}
</style>
