]
<template>
  <div class="contact-form">
    <q-form
      :action="formEndpoint"
      @submit.once="handleSubmit"
      method="POST"
      class="q-gutter-md"
    >
      <q-input
        filled
        required
        v-model="email"
        label="Your email"
        lazy-rules
        type="email"
        hint="email"
        placeholder="Email"
        name="email"
        :rules="[
          (val) =>
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) ||
            'please give a valid email',
        ]"
      />

      <q-input
        filled
        v-model="name"
        name="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        type="textarea"
        filled
        required
        name="message"
        label="message"
        hint="Message"
        style="height: 200px; max-width: 300px"
        v-model="message"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Please type your message',
        ]"
      />

      <q-toggle
        v-model="accept"
        class="contact-form__form__toggle"
        label="I  hereby accept that like to toggle buttons"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>

    <div v-if="submitted" class="text-center mt-10">
      <h2 class="text-2xl">Thanks you!</h2>
      <div class="text-md">We'll be in touch soon.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

import "quasar/src/components/form/QForm.sass";

import "quasar/src/css/variables.sass";
import "quasar/src/components/responsive/QResponsive.sass";
import "quasar/src/components/scroll-area/QScrollArea.sass";
export default defineComponent({
  name: "ContactForm",
  setup(props, { emit }) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const accept = ref("");
    const submitted = ref(false);
    const formEndpoint =
      "https://public.herotofu.com/v1/3af93d00-9041-11ed-a003-6f0b76086b1c";
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

.contact-form {
  background-color: white;

  &__form {
    &__toggle {
      color: #777;
      font-style: italic;
    }
  }
}
</style>
