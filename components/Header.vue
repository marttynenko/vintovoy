<template>
  <header class="header">
    <div class="inner">
      <div class="flex valign-center align-justify">

        <div class="header-logo logo"><img src="~/assets/images/logo.svg" alt="Vintovoy - Винтовые компрессоры"></div>

        <nav class="header-menu" v-if="!isMobile">
          <ul>
            <li><a href="#" @click.prevent="scrollTo('#section-payment')">Оплата и рассрочка</a></li>
            <li><a href="#" @click.prevent="scrollTo('#section-delivery')">Доставка</a></li>
            <li><a href="#" @click.prevent="scrollTo('#contacts_wrap')">Контакты</a></li>
            <li><a href="#" @click.prevent="scrollTo('#feedback')">Подбор</a></li>
          </ul>
        </nav>

        <div class="header-contacts" v-if="windowWidth > 576">
          <div class="header-contacts-phone"><a href="tel:+375336219632">+375 (33) 621-96-32</a></div>
          <a href="mailto:info@vintovoy.by" class="header-contacts-mail">info@vintovoy.by</a>
        </div>

        <a href="#" class="header-contacts-btn ui-btn" v-if="windowWidth > 992" @click.prevent="scrollTo('#feedback')">Подобрать аналог</a>

        <div class="header-drop-toggler" v-if="isMobile" @click.prevent="toggleMenu" :class="{opened: isDrop}">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>

        <DropMenu :isMobile="isMobile" :toggleMenu="toggleMenu" v-if="isDrop"></DropMenu>
      </div>
    </div>
  </header>
</template>

<script>
import DropMenu from '~/components/DropMenu'

export default {
  components: {
    DropMenu
  },
  props: {
    scrollTo: Function
  },
  data() {
    return {
      windowWidth: undefined,
      isDrop: false
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
      // console.log('resize')
    },
    toggleMenu() {
      this.isDrop = !this.isDrop
    }
  },
  computed: {
    isMobile() {
      if (this.windowWidth < 1205) {
        return true
      }
      return false
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  }
}
</script>

<style lang="scss">
  header.header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 30px;
    padding-bottom: 30px;

    .flex {
      position: relative;
    }
  }
  .header-logo {
    padding-right: 25px;
  }
  .header-menu {
    font-weight: 600;

    li {
      display: inline-block;
      vertical-align: middle;
      margin-right: 25px;
    }
    a {
      &:hover {
        color: $blue;
        text-decoration: none;
      }
    }
  }
  .header-contacts {
    text-align: center;
    flex: 0 0 190px;

    &-btn {
      overflow: visible;
      text-overflow: unset;
    }

    &-phone {
      display: inline-block;
      position: relative;
      // padding-right: 18px;
      @include fz(20);
      font-weight: 600;
      line-height: 1;

      // &:after {
      //   content: "";
      //   position: absolute;
      //   right: 0px;
      //   top: calc(0.5em - 3px);
      //   width: 12px;
      //   height: 6px;
      //   background: url(~assets/images/toggler.svg) center no-repeat;
      //   background-size: contain;
      // }
    }
    &-mail {
      color: rgba($link, 0.5);
      @include fz(14);
    }
  }

  .header-drop-toggler {
    position: relative;
    width: 36px;
    flex: 0 0 36px;
    height: 24px;
    cursor: pointer;

    .line {
      height: 2px;
      background: #FFF;
      position: absolute;
      left: 0px;
      width: 100%;
      top: 50%;
      margin-top: -1px;
      transition: transform .1s;

      &-1 {
        transform: translate(0, -9px);
      }
      &-3 {
        transform: translate(0, 9px);
      }
    }
    &.opened {
      .line {
        transform: translate(0, 0);
      }
    }
  }

  @media (max-width: 1205px) {
    .header-logo {
      width: 100%;
    }
    .header-menu {
      display: none;
      visibility: hidden;
    }
    .header-contacts {
      margin-right: 35px;

      &-btn {
        margin-right: 35px;
      }
    }
  }

  @media (max-width: 992px) {
    .header-contacts-btn {
      display: none;
      visibility: hidden;
    }
  }

  @media (max-width: 768px) {
    header.header {
      padding: 20px 0px;
    }
    .header-contacts {
      margin-right: 30px;
      flex: 0 0 175px;

      &-phone {
        @include fz(18);
      }
    }
    .header-logo {
      img {
        display: block;
        width: 190px;
      }
    }
  }
</style>