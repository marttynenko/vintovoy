<template>
  <div class="steps ui-section">
    <div class="inner">
      <h3 class="ui-title">Как мы работаем</h3>

      <div class="steps-list flex align-center">
        <div class="step-item"
          v-for="(item,index) in steps"
          :key="item.txt"
          :class="['step-item-'+(index+1)]"
        >
          <div class="step-item-icon" :class="{'blue': index == 4}">
            <nuxt-img preset="icon" width="50" height="50" :src="generatePath(index)" :alt="item.txt != '' ? item.txt : 'Шаг 1'" :title="item.txt != '' ? item.txt : 'Шаг 1'"/>
          </div>
          <div class="step-item-step">Шаг {{index+1}}</div>
          <div class="step-item-txt" v-if="item.txt">{{item.txt}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      steps: [
        {txt: ''},
        {txt: 'Мы обрабатываем Вашу заявку'},
        {txt: 'Выезд специалиста на объект'},
        {txt: 'Контроль работ на каждом этапе'},
        {txt: 'Вы получаете результат'},
      ]
    }
  },
  methods: {
    generatePath(index) {
      //webpack
      // return require('../assets/images/steps/'+(index+1)+'.svg')
      //nuxt-image
      return 'images/steps/'+(index+1)+'.svg'
    }
  }
}
</script>

<style lang="scss">
.steps-list {
  flex-wrap: wrap;
  margin-left: -30px;
  margin-right: -30px;
}
.step-item {
  flex: 0 0 20%;
  max-width: 20%;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
  margin-bottom: 20px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 680px) {
    flex: 0 0 33.33%;
    max-width: 33.33%;
  }
  @media (max-width: 480px) {
    flex: 0 0 50%;
    max-width: 50%;
  }

  &:not(:last-child):after {
    content: "";
    position: absolute;
    right: -32px;
    top: 58px;
    width: 65px;
    height: 10px;
    background-size: contain;
    background: url(~assets/images/arrow-wide.svg) center no-repeat;

    @media (max-width: 1140px) {
      top: 45px;
    }
    @media (max-width: 992px) {
      top: 31px;
      width: 38px;
      right: -19px;
      background-position: right center;
      background-size: auto 8px;
    }
  }

  &-icon {
    position: relative;
    width: 124px;
    height: 124px;
    margin: 0 auto 13px;
    border: 10px solid #27343E;
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;

    &.blue {
      border-color: $primary;
    }
    @media (max-width: 1140px) {
      width: 100px;
      height: 100px;
    }
    @media (max-width: 992px) {
      width: 72px;
      height: 72px;
    }
  }
  &-step {
    font-weight: 700;
    @include fz(20);
    margin-bottom: 5px;
    color: #FFF;

    @media (max-width: 992px) {
      @include fz(18)
    }
    @media (max-width: 768px) {
      @include fz(16)
    }
  }
  &-txt {
    margin-left: -10px;
    margin-right: -10px;
  }
}
@media (max-width: 480px) {
  .step-item-5 {
    padding-top: 55px;

    &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 14px;
      width: 38px;
      height: 10px;
      background: url(~assets/images/arrow-wide.svg) no-repeat;
      background-position: right center;
      background-size: auto 8px;
      transform: translate(-50%, 0) rotate(90deg);
    }
  }
}
</style>