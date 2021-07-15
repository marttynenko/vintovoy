<template>
  <div class="vue-slide vue-slide-2">
    <div class="inner">
      <div class="vue-slide-content flex valign-center">
        <div class="vue-slide-left">
          <h2 class="vue-slide-title">Более 6000 компрессоров под любой бюджет</h2>
          <p class="vue-slide-txt">От бюджетного BERG до премиумного DALGAKIRAN</p>
          <a href="#" class="ui-btn ui-btn-big" @click.prevent="scrollTo('#catalog_wrap')">Подробнее</a>
        </div>

        <div class="vue-slide-img">
          <nuxt-img preset="default" src="images/slides/2.png" alt="Винтовые компрессоры под любой бюджет" title="Винтовые компрессоры под любой бюджет" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo(selector){
      if (!document.querySelector(selector)) return
      document.querySelector("#footer").scrollIntoView()
      setTimeout(() => {
        document.querySelector(selector).scrollIntoView()
      }, 110);
    },
  }
}
</script>

<style scoped lang="scss">
  .vue-slide {
    &-img {
      margin-right: -13%;
    }

    @media (max-width: 992px) {
      &-content {
        padding-top: 60px;
      }
      &-left {
        flex: 0 0 48%;
        max-width: 48%;
      }
      &-img {
        margin-right: 0px;

        img {
          position: absolute;
          left: 55%;
          top: 50px;
          height: calc(100% - 70px);
        }
      }
    }

    @media (max-width: 576px) {
      &-left {
        max-width: 100%;
      }

      &-content {
        padding-top: 30px;
      }

      .ui-btn {
        display: none;
      }

      &-img {
        img {
          bottom: 20px;
          top: auto;
          height: 290px;
          left:10%;
          max-width: none;
        }
      }
    }

    @media (max-width: 420px) {
      &-img {
        img {
          left: 2%;
        }
      }
    }
  }
</style>