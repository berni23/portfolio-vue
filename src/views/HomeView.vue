<template>
  <background />
  <navbar id="landing" />
  <icons />

  <div>
    <timeline-resp v-if="isMobile" id="timeline" />
    <timeline v-else id="timeline" />
  </div>

  <div id="projects"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import Background from "../components/Background.vue";
import isMobile from "../Logic/Utils/isMobile";

import Navbar from "../components/Navbar.vue";

import Icons from "../components/Icons.vue";
import Timeline from "../components/Timeline/Timeline.vue";
import TimelineResp from "../components/Timeline/TimelineResp.vue";

export default defineComponent({
  name: "HomeView",
  components: { Background, Navbar, Timeline, Icons, TimelineResp },

  setup(props, { emit }) {
    return { isMobile };
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
