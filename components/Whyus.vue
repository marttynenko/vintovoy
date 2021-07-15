<template>
  <div class="whyus ui-section">
    <div class="inner">
      <h3 class="ui-title">Почему нам доверяют?</h3>

      <div class="whyus-items">
        <div class="row align-center">
          <div class="col-md-3 col-xs-4 col-6"
            v-for="(item,index) in advantages"
            :key="item.title"
          >
            <div class="whyus-item">
              <div class="whyus-item-icon">
                <nuxt-img preset="icon" width="70" height="70" :src="generatePath(index)" :alt="item.title" loading="lazy"/>
              </div>
              <div class="whyus-item-title">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      advantages: [
        {title: 'Бесплатный выезд специалиста для консультации и подбора'},
        {title: 'Доступность 25/8'},
        {title: 'Большой опыт в подборе'},
        {title: 'Оплата в рассрочку и Trade-in'},
        {title: 'Быстрая поставка оборудования от 2х дней'},
        {title: 'Бесплатный первый запуск'},
        {title: 'Гарантированно низкая стоимость на ТО'},
        {title: 'Гарантийное и постгарантийное обслуживание'},
      ]
    }
  },
  methods: {
    generatePath(index) {
      //webpack
      //return require('../assets/images/whyus/'+(index+1)+'.svg')
      //nuxt
      return 'images/whyus/'+(index+1)+'.svg'
    }
  }
}
</script>

<style lang="scss">
.whyus {
  margin-bottom: 56px;

  &-item {
    margin-bottom: 24px;
    min-height: calc(100% - 24px);
    background-color: rgba(63, 82, 99, 0.2);
    padding: 40px 10px 30px;
    text-align: center;
    color: #FFF;
    @include fz(17);
    font-weight: 600;
    line-height: 1.42;

    // &:hover {
    //   background-color: $primary;
    // }

    @media (max-width: 992px) {
      @include fz(16);
      padding: 20px 10px;

      &-icon {
        height: 50px;

        img {
          max-height: 50px;
        }
      }
    }

    @media (max-width: 768px) {
      margin-bottom: 16px;
      min-height: calc(100% - 16px);
    }

    @media (max-width: 576px) {
      @include fz(14);

      &-icon {
        height: 40px;

        img {
          max-height: 40px;
        }
      }
    }
  }
}
</style>