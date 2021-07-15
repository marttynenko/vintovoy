<template>
  <div class="popup">
    <div class="popup-inner">
    <div class="inner">
      <div class="popup-header">
        <div class="flex align-justify valign-center">
          <a href="#" class="popup-back" @click.prevent="closeHandle">← Вернуться на главную</a>
          <a href="#" class="popup-close" @click.prevent="closeHandle"></a>
        </div>
      </div>

      <div class="popup-content" v-if="compressors">
        <div class="popup-cols">
          <div class="row">

            <div class="col-sm-6">
              <div class="popup-images">
                <Slick v-if="compressors.images.length > 1" v-bind="slickSettings">
                  <div class="popup-images-slide"
                    v-for="item in compressors.images"
                    :key="item"
                  >
                    <div class="popup-img">
                      <nuxt-img preset="default" :src="generatePath(item)" :alt="'Винтовые компрессоры '+compressors.title" :title="'Винтовые компрессоры '+compressors.title"/>
                    </div>
                  </div>
                </Slick>
                <div class="popup-img" v-else><nuxt-img preset="default" :src="generatePath(compressors.images[0])" :alt="compressors.title" :title="compressors.title"/></div>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="popup-info">
                <h2 class="popup-title">{{compressors.title}}</h2>
                <p class="popup-aftertitle">Винтовые компрессоры {{compressors.title}}</p>

                <div class="popup-characters">
                  <div class="popup-character"
                    v-for="(value,label) in compressors.characters"
                    :key="label"
                  >
                    <span class="popup-character-label">{{label}}:</span>
                    <span class="popup-character-value">{{value}}</span>
                  </div>
                </div>

                <a href="#" class="ui-btn ui-btn-big ui-btn-blue" @click.prevent="toForm">Оставить заявку</a>
              </div>
            </div>
          </div>
        </div><!--.cols-->

        <div class="popup-middle">
          <div class="popup-centered-title">Винтовые компрессоры <span>{{compressors.title}}</span></div>
          <div class="row">
            <div class="col-sm-7">
              <div class="popup-descr" v-html="compressors.description"></div>

              <div class="popup-services">
                <div class="popup-services-title">Помимо продажи воздушных компрессоров в Москве, мы предлагаем следующие услуги:</div>
                <ul class="ui-list">
                  <li>Доставка продукции;</li>
                  <li>Установка оборудования;</li>
                  <li>Пусконаладочные работы;</li>
                  <li>Обучение персонала вашего предприятия особенностям эксплуатации компрессоров.</li>
                </ul>
              </div>

            </div>

            <div class="col-sm-5">
              <div class="popup-big-image" v-if="compressors.imageBig"><nuxt-img preset="default" :src="generatePath(compressors.imageBig)" :alt="compressors.title" :title="compressors.title"/></div>
            </div>
          </div><!--.row-->
        </div>

        <div class="popup-table"
          v-for="(table,index) in compressors.tables"
          :key="index"
        >
          <h3 v-if="table.title && table.title != ''" class="popup-table-title" v-html="table.title"></h3>

          <div class="responsive-table">
            <table class="popup-table-table" v-if="table.rows">
              <tbody>
                <tr v-for="(row,i) in table.rows">
                  <td v-for="td in row" :class="{thead: i == 0}">{{td}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="popup-bottom">
          <a href="#" class="ui-btn ui-btn-blue ui-btn-big" @click.prevent="toForm">Оставить заявку</a>
        </div>

      </div><!--.content-->
    </div><!--.inner-->
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogPopup",
  props: {
    manufacter: String,
    closeHandle: Function
  },
  components: {
    Slick: () => import('vue-slick-carousel')
  },
  data() {
    return {
      compressors: null,
      slickSettings: {
        dots: true,
        lazyLoad: 'ondemand',
        infinite: false
      }
    }
  },
  async fetch() {
    this.compressors = await fetch(`/data/${this.manufacter}.json`).then(res => res.json())
  },
  methods: {
    generatePath(file) {
      //webpack
      //return require('~/assets/images/catalog/'+file)
      //nuxt-image
      return 'images/catalog/'+file
    },
    scrollTo(selector){
      if (!document.querySelector(selector)) return
      document.querySelector(selector).scrollIntoView()
      // setTimeout(() => {
      //   document.querySelector(selector).scrollIntoView()
      // }, 110);
    },
    toForm() {
      this.closeHandle()
      this.scrollTo('#feedback')
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  background: #212C35;
  z-index: 9999;
  overflow-y: auto;
  overflow-x: hidden;
  color: #FFF;

  &-inner {
    display: inline-block;
    width: 100%;

    &:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }

  &-header {
    margin-bottom: 50px;
  }
  &-close {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url(~assets/images/close.svg) center no-repeat;
    background-size: 20px;
    cursor: pointer;
  }
  &-cols {
    margin-bottom: 100px;
  }
  &-images {
    margin-bottom: 30px;
  }
  &-img {
    height: 420px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #27343e;

    img {
      max-height: 400px;
    }
  }
  &-info {
    padding-left: 60px;
    padding-top: 60px;
  }
  &-title {
    @include fz(40);
    font-weight: 600;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  &-aftertitle {
    @include fz(20);
    font-weight: 700;
    margin-bottom: 20px;
  }
  &-characters {
    margin-bottom: 30px;
  }
  &-character {
    margin-bottom: 10px;

    &-label {
      display: inline-block;
      vertical-align: top;
      max-width: 50%;
      width: 205px;
    }
    &-value {
      display: inline-block;
      vertical-align: top;
    }
  }

  &-centered-title {
    text-align: center;
    margin-bottom: 40px;
    font-weight: 600;
    @include fz(40);
  }
  &-big-image {
    padding: 25px;
    background: #27343e;
    
    @media (min-width: 1350px) {
      margin-right: -182px;
    }
    
    img {
      display: block;
      margin: 0 auto;
    }
  }
  &-descr {
    margin-bottom: 30px;
  }
  &-services {
    &-title {
      margin-bottom: 20px;
      font-weight: 600;
      @include fz(17);
    }
  }
  &-middle {
    margin-bottom: 70px;
  }

  &-table {
    margin-bottom: 50px;

    &-title {
      @include fz(22);
      font-weight: 600;
      margin-bottom: 25px;
    }
    &-table {
      min-width: 100%;
      border-collapse: collapse;

      td {
        text-align: center;
        background: rgba(63, 82, 99, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 20px 20px;

        &.thead {
          background: $primary;
          font-weight: 700;
        }
        &:first-child {
          text-align: left;
        }
      }
    }
  }

  &-bottom {
    text-align: center;
  }


  @media (max-width: 992px) {
    padding-top: 10px;

    &-header {
      margin-bottom: 30px;
    }
    &-info {
      padding-left: 20px;
    }
    &-cols {
      margin-bottom: 40px;
    }
    &-centered-title {
      @include fz(30);
      margin-bottom: 30px;
    }
    &-table {
      &-title {
        @include fz(20);
      }
      &-table {
        td {
          padding: 15px;
          min-width: 80px;
        }
      }
    }
  }//992

  @media (max-width: 768px) {
    padding-bottom: 60px;
    &-cols {
      max-width: 576px;
      margin-left: auto;
      margin-right: auto;
    }
    &-info {
      padding-top: 0px;
      padding-left: 0px;

      .ui-btn {
        display: block;
        width: 100%;
      }
    }
    &-characters {
      @include fz(14);
    }
    &-title {
      margin-bottom: 15px;
    }
    &-aftertitle {
      @include fz(16);
    }
    &-big-image {
      padding: 15px 25px;

      img {
        max-height: 165px;
      }
    }
    &-services {
      margin-bottom: 25px;
    }
  }//768


  @media (max-width: 576px) {
    &-img {
      height: 250px;

      img {
        max-height: 230px;
      }
    }

    &-centered-title {
      @include fz(25);
      margin-bottom: 25px;
    }

    &-middle {
      margin-bottom: 50px;
    }

    &-table {
      &-title {
        @include fz(18);
      }
      &-table {
        @include fz(14);

        td {
          padding: 8px 15px;
        }
      }
    }
  }
}


</style>