<template>
  <sectionTitle :section-title="'Timeline'" />
  <div class="timeline-wrapper">
    <timeline-item-resp
      v-for="(item, i) in data"
      :key="item.title"
      :data="item"
      :id="i"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue-demi";
import data from "../../data/timeline";
import TimelineItemResp from "./TimelineItemResp.vue";
import SectionTitle from "../common/SectionTitle.vue";

export default defineComponent({
  name: "TimelineResp",

  components: { TimelineItemResp, SectionTitle },
  setup(props, { emit }) {
    const fadeClass = ref("hide");
    onMounted(() => {
      setTimeout(() => {
        fadeClass.value = "fade-in";
      }, 1500);
    });

    return { fadeClass, data };
  },
});
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100% !important;
  height: 100% !important;
  font-family: sans-serif !important;
  background-color: black;
}

* {
  margin: 0;
  padding: 0;
}
</style>
