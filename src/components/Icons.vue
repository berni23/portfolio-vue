<template>
  <div class="icons">
    <div class="icons__content">
      <a :href="githubLink" rel="noreferrer" target="_blank">
        <img class="github-img" :src="Github" alt="github" />
      </a>
      <a :href="linkedinLink" rel="noreferrer" target="_blank">
        <img :src="Linkedin" class="linkedin-img" alt="linkedin" />
      </a>
      <a rel="noreferrer" class="cv" :href="cvLink" target="_blank">
        <span>CV</span>
      </a>

      <a :href="stackLink" rel="noreferrer" target="_blank">
        <img :src="Stack" class="linkedin-img" alt="stack-overflow" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue-demi";
import Github from "./../assets/images/github.svg";
import Linkedin from "./../assets/images/linkedin.svg";
import Stack from "./../assets/images/stack-overflow.svg";

export default defineComponent({
  name: "Icons",
  components: {},

  setup(props, { emit }) {
    const iconClass = ref("hide");
    // onMounted(() => {
    //   setTimeout(() => {
    //     iconClass.value = "fade-in";
    //   }, 5000);
    // });

    return {
      iconClass,
      Github,
      Linkedin,
      Stack,
      cvLink: " ./CV_bernat.pdf",
      linkedinLink: "https://www.linkedin.com/in/bernat-ferrer/",
      githubLink: "https://github.com/berni23",
      stackLink: "https://stackoverflow.com/users/7569812/berni",
    };
  },
});
</script>

<style lang="scss">
.hide {
  display: none;
}
.icons {
  text-align: center;
  margin-top: 120px;
  z-index: 10;
  justify-content: center;
  width: 100%;
  &__content {
    display: flex;
    justify-content: center;
    text-align: center;
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
  text-align: center;
  position: relative;
  span {
    position: absolute;
    font-size: 3rem;
    font-weight: 900;
    color: white;
  }
}

.hide {
  opacity: 0;
}

.fade-in {
  animation: fadeIn ease 5s;
}
.icons {
  display: flex;
  margin-bottom: 100px;
  a {
    text-decoration: none;
  }
  a:not(:last-child) {
    margin-right: 230px;
  }

  a:nth-child(odd) {
    animation: float 6s 3s ease-in-out infinite, fadeIn ease 5s;
  }
  a:nth-child(even) {
    animation: float 6s ease-in-out infinite, fadeIn ease 5s;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}
</style>
