<template>
  <div class="categories">
    <div
      v-for="category in categories"
      class="tag"
      :key="category.tag"
      :style="{ background: category.color }"
    >
      {{ category.tag }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue-demi";

export default defineComponent({
  name: "categories",
  props: ["categories"],
  components: {},

  setup(props, { emit }) {
    return { categories: props.categories };
  },
});
</script>
<style lang="scss">
.categories {
  display: flex;
  flex-direction: row !important;
}
.tag {
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  margin: 0 5px;
  letter-spacing: 1px;
  height: 30px;
  text-transform: uppercase;
}
</style>
