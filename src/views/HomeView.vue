<template>
  <background />
  <navbar />
  <icons />
  <timeline />
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import Background from "../components/Background.vue";
import Navbar from "../components/Navbar.vue";

import Icons from "../components/Icons.vue";
import Timeline from "../components/Timeline/Timeline.vue";

export default defineComponent({
  name: "HomeView",
  components: { Background, Navbar, Timeline, Icons },

  setup(props, { emit }) {},
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
