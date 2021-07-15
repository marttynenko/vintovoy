<template>
  <div class="vue-slide vue-slide-4">
    <div class="inner">
      <div class="vue-slide-content flex valign-center">
        <div class="vue-slide-left">
          <div class="vue-slide-title">VINTOVOY - эксперты в компрессорах и воздухоподготовки</div>
          <p class="vue-slide-txt">Мы продаем не просто оборудование, а комплексные решения, куда входит: <br>
          - выезд специалиста на ваш объект<br>
          - подбор оборудования<br>
          - сопровождение сделки от первого звонка до первого запуска<br>
          - постгарантийное обслуживание</p>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vue-slide {
  background: #171F26 url(~assets/images/slides/4.png) no-repeat right bottom;
  background-blend-mode: screen;

  @media (max-width: 1140px) {
    background-position: right -200px bottom -60px;
    background-size: 80% auto;
  }

  @media (max-width: 992px) {
    &-left {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &-txt, &-list {
      max-width: 50%;
    }
  }

  @media (max-width: 576px) {
    background-position: right bottom;
    background-size: 90% auto;

    &-txt, &-list {
      max-width: 100%;
    }
  }
}
</style>