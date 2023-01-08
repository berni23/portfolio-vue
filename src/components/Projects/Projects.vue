<template>
  <sectionTitle :section-title="'Projects'" />
  <div class="projects">
    <ul class="projects__list">
      <li class="projects__list__item">
        <suspense>
          <project-item />
        </suspense>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import SectionTitle from "../common/SectionTitle.vue";

import ProjectItem from "./ProjectItem.vue";
export default defineComponent({
  name: "Projects",

  components: { SectionTitle, ProjectItem },

  setup(props, { emit }) {
    // const token = import.meta.env.MY_GITHUB_TOKEN;

    const token = process.env.VUE_APP_GITHUB_TOKEN;
    console.log("token", token);
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
    &__item {
      padding: 0 8px;
    }
  }
}
</style>
