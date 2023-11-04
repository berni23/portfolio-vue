]
<template>
  <div class="contact-details">
    <p class="contact-details__desc">
      Also you can directly email me at bernatferrerm@gmail.com
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import "quasar/src/components/form/QForm.sass";
import "quasar/src/css/variables.sass";
import "quasar/src/components/responsive/QResponsive.sass";
import "quasar/src/components/scroll-area/QScrollArea.sass";

export default defineComponent({
  name: "con",
  setup(props, { emit }) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const accept = ref("");
    const submitted = ref(false);
    const formEndpoint = process.env.VUE_APP_URL_CONTACT;
    const handleSubmit = () => {
      setTimeout(() => {
        submitted.value = true;
      }, 100);
    };

    return {
      accept,
      message,
      email,
      submitted,
      handleSubmit,
      formEndpoint,
      name,
    };
  },
});
</script>

<style lang="scss">
@import "quasar/src/css/index.sass";

.contact-details {
  margin-top: 25px;

  border-radius: 10px;
  //padding: 20px;

  &__desc {
    color: white;
    //color: #777;
  }

  &__form {
    &__toggle {
      color: #777;
      font-style: italic;
    }
  }
}
</style>
