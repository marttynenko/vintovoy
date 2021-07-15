<template>
  <div class="vue-carousel" ref="carousel" id="vue-carousel">
    <!-- <transition
      v-on:enter="slideEnter"
      v-on:leave="slideLeave"
      v-bind:css="false"
    > -->
      <component :is="activeSlide"></component>
    <!-- </transition> -->
    <div class="vue-carousel-dots">
      <a href="#" class="vue-carousel-dot"
        v-for="(item,index) in slideLength"
        :key="index"
        @click.prevent="toSlide(index+1)"
        :class="{active: index+1 === activeSlideIndex}"
      ></a>
      
    </div>
  </div>
</template>

<script>
import Slide1 from './slides/Slide1.vue'
// import Slide2 from './slides/Slide2.vue'
// import Slide3 from './slides/Slide3.vue'
// import Slide4 from './slides/Slide4.vue'

export default {
  name: 'Carousel',
  components: {
    Slide1,
    Slide2: () => import('./slides/Slide2.vue'),
    Slide3: () => import('./slides/Slide3.vue'),
    Slide4: () => import('./slides/Slide4.vue')
  },
  data() {
    return {
      activeSlideIndex: 1,
      slideLength: 4,
      activeDirection: "next"
    }
  },
  computed: {
    activeSlide() {
      return `Slide${this.activeSlideIndex}`
    }
  },
  methods: {
    toSlide(index) {
      this.activeSlideIndex = index
    }
  }
}
</script>

<style lang="scss" src="~/assets/styles/vue_carousel.scss"></style>
