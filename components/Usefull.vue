<template>
  <div class="usefull ui-section">
    <div class="inner">
      <h4 class="ui-title">Полезная иформация</h4>

      <div class="row">
        <div class="col-md-7">
          <div class="h5">Купить винтовой компрессор - это на всю жизнь!</div>
          <p>При выборе между поршневым и винтовым компрессором многие компании останавливаются на первом варианте. Это неудивительно, ведь никто не хочет переплачивать. Однако при активном использовании агрегата сэкономить позволит именно винтовой компрессор.</p>
          <p>Конечно, винтовой компрессор дороже поршневого. Но цена оборудования – это лишь малая часть затрат.  Гораздо важнее, сколько агрегат проработает без серьезных поломок и сколько денег будет тратиться во время его эксплуатации.</p>
          <div class="h5">А в этих вопросах винтовые компрессоры явно выигрывают:</div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Энергоэффективность</span> – винтовой компрессор автоматически подстраивается под режим работы. Благодаря этому снижается расход энергии. В среднем винтовой компрессор тратит на 20-40% меньше электроэнергии, чем поршневой.
          </div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Экономия обслуживания</span> – в винтовом компрессоре замена масла, фильтров и т.д. производится раз в 1000-3000 часов. Это в 10-15 раз реже, чем в поршневом. Даже при большей стоимости расходников это обойдется дешевле. Что еще важнее, так уменьшается время простоя производства, а это тоже деньги.
          </div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Большой срок службы</span>– при правильном обслуживании винтовой компрессор легко может проработать 8-10 лет без серьезного ремонта. Поршневой агрегат в схожих условиях выдержит 2-3 года.
          </div>

          <p>Таким образом, поршневой компрессор позволит сэкономить только в день покупки агрегата. Но каждый следующий год использования будет сводить эту экономию на нет. В долгосрочной перспективе винтовой компрессор обойдется дешевле.</p>
        </div>
        <div class="col-md-5 col-usefull-img col-usefull-img-1">
          <div class="usefull-img usefull-img-1"><nuxt-img preset="default" src="images/usefull/1.png" alt="Винтовые компрессоры" title="Винтовые компрессоры" loading="lazy"/></div>
        </div>
        <div class="col-md-5 col-usefull-img col-usefull-img-2">
          <div class="usefull-img usefull-img-2"><nuxt-img src="images/usefull/2.png" alt="Винтовые компрессоры" title="Винтовые компрессоры" loading="lazy"/></div>
        </div>
        <div class="col-md-7">
          <div class="h5">Впрочем, у винтовых компрессоров много других преимуществ:</div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Высокий КПД</span> – у винтового компрессора он на 30-40% выше, чем у поршневого аналога. Это не только снижает расходы на электроэнергию, но и продлевает срок службы агрегата.
          </div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Высокая производительность</span> – за минуту винтовой компрессор сжимает в 2-3 раза больше воздуха, чем поршневой. При этом максимальная возможная производительность винтовых агрегатов выше в 3-4 раза. То есть вместо одного винтового компрессора пришлось бы купить сразу несколько поршневых.
          </div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Электронная система управления</span> – практически все винтовые агрегаты имеют мощную систему управления. С ее помощью можно гибко настраивать режим работы. При этом оператору не нужно следить за компрессором, система управления автоматизирует большинство процессов.
          </div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Чистота воздуха на выходе</span> – винтовые компрессоры используют совсем немного масла во время работы. Поэтому они загрязняют воздух не так сильно, как поршневые. Кроме того, винтовые компрессоры имеют встроенную систему очистки воздуха. Поршневому ее придется докупать отдельно.
          </div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Низкий уровень шума вибрации</span> – несмотря на свою мощь, винтовой компрессор работает довольно тихо. Его можно поставить прямо в цеху, и он не будет мешать работать. А это заметно упрощает размещение оборудования и прокладку пневмосети.
          </div>

          <div class="usefull-advantage">
            <span class="usefull-advantage-title">Компактность</span> – большинство винтовых компрессоров занимает примерно столько же места, сколько их поршневые аналоги. При этом им не требуется установка на фундамент, что еще больше упрощает размещение.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.usefull {
  @include fz(14);
  line-height: 1.7;
  margin-bottom: 35px;

  .h5 {
    color: #FFF;
    font-weight: 600;
    margin-bottom: 20px;
    @include fz(17);
  }
  &-advantage {
    margin-bottom: 20px;
    position: relative;
    padding-left: 35px;

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 3px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: url(~assets/images/circle-check.svg) center no-repeat;
      background-size: contain;
    }
    &-title {
      font-weight: 600;
      color: #FFF;
      @include fz(17);
    }
  }
  &-img {
    background: rgba(63, 82, 99, 0.2);
    padding: 45px 45px;
    display: flex;
    align-items: center;
    min-height: calc(100% - 20px);
    
    img {
      display: block;
      margin: 0 auto;
    }
    &-1 {
      margin-right: -182px;
    }
    &-2 {
      margin-left: -182px;
    }
  }
  [class*="col-"] {
    margin-bottom: 80px;
  }
}

@media (max-width: 1520px) {
  .usefull {
    &-img {
      &-1 {
        margin-right: -100px;
      }
      &-2 {
        margin-left: -100px;
      }
    }
  }
}
@media (max-width: 1380px) {
  .usefull {
    &-img {

      &-1 {
        margin-right: -50px;
      }
      &-2 {
        margin-left: -50px;
      }
    }
  }
}

@media (max-width: 1280px) {
  .usefull {
    &-img {
      &-1 {
        margin-right: 0px;
      }
      &-2 {
        margin-left: 0px;
      }
    }
  }
}

@media (max-width: 992px) and (min-width: 420px) {
  .usefull {
    &-img {
      padding: 30px 30px;
      min-height: 100%;
      margin-bottom: 30px;
    }
    [class*="col-"] {
      margin-bottom: 20px;
    }
    .col-md-7:last-child {
      order: 2;
    }
  }
  .col-usefull-img {
    order: 1;
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 420px) {
  .usefull {
    &-img {
      padding: 20px;
      min-height: 0;
      margin-bottom: 0px;
    }
    [class*="col-"] {
      margin-bottom: 20px;
    }
  }
  .col-usefull-img {
    &-1 {
      order: -1;
    }
  }
}
</style>