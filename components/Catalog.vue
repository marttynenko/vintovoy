<template>
  <div class="catalog ui-section">
    <div class="inner">
      <h2 class="ui-title">Каталог продукции</h2>

      <div class="catalog-list">
        <Slick v-bind="slickSettings">
          <div class="catalog-slide"
            v-for="item in catalog"
            :key="item.title"
          >
            <div class="catalog-item"
              @click.prevent="showProduct(item.title)"
              :data-manufacter="item.title.toLowerCase()"
              :class="['catalog-item-'+item.title.toLowerCase()]"
            >
              <div class="catalog-item-title">{{item.title}}</div>
              <div class="catalog-item-body">
                <div class="catalog-item-img">
                  <nuxt-img preset="default" width="175" height="175" :src="generatePath(item.img)" :alt="item.title" :title="item.title"/>
                </div>

                <div class="catalog-item-body-title">Комперссоры <span>{{item.title}}</span></div>

                <div class="catalog-item-characters">
                  <div class="catalog-item-character flex"
                    v-for="(value, label) in item.characters"
                  >
                    <div class="catalog-item-character-label">{{label}}:</div>
                    <div class="catalog-item-character-value">{{value}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slick>
      </div>
    </div>

    <CatalogPopup v-if="isPopup" :manufacter="currentTitle" :closeHandle="closeProduct"></CatalogPopup>
  </div>
</template>

<script>
import Slick from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'

export default {
  components: {
    Slick,
    CatalogPopup: () => import('~/components/CatalogPopup.vue')
  },
  data() {
    return {
      isPopup: false,
      currentTitle: '',
      slickSettings: {
        infinite: false,
        slidesToShow: 3,
        lazyLoad: 'ondemand',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },{
            breakpoint: 670,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      },
      catalog: [
        {title: 'Abac', img: 'abac-1.png', characters: {
          'Производительность':'220-3417 л/мин',
          'Мощность': '2.2-75 кВт',
          'Максимальное давление': '7.5-13 бар'
        }},
        {title: 'Almig', img: 'almig-1.png', characters: {
          "Производительность":"430-33000 л/мин",
          "Мощность": " 4-355 кВт",
          "Максимальное давление": "6-13 бар"
        }},
        {title: 'Alup', img: 'alup-1.png', characters: {
          "Производительность":"114-9270 л/мин",
          "Мощность": "1.5-55 кВт",
          "Максимальное давление": "8-10 бар"
        }},
        {title: 'Berg', img: 'berg-1.png', characters: {
          "Производительность":"400-56200 л/мин",
          "Мощность": "4-315 кВт",
          "Максимальное давление": "7-12 бар"
        }},
        {title: 'Ceccato', img: 'ceccato-1.png', characters: {
          "Производительность":"220-1860 л/мин",
          "Мощность": "2.2-315 кВт",
          "Максимальное давление": "7-13 бар"
        }},
        {title: 'Comaro', img: 'comaro-1.png', characters: {
          'Производительность':'5000-11 800 л/мин',
          'Мощность': '2.2-315 кВт',
          'Максимальное давление': '8-13 бар'
        }},
        {title: 'Comprag', img: 'comprag-1.png', characters: {
          "Производительность":"550-320400 л/мин",
          "Мощность": "5.5-200 кВт",
          "Максимальное давление": "8-13 бар"
        }},
        {title: 'Dalgakiran', img: 'dalgakiran-1.png', characters: {
          "Производительность":"4330-19500 л/мин",
          "Мощность": "2.2-315 кВт",
          "Максимальное давление": "7.5-13 бар"
        }},
        {title: 'Dali', img: 'dali-1.png', characters: {
          "Производительность":"480-92000 л/мин",
          "Мощность": "5.5-450 кВт",
          "Максимальное давление": "8-35 бар"
        }},
        {title: 'Ekomak', img: 'ekomak-1.png', characters: {
          "Производительность":"290-52320 л/мин",
          "Мощность": "2.2-315 кВт",
          "Максимальное давление": "7-13 бар"
        }},
        {title: 'Fiac', img: 'fiac-1.png', characters: {
          "Производительность":"240-17160 л/мин",
          "Мощность": "2.2-110 кВт",
          "Максимальное давление": "7-15 бар"
        }},
        {title: 'Fini', img: 'fini-1.png', characters: {
          "Производительность":" 300-10500 л/мин",
          "Мощность": "2.2-75 кВт",
          "Максимальное давление": "8-13 бар"
        }},
        {title: 'FROSP', img: 'frosp-1.png', characters: {
          'Производительность':'700-10 000 л/мин',
          'Мощность': '5.5-55 кВт',
          'Максимальное давление': '8-13 бар'
        }},
        {title: 'Mark', img: 'mark-1.png', characters: {
          'Производительность':'720-11 940 л/мин',
          'Мощность': '7.5-75 кВт',
          'Максимальное давление': '7-10 бар'
        }},
        {title: 'Remeza', img: 'remeza-1.png', characters: {
          "Производительность":"150-34000 л/мин",
          "Мощность": "2.2-322 кВт",
          "Максимальное давление": "1.5-15 бар"
        }},
        
        
        
        
        
      ]
    }
  },
  methods: {
    generatePath(file) {
      //webpack
      // return require('../assets/images/catalog/'+file)
      //nuxt-img
      return 'images/catalog/'+file
    },
    showProduct(manufacter) {
      this.currentTitle = manufacter.toLowerCase()
      this.isPopup = true
      this.togglePopup('open')
    },
    closeProduct() {
      this.isPopup = false
      this.togglePopup('close')
    },
    togglePopup(status) {
      if (status == 'open') {
        document.documentElement.classList.add('hidden')
      } else if (status == 'close') {
        document.documentElement.classList.remove('hidden')
      }
    }
  }
}
</script>

<style lang="scss">
.catalog {

  &-list {
    padding-left: 16px;
    padding-right: 16px;

    .slick-prev {
      left: -25px;
    }
    .slick-next {
      right: -25px;
    }
  }
  &-slide {
    padding-left: $col_gutter;
    padding-right: $col_gutter;
  }
}
.catalog-item {
  min-height: 100%;
  color: #FFF;
  cursor: pointer;
  min-height: 100%;
  $this: &;

  &-title,
  &-body {
    background: rgba(63, 82, 99, 0.2);
    padding: 25px 20px;
  }
  &-body {
    @media (min-width: 992px) {
      min-height: 392px;
    }
  }
  &-title {
    margin-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
    @include fz(28);
    font-weight: 600;
  }
  &:hover {
    #{$this}-title,
    #{$this}-body {
      background: $primary;
    }
  }
  &-img {
    height: 175px;
    margin-bottom: 20px;

    img {
      max-height: 175px;
      width: auto;
      display: block;
      margin: 0 auto;
    }
  }
  &-body-title {
    @include fz(20);
    font-weight: 600;
    margin-bottom: 10px;
  }
  &-character {
    margin-bottom: 10px;
    line-height: 1.25;

    &-label {
      flex: 0 0 62%;
      max-width: 62%;
      padding-right: 10px;
    }
    &-value {
      flex: 0 0 38%;
      max-width: 38%;
      color: rgba(#FFF, .7)
    }
  }

  @media (max-width: 992px) {
    
    &-title {
      @include fz(25);
      padding: 20px;
    }
    &-body {
      &-title {
        @include fz(18);
      }
    }
  }

  @media (max-width: 768px) {
    @include fz(14);
    
    &-title {
      @include fz(23);
    }
    &-body {
      &-title {
        @include fz(16);
      }
    }
  }
}
</style>