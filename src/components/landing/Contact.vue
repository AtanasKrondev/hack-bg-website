<template>
  <section id="contact">
    <div class="empty-space"></div>
    <article class="mt-5 mb-5">
      <div class="container">
        <div class="jumbotron jumbotron-fluid no-bg">
          <div class="container">
            <h2 class="display-4 text-center hack-section-heading">Get in touch with us</h2>
            <p class="lead text-center hack-section-description">
              Have a project in mind?
              <br />Drop us a line and we’ll handle the rest.
            </p>
          </div>
        </div>
      </div>

      <div class="empty-space"></div>

      <div class="container">
        <form
          class="gform contactForm"
          name="contactForm"
          id="contactForm"
          method="POST"
          @submit.prevent
        >
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Your name"
              required
              :disabled="loading"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="email"
              name="email"
              placeholder="Enter your email or phone number"
              required
              :disabled="loading"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="message"
              name="message"
              rows="10"
              placeholder="Tell us about your project"
              required
              :disabled="loading"
            ></textarea>
          </div>
          <div class="form-group text-center">
            <button class="btn btn-hack-purple" @click="submitForm" :disabled="loading">Send</button>
            <b-progress
              class="m-1 form-loading"
              v-if="loading"
              variant="primary"
              :value="100"
              animated
            ></b-progress>
            <div v-if="success">Thanks for contacting us! We will get in touch with you shortly! :)</div>
            <div v-if="error" class="form-error">Something went wrong! Please, try again later!</div>
          </div>
        </form>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      success: false,
      error: false,
    };
  },
  methods: {
    onSuccess(form) {
      this.loading = false;
      this.success = true;
      this.error = false;
      form.reset();
    },
    onError() {
      this.loading = false;
      this.success = false;
      this.error = true;
    },
    getFormData(form) {
      const elements = form.elements;
      const fields = Object.keys(elements)
        .map((k) => elements[k].name || "")
        .filter((item, pos, self) => {
          return self.indexOf(item) == pos && item;
        });

      return {
        ...Object.values(fields).reduce((p, n) => {
          p[n] = elements[n].value;
          return p;
        }, {}),
        formDataNameOrder: JSON.stringify(fields),
        formGoogleSheetName: form.dataset.sheet || "responses",
        formGoogleSendEmail: form.dataset.email || "",
      };
    },
    submitForm(event) {
      this.loading = true;
      const form = event.target.form;
      const formData = this.getFormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", process.env.GRIDSOME_CONTACT_FORM_URL);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = () => {
        xhr.readyState === 4 && xhr.status === 200
          ? this.onSuccess(form)
          : this.onError();
      };
      // url encode form data for sending as post data
      const encoded = Object.keys(formData)
        .map(
          (k) => encodeURIComponent(k) + "=" + encodeURIComponent(formData[k])
        )
        .join("&");
      xhr.send(encoded);
    },
  },
};
</script>

<style scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-group {
  margin-bottom: 1rem;
}

.form-error {
  color: #ff0000;
}
</style>
