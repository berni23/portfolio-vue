<template>
  <div class="timeline-wrapper">
    <div class="timeline" v-if="data.length" :class="fadeClass">
      <div class="timeline__content">
        <timeline-item
          v-for="(item, i) in data"
          :key="item.title"
          :data="item"
          :id="i"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue-demi";

import data from "../../data/cv";
import Icons from "../Icons.vue";
import TimelineItem from "./TimelineItem.vue";

export default defineComponent({
  name: "Timeline",

  components: { Icons, TimelineItem },
  setup(props, { emit }) {
    const fadeClass = ref("hide");
    onMounted(() => {
      setTimeout(() => {
        fadeClass.value = "fade-in";
      }, 5000);
    });

    return { fadeClass, data };
  },
});
</script>
<style lang="scss">
.timeline-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
  font-family: "Lato", sans-serif;
  margin: 0;
  color: black;
  margin-top: 300px;
}

.timeline {
  &__content {
    display: flex;
    position: relative;
    min-width: 100%;
    flex-direction: column;
    margin: 40px 0;

    &::after {
      background-color: #ffc107;
      content: "";
      position: absolute;
      left: calc(50% - 2px);
      width: 2px;
      height: 100%;
    }
  }
}

.img-timeline {
  height: 35px;
  margin-top: 20px;
}


.text {
  text-align: justify;
  color: #777;
  font-size: 1rem;
}

h1 {
  text-align: center;
}

.timeline-item:nth-child(odd) .header-item {
  flex-direction: row-reverse;
}

.timeline-item-content .tag {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin: 0 5px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.timeline-item:nth-child(odd) .timeline-item-content .tag {
  float: right;
  left: auto;
  left: 205px;
}

.timeline-item-content .circle {
  background-color: rgb(0, 0, 0);
  border: 2px solid#fff;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - 10px);
  right: -10px;
  width: 20px;
  height: 20px;
  z-index: 100;
}

.timeline-item:nth-child(odd) .timeline-item-content .circle {
  right: auto;
  left: -10px;
}

.timeline-item-content time {
  color: #777;
  font-size: 12px;
  font-weight: 700;
}
</style>
