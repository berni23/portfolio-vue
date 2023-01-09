<template>
  <ul class="taglist">
    <li class="hashtag" v-for="tag in taglist" :key="tag">#{{ tag }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Taglist",
  props: ["tags"],

  setup(props, { emit }) {
    return { taglist: props.tags };
  },
});
</script>
<style lang="scss">
.taglist {
  &:nth-child(odd) {
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
</style>
