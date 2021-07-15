<template>
  <div class="drop-menu">
    <div class="drop-menu-close" @click.prevent="toggleMenu"></div>
    <ul class="drop-menu-menu" v-if="isMobile">
      <li><a href="#" @click.prevent="scrollTo('#section-payment')">Оплата и рассрочка</a></li>
      <li><a href="#" @click.prevent="scrollTo('#section-delivery')">Доставка</a></li>
      <li><a href="#" @click.prevent="scrollTo('#contacts_wrap')">Контакты</a></li>
      <li><a href="#" @click.prevent="scrollTo('#feedback')">Подбор</a></li>
    </ul>

    <div class="drop-menu-contacts">
      <div class="drop-menu-phone"><a href="tel:+375336219632">+375 (33) 621-96-32</a></div>
      <div class="drop-menu-mail"><a href="mailto:info@vintovoy.by">info@vintovoy.by</a></div>
      <a href="#" class="ui-btn ui-btn-block">Подобрать аналог</a>
    </div>

    <div class="drop-menu-adres">
      <div>г.Минск, 1-й Твёрдый переулок, 11к3</div>
      <div>Пн - Пт 9:00 - 18:00</div>
    </div>

    <div class="drop-menu-media">
      <div class="drop-menu-media-label">Мы в мессенджерах</div>
      <div class="drop-menu-media-items">
        <a href="viber://pa?chatURI=pnevmoteh_by" class="drop-menu-media-link" target="_blank" rel="nofollow"><img src="../assets/images/viber.svg" alt="viber"></a>

        <a href="https://t.me/PnevmotehBYbot" class="drop-menu-media-link" target="_blank" rel="nofollow"><img src="../assets/images/telegram.svg" alt="telegram"></a>

        <!-- <a href="#" class="drop-menu-media-link" target="_blank" rel="nofollow"><img src="../assets/images/whatsapp.svg" alt="whatsapp"></a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMobile: Boolean,
    toggleMenu: Function
  },
  methods: {
    scrollTo(selector){
      if (!document.querySelector(selector)) return
      document.querySelector('#footer').scrollIntoView()
      setTimeout(() => {
        document.querySelector(selector).scrollIntoView()
      }, 110);
    },
  }
}
</script>

<style lang="scss">
.drop-menu {
  position: absolute;
  right: 0px;
  top: 100%;
  margin-top: 5px;
  width: 240px;
  padding: 30px 32px;
  background: #26333e;
  z-index: 101;
  box-shadow: 0px 0px 20px -1px rgba(34,39,44,0.5);

  &-close {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: url(~assets/images/close.svg) center no-repeat;
    background-size: 12px;
    opacity: 0.35;

    &:hover {
      opacity: 1;
    }
  }

  &-menu {
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
    padding-bottom: 10px;
    font-weight: 600;

    li {
      margin-bottom: 10px;
    }
    a {
      color: #FFF;

      &:hover {
        color: $primary;
      }
    }
  }

  &-contacts {
    margin-bottom: 20px;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  &-phone {
    @include fz(18);
    margin-bottom: 3px;
    font-weight: 600;
  }
  &-mail {
    margin-bottom: 10px;
    @include fz(14);

    a {
      color: rgba(#FFF, .75);
    }
  }

  &-adres {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 20px;
    padding-bottom: 15px;
    @include fz(14);

    div {
      padding-bottom: 5px;
    }
  }

  &-media {
    text-align: center;
    &-label {
      font-weight: 600;
      color: #FFF;
      margin-bottom: 5px;
    }
    &-items {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-link {
      width: 32px;
      margin: 0px 10px;

      img {
        width: 100%;
      }
    }
  }
}
</style>