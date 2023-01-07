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
import isMobile from "../../Logic/Utils/isMobile";
import data from "../../data/cv";
import TimelineItem from "./TimelineItem.vue";

export default defineComponent({
  name: "Timeline",

  components: { TimelineItem },
  setup(props, { emit }) {
    const fadeClass = ref("hide");
    onMounted(() => {
      setTimeout(() => {
        fadeClass.value = "fade-in";
      }, 1500);
    });

    return { fadeClass, data, isMobile };
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
}

.timeline {
  display: flex;
  flex-direction: column;
  min-width: 100%;
  position: relative;
  &__content {
    display: flex;
    position: relative;
    min-width: 100%;
    flex-direction: column;

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

// @media screen and (min-width: 800px) {
//   .timeline {
//     &__content {
//       &::after {
//         background-color: #ffc107;
//         content: "";
//         position: absolute;
//         left: calc(50% - 2px);
//         width: 2px;
//         height: 100%;
//       }
//     }
//   }
// }
</style>
