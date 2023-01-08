<template>
  <div class="section-title">
    <h2 class="section-title__title">{{ title }}</h2>
    <hr class="section-title__hr" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "SectionTitle",

  props: ["sectionTitle"],
  setup(props, { emit }) {
    console.log(props.sectionTitle);
    return { title: props.sectionTitle };
  },
});
</script>
<style lang="scss">
.section-title {
  color: white;
  font-family: "Lato", sans-serif;

  margin-left: 50px;
  margin-bottom: 25px;

  width: 80%;

  &__title {
    margin-bottom: 20px;
  }

  &__hr {
  }
}
</style>
