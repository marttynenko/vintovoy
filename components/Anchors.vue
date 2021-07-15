<template>
  <div class="anchors ui-section">
    <div class="inner">
      <div class="row">
        <div class="col-6 col-sm-3">
          <a href="#" @click.prevent="scrollTo('#feedback')" class="anchors-item ui-btn ui-btn-flex">Подобрать винтовой компрессор</a>
        </div>

        <div class="col-6 col-sm-3">
          <a href="#" @click.prevent="scrollTo('#feedback')" class="anchors-item ui-btn ui-btn-flex">Подобрать передвижной компрессор</a>
        </div>

        <div class="col-6 col-sm-3">
          <a href="#" @click.prevent="scrollTo('#feedback')" class="anchors-item ui-btn ui-btn-flex">Подобрать поршневой компрессор</a>
        </div>

        <div class="col-6 col-sm-3">
          <a href="#" @click.prevent="scrollTo('#feedback')" class="anchors-item ui-btn ui-btn-flex">Подобрать запчасти</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    scrollTo: Function
  }
}
</script>

<style lang="scss">
.anchors {
  padding-top: 74px;
  padding-bottom: 58px;
  background: rgba(63, 82, 99, 0.2);

  &-item {
    @include fz($fontsize);
    margin-bottom: 16px;
    height: 64px;
  }
}

@media (max-width: 992px) {
  .anchors {
    padding-top: 40px;
    padding-bottom: 24px;

    &-item {
      padding: 0px 15px;
      height: 45px;
      @include fz(12);
    }
  }
}

@media (max-width: 768px) {
  .anchors {
    padding-top: 30px;
    padding-bottom: 14px;

    &-item {
      padding: 0px 5px;
    }
  }
}
</style>