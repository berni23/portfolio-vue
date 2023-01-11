<template>
  <div class="project-item project-repo row">
    <div class="project-item__content project-repo__content">
      <div class="project-item__content__header project-repo__content__header">
        <div class="project-repo__content__header__section">
          <repo-svg />
          <a
            class="mr-1 text-bold wb-break-word project-repo__content__header__title"
            :href="repoItem.urlRepo"
          >
            <span class="repo">{{ repoItem.name }}</span></a
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
            repoItem.stargazersCount
          }}</span>
        </div>

        <div
          class="project-repo__content__header__section project-repo__content__header__forks"
        >
          <fork-svg class="custom-icon project-repo__content__header__fork" />

          <span class="project-repo__content__header__stargazers__count">{{
            repoItem.forksCount
          }}</span>
        </div>

        <visibility
          class="project-repo__content__header__section"
          :visible="repoItem.visible"
        />
      </div>

      <div class="project-repo__content__content">
        <img
          v-if="repoItem.urlImage"
          :src="repoItem.urlImage"
          class="project-repo__content__content__img"
        />
        <p class="project-repo__content__content__description">
          {{ repoItem.description }}

          <span
            v-if="repoItem.link"
            class="project-repo__content__content__link"
          >
            <a :href="repoItem.link.link">
              {{ repoItem.link.name }}
            </a></span
          >
        </p>
      </div>

      <div class="project-repo__content__footer">
        <taglist :tags="repoItem.tags" />

        <div v-if="repoItem.language" class="project-repo__content__lan">
          <div
            :style="{ backgroundColor: repoItem.language.color }"
            class="project-repo__content__lan__circle circle"
          ></div>
          <div class="project-repo__content__lan__name">
            {{ repoItem.language.name }}
          </div>
        </div>

        <div
          v-if="repoItem.license"
          class="project-repo__content__footer__license"
        >
          <license-svg class="custom-icon" />
          <a :href="repoItem.license.url">{{ repoItem.license.name }}</a>
        </div>

        <!-- <div v-else></div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import repoSvg from "../common/svg/repoSvg.vue";
import licenseSvg from "../common/svg/licenseSvg.vue";
import SectionTitle from "../common/SectionTitle.vue";

import Taglist from "../common/Taglist.vue";
import visibility from "../common/Visibility.vue";
import ForkSvg from "../common/svg/forkSvg.vue";
import RepoItem from "../../CustomTypes/RepoItem";

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

  props: {
    repoItem: {
      type: Object as PropType<RepoItem>,
      required: true,
    },
  },
  setup(props, { emit }) {
    return { repoItem: props.repoItem };
  },
});
</script>
<style lang="scss">
.custom-icon {
  width: 25px;
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
  min-height: 200px !important;

  &__content {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px !important;

    &__header {
      display: flex;
      width: 100% !important;

      justify-content: space-between;
      position: relative;

      &__starred {
        position: relative;
        bottom: 1px;
        right: 1px;
      }
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
        font-size: 1.2rem;
        margin-left: 10px;
        color: #0969da;
        margin-right: 20px;
      }
    }

    &__lan {
      display: flex;
      text-align: center;
  
      &__name {
        text-align: center;
        margin: 0 5px;
        margin: auto;
      }
      &__circle {
        width: 15px;
        height: 15px;
        margin: auto;
        margin-right: 5px;

        border-radius: 50%;
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
        font-size: 1.1rem;
        line-height: 1.5rem;
      }

      &__link {
        a {
          color: inherit;
          cursor: pointer;
          font-weight: bold;
        }
      }
    }

    &__footer {
      display: flex;
      justify-content: space-between;
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

        .custom-icon {
          margin: 0 10px;
        }

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
