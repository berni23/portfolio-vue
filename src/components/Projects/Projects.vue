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

  setup(props, { emit }) {},
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
