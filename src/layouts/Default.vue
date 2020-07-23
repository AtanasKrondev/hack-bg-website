<template>
  <div id="app">
    <b-container class="body-bg">
      <site-header />
      <router-view name="header"></router-view>
      <main>
        <slot />
      </main>
      <router-view name="footer"></router-view>
    </b-container>
    <site-footer />
  </div>
</template>
<script>
import SiteFooter from "~/components/SiteFooter.vue";
import SiteHeader from "~/components/SiteHeader.vue";
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition,
    SiteFooter,
    SiteHeader
  }
};
</script>
