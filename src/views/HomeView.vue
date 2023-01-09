<template>
  <background />
  <!-- <navbar />
  <icons />

  <div>
    <timeline-resp v-if="isMobile" />
    <timeline v-else />
  </div> -->

  <projects />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Background from "../components/Background.vue";
import isMobile from "../Logic/Utils/isMobile";

import Navbar from "../components/Navbar.vue";

import Icons from "../components/Icons.vue";
import Timeline from "../components/Timeline/Timeline.vue";
import Projects from "../components/Projects/Projects.vue";
import TimelineResp from "../components/Timeline/TimelineResp.vue";
import loadFavIcon from "../Logic/Utils/loadFavIcon";

export default defineComponent({
  name: "HomeView",
  components: { Background, Navbar, Timeline, Icons, TimelineResp, Projects },

  setup(props, { emit }) {
    document.title = "Bernat Ferrer";

    onMounted(loadFavIcon);

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
