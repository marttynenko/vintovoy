<template>
  <div class="videos">
    <h4 class="videos-title">Видео</h4>
    <div class="videos-list">
      <div class="videos-slide"
        v-for="(item,index) in limitedVideo"
        :key="index"
        :data-slide="index"
      >
        <div class="videos-item" @click.prevent="showVideo(item.video)">
          <div class="videos-item-preview">
            <img :src="getYoutubePreview(item.video)" :alt="item.title" :title="item.title" loading="lazy">
          </div>
          <div class="videos-item-title">{{item.title}}</div>
        </div>
      </div>
    </div>

    <popup :videoid="currentVideo" :videoClose="closePlayer" v-if="isPlayer"></popup> 
  </div>
</template>

<script>
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export default {
  components: {
    popup: () => import('~/components/VideoPopup')
  },
  props: {
    videos: Array
  },
  data() {
    return {
      isPlayer: false,
      currentVideo: ''
    }
  },
  computed: {
    limitedVideo() {
      const arr = []
      for (let i = 0; i < 3; i++) {
        const rnd = randomInteger(0, this.videos.length)
        arr.push(this.videos[rnd])
      }
      return arr
    }
  },
  methods: {
    getYoutubePreview(videoID) {
      return `//img.youtube.com/vi/${videoID}/mqdefault.jpg`
      //img.youtube.com/vi/JMJXvsCLu6s/mqdefault.jpg
    },
    showVideo(videoID) {
      this.currentVideo = videoID
      this.isPlayer = true
      this.togglePopup('open')
    },
    closePlayer() {
      this.isPlayer = false
      this.togglePopup('close')
    },
    togglePopup(status) {
      if (status == 'open') {
        document.documentElement.classList.add('hidden')
      } else if (status == 'close') {
        document.documentElement.classList.remove('hidden')
      }
    }
  }
}
</script>

<style lang="scss">
.videos {
  &-title {
    margin-bottom: 40px;
    @include fz(28);
    font-weight: 600;
    position: relative;
    padding-left: 52px;
    color: #FFF;

    &:before {
      content: "";
      position: absolute;
      left: 0px;
      top: 2px;
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background: $primary;
    }
    &:after {
      content: "";
      position: absolute;
      left: 13px;
      top: 12px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px 0 5px 8px;
      border-color: transparent transparent transparent #FFF;
    }
  }
}
.videos-list {
  white-space: nowrap;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
}
.videos-list::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
.videos-slide {
  display: inline-block;
  width: 320px;
  width: calc((1175px - 48px) / 3);
  min-width: 224px;
  vertical-align: top;
  margin-right: 24px;
  scroll-snap-align: start;

  @media (max-width: 992px) {
    width: 288px;
  }
  @media (max-width: 768px) {
    width: 224px;
  }
}
.videos-item {
  white-space: normal;
  margin-bottom: 20px;
  cursor: pointer;

  &-preview {
    position: relative;

    img {
      width: 100%;
      pointer-events: none;
      display: block;
    }
    &:before {
      content: "";
      position: absolute;
      width: 50px;
      height: 50px;
      border-radius: 25px;
      left: 0px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      margin: auto;
      background: #FFF;
    }
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 4px;
      top: 0px;
      bottom: 0px;
      right: 0px;
      margin: auto;
      border-style: solid;
      border-width: 7px 0 7px 12px;
      border-color: transparent transparent transparent $primary;

    }
  }

  &-title {
    background: $primary;
    @include fz(14);
    color: #FFF;
    padding: 15px 25px;
    font-weight: 600;
    min-height: 66px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 992px) {
      padding: 10px 15px;
      min-height: 56px;
    }
  }
}
</style>