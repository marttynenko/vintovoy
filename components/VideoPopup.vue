<template>
  <div>
    <div class="popup-video-bg"></div>
    <div class="popup-video-wrap">
      <div class="popup-video-container">
        <div class="popup-video-content">
          <div class="popup-video">
            <div class="popup-video-close" @click.prevent="videoClose"></div>
            <div class="popup-video-player" v-html="player"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoid: String,
    videoClose: Function
  },
  computed: {
    player() {
      return `<iframe width="100" height="315" src="https://www.youtube.com/embed/${this.videoid}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
  }
}
</script>

<style lang="scss">

.popup-video {
  position: relative;
  width: 94%;
  max-width: 900px;
  margin: 20px auto;

  &-bg {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #212c35;
    opacity: 0.95;
  }
  &-wrap {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1043;
    position: fixed;
    outline: none !important;
    backface-visibility: hidden;
    overflow: hidden auto;
    z-index: 9999;
  }
  &-container {
    text-align: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    padding: 0;
    box-sizing: border-box;

    &:before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
  &-content {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin: 0 auto;
    text-align: left;
    z-index: 1045;
    width: 100%;
  }
  &-player {
    position: relative;
    height: 0px;
    padding-top: 56.25%;

    iframe {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
  &-close {
    position: absolute;
    right: -44px;
    top: 0px;
    width: 34px;
    height: 34px;
    cursor: pointer;
    z-index: 9;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      top: 50%;
      margin-top: -1px;
      height: 2px;
      background: #FFF;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:hover {
      &:before,
      &:after {
        background: $primary;
      }
    }
  }

  @media (max-width: 992px) {
    margin-top: 50px;

    &-close {
      right: 0px;
      top: -44px;
    }
  }
}
</style>