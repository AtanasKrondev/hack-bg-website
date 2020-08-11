<template>
  <b-form @submit.prevent="submit" class="contact-form">
    <b-form-input id="name" v-model="name" placeholder="Your name" class="mb-3" required></b-form-input>
    <b-form-input
      id="emailOrPhone"
      v-model="emailOrPhone"
      placeholder="Enter your email or phone number"
      class="mb-3"
      required
    ></b-form-input>
    <b-form-textarea
      id="message"
      v-model="message"
      rows="10"
      placeholder="Tell us about your project"
      class="mb-3"
      required
    ></b-form-textarea>
    <div class="text-center">
      <b-button size="lg" variant="primary" type="submit">Send</b-button>
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      emailOrPhone: "",
      message: "",
    };
  },
  methods: {
    submit() {
      alert(
        `name: ${this.name}, email or phone: ${this.emailOrPhone}, message: ${this.message}`
      );
    },
  },
};
</script>

<style scoped>
.contact-form textarea,
.contact-form input {
  border: none;
  background: #ffffff;
  box-shadow: 5px 10px 30px 0 rgba(41, 26, 204, 0.12);
  border-radius: 6px;
  letter-spacing: 0;
  line-height: 22px;
}
</style>