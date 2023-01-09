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
        <p class="project-repo__content__content__description">
          {{ description }}

          <span v-if="link" class="project-repo__content__content__link">
            <a :href="link.link">
              {{ link.name }}
            </a></span
          >
        </p>
      </div>

      <div class="project-repo__content__footer">
        <taglist :taglist="topics" />
        <div v-if="license" class="project-repo__content__footer__license">
          <license-svg class="custom-icon" />
          <a :href="license.url">{{ license.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getDataFromRepo } from "../../Logic/Repositories/GithubRepository";
import repoSvg from "../common/svg/repoSvg.vue";
import licenseSvg from "../common/svg/licenseSvg.vue";
import SectionTitle from "../common/SectionTitle.vue";

import Taglist from "../common/Taglist.vue";
import visibility from "../common/Visibility.vue";
import ForkSvg from "../common/svg/forkSvg.vue";

export default defineComponent({
  name: "ProjectRepoItem",
  components: {
    SectionTitle,
    repoSvg,
    visibility,
    ForkSvg,
    Taglist,
    licenseSvg,
  },
  async setup(props, { emit }) {
    const response = await getDataFromRepo("berni-dark");
    const data = response["data"];

    const urlImage =
      "https://repository-images.githubusercontent.com/584409170/ddd55509-932e-43e6-8071-026477f11d26";

    const urlRepo = data.html_url;
    const description = data.description;
    const topics = data.topics;
    const stargazersCount = data.stargazers_count;
    const watchers = data.watchers;
    const forksCount = data.forks_count;
    const license = data.license;
    const link = {
      name: "vscode extension",
      link: "https://marketplace.visualstudio.com/items?itemName=BernatFerrer.berni-dark",
    };

    return {
      link,
      repoSvg,
      licenseSvg,
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
      margin-top: 10px;
      &__img {
        width: 100px;
        height: auto;
        float: left;
        margin-right: 10px;
        border-radius: 10px;
      }

      &__description {
        text-align: left;
        margin-left: 10px !important;
      }

      &__link {
        a {
          color: inherit;
          cursor: pointer;
          font-weight: bold;

          // color: #777;
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      // text-align: left;

      margin-top: 20px;

      .taglist:nth-child(odd) {
        width: auto !important;
        margin-top: 0px;
      }

      &__license {
        display: flex;

        margin-top: 5px;

        text-align: center;

        transform: scale(0.8);

        a {
          color: inherit;
          margin-top: 5px;

          text-decoration: inherit;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
