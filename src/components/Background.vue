<template>
  <div class="background-wrapper">
    <div class="stars stars1"></div>
    <div class="stars stars2"></div>
    <div class="stars stars3"></div>
    <div class="twinkling"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue-demi";

export default defineComponent({
  name: "Background",
  components: {},

  setup(props, { emit }) {},
});
</script>

<style lang="scss">
@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-webkit-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-moz-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

@-ms-keyframes move-twink-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: -10000px 5000px;
  }
}

canvas {
  display: block;
}

@keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 10000px 0;
  }
}

@-webkit-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 10000px 0;
  }
}

@-moz-keyframes move-clouds-back {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 10000px 0;
  }
}

@-ms-keyframes move-clouds-back {
  from {
    background-position: 0;
  }

  to {
    background-position: 10000px 0;
  }
}

// .background-wrapper{

//     width: 100%;
//     height: 200%;
//     position:absolute;
//     top:0;
//     bottom:0;

// }

.stars1 {
  top: 100px;
}

.stars,
.twinkling {
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: -2 !important;
}

.twinkling {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 300vh;
  width: 100%;
}

.stars2 {
  top: 100%;
}

.stars3 {
  top: 200%;
  height: 100%;
  width: 100%;
}
.stars {
  background: #000 url("./../assets/images/stars.png") repeat top center;
  background-size: cover;
}

.twinkling {
  background: transparent url("./../assets/images/twinkling.png") repeat top
    center;
  -moz-animation: move-twink-back 200s linear infinite;
  -ms-animation: move-twink-back 200s linear infinite;
  -o-animation: move-twink-back 200s linear infinite;
  -webkit-animation: move-twink-back 200s linear infinite;
  animation: move-twink-back 200s linear infinite;
}

.hidden {
  display: none !important;
}
</style>
