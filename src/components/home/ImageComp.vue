<template>
  <div class="group">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/Heaven.jpg?alt=media&token=d8c5fc24-fd9c-4b05-a079-1d4968e4a20e"
      class="card big"
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/Bike.jpg?alt=media&token=c863399c-120b-4ce2-bcec-2ef6e0b76d53"
      class="card big"
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/WhatsApp%20Image%202024-06-07%20at%2012.04.35_2cf6a146.jpg?alt=media&token=bfa0d9d1-6532-42cd-b654-602cb5772d57"
      class="card big"
    />
    <img
      src="https://firebasestorage.googleapis.com/v0/b/portfolio-b3f3a.appspot.com/o/tattoo.jpeg?alt=media&token=a076988e-1b35-468d-9243-8077eaf644d7"
      class="card big"
    />

    <img src="" class="card small" />
    <img src="" class="card small" />
    <img src="" class="card small" />
    <img src="" class="card small" />
  </div>
</template>

<style scoped>
.group {
}

.card {
  border-radius: 16px;
  aspect-ratio: 5 / 7;
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);

  transition: transform 250ms;
}

.big {
  height: 280px;
  background-color: rgb(50, 50, 50, 0.2);
}

.card:nth-child(2) {
  transform: translate(-65%, -60%) rotate(-3deg);
}

.card:nth-child(3) {
  transform: translate(-50%, -58%) rotate(2deg);
}

.card:nth-child(4) {
  transform: translate(-45%, -55%) rotate(5deg);
}

.group:hover .card:nth-child(1) {
  transform: translate(-155%, -60%) rotate(-15deg);
}

.group:hover .card:nth-child(2) {
  transform: translate(-90%, -75%) rotate(-5deg);
}

.group:hover .card:nth-child(3) {
  transform: translate(-30%, -80%) rotate(8deg);
}

.group:hover .card:nth-child(4) {
  transform: translate(50%, -55%) rotate(15deg);
}
</style>
