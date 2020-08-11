<template>
  <section id="contact">
    <div class="empty-space"></div>
    <article class="mt-5 mb-5">
      <b-container>
        <b-jumbotron fluid container-fluid class="no-bg">
          <h2 class="display-4 text-center hack-section-heading">Get in touch with us</h2>
          <p class="lead text-center hack-section-description mb-0">Have a project in mind?</p>
          <p
            class="lead text-center hack-section-description"
          >Drop us a line and we’ll handle the rest.</p>
        </b-jumbotron>
      </b-container>

      <div class="empty-space"></div>

      <b-container>
        <ContactForm />
      </b-container>
    </article>
  </section>
</template>

<script>
import ContactForm from "./ContactForm";
export default {
  components: { ContactForm },
};
</script>
