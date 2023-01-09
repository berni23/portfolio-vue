<template>
  <sectionTitle :section-title="'Projects'" />
  <div class="projects">
    <ul class="projects__list">
      <li
        class="projects__list__item"
        v-for="repoItem in repoItems"
        :key="repoItem.id"
      >
        <project-repo-item :repo-item="repoItem" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import RepoItem from "../../CustomTypes/RepoItem";
import repoData from "../../data/repoItems";
import getProjectRepoItems from "../../Logic/Get/GetProjectRepoItems";
import SectionTitle from "../common/SectionTitle.vue";
import ProjectRepoItem from "./ProjectRepoItem.vue";
export default defineComponent({
  name: "Projects",

  components: { SectionTitle, ProjectRepoItem },

  setup(props, { emit }) {
    const repoItems = ref([] as Array<RepoItem>);

    onMounted(async () => {
      const data = (await getProjectRepoItems(repoData)).map(
        (result) => result.value
      ) as Array<RepoItem>;
      repoItems.value = data;
    });
    return { repoItems };
  },
});
</script>
<style lang="scss">
.projects {
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  &__list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    &__item {
      width: 45% !important;
      margin: 0 10px;
      height: auto;
      padding: 0 8px;

      margin-bottom: 10px;
    }
  }
}

@media screen and (max-width: 800px) {
  .projects {
    width: 100%;
    &__list {
      display: flex;
      flex-direction: column;

      padding: 0 50px;
      &__item {
        width: auto !important;
        margin: 10px;
        padding: 0px;
      }
    }
  }
}
</style>
