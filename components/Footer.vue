<template>
  <footer id="footer" class="footer">
    <div class="inner">
      <div class="footer-top">
        <div class="row">
          <div class="col-footer-left">
            <div class="footer-logo">
              <img src="../assets/images/logo.svg" alt="Vintovoy - Винтовые компрессоры" title="Vintovoy - Винтовые компрессоры">
            </div>
            <div class="footer-media">
              <!-- <div class="footer-media-label">Мы в мессенджерах</div> -->
              <div class="footer-media-links">
                <a href="viber://pa?chatURI=pnevmoteh_by" class="footer-media-link" target="_balnk" rel="nofollow"><img src="../assets/images/viber.svg" alt="Мы в viber"></a>

                <a href="https://t.me/PnevmotehBYbot" class="footer-media-link" target="_balnk" rel="nofollow"><img src="../assets/images/telegram.svg" alt="Мы в telegram"></a>

                <!-- <a href="#" class="footer-media-link" target="_balnk" rel="nofollow"><img src="../assets/images/whatsapp.svg" alt="Мы в whatsapp"></a> -->
              </div>
            </div>
          </div>
          <div class="col-footer-right">
            <ul class="footer-menu">
              <li><a href="#" @click.prevent="scrollTo('.manufacters')">Производители</a></li>
              <li><a href="#" @click.prevent="scrollTo('#contacts_wrap')">Контакты</a></li>
              <li><a href="#" @click.prevent="scrollTo('.whyus')">Почему мы</a></li>
              <li><a href="#" @click.prevent="scrollTo('#catalog_wrap')">Каталог</a></li>
              <li><a href="#" @click.prevent="scrollTo('#section-payment')">Оплата и доставка</a></li>
              <li><a href="#">Наши клиенты</a></li>
              <li><a href="#" @click.prevent="scrollTo('#feedback')">Побор оборудования</a></li>
              <li><a href="#">Как заказать</a></li>
              <li><a href="#" @click.prevent="scrollTo('.map-videos .videos')">Запуски винтовых</a></li>
            </ul>
          </div>
        </div>
      </div><!--.footer-top-->

      <div class="footer-bottom">
        <div class="row">
          <div class="col-footer-left">
            <div class="footer-contacts">
              <div class="footer-contacts-phone"><a href="tel:+375336219632">+375 (33) 621-96-32</a></div>
              <a href="mailto:info@vintovoy.by" class="ui-btn">Обратная связь</a>
            </div>
          </div>

          <div class="col-footer-right">
            <div class="row">
              <div class="col-xs-4">
                <div class="footer-adress">г.Минск, 1-й Твёрдый переулок, 11к3</div>
              </div>

              <div class="col-xs-4 col-footer-adres">
                <div class="footer-adress">
                  Офис: <br>
                  пн-пт 8:00 - 18:00<br>
                  сб 9:30 - 16:30<br>
                  вс 10:00 - 15:00
                </div>
              </div>

              <div class="col-xs-4">
                <div class="footer-adress">
                  Склад: <br>
                  пн-пт 9:00 - 18:00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><!--.footer-bottom-->
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    scrollTo: Function
  }
}
</script>

<style lang="scss">
footer.footer {
  background: linear-gradient(103.96deg, #2B3A46 -1.2%, #171F26 101.32%);
  padding-top: 70px;
  padding-bottom: 60px;
}

.col-footer-left {
  flex: 0 0 30%;
  max-width: 30%;
}
.col-footer-right {
  flex: 0 0 70%;
  max-width: 70%;
}

.footer {
  &-top {
    border-bottom: 1px solid rgba(#6D7D8A,.1);
    padding-bottom: 25px;
    margin-bottom: 25px;
  }

  &-logo {
    margin-bottom: 28px;
  }

  &-menu {
    font-size: 0;
    margin-left: -$col_gutter;
    margin-right: -$col_gutter;

    li {
      display: inline-block;
      vertical-align: top;
      width: 33.33%;
      padding-left: $col_gutter;
      padding-right: $col_gutter;
      margin-bottom: 10px;
    }
    a {
      @include fz($fontsize);
      font-weight: 700;
      color: #FFF;

      &:hover {
        color: $primary;
      }
    }
  }

  &-jur {
    max-width: 255px;
    @include fz(13);
  }

  &-contacts {
    &-phone {
      position: relative;
      font-weight: 600;
      @include fz(18);
      margin-bottom: 15px;
      padding-left: 24px;

      &:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 13px;
        height: 22px;
        background: url(~assets/images/footer-phone.svg) center no-repeat;
        background-size: contain;
      }

      a {
        color: #FFF;

        &:hover {
          color: $primary;
        }
      }
    }
  }
  &-adres {
    padding-right: 15px;
  }

  &-media {
    &-label {
      font-weight: 700;
      color: #FFF;
      margin-bottom: 10px;
    }
    &-link {
      display: inline-block;
      vertical-align: middle;
      margin-right: 10px;
      margin-bottom: 5px;
    }
  }
}

@media (max-width: 992px) and (min-width: 576px) {
  // .footer-bottom {
  //   .col-footer-right {
  //     flex: 0 0 100%;
  //     max-width: 100%;
  //   }
  //   .col-footer-left {
  //     order: 1;
  //     flex: 0 0 100%;
  //     max-width: 100%;
  //   }
  // }
  // .footer-jur {
  //   max-width: 100%;
  //   text-align: center;
  //   padding-top: 20px;
  //   margin-top: 25px;
  //   border-top: 1px solid rgba(109, 125, 138, 0.1);
  // }
}


@media (max-width: 992px) {
  footer.footer {
    padding-top: 50px;
    padding-bottom: 20px;
    @include fz(14);
  }
  // .footer-contacts-phone {
  //   padding-left: 24px;
  //   @include fz(18);

  //   &:before {
  //     left: 0px;
  //   }
  // }
  // .footer-logo {
  //   margin-bottom: 18px;
  // }
  // .footer-logo,
  // .footer-paids {
  //   padding-right: 25px;
  // }
  .footer-menu {
    a {
      @include fz(14);
    }
  }

  .col-footer-left,
  .col-footer-right {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .col-footer-left {
    text-align: center;
  }
  .footer-logo {
    margin-bottom: 25px;
  }
  .footer-media {
    border-top: 1px solid rgba(109, 125, 138, 0.1);
    border-bottom: 1px solid rgba(109, 125, 138, 0.1);
    padding-top: 15px;
    padding-bottom: 10px;
    margin-bottom: 25px;
  }
  .footer-contacts {
    margin-bottom: 25px;
    max-width: 195px;
    margin-left: auto;
    margin-right: auto;

    .ui-btn {
      display: block;
      width: 100%;
    }
  }
  .footer-bottom {
    .col-footer-left {
      margin-bottom: 25px;
      position: relative;

      &:after {
        content: "";
        position: absolute;
        left: 8px;
        right: 8px;
        height: 1px;
        bottom: 0px;
        background: rgba(109, 125, 138, 0.1);
      }
    }
  }
}

@media (max-width: 700px) {
  .footer-menu {
    li {
      width: 50%;
    }
  }
}

@media (max-width: 576px) {
  footer.footer {
    padding-top: 36px;
  }
  .footer-menu {
    li {
      margin-bottom: 12px;
    }
  }
  
  .footer-media-label {
    display: none;
  }
  .footer-media-link {
    width: 40px;
    height: 40px;
    margin: 0px 9px 5px;

    img {
      width: 100%;
    }
  }
  .footer-bottom {
    .col-xs-4 {
      margin-bottom: 5px;
    }
  }
}


</style>