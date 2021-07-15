<template>
  <div class="advantages ui-section">
    <div class="inner">
      <h2 class="ui-title">Преимущества покупки винтовых компрессоров у нас</h2>

      <div class="row">
        <div class="col-us-6 col-sm-4"
          v-for="(item,index) in advantages"
          :key="item.title"
        >
          <div class="advantages-item">
            <div class="advantages-item-icon">
              <nuxt-img preset="icon" width="70" height="70" :src="generatePath(index)" :alt="item.title" :title="item.title"/>
            </div>
            <div class="advantages-item-title">{{item.title}}</div>
            <div class="advantages-item-txt">{{item.txt}}</div>
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
        {title: 'Выгодная цена', txt: 'Мы получаем винтовые компрессоры от производителей напрямую. Нам не нужно завышать цену, чтобы отбить затраты на перекупку.'},
        {title: 'Бесплатная консультация', txt: 'Наши менеджеры помогут подобрать винтовой компрессор, подходящий лично вам.'},
        {title: 'Бесплатный запуск', txt: 'Если это необходимо, то наши специалисты помогут вам с установкой и введением винтового компрессора в эксплуатацию.'},
        {title: 'Долгосрочное сотрудничество', txt: 'Покупая винтовой компрессор у нас, вы получаете не только оборудование. Мы всегда готовы помочь вам с обслуживаем и ремонтом.'},
        {title: 'Доставка по всей стране', txt: 'Доставку мы полностью берем на себя. Не важно, где вы живете – в столице или в самом отдаленном уголке страны – вы получите оборудование в срок.'},
        {title: 'Более 6000 компрессоров', txt: 'У нас в каталоге вы можете найти винтовой компрессор под любой бюджет.'}
      ]
    }
  },
  methods: {
    generatePath(index) {
      //webpack
      //return require('../assets/images/advantages/'+(index+1)+'.svg')
      //nuxt-img
      return 'images/advantages/'+(index+1)+'.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
.advantages-item {
  margin-bottom: 24px;
  text-align: center;
  padding: 25px 20px;
  @include fz(14);
  min-height: calc(100% - 24px);
  background: rgba(63, 82, 99, 0.2);

  // &:hover {
  //   background: $primary;
  // }

  &-icon {
    height: 50px;
    margin-bottom: 20px;

    img {
      max-height: 50px;
    }
  }
  &-title {
    @include fz(17);
    font-weight: 600;
    color: #FFF;
    margin-bottom: 8px;
  }
}

@media (max-width: 768px) {
  .advantages-item {
    margin-bottom: 16px;
    min-height: calc(100% - 16px);
  }
}
</style>