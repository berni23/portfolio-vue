<template>
  <div class="timeline-item" :class="itemClass" :style="{ bottom }">
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

        <a v-if="data.link.url" :href="data.link.url">
          <img
            v-if="data.img"
            :src="data.img"
            class="timeline-item__content__content__img"
          />
        </a>

        <taglist :tags="data.tags" />
        <span class="circle"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue-demi";
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

.timeline-item {
  display: flex;
  justify-content: flex-start !important;
  justify-content: flex-end !important;
  right: 40px;
  position: relative;
  width: 50%;

  flex-direction: row;
  align-self: flex-start;
  &:nth-child(odd) {
    flex-direction: row-reverse;
    align-self: flex-end;

    left: 32px;

    .timeline-item__content {
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
      &__content {
        .circle {
          right: auto;
          left: -45px;
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
    width: 100%;

    position: relative;

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
      &__img {
        height: 35px !important;
        margin-top: 20px;
      }
      .circle {
        background-color: rgb(0, 0, 0);
        border: 2px solid#fff;
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 10px);
        width: 20px;
        right: -50px;
        height: 20px;
        z-index: 100;
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
    }
  }
}

@media screen and (min-width: 800px) {
  .timeline {
    &__content {
      &::after {
        background-color: #ffc107;
        content: "";
        position: absolute;
        left: calc(50% - 2px);
        width: 2px;
        height: 100%;
      }
    }
  }
}
</style>
