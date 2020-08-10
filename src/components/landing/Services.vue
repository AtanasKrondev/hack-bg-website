<template>
  <section id="services">
    <div class="empty-space"></div>
    <article class="mt-5 mb-5">
      <div class="container">
        <div class="jumbotron jumbotron-fluid no-bg">
          <div class="container">
            <h2 class="display-4 text-center hack-section-heading">Services</h2>
            <p class="lead text-center hack-section-description">
              Blockchain Consulting, technical development for Initial Coin Offerings and
              Decentralized Applications, Public and Private Blockchain Development. We provide the
              best possible service using the latest and top-notch technology stack.
            </p>
          </div>
        </div>
      </div>
      <div class="hack-slider-section hack-slide-first">
        <div class="panel-last-child">
          <div
            class="fadeIn hack-slides container"
            style="visibility: visible; animation-duration: 1s; animation-iteration-count: 1; animation-name: fadeIn;"
          >
            <div class="row hack-slide-tabs">
              <button
                v-for="(service, index) in servicesData"
                :key="`button-${index}`"
                class="col-md-3 hack-slide-tab hack-slide"
                :class="{'hack-slide-tab-active': activeSlide===index}"
                @click="setActive(index)"
              >
                {{service.btnTitle}}
                <div
                  id="underline1"
                  class="hack-tab-underline"
                  :class="{'active-underline': activeSlide===index}"
                ></div>
              </button>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="hack-box-image">
                  <HackSvg :setActive="setActive" :activeSlide="activeSlide" />
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="slider-container">
                  <div class="slider-wrapper">
                    <div
                      class="slider-slide"
                      v-for="(service,index) in servicesData"
                      :key="`service-${index}`"
                      :class="{'active-slide': activeSlide === index}"
                    >
                      <h1>{{service.title}}</h1>
                      <p>{{service.description}}</p>
                      <a class="btn btn-md btn-hack-learn" :href="service.linkUrl">Learn more ...</a>
                    </div>
                  </div>

                  <div class="hack-dots">
                    <div
                      v-for="(slide, index) in slides"
                      :key="`slide-${index}`"
                      class="hack-slider-dot"
                      @mouseover="setActive(index)"
                      :class="{ active: activeSlide === index }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import HackSvg from "./HackSvg";
import { services } from "../../data/services.json";
let interval;
export default {
  data() {
    return {
      activeSlide: 0,
      servicesData: services,
      slides: new Array(services.length),
    };
  },
  components: { HackSvg },
  methods: {
    setActive: function (num) {
      this.activeSlide = num;
    },
  },
  watch: {
    activeSlide: {
      immediate: true,
      handler(newSlide, oldSlide) {
        clearInterval(interval);
        interval = setInterval(() => {
          this.setActive(
            this.activeSlide === this.slides.length - 1
              ? 0
              : this.activeSlide + 1
          );
        }, 10000);
      },
    },
  },
};
</script>

<style scoped>
.active-underline {
  transition: all 0.5s ease-in-out;
  animation: growanimation 10s;
  -webkit-animation: growanimation 10s;
}

@keyframes growanimation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@-webkit-keyframes growanimation {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>