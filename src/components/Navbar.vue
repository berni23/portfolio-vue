<template>
  <div class="navbar">
    <div class="navbar__main-item navbar__section">
      <span class="navbar__section__item">BERNAT FERRER</span>
    </div>
    <div class="navbar__item navbar__section">
      <a class="navbar__section__item" href="/"> Projects</a>
      <a class="contact navbar__section__item" href="/"> Contant</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
import Background from "../components/Background.vue";

export default defineComponent({
  name: "HomeView",
  components: { Background },

  setup(props, { emit }) {},
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.navbar {
  font-family: "Roboto", "sans-serif";
  justify-content: space-between;
  background-color: black;
  transition: 1s linear all;
  color: white;
  min-height: 50px;
  position: fixed;
  padding: 10px;
  display: flex;
  z-index: 1000;
  height: 25px;
  width: 100%;
  top: 0;

  &__main-item {
    font-weight: 1000;
    text-align: center;
  }
  &__section {
    margin: 15px;
    &__item {
      text-decoration: inherit;
      color: inherit;
      cursor: pointer;
      margin-right: 20px;
      &:hover {
        color: #7dc8c6;
        transition: 0.3s linear all;
      }
    }
  }
}
.contact {
  margin-right: 20px;
}
</style>
