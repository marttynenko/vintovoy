<template>
  <div>
    <div class="ui-section info-section" id="section-payment">
      <h3 class="ui-title">Оплата</h3>
      <div class="row align-center">
        <div class="col-6 col-xs-4"
          v-for="(item,index) in payment"
          :key="item"
        >
          <div class="info-card">
            <div class="info-card-icon">
              <nuxt-img preset="icon" width="70" height="70" :src="generatePath('payment',index)" :alt="item" :title="item"/>
            </div>
            <div class="info-card-title">{{item}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="ui-section info-section" id="section-delivery">
      <h3 class="ui-title">Доставка</h3>
      <div class="row align-center">
        <div class="col-6 col-xs-4"
          v-for="(item,index) in delivery"
          :key="item"
        >
          <div class="info-card">
            <div class="info-card-icon">
              <nuxt-img preset="icon" sizes="us:40px sm:50px md:70px" width="70" height="70" :src="generatePath('delivery',index)" :alt="item" :title="item"/>
            </div>
            <div class="info-card-title">{{item}}</div>
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
      payment: ["Наличный расчет", "Банковской картой", "Онлайн", "Безналичный расчет", "Рассрочка", "Лизинг"],
      delivery: ["С помощью транспортной компании", "Самовывоз со склада", "Бесплатная доставка компрессоров по Минску"]
    }
  },
  methods: {
    generatePath(directory, index) {
      //webpack
      // return require(`../assets/images/${directory}/${index+1}.svg`)
      //nuxt-image
      return `images/${directory}/${index+1}.svg`
    }
  }
}
</script>


<style lang="scss">
.info-section {
  max-width: 938px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 91px;
  padding-left: $gutter;
  padding-right: $gutter;
}
.info-card {
  margin-bottom: 24px;
  padding: 40px 24px;
  text-align: center;
  color: #FFF;
  background: rgba(63, 82, 99, 0.2);
  font-weight: 600;
  @include fz(17);
  min-height: calc(100% - 24px);

  @media (max-width: 992px) {
    @include fz(16);
    padding: 32px 15px 30px;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
    min-height: calc(100% - 16px);
  }
  @media (max-width: 576px) {
    @include fz(14);
  }

  // &:hover {
  //   background: $primary;
  // }

  &-icon {
    height: 60px;
    margin-bottom: 20px;

    img {
      max-height: 60px;
    }
    @media (max-width: 992px) {
      height: 50px;

      img {
        max-height: 50px;
      }
    }
    @media (max-width: 576px) {
      height: 40px;

      img {
        max-height: 40px;
      }
    }
  }

}
</style>