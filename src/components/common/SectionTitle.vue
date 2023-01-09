<template>
  <div class="section-title" :id="id">
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
    return { title: props.sectionTitle, id: props.sectionTitle.toLowerCase() };
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
    width: 1%;
    text-align: left;
  }

  &__hr {
    width: 100% !important;
  }
}

@media screen and (min-width: 800px) {
  .section-title {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 0 100px;
    //  margin-right: 20px;
    // padding: 0 100px;
    text-align: left;
    align-items: left;

    &__title {
    }
  }
}
</style>
