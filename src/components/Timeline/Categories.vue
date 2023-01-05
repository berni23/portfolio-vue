<template>
        <div v-for="category in categories" :key="category.tag" >
          <span class="tag" :style="{ background: category.color }">
            {{ category.tag }}
          </span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue-demi";

export default defineComponent({
  name: "categories",
  props: ["categories"],
  components: {},

  setup(props, { emit }) {
    return { categories:props.categories };
  },
});
</script>
<style lang="scss"></style>
