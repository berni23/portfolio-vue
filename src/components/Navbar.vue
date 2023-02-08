<template>
  <div class="navbar">
    <div class="navbar__main-item navbar__section">
      <span class="navbar__section__item" @click="goToLanding" v-scroll-to
        >Home</span
      >
    </div>
    <div class="navbar__item navbar__section">
      <span @click="goToTimeline" class="navbar__section__item"> Timeline</span>
      <span @click="goToProjects" class="contact navbar__section__item"
        >Projects</span
      >
      <span @click="goToContact" class="contact navbar__section__item"
        >Contact</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue-demi";
import {useRouter} from "vue-router";
import Background from "../components/Background.vue";

export default defineComponent({
  name: "HomeView",
  components: { Background },

  setup(props, { emit }) {
    const router = useRouter();

    const goToTimeline = () => router.push("/#timeline");
    const goToProjects = () => router.push("/#projects");
    const goToContact = () => router.push("/#contact");
    const goToLanding = () => router.push("/#landing");

    return { goToTimeline, goToProjects, goToContact, goToLanding };
  },
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
