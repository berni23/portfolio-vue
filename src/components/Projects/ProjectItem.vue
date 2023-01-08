<template>
  <div class="project-item project-repo row p-3">
    <div class="project-item__content project-repo__content">
      <div class="project-item__content__header project-repo__content__header">
        <div class="project-repo__content__header__section">
          <repo-svg />
          <a
            class="mr-1 text-bold wb-break-word project-repo__content__header__title"
            :href="urlRepo"
          >
            <span class="repo" title="berni-dark">berni-dark</span></a
          >
        </div>

        <div
          class="project-repo__content__header__section project-repo__content__header__stargazers"
        >
          <q-icon
            class="custom-icon project-repo__content__header__starred"
            name="star"
          ></q-icon>

          <span class="project-repo__content__header__stargazers__count">{{
            stargazersCount
          }}</span>
        </div>

        <div
          class="project-repo__content__header__section project-repo__content__header__forks"
        >
          <fork-svg
            class="custom-icon project-repo__content__header__starred"
           
          />

          <span class="project-repo__content__header__stargazers__count">{{
            forksCount
          }}</span>
        </div>

        <visibility
          class="project-repo__content__header__section"
          :visible="visible"
        />
      </div>

      <div class="project-repo__content__content">
        <img :src="urlImage" class="project-repo__content__content__img" />
      </div>
    </div>
  </div>

  <!-- <a
    href="https://marketplace.visualstudio.com/items?itemName=BernatFerrer.berni-dark"
  >
    Project item</a
  > -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getDataFromRepo } from "../../Logic/Repositories/GithubRepository";
import repoSvg from "../common/svg/repoSvg.vue";
import SectionTitle from "../common/SectionTitle.vue";

import visibility from "../common/Visibility.vue";
import ForkSvg from "../common/svg/forkSvg.vue";

export default defineComponent({
  name: "ProjectItem",

  components: { SectionTitle, repoSvg, visibility, ForkSvg },

  async setup(props, { emit }) {
    const response = await getDataFromRepo("berni-dark");

    const data = response["data"];

    console.log("data", data);
    const urlImage =
      "https://repository-images.githubusercontent.com/584409170/ddd55509-932e-43e6-8071-026477f11d26";

    const urlRepo = data.html_url;
    const description = data.description;
    const topics = data.topics;
    const stargazersCount = data.stargazers_count;
    const watchers = data.watchers;
    const forksCount = data.forks_count;
    const license = data.license;

    return {
      repoSvg,
      urlRepo,
      urlImage,
      description,
      topics,
      visible: data.visibility == "public" ? true : false,
      watchers,
      license,
      stargazersCount,
      forksCount,
    };
  },
});
</script>
<style lang="scss">
.custom-icon {
  width: 25px;

  margin: auto 5px;

  color: #777;
}
.project-item {
  color: white;
  text-align: center;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

.project-repo {
  width: 100% !important;
  background-color: white;
  border-color: #d0d7de;
  color: #777;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  padding: 10px;
  width: 100%;

  &__content {
    display: flex;
    width: 100%;
    flex-direction: column;

    &__header {
      display: flex;
      width: 100% !important;

      justify-content: space-between;
      position: relative;

      &__stargazers,
      &__forks {
        margin: auto;
        text-align: center;
        display: flex;
        transform: scale(1.5) !important;

        &__count {
          font-size: 0.8rem;
        }
      }

      &__title {
        text-decoration: inherit;
        color: inherit;
        cursor: pointer;

        font-size: 1.5rem;
        margin-left: 10px;
        // color: #777;
        color: #0969da;
        margin-right: 20px;
      }
    }

    &__content {
      margin-top: 5px;
      padding-bottom: 5px;
      &__img {
        width: 100px;
        height: auto;
        float: left;
        border-radius: 10px;
      }
    }
  }
}
</style>
