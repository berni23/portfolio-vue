<template>
  <div class="visibility">
    <div class="visibility__content">
      <q-icon
        class="visibility__content__icon custom-icon"
        icon="visibility"
        :name="visible ? 'visibility' : 'lock'"
      ></q-icon>

      <span class="visibility__content__text">
        {{ visible ? "public" : "private" }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

export default defineComponent({
  name: "Taglist",
  props: ["visible"],

  setup(props, { emit }) {
    return { visible: props.visible };
  },
});
</script>
<style lang="scss">
.visibility {
  color: #777;

  border: 1px solid #d0d7de;

  border-radius: 10px;

  &__content {
    padding: 5px;
    display: flex;
    flex-direction: row;
    justify-content:space-between * {
      margin: 0 5px;
    }

    &__icon {
      width: 25px;

      margin: auto 5px;

      color: #777;
    }
  }
}
</style>
