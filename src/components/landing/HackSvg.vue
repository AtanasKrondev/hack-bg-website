<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 560" width="100%" height="100%">
    <g data-name="Layer 2">
      <g>
        <g class="cls-1" :class="{'cls-active': activeSlide===3}" @mouseover="setActive(3)">
          <polygon
            class="cls-2"
            points="48.6 421.38 273.44 335.9 498.28 421.38 273.44 510.38 48.6 421.38"
          />
          <polygon
            class="cls-3"
            points="48.6 390.88 273.44 305.4 498.28 390.88 273.44 479.88 48.6 390.88"
          />
          <polygon
            class="cls-2"
            points="48.6 421.38 48.6 390.88 273.44 479.88 273.44 510.38 48.6 421.38"
          />
          <polygon
            class="cls-4"
            points="498.28 390.88 498.28 421.38 273.44 510.38 273.44 479.88 498.28 390.88"
          />
        </g>
        <g class="cls-1" :class="{'cls-active': activeSlide===2}" @mouseover="setActive(2)">
          <polygon
            class="cls-5"
            points="48.6 307.37 273.44 221.88 498.28 307.37 273.44 396.37 48.6 307.37"
          />
          <polygon
            class="cls-6"
            points="48.6 337.87 48.6 307.37 273.44 396.37 273.44 426.87 48.6 337.87"
          />
          <polygon
            class="cls-7"
            points="498.28 307.37 498.28 337.87 273.44 426.87 273.44 396.37 498.28 307.37"
          />
        </g>
        <g class="cls-1" :class="{'cls-active': activeSlide===1}" @mouseover="setActive(1)">
          <polygon
            class="cls-8"
            points="48.6 223.85 273.44 138.36 498.28 223.85 273.44 312.85 48.6 223.85"
          />
          <polygon
            class="cls-9"
            points="48.6 254.35 48.6 223.85 273.44 312.85 273.44 343.35 48.6 254.35"
          />
          <polygon
            class="cls-10"
            points="498.28 223.85 498.28 254.35 273.44 343.35 273.44 312.85 498.28 223.85"
          />
        </g>
        <g class="cls-1" :class="{'cls-active': activeSlide===0}" @mouseover="setActive(0)">
          <polygon
            class="cls-2"
            points="48.6 170.83 273.44 85.35 498.28 170.83 273.44 259.83 48.6 170.83"
          />
          <polygon
            class="cls-11"
            points="48.6 140.33 273.44 54.85 498.28 140.33 273.44 229.33 48.6 140.33"
          />
          <polygon
            class="cls-12"
            points="48.6 170.83 48.6 140.33 273.44 229.33 273.44 259.83 48.6 170.83"
          />
          <polygon
            class="cls-13"
            points="498.28 140.33 498.28 170.83 273.44 259.83 273.44 229.33 498.28 140.33"
          />
        </g>
        <polyline class="cls-14" points="6.58 106.79 1 104.58 6.61 102.45" />
        <polyline class="cls-15" points="17.96 98.13 273.44 1 534.59 100.29" />
        <polyline class="cls-14" points="540.27 102.45 545.88 104.58 540.3 106.79" />
        <polyline class="cls-16" points="528.94 111.29 273.44 212.42 12.26 109.04" />
        <polyline class="cls-14" points="545.88 110.58 545.88 104.58 540.3 106.79" />
        <polyline class="cls-14" points="279.02 210.22 273.44 212.42 273.44 218.42" />
        <line class="cls-18" x1="273.44" y1="230.59" x2="273.44" y2="540.89" />
        <polyline class="cls-14" points="273.44 546.97 273.44 552.97 279.02 550.76" />
        <line class="cls-17" x1="290.38" y1="546.27" x2="534.62" y2="449.59" />
        <polyline class="cls-14" points="540.3 447.34 545.88 445.13 545.88 439.13" />
        <line class="cls-18" x1="545.88" y1="426.96" x2="545.88" y2="116.67" />
        <polyline class="cls-14" points="1 110.58 1 104.58 6.58 106.79" />
        <polyline class="cls-14" points="267.86 210.22 273.44 212.42 273.44 218.42" />
        <line class="cls-18" x1="273.44" y1="230.59" x2="273.44" y2="540.89" />
        <polyline class="cls-14" points="273.44 546.97 273.44 552.97 267.86 550.76" />
        <line class="cls-17" x1="256.5" y1="546.27" x2="12.26" y2="449.59" />
        <polyline class="cls-14" points="6.58 447.34 1 445.13 1 439.13" />
        <line class="cls-18" x1="1" y1="426.96" x2="1" y2="116.67" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    setActive: Function,
    activeSlide: Number,
  },
};
</script>

<style scoped>
.cls-1 {
  opacity: 0.2;
}

.cls-1:hover {
  opacity: 1;
}

.cls-active {
  opacity: 1;
}

.cls-2 {
  fill: #d1b0f8;
}

.cls-3 {
  fill: #a687cc;
}

.cls-4 {
  fill: #7d60a2;
}

.cls-5 {
  fill: #b57ef2;
}

.cls-6 {
  fill: #925ece;
}

.cls-7 {
  fill: #6f3fab;
}

.cls-8 {
  fill: #9013fe;
}

.cls-9 {
  fill: #9f5fc7;
}

.cls-10 {
  fill: #c17eea;
}

.cls-11 {
  fill: #9013fe;
}

.cls-12 {
  fill: #9f5fc8;
}

.cls-13 {
  fill: #c17eeb;
}

.cls-14,
.cls-15,
.cls-16,
.cls-17,
.cls-18 {
  fill: none;
  stroke: #6a7b84;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
}

.cls-15 {
  stroke-dasharray: 12.15 12.15;
}

.cls-16 {
  stroke-dasharray: 12.21 12.21;
  stroke-dashoffset: 1000;
  animation: dash 40s infinite linear forwards;
}

.cls-17 {
  stroke-dasharray: 12.22 12.22;
  stroke-dashoffset: 1000;
  animation: dash 40s infinite linear forwards;
}

.cls-18 {
  stroke-dasharray: 12.17 12.17;
  stroke-dashoffset: 1000;
  animation: dash 40s infinite linear forwards;
}

.cls-15 {
  stroke-dashoffset: 1000;
  animation: dash 40s infinite linear forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>