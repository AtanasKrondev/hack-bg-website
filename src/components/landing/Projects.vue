<template>
  <section id="projects">
    <article class="mt-5 mb-5">
      <div class="container">
        <div class="jumbotron jumbotron-fluid no-bg">
          <div class="container">
            <h2 class="display-4 text-center hack-section-heading">
              Few of our latest
              <br />projects
            </h2>
            <p class="lead text-center hack-section-description">see what we've been doing lately</p>
          </div>
        </div>
      </div>
      <div class="container">
        <div id="carouselControls" class="carousel slide">
          <div class="carousel-inner">
            <div
              class="carousel-item"
              v-for="(project, index) in projectsData"
              :key="`project-${index}`"
              :class="{active: activeSlide === index,'slide-right': direction==='right', 'slide-left': direction==='left'}"
            >
              <div class="row">
                <div class="col-sm-12">
                  <div class="text-center hack-project-carousel-container">
                    <h3 class="hack-mask-heading hack-project-title">{{project.title}}</h3>
                    <div class="hack-mask-description hack-project-description">
                      <p>Project features:</p>
                      <ul>
                        <li
                          v-for="(feature, index) in project.features"
                          :key="`feature-${index}`"
                        >{{feature}}</li>
                      </ul>
                    </div>
                    <div class="hack-project-technologies">
                      <p>Technologies used:</p>
                      <p>
                        <span
                          v-b-tooltip.hover
                          v-for="(technology, index) in project.technologies"
                          :key="`technology-${index}`"
                          :title="technology.title"
                        >
                          <i :class="technology.icon"></i>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ol class="carousel-indicators">
              <li
                v-for="(item, index) in slides"
                :key="`slide-${index}`"
                @click="setActive(index)"
                :class="{ active: activeSlide === index }"
              ></li>
            </ol>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 text-center">
            <b-button class="btn-hack-carousel" variant="primary" @click="setPrev">
              <i class="fas fa-angle-left"></i>
            </b-button>
            <b-button class="btn-hack-carousel" variant="primary" @click="setNext">
              <i class="fas fa-angle-right"></i>
            </b-button>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { projects } from "../../data/projects.json";
let interval;
export default {
  data() {
    return {
      activeSlide: 0,
      prevSlide: 0,
      projectsData: projects,
      slides: new Array(projects.length),
    };
  },
  methods: {
    setActive: function (num) {
      this.prevSlide = this.activeSlide;
      this.activeSlide = num;
    },
    setPrev: function () {
      this.setActive(
        this.activeSlide === 0 ? this.slides.length - 1 : this.activeSlide - 1
      );
    },
    setNext: function () {
      this.setActive(
        this.activeSlide === this.slides.length - 1 ? 0 : this.activeSlide + 1
      );
    },
  },
  computed: {
    direction() {
      return this.prevSlide > this.activeSlide ? "right" : "left";
    },
  },
  watch: {
    activeSlide: {
      immediate: true,
      handler(newSlide, oldSlide) {
        clearInterval(interval);
        interval = setInterval(() => this.setNext(), 5000);
      },
    },
  },
};
</script>

<style scoped>
.slide-left {
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in-left 0.5s forwards;
  overflow: hidden;
}

@keyframes slide-in-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

@-webkit-keyframes slide-in-left {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

.slide-right {
  animation: slide-in 0.5s forwards;
  -webkit-animation: slide-in-right 0.5s forwards;
  overflow: hidden;
}

@keyframes slide-in-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

@-webkit-keyframes slide-in-right {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
