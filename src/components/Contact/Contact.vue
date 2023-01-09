<template>
  <div class="section-contact">
    <sectionTitle :section-title="'Contact'" />
    <div class="section-contact__content">
      <contact-form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import contactForm from "./ContactForm.vue";
import SectionTitle from "../common/SectionTitle.vue";

export default defineComponent({
  name: "contact",
  components: {
    contactForm,
    SectionTitle,
  },
});
</script>

<style lang="scss">
.section-contact {
  &__content {
    padding: 10px 100px;
    border-radius: 5%;
  }
}

@media screen and (max-width: 800px) {
  .section-contact {
    &__content {
      padding: 10px 40px;
      border-radius: 5%;
    }
  }
}
</style>
