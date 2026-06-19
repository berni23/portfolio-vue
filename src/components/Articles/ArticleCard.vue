<template>
  <a class="article-card" :href="article.url" target="_blank" rel="noopener noreferrer">
    <div class="article-card__accent"></div>
    <div class="article-card__body">
      <div class="article-card__body__top">
        <div class="article-card__body__top__platform">
          <svg class="article-card__body__top__platform__icon" viewBox="0 0 1043.63 592.71" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36" fill="currentColor"/>
              <path d="M911.56 296.36c0 154.06-65.89 278.86-147.17 278.86s-147.17-124.8-147.17-278.86S683.11 17.5 764.39 17.5s147.17 124.8 147.17 278.86" fill="currentColor"/>
              <path d="M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94" fill="currentColor"/>
            </g>
          </svg>
          <span>Medium</span>
        </div>
        <span class="article-card__body__top__reading-time">{{ article.readingTime }}</span>
      </div>

      <h3 class="article-card__body__title">{{ article.title }}</h3>
      <p class="article-card__body__description">{{ article.description }}</p>

      <div class="article-card__body__footer">
        <div class="article-card__body__footer__tags">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="article-card__body__footer__tags__tag"
          >{{ tag }}</span>
        </div>
        <span class="article-card__body__footer__date">{{ article.date }}</span>
      </div>

      <div class="article-card__body__cta">
        Read on Medium
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 17L17 7" /><path d="M7 7h10v10" />
        </svg>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Article from "../../CustomTypes/Article";

export default defineComponent({
  name: "ArticleCard",
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.article-card {
  display: flex;
  flex-direction: column;
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: #ccc;
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: 240px;

  &:hover {
    border-color: #7dc8c6;
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(125, 200, 198, 0.15);

    .article-card__body__cta {
      color: #7dc8c6;
    }
  }

  &__accent {
    height: 4px;
    background: linear-gradient(90deg, #7dc8c6, #4a9a98);
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 24px;
    flex-grow: 1;

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      &__platform {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #666;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;

        &__icon {
          width: 16px;
          height: 16px;
        }
      }

      &__reading-time {
        font-size: 0.8rem;
        color: #555;
        background: #1a1a1a;
        padding: 3px 10px;
        border-radius: 12px;
      }
    }

    &__title {
      color: white;
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1.4;
      margin-bottom: 10px;
    }

    &__description {
      color: #999;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 16px;
      flex-grow: 1;
    }

    &__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      &__tags {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;

        &__tag {
          font-size: 0.75rem;
          color: #7dc8c6;
          background: rgba(125, 200, 198, 0.1);
          border: 1px solid rgba(125, 200, 198, 0.2);
          padding: 3px 10px;
          border-radius: 12px;
        }
      }

      &__date {
        font-size: 0.8rem;
        color: #555;
        white-space: nowrap;
        margin-left: 12px;
      }
    }

    &__cta {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.85rem;
      color: #666;
      transition: color 0.3s ease;
      border-top: 1px solid #1a1a1a;
      padding-top: 14px;
    }
  }
}
</style>
