<template>
  <div class="icons">
    <div class="icons__content">
      <a
        :href="githubLink"
        class="icons__content__icon"
        rel="noreferrer"
        target="_blank"
      >
        <img class="github-img" :src="Github" alt="github" />
      </a>
      <a
        :href="linkedinLink"
        class="icons__content__icon"
        rel="noreferrer"
        target="_blank"
      >
        <img :src="Linkedin" class="linkedin-img" alt="linkedin" />
      </a>
      <a
        rel="noreferrer"
        class="cv icons__content__icon"
        :href="cvLink"
        target="_blank"
      >
        <span>CV</span>
      </a>

      <a
        :href="stackLink"
        class="icons__content__icon"
        rel="noreferrer"
        target="_blank"
      >
        <img :src="Stack" class="linkedin-img" alt="stack-overflow" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue-demi";
import Github from "./../assets/images/github.svg";
import Linkedin from "./../assets/images/linkedin.svg";
import Stack from "./../assets/images/stack-overflow.svg";

export default defineComponent({
  name: "Icons",
  setup(props, { emit }) {
    const iconClass = ref("hide");
    return {
      iconClass,
      Github,
      Linkedin,
      Stack,
      cvLink: "https://s3-2023.s3.eu-central-1.amazonaws.com/CV_Bernat_English.pdf",
      linkedinLink: "https://www.linkedin.com/in/bernat-ferrer/",
      githubLink: "https://github.com/berni23",
      stackLink: "https://stackoverflow.com/users/7569812/berni",
    };
  },
});
</script>

<style lang="scss">
@import "../assets/scss/keyframes.scss";

.icons {
  z-index: 10;
  height: 150px;
  flex-wrap: wrap;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 100px;
  text-decoration: none;

  &__content {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    &__icon {
      width: 50px;
      &:nth-child(odd) {
        animation: float 6s 3s ease-in-out infinite, fadeIn ease 5s;
      }

      &:nth-child(even) {
        animation: float 6s ease-in-out infinite, fadeIn ease 5s;
      }
    }
  }
}
.github-img {
  width: 50px;
  height: 50px;
}

.linkedin-img {
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
}

.cv {
  margin-bottom: 35px;
  span {
    position: absolute;
    font-size: 2.5rem;
    font-weight: 900;
    color: white;
  }
}

.fade-in {
  animation: fadeIn ease 5s;
}

@media screen and (max-width: 800px) {
  .icons {
    height: 50px;
    &__content {
      width: 90%;
    }
  }
}
</style>
