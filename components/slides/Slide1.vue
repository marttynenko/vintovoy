<template>
  <div class="vue-slide vue-slide-1">
    <div class="inner">
      <div class="vue-slide-content flex valign-center">
        <div class="vue-slide-left">
          <h2 class="vue-slide-title">Винтовые FROSP - Винтовой компрессор по цене поршневого</h2>
          <ul class="vue-slide-list">
            <li>- Работа 24/7</li>
            <li>- Доказанная энергоэффективность</li>
            <li>- Честная цена</li>
            <li>- Гарантия 2 года</li>
            <li>- Доступный сервис и обслуживание</li>
          </ul>
          <a href="#" class="ui-btn ui-btn-big" @click.prevent="openFrospModal">Подробнее</a>
        </div>

        <div class="vue-slide-img">
          <nuxt-img preset="default" src="images/slides/1.png" alt="Винтовые FROSP" title="Винтовые Frosp"/>
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
      document.querySelector('#footer').scrollIntoView()
      setTimeout(() => {
        document.querySelector(selector).scrollIntoView()
      }, 110);
    },
    //лютые, лютые костыли
    openFrospModal() {
      this.scrollTo('#catalog_wrap')
      setTimeout(() => {
        if (!document.querySelector('.catalog-item-frosp')) return
        const el = document.querySelector('.catalog-item-frosp')
        let event = new Event('click');
        el.dispatchEvent(event)
      }, 110);
    }
  }
}
</script>

<style scoped lang="scss">
@media (min-width: 1350px) {
  .vue-slide-img {
    margin-right: -100px;
  }
}

@media (max-width: 992px) {
  .vue-slide {
    &-img {
      position: absolute;
      width: 50%;
      left: 50%;
      right: 0;
      bottom: 20px;
      z-index: -1;
    
      img {
        max-height: 240px;
      }
    }

    &-left {
      flex: 0 0 100%;
      max-width: 100%;
    }

    &-txt, &-list {
      max-width: 50%;
    }
  }
}

@media (max-width: 576px) {
  .vue-slide {
    .ui-btn {
      position: absolute;
      left: 0px;
      bottom: 40px;
    }

    &-img {
      width: 100%;
      left: 0px;
    }

    &-txt, &-list {
      max-width: 100%;
    }
  }
}

@media (max-width: 480px) {
  .vue-slide {
    &-img {
      left: 20px;
    }
  }
}
</style>