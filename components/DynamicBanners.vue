<template>
  <div class="dynamic-banners ui-section">
    <div class="inner">
      <div class="dynamic-banner">
        <nuxt-img preset="default" :src="generatePath('mobile.png')" alt="Banner" width="340" height="177" v-if="windowWidth < 400"/>
        <nuxt-img preset="default" :src="generatePath('tablet.png')" alt="Banner" width="700" height="177" v-else-if="windowWidth > 400 && windowWidth < 800"/>
        <nuxt-img preset="default" :src="generatePath('desktop.png')" alt="Banner" width="1175" height="300" v-else/>
      </div>

      <!-- <picture  class="dynamic-banner">
        <source media="(max-width: 400px)" :srcset="generatePath('mobile.png')">
        <source media="(max-width: 800px)" :srcset="generatePath('tablet.png')">
        <source media="(min-width: 800px)" :srcset="generatePath('desktop.png')">
        <img :src="generatePath('desktop.png')" alt="Banner" width="1175" height="300"/>
      </picture> -->
    </div>
    
  </div>
</template>

<script>
function Random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default {
  data() {
    return {
      random: Random(1,4),
      windowWidth: undefined,
    }
  },
  methods: {
    generatePath(file) {
      // return require(`../assets/images/banners/${this.random}-${file}`)
      return `images/banners/${this.random}-${file}`
    },
    onResize() {
      this.windowWidth = window.innerWidth
      // console.log('resize')
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  }
}
</script>

<style lang="scss" scoped>

</style>