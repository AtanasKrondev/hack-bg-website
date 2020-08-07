<template>
  <header class="py-2 sticky-top header">
    <b-navbar class="p-1" toggleable="lg" type="light" id="nav-header">
      <b-navbar-brand>
        <b-navbar-brand class="font-family-headings" to="/">
          <img src="@/assets/images/hack-logo.png" alt="hack-logo" height="80" />
        </b-navbar-brand>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto align-middle">
          <b-nav-item to="/" exact-active-class="active" class="text-primary">Home</b-nav-item>
          <b-nav-item-dropdown text="Services" class="dropper" right>
            <b-dropdown-item href="#">Blockchain Development</b-dropdown-item>
            <b-dropdown-item href="#">Smart Contracts Development</b-dropdown-item>
            <b-dropdown-item href="#">Smart Contract Audits</b-dropdown-item>
            <b-dropdown-item href="#">Consulting</b-dropdown-item>
            <b-dropdown-item href="#">Decentralized application (dApp) development</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item href="#">All services</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/about" active-class="active" class="text-primary">About us</b-nav-item>
          <b-nav-item to="/blog" active-class="active">Blog</b-nav-item>
          <b-nav-item to="/contact" active-class="active">
            <span class="contact">Get in touch</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
   mounted() {
    window.addEventListener('scroll', () => this.handleScroll());
  },
  destroyed() {
    window.removeEventListener('scroll', () => this.handleScroll());
  },
  methods: {
    handleScroll(event) {
      const header = document.getElementById("nav-header");
      if (window.scrollY > 3) {
        header.classList.add("navigation");
      } else {
        header.classList.remove("navigation");
      }
    }
  }
};
</script>

<style scoped>
.contact {
  background-color: #9013fe;
  color: #ffffff;
  border-radius: 4px;
  padding: 0.5rem;
}

.navigation {
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  transition: all 0.3s ease-in-out;
}
</style>
