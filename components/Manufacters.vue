<template>
  <div class="manufacters ui-section">
    <div class="inner">
      <h3 class="ui-title">Производители</h3>
      
      <VueSlickCarousel v-bind="slickOptions">
        <div class="manufacter-slide"
          v-for="item in manufacters"
          :key="item.name"
        >
          <div class="manufacter-item">
            <nuxt-img width="140" height="40" :src="generatePath(item.img)" :alt="item.name" :title="item.name" loading="lazy"/>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 6,
        infinite: false,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 5
            }
          },{
            breakpoint: 992,
            settings: {
              slidesToShow: 4
            }
          },{
            breakpoint: 600,
            settings: {
              slidesToShow: 3
            }
          },{
            breakpoint: 430,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      },
      manufacters: [
        {name: 'Comparo', img: 'comparo.svg'},
        {name: 'Abac', img: 'abac.svg'},
        {name: 'Frosp', img: 'frosp.svg'},
        {name: 'remeza', img: 'remeza.svg'},
        {name: 'comprag', img: 'comprag.svg'},
        {name: 'berg', img: 'berg.svg'},
        {name: 'fini', img: 'fini.svg'},
        {name: 'dali', img: 'dali.svg'},
        {name: 'atlas copco', img: 'atlas.svg'},
        {name: 'atmos', img: 'atmos.svg'},
        {name: 'ceccato', img: 'ceccato.svg'},
        {name: 'mark', img: 'mark.svg'},
        {name: 'alup', img: 'alup.svg'},
        {name: 'ekomak', img: 'ekomak.svg'},
        {name: 'fiac', img: 'fiac.svg'},
        {name: 'arsenal', img: 'arsenal.svg'},
        {name: 'dalgakiran', img: 'dalgakiran.svg'},
        {name: 'almig', img: 'almig.svg'}
      ],
    }
  },
  methods: {
    generatePath(file) {
      //webpack
      // return require('../assets/images/manufacters/'+file)

      //nuxt-image
      return 'images/manufacters/'+file
    }
  }
}
</script>

<style lang="scss">
.manufacters {
  .slick-slider {
    padding-left: 30px;
    padding-right: 30px;
  }
}
.manufacter-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  text-align: center;
  user-select: none;
  padding: 0px 15px;

  img {
    max-height: 50px;
    opacity: 0.65;
    transition: opacity .1s;
  }
  &:hover {
    img {
      opacity: 1;
    }
  }
}
</style>