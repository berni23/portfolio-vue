<template>
  <repo-svg />
  <!-- <div class="project-item project-repo row p-3">
    <div class="project-item__content">
      <div class="project-item__content__header">
        <div class="project-item__content__header__icon">
          <img :src="repoSvg" alt="repo-icon" />
        </div>
      </div>
    </div>
  </div> -->

  <!-- <a
    href="https://marketplace.visualstudio.com/items?itemName=BernatFerrer.berni-dark"
  >
    Project item</a
  >
  <link
    href="https://marketplace.visualstudio.com/items?itemName=BernatFerrer.berni-dark"
  />

  <img
    src="https://marketplace.visualstudio.com/items?itemName=BernatFerrer.berni-dark"
  /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getDataFromRepo } from "../../Logic/Repositories/GithubRepository";
import repoSvg from "../common/svg/repoSvg.vue"
import SectionTitle from "../common/SectionTitle.vue";

export default defineComponent({
  name: "ProjectItem",

  components: { SectionTitle,repoSvg },

  async setup(props, { emit }) {
    // const response = await getDataFromRepo("berni-dark");

    // const data = response["data"];

    // console.log("data", data);
    // const urlImage =
    //   "https://repository-images.githubusercontent.com/584409170/ddd55509-932e-43e6-8071-026477f11d26";

    // const urlRepo = data.html_url;
    // const description = data.description;
    // const topics = data.topics;
    // const stargazersCount = data.stargazers_count;
    // const visibility = data.visibility;
    // const watchers = data.watchers;
    // const license = data.license;

    // return {
    //   repoSvg,
    //   urlRepo,
    //   urlImage,
    //   description,
    //   topics,
    //   visibility,
    //   watchers,
    //   license,
    //   stargazersCount,
    // };

    return {};
  },
});
</script>
<style lang="scss">
.project-item {
  color: white;
  text-align: center;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  &__content {
    display: flex;
    width: 100%;
    flex-direction: column;

    &__header {
      display: flex;
      width: 100% !important;
      position: relative;
    }
  }
}

.project-repo {
  background-color: white;
  border-color: #d0d7de;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;

  width: 100%;
}
</style>
