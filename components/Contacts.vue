<template>
  <div class="contacts ui-section">
    <div class="inner">
      <h3 class="ui-title">Контакты</h3>
      <div class="row">
        <div class="col-lg-6 col-xs-7">
          <div class="team">
            <div class="team-item flex">
              <div class="team-item-img"><nuxt-img preset="default" width="176" height="190" src="images/team/1.png" alt="Игорь Супрун" title="Игорь Супрун" loading="lazy"/></div>
              <div class="team-item-body">
                <div class="team-item-name">Игорь Супрун</div>
                <div class="team-item-pos">Старший менеджер</div>

                <div class="team-item-contacts">
                  <div class="team-item-contact flex">
                    <div class="team-item-contact-label">e-mail:</div>
                    <div class="team-item-contact-value"><a href="mailto:info@vintovoy.com">info@vintovoy.com</a></div>
                  </div>

                  <div class="team-item-contact flex">
                    <div class="team-item-contact-label">моб.тел:</div>
                    <div class="team-item-contact-value"><a href="tel:+375293547887">+375 (29) 354-78-87</a>, доб.210</div>
                  </div>

                </div>
              </div>
            </div>

            <div class="team-item flex">
              <div class="team-item-img"><nuxt-img preset="default" width="176" height="190" src="images/team/2.png" alt="Ардрей Глаз" title="Ардрей Глаз" loading="lazy"/></div>
              <div class="team-item-body">
                <div class="team-item-name">Андрей Глаз</div>
                <div class="team-item-pos">Менеджер по продажам</div>

                <div class="team-item-contacts">
                  <div class="team-item-contact flex">
                    <div class="team-item-contact-label">e-mail:</div>
                    <div class="team-item-contact-value"><a href="mailto:info@vintovoy.com">info@vintovoy.com</a></div>
                  </div>

                  <div class="team-item-contact flex">
                    <div class="team-item-contact-label">моб.тел:</div>
                    <div class="team-item-contact-value"><a href="tel:+375293547887">+375 (29) 354-78-87</a>, доб.214</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="team-item flex">
              <div class="team-item-img"><nuxt-img preset="default" width="176" height="190" src="images/team/3.png" alt="Юлия Урбан" title="Юлия Урбан" loading="lazy"/></div>
              <div class="team-item-body">
                <div class="team-item-name">Юлия Урбан</div>
                <div class="team-item-pos">Руководитель отдела продаж</div>

                <div class="team-item-contacts">
                  <div class="team-item-contact flex">
                    <div class="team-item-contact-label">e-mail:</div>
                    <div class="team-item-contact-value"><a href="mailto:info@vintovoy.com">info@vintovoy.com</a></div>
                  </div>

                  <div class="team-item-contact flex">
                    <div class="team-item-contact-label">моб.тел:</div>
                    <div class="team-item-contact-value"><a href="tel:+375293547887">+375 (29) 354-78-87</a>, доб.202</div>
                  </div>

                  <div class="team-item-contact flex">
                    <div class="team-item-contact-label">skype</div>
                    <div class="team-item-contact-value"><a href=”Skype:elena-iv?chat”>elena-iv</a></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div><!--.col-->

        <div class="col-lg-6 col-xs-5">

          <div class="contacts-items">
            <div class="row">
              <div class="col-6 col-xs-12 col-md-6">
                <div class="contacts-item">
                  <div class="contacts-item-label">Телефон/факс:</div>
                  <div class="contacts-item-value"><a href="tel:+375336219632">+375 (33) 621-96-32</a></div>
                </div>
              </div>

              <div class="col-6 col-xs-12 col-md-6">
                <div class="contacts-item">
                  <div class="contacts-item-label">Email:</div>
                  <div class="contacts-item-value"><a href="mailto:tex@info.com">tex@info.com</a></div>
                </div>
              </div>

              <div class="col-6 col-xs-12 col-md-6">
                <div class="contacts-item">
                  <div class="contacts-item-label">Наш адрес:</div>
                  <div class="contacts-item-value">г.Минск, 1-й Твёрдый переулок, 11к3, пом.34</div>
                </div>
              </div>

              <div class="col-6 col-xs-12 col-md-6">
                <div class="contacts-item">
                  <div class="contacts-item-label">Время работы:</div>
                  <div class="contacts-item-value">ПН- ПТ 9:00 — 18:00</div>
                </div>
              </div>
            </div>
          </div><!--.contacts-items-->

          <GMap
            ref="gMap"
            class="contact-map"
            :options="{...mapOptions}"
            :center="{...mapCenter}"
            :zoom="15"
          >
            <GMapMarker
              :position="{...mapCenter}"
              title="Ljdsf"
              :options="{icon: {url: require('~/assets/images/pin.svg'), size: {width: 40,height: 40}, scaledSize: {width: 40,height: 40}}}"
            ></GMapMarker>
          </GMap>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapCenter: {
        lat:53.908665, lng:27.601528
      },
      mapOptions: {
        fullscreenControl: false,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false
      },
    }
  }
}
</script>

<style lang="scss">
.contacts {
  background: rgba(63, 82, 99, 0.2);
  padding: 60px 0px 56px;
}
.team-item {
  margin-bottom: 24px;
  color: #FFF;

  &-img {
    flex: 0 0 176px;
    max-width: 33.33%;
    margin-right: 24px;

    img {
      display: block;
    }
  }
  &-body {
    width: 100%;
  }
  &-name {
    color: #FFF;
    font-weight: 700;
    @include fz(25);
    line-height: 1;
    margin-bottom: 4px;
  }
  &-pos {
    margin-bottom: 25px;
    color: rgba(#FFF, .75);
  }
  &-contact {
    margin-bottom: 10px;
    line-height: 1.25;
    
    &-label {
      flex: 0 0 80px;
      max-width: 80px;
      padding-right: 10px;
    }
    &-value {
      color: #B7E6FF;
      a {
        color: #B7E6FF;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

.contacts-items {
  margin-bottom: 50px;
}
.contacts-item {
  margin-bottom: 25px;
  color: #B7E6FF;

  &-label {
    color: #FFF;
    font-weight: 700;
    @include fz(20);
    margin-bottom: 2px;
  }
  a {
    color: #B7E6FF;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}

.contact-map .GMap__Wrapper {
  height: 410px;
}
.contacts-map {
  height: 410px;
  background: #CCC;
  margin-bottom: 20px;
}

@media (max-width: 992px) {
  .contacts {
    padding-top: 35px;
    padding-bottom: 20px;
  }
  .team-item {
    margin-bottom: 40px;

    &-img {
      flex: 0 0 160px;
    }
    &-name {
      @include fz(20);
    }
    &-pos {
      margin-bottom: 18px;
    }
  }

  .contacts-items {
    margin-bottom: 15px;
  }
  .contacts-item {
    margin-bottom: 15px;

    &-label {
      @include fz(20);
    }
  }
  .contact-map .GMap__Wrapper,
  .contacts-map {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .contacts {
    @include fz(14);
  }
}

@media (max-width: 768px) and (min-width: 577px) {
  .team-item {
    margin-bottom: 24px;

    &-contact {
      display: block;

      &-label {
        max-width: 100%;
      }
    }
  }
}

@media (max-width: 576px) {
  .team-item {
    margin-bottom: 24px;

    &-img {
      flex: 0 0 115px;
    }
  }
}
</style>