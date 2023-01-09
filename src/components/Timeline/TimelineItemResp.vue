<template>
  <div class="card-item" :class="itemClass" :style="{ bottom }">
    <div class="card-item__content">
      <div class="card-item__content__header">
        <p class="card-item__content__date">
          {{ data.date }}
        </p>
        <categories :categories="data.categories" />
      </div>

      <div class="card-item__content__content">
        <p class="card-item__content__content__title">
          {{ data.title }}
        </p>
        <br />

        <p class="card-item__content__content__text">
          {{ data.text }}
        </p>

        <a v-if="data.link.url" :href="data.link.url">
          <img
            v-if="data.img"
            :src="data.img"
            class="card-item__content__content__img"
          />
        </a>

        <taglist :tags="data.tags" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue-demi";
import isMobile from "../../Logic/Utils/isMobile";

import Taglist from "../common/Taglist.vue";
import categories from "./Categories.vue";
export default defineComponent({
  name: "TimelineItem",
  props: ["data", "id"],
  components: { categories, Taglist },

  setup(props, { emit }) {
    const bottom = computed(() => {
      if (isMobile.value) return (props.id * 150).toString() + "px";
      return (props.id * 100).toString() + "px";
    });

    const render = ref(false);
    const itemClass = computed(() => (render.value ? "fade-in" : "hide"));
    const timer = setTimeout(() => {
      render.value = true;
      clearTimeout(timer);
    }, 600 + props.id * 900);

    return { itemClass, data: props.data, bottom, isMobile };
  },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato");

.card-item {
  display: flex;
  flex-direction: row;
  //   align-self: flex-start;
  margin-bottom: 10px;

  width: 80%;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(126, 200, 178, 0.7);
    background-color: #fff;
    width: 100%;
    position: relative;
    &__header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin-bottom: 10px;
    }

    &__date {
      font-size: 1rem;
    }

    &__content {
      &__img {
        height: 35px !important;
        margin-top: 20px;
      }

      &__time {
        color: #777;
        font-size: 12px;
        font-weight: 700;
      }
      &__title {
        font-size: 1.5rem;
        color: #2d5d87;
      }

      &__text {
        text-align: justify;
        color: #777;
        font-size: 1rem;
      }

      &__taglist {
        margin-top: 10px;
        .hashtag {
          padding: 2px 4px;
          list-style-type: none;
          display: inline;
          border-radius: 3px;
          border: 1px solid #efeae1;
          background-color: #f8f6f2;
          color: #9e9b95 !important;
          margin-right: 10px !important;
          margin-top: 10px;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
