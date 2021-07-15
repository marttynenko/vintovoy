<template>
  <div class="map">
    <h3 class="ui-title">Наши компрессоры работают по всей Беларуси</h3>
    <GMap
      ref="gMap"
      :options="{...mapOptions, styles: mapStyle}"
      :center="{...mapCenter}"
      :zoom="7"
    >
    <GMapMarker
      v-for="(pin,index) in pins"
      :key="index"
      :position="{lat: pin.coords[0], lng: pin.coords[1]}"
      :options="{icon: {url: require('~/assets/images/pin.svg'), size: {width: 30,height: 30}, scaledSize: {width: 30,height: 30}}}"
      @click="checkOpenedInfo(index)"
    >
      <GMapInfoWindow :options="{maxWidth: 300}">
        <div class="map-popup">
          <div class="map-popup-city">{{pin.city}}</div>
          <div class="map-popup-title">{{pin.title}}</div>
          <div class="map-popup-img" @click.prevent="showVideo(pin.video)">
            <img :src="getYoutubePreview(pin.video)" :alt="pin.title">
          </div>
          <div class="map-popup-label">Запуск нашего компрессора у клиента</div>
        </div>
      </GMapInfoWindow>
    </GMapMarker>
    </GMap>


    <popup :videoid="currentVideo" :videoClose="closePlayer" v-if="isPlayer"></popup>
  </div>
</template>

<script>
// import popup from '~/components/VideoPopup'

export default {
  name: "Map",
  props: {
    pins: Array
  },
  components: {
    popup: () => import('~/components/VideoPopup')
  },
  data() {
    return {
      prevPin: undefined,
      isPlayer: false,
      currentVideo: '',
      mapCenter: {
        lat: 53.793562, lng:27.870082
      },
      mapOptions: {
        fullscreenControl: false,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false
      },
      mapStyle: [{
        "stylers": [
            {
              // "hue": "#ff1a00"
              "hue": "#27343E"
            },
            {
              "invert_lightness": true
            },
            {
              "saturation": -110
            },
            {
              "lightness": 30
            },
            {
              "gamma": 0.6
            }
          ]},{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                  // "color": "#75B5EE"
                  "color": "#777777"
                }
            ]
          },{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                // "color": "#1B1B1B"
                "color": "#27343E"
              }
          ]
        }
      ]
    }
  },
  methods: {
    //закрываем открытое инфоокно
    checkOpenedInfo(index) {
      if (this.prevPin) {
        this.$refs.gMap.markers[this.prevPin].infoWindow.close()
      }
      this.prevPin = index
    },
    getYoutubePreview(videoID) {
      return `//img.youtube.com/vi/${videoID}/mqdefault.jpg`
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
.map {
  margin-bottom: 40px;
}
.GMap__Wrapper {
  height: 750px;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 576px) {
    height: 380px;
  }
}
.gm-style .gm-style-iw-c {
  background: transparent;
  padding: 0px !important;
  border-radius: 0px;
  color: #FFF;
  @include fz(16);
  font-family: $basefont;
  box-shadow: none;
}
.gm-style .gm-style-iw-t::after {
  background: $primary;
  box-shadow: none;
}
.gm-style .gm-style-iw-d::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
button.gm-ui-hover-effect {
  color: #FFF;
  background: #FFF !important;
  top: 0px !important;
  right: 0px !important;
  outline: none;

  img {
    width: 100% !important;
    height: 100% !important;
    margin: 0px !important;
  }

}
.map-popup {
  @include fz(16);
  width: 300px;
  max-width: 100%;

  &-title {
    margin-bottom: 8px;
    font-weight: 600;
    padding-right: 40px;
  }
  &-city {
    font-weight: 600;
    margin-bottom: 2px;
    padding-right: 40px;
  }
  &-img {
    position: relative;
    min-height: 100px;
    position: relative;
    background: #222;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
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
      border-color: transparent transparent transparent #205EA4;
    }
  }
  &-label {
    @include fz(14);
    background: $primary;
    padding: 10px 10px;
  }
  
}
</style>