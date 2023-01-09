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
    width: 33%;
    &__item {
      padding: 0 8px;
    }
  }
}
</style>
