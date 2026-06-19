<template>
  <sectionTitle :section-title="'Articles'" />
  <div class="articles">
    <ul class="articles__list">
      <li
        class="articles__list__item"
        v-for="(article, index) in articles"
        :key="index"
      >
        <article-card :article="article" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionTitle from "../common/SectionTitle.vue";
import ArticleCard from "./ArticleCard.vue";
import articles from "../../data/articles";

export default defineComponent({
  name: "Articles",
  components: { SectionTitle, ArticleCard },
  setup() {
    return { articles };
  },
});
</script>

<style lang="scss" scoped>
.articles {
  position: relative;
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  &__list {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;

    &__item {
      width: 45%;
      margin: 0 10px;
      padding: 0 8px;
      margin-bottom: 10px;
    }
  }
}

@media screen and (max-width: 800px) {
  .articles {
    width: 100%;

    &__list {
      display: flex;
      flex-direction: column;
      padding: 0 50px;

      &__item {
        width: auto;
        margin: 10px;
        padding: 0;
      }
    }
  }
}
</style>
