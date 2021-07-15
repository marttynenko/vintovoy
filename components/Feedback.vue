<template>
  <div class="ui-section feedback" id="feedback">
    <div class="inner">
      <div class="feedback-form">
        <div class="ui-title">Подобрать компрессор</div>
        <form>

          <div class="row">
            <div class="col-xs-6">
              <div class="ui-field">
                <input type="text" class="ui-input" name="name" placeholder="Ваше имя" v-model="form.name">
              </div>
            </div>

            <div class="col-xs-6">
              <div class="ui-field">
                <input type="tel" class="ui-input" name="phone" placeholder="Контактный телефон*" v-model="form.phone">
              </div>
            </div>

            <div class="col-xs-6">
              <div class="ui-field">
                <input type="text" class="ui-input" name="power" placeholder="Мощность, кВ" v-model="form.power">
              </div>
            </div>

            <div class="col-xs-6">
              <div class="ui-field">
                <input type="text" class="ui-input" name="productivity" placeholder="Производительность, м3/мин" v-model="form.productivity">
              </div>
            </div>

            <div class="col-xs-6">
              <div class="ui-field">
                <input type="text" class="ui-input" name="presure" placeholder="Рабочее давление, бар" v-model="form.presure">
              </div>
            </div>

            <div class="col-xs-6">
              <div class="ui-field">
                <input type="text" class="ui-input" name="scope" placeholder="Сфера применения" v-model="form.scope">
              </div>
            </div>

            <div class="col-xs-6">
              <div class="ui-field">
                <label for="agree" class="ui-checkbox">
                  <input type="checkbox" name="agree" v-model="agree" id="agree">
                  <div class="ui-checkbox-txt">Я согласен(а) на обработку моих персональных данных. <a href="#">Пользовательское соглашение</a></div>
                </label>
              </div>
            </div>

          </div>

          <div class="ui-centered">
            <button class="ui-btn ui-btn-big ui-btn-white" :disabled="!agree">Отправить</button>
          </div>

          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agree: false,
      form: {
        name: '',
        phone: '',
        power: '',
        productivity: '',
        presure: '',
        scope: ''
      }
    }
  },
  methods: {
    submit() {

    }
  }
}
</script>

<style lang="scss">
.feedback {
  &-form {
    background: $primary;
    padding: 50px 100px 60px;

    @media (max-width: 992px) {
      padding: 30px 59px;
    }
    @media (max-width: 480px) {
      padding: 30px 45px;
      margin-left: -15px;
      margin-right: -15px;
    }

    .ui-checkbox {
      @include fz(14);

      a {
        text-decoration: underline;
      }
    }
  }
}
</style>