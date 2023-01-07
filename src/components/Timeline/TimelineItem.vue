<template>
  <div class="timeline-item" :class="itemClass">
    <div class="timeline-item__content">
      <div class="timeline-item__content__header">
        <categories :categories="data.categories" />

        <div>
          <p className="timeline-date timeline-item__content__date">
            {{ data.date }}
          </p>
        </div>
      </div>

      <div class="timeline-item__content__content">
        <p class="timeline-item__content__content__title">
          {{ data.title }}
        </p>
        <br />

        <p class="timeline-item__content__content__text">
          {{ data.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue-demi";

import categories from "./Categories.vue";
export default defineComponent({
  name: "TimelineItem",
  props: ["data", "id"],
  components: { categories },

  setup(props, { emit }) {
    const render = ref(false);
    const itemClass = computed(() => (render ? "fade-in" : "hide"));
    const timer = setTimeout(() => {
      render.value = true;
      clearTimeout(timer);
    }, 600 + props.id * 500);

    return { itemClass, data: props.data };
  },
});
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lato");

.timeline-item {
  display: flex;
  // position: relative;
  justify-content: flex-end;
  width: 50%;
  justify-content: space-around;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    align-self: flex-end;

    .timeline-item {
      &__content {
        align-items: flex-start;
        text-align: left;

        &__header {
          flex-direction: row-reverse;
        }

        &::after {
          box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
          right: auto;
          left: -20px;
        }
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    padding: 15px;
    max-width: 70%;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(126, 200, 178, 0.7);
    background-color: #fff;
    max-width: 70%;
    // width: 600px;

    &::after {
      content: "";
      background-color: white;
      transform: rotate(45deg);
      box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
      position: relative;
      left: 20px;
      bottom: calc(50% - 7.5px);
      width: 15px;
      height: 15px;
    }

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
      &__title {
        font-size: 1.5rem;
        color: #2d5d87;
      }

      &__text {
        text-align: justify;
        color: #777;
        font-size: 1rem;
      }
    }
  }

  .taglist {
    &__:nth-child(odd) {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;

      * {
        float: left;
      }
    }

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
</style>
