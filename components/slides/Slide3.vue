<template>
  <div class="vue-slide vue-slide-3">
    <div class="inner">
      <div class="vue-slide-content flex valign-center">
        <div class="vue-slide-left">
          <div class="vue-slide-title">Более 500 довольных клиентов в Беларуси и России</div>
        </div>

        <div class="vue-slide-img">
          <nuxt-img preset="default" src="images/slides/3.png" loading="lazy" alt="Более 500 довольных клиентов" title="Более 500 довольных клиентов"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vue-slide {
  @media (max-width: 992px) and (min-width: 576px) {
    &-left {
      padding-top: 30px;
    }
  }

  @media (max-width: 576px) {
    &-img {
      text-align: center;
      margin-top: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 350px;
      // position: absolute;
      // left: 0px;
      // width: 100%;
      // bottom: 20px;

      img {
        max-height: 350px;
      }
    }
  }
}
</style>