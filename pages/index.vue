<template>
  <div>
    <Header :scrollTo="scrollTo"/>
    <main class="main">
      <h1 class="main-h1">Винтовые компрессоры популярных брендов Remeza, Атлас, Dali, Aco, Comaro, Ceccato и др</h1>
      <Carousel></Carousel>
      <Anchors :scrollTo="scrollTo"></Anchors>
      <Manufacters></Manufacters>
      <Whyus></Whyus>
      <DynamicBanners />
      <Steps></Steps>
      <div id="catalog_wrap">
        <Catalog v-if="isCatalog"></Catalog>
      </div>
      <div id="maps_wrap">
        <MapVideos v-if="isMaps"></MapVideos>
      </div>
      <Info></Info>
      <Feedback></Feedback>
      <div id="contacts_wrap">
        <Contacts v-if="isContacts"></Contacts>
      </div>
      <Usefull></Usefull>
      <Advantages></Advantages>
    </main>
    <Footer :scrollTo="scrollTo"/>
    <toTop />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Carousel from '~/components/Carousel'
import Anchors from '~/components/Anchors'
import Manufacters from '~/components/Manufacters'
import Whyus from '~/components/Whyus'
import Steps from '~/components/Steps'
// import Catalog from '~/components/Catalog'
// import MapVideos from '~/components/MapVideos'
import Info from '~/components/Info'
import Feedback from '~/components/Feedback'
// import Contacts from '~/components/Contacts'
import Usefull from '~/components/Usefull'
import Advantages from '~/components/Advantages'
import DynamicBanners from '~/components/DynamicBanners'
import toTop from '~/components/toTop'


export default {
  components: { 
    Header,Carousel, Anchors, Manufacters, Whyus, Steps, Info, Feedback, Usefull, Advantages, DynamicBanners, Footer, toTop,
    Catalog: () => import('~/components/Catalog'),
    MapVideos: () => import('~/components/MapVideos'),
    Contacts: () => import('~/components/Contacts')
  },

  data() {
    return {
      isCatalog: false,
      isMaps: false,
      isContacts: false
    }
  },

  methods: {
    scrollTo(selector){
      if (!document.querySelector(selector)) return
      document.querySelector(selector).scrollIntoView()
    },
    getCoords(elem) {
      if (!document.querySelector(elem)) {
        return {
          top: 0,
          left: 0
        }
      }
      const box = document.querySelector(elem).getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      }
    }
  },

  mounted() {
    window.addEventListener('scroll',async () => {
      const st = window.pageYOffset
      const vh = document.documentElement.clientHeight

      await this.$nextTick()
      if (!this.isCatalog) {
        const offset = this.getCoords('#catalog_wrap').top
        // console.log(offset, st, vh)
        if (st + vh*1.25 > offset) {
          this.isCatalog = true
        }
      }

      if(!this.isMaps) {
        const offset = this.getCoords('#maps_wrap').top
        if (st + vh*1.25 > offset) {
          this.isMaps = true
        }
      }

      if(!this.isContacts) {
        const offset = this.getCoords('#contacts_wrap').top
        if (st + vh*1.25 > offset) {
          this.isContacts = true
        }
      }
    },false)
  },

  beforeDestroy() {
    window.removeEventListener('scroll',null)
  }
}
</script>

<style>
  .main-h1 {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
</style>
