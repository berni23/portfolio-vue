<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setUp() {},
});
</script>
<style lang="scss">
.hide {
  display: none;
  opacity: 0;
}
</style>
