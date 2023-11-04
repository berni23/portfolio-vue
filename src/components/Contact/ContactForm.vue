]
<template>
  <div class="contact-form">
    <p class="contact-form__desc">
      If you want to collaborate for a project please don't hesitate to contact
      me using the following form
    </p>
    <q-form
      :action="formEndpoint"
      @submit.once="handleSubmit"
      method="POST"
      class="q-gutter-md contact-form__form"
    >
      <q-input
        filled
        required
        v-model="email"
        lazy-rules
        label="email"
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
        label="Your name"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        type="textarea"
        filled
        required
        name="message"
        label="message"
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
        label="I  hereby accept that I like to toggle buttons"
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
      <h2 class="text-2xl">Thank you!</h2>
      <div class="text-md">We'll be in touch soon.</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

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

.contact-form {
  background-color: white;
  border-radius: 10px;
  padding: 20px;

  &__desc {
    color: #777;
    font-style: italic;
    position: relative;
    bottom: 10px;
  }

  &__form {
    &__toggle {
      color: #777;
      font-style: italic;
    }
  }
}
</style>
