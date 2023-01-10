<template>
  <div class="home-title">
    <div class="home-title__title fade-in-custom">
      {{ title }}
    </div>
  </div>
  <background />
  <navbar />
  <icons />
  <div>
    <timeline-resp v-if="isMobile" />
    <timeline v-else />
  </div>
  <div class="projects-home">
    <projects />
  </div>
  <contact class="contact-home" id="contact" />
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

import contact from "../components/Contact/Contact.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Background,
    Navbar,
    Timeline,
    Icons,
    TimelineResp,
    Projects,
    contact,
  },

  setup(props, { emit }) {
    document.title = "Bernat Ferrer";
    let title = "Bernat Ferrer";
    onMounted(loadFavIcon);
    return { isMobile, title };
  },
});
</script>
<style lang="scss">
@font-face {
  font-family: "nasa";
  src: url("../assets/fonts/Nasa.woff");
}

.home-title {
  color: yellow;
  font-size: 5rem;
  font-family: "nasa";
  font-weight: 800;

  position: relative;
  width: 100% !important;

  margin-top: 80px;
  // right: 35%;
  // top: 6%;
  // position: absolute;

  &__title {
    // margin: auto;

    text-align: center;
  }
}
body {
  margin: 0;
  padding: 0;
  width: 100% !important;
  height: 100% !important;
  font-family: "Lato", sans-serif;
  background-color: black;
}

* {
  margin: 0;
  padding: 0;
}
.projects-home,
.contact-home {
  position: relative;
  bottom: 500px;
}

.fade-in-custom {
  animation: fadeIn ease 7s;
}

@media screen and (max-width: 800px) {
  .projects-home {
    position: relative;
    bottom: 0;
  }
}
</style>
