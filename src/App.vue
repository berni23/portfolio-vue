<template>
  <router-view />
</template>

<script lang="ts">
import {defineComponent, onMounted} from "vue";
import loadFavIcon from "./Logic/Utils/loadFavIcon";

export default defineComponent({
  name: "App",
  setUp() {
    onMounted(loadFavIcon);
  },
});
</script>
<style lang="scss">
html {
  overflow-x: hidden;

  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
.hide {
  display: none;
  opacity: 0;
}

.octicon {
  display: inline-block;
  overflow: visible !important;
  vertical-align: text-bottom;
  fill: currentColor;
}
</style>
