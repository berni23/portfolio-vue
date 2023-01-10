<template>
  <div class="section-subtitle" :id="id">
    <h4 class="section-subtitle__title">{{ title }}</h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "SectionSubtitle",

  props: ["sectionTitle"],
  setup(props, { emit }) {
    return { title: props.sectionTitle, id: props.sectionTitle.toLowerCase() };
  },
});
</script>
<style lang="scss">
.section-subtitle {
  color: white;
  font-family: "Lato", sans-serif;
  margin-left: 50px;
  margin-bottom: 25px;
  width: 80%;
  &__title {
    width: 1%;
    text-align: left;
  }
  &__hr {
    width: 100% !important;
  }
}

@media screen and (min-width: 800px) {
  .section-subtitle {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 0 100px;
    margin-top: 100px;
    text-align: left;
    align-items: left;
    position: relative;
    bottom: 30px;
    &__title {
    }
  }
}
</style>
