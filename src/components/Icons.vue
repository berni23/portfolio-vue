<template>
  <div :class="iconClass">
    <a :href="githubLink" rel="noreferrer" target="_blank">
      <img class="github-img" :src="Github" alt="github" />
    </a>
    <a
      :href="linkedinLink"
      rel="noreferrer"
      target="_blank"
    >
      <img :src="Linkedin" alt="linkedin" />
    </a>
    <a rel="noreferrer" 
    class="cv" :href="cv" target="_blank">
      <span>CV</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue-demi";
import Github from "../../assets/images/github.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import cv from "../../assets/docs/CV_bernat.pdf";

export default defineComponent({
  name: "Icons",
  components: {},

  setup(props, { emit }) {
    const iconClass = ref("hide");
    onMounted(() => {
      setTimeout(() => {
        iconClass.value = "fade-in";
      }, 5000);
    });

    return { iconClass, Github, Linkedin, cv ,linkedinLink:"https://www.linkedin.com/in/bernat-ferrer/",githubLink:"https://github.com/berni23"};
  },
});
</script>

<style lang="scss">
.github-img {
  width: 50px;
  height: 50px;
}

.linkeding-img {
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
}

.cv {
  margin-top: 10px;
  span {
    font-size: "3rem";
    font-weight: 900;
    color: white;
  }
}
</style>
