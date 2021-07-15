<template>
  <div class="to-top" @click="scrollTop"></div>
</template>

<script>
export default {
  name: "toTop",
  methods: {
    scrollTop() {
      if (!window) return
      window.scrollTo({
        top: 0
      });
    }
  }
}
</script>

<style lang="scss">
  .to-top {
    position: fixed;
    z-index: 9;
    width: 40px;
    height: 40px;
    right: 15px;
    bottom: 15px;
    border: 1px solid #FFF;
    border-radius: 50%;
    background: rgba(#FFF,.05);
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      margin: auto;
      width: 20px;
      height: 20px;
      background: url(~assets/images/arrow-next.svg) center no-repeat;
      background-size: contain;
      transform: rotate(-90deg);
    }
  }
</style>