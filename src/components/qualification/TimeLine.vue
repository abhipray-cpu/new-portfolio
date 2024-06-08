<template>
    <div class="timelineFull">
        <div class="timePic">
            <img class="timePic" :src="currentImage" alt="">
        </div>
        <div class="timeLineContainer">
            <div class="timeCards" id="timecards-123">
                <div v-for="(item, index) in timelineItems" :key="index" class="timeLine" :data-item="index + 1"
                    :data-max="timelineItems.length" :data-img="item.image">
                    <div :class="[{ 'whiteLine': true, 'activeDot': index === activeIndex }]"
                        @click="selectItem(index + 1)"></div>
                    <div class="redLine" :class="{ 'redActive': index === activeIndex && index !== 0 }"></div>
                </div>
                <div v-for="(item, index) in timelineItems" :key="item.id"
                    :class="[{ 'timeCard': true, 'active': index === activeIndex }]" :id="'tc-123-' + (index + 1)"
                    @click="selectItem(index + 1)" :data-img="item.image">
                    <div class="inner">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 0,
            timelineItems: [
                {
                    id: 1,
                    title: "Nextail is incorporated in 2012",
                    description: "With humble beginnings, completing a round with family and friends.",
                    image: "https://images.unsplash.com/photo-1697609484756-5bdda3b13024?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTkzNjU4MzZ8&ixlib=rb-4.0.3&q=80&w=400"
                },
                // Add more timeline items here
            ]
        };
    },
    computed: {
        currentImage() {
            return this.timelineItems[this.activeIndex].image;
        }
    },
    methods: {
        selectItem(index) {
            this.activeIndex = index - 1;
        }
    }
};
</script>

<style scoped>
.timelineFull {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 80px;
}

.timelineFull .timePic {
    transition: 200ms ease-in-out;
    border-radius: 20px;
    height: 430px;
    object-fit: cover;
    width: 100%;
    margin-top: 20px;
}

@media screen and (min-width: 1024px) {
    .timelineFull {
        grid-template-columns: 400px 1fr;
        row-gap: 0;
    }

    .timelineFull .timePic {
        position: sticky;
        top: 20px;
    }
}

.timelineFull .timeLineContainer .timeBar .verticalLine {
    width: 2px;
    background-color: white;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
}

.timelineFull .timeLineContainer .timeBar .verticalLine .timeDot {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    top: 0;
    cursor: pointer;
}

.timelineFull .timeLineContainer .timeCards .timeLine {
    position: relative;
}

.timelineFull .timeLineContainer .timeCards .timeLine .whiteLine {
    width: 3px;
    background-color: white;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
}

.timelineFull .timeLineContainer .timeCards .timeLine .whiteLine.activeDot::after {
    background-color: #eb5c5e;
}

.timelineFull .timeLineContainer .timeCards .timeLine .whiteLine::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 0;
    border-radius: 50%;
    filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
    cursor: pointer;
    z-index: 10;
    transition: all 200ms ease-in-out;
}

.timelineFull .timeLineContainer .timeCards .timeLine .redLine {
    width: 3px;
    background-color: red;
    margin: auto;
    position: relative;
    display: flex;
    justify-content: center;
    height: 0%;
    z-index: 5;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 200ms ease-in-out;
}

.timelineFull .timeLineContainer .timeCards .timeLine.lastTimeline .whiteLine,
.timelineFull .timeLineContainer .timeCards .timeLine.lastTimeline .redLine {
    background-color: transparent;
}

.timelineFull .timeLineContainer .timeCards .timeCard {
    background-color: transparent;
    box-shadow: none;
    border-radius: 20px;
    padding: 10px 25px;
    margin-bottom: 50px;
    cursor: pointer;
}

.timelineFull .timeLineContainer .timeCards .timeCard.active {
    background-color: white;
    box-shadow: 0px 6px 40px 0px rgba(42, 44, 66, 0.08);
}

.timelineFull .timeLineContainer .timeCards .timeCard h2 {
    color: #313642;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    letter-spacing: -0.4px;
}

.timelineFull .timeLineContainer .timeCards .timeCard p {
    color: #313642;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
}

.timelineFull .timeLineContainer .timeCards .timeCard p:last-of-type {
    margin-bottom: 0;
}
</style>
