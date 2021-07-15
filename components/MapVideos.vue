<template>
  <div class="map-videos ui-section">
    <Map :pins="videos"></Map>
    <div class="inner">
      <Videos :videos="videos"></Videos>
    </div>
  </div>
</template>

<script>
import Videos from '~/components/Videos'
import Map from '~/components/Map'

export default {
  components: {Videos, Map},
  data() {
    return {
      videos: [
        {city: 'Фаниполь', title: 'Компрессор винтовой SB 37-08', video: 'vVZzWZkj_u4', coords: [53.745078, 27.334512]},
        {city: 'Логойск', title: 'Компрессор винтовой LB 22-10/500', video: 'rEaWFM34am4', coords: [54.200407, 27.847504]},
        {city: 'Новоселье', title: 'Компрессор винтовой SPINN 11 8 400/50 TM500 CE', video: 'oM28UWtV8Qg', coords: [53.915804, 27.195561]},
        {city: 'Квасовка', title: 'Компрессор винтовой GENESIS 1110-500', video: '6w7FVjK8Qds', coords: [53.515065, 23.997172]},
        {city: 'Минск', title: 'Компрессор винтовой SB 15-08', video: 'nOFNSsPzEtQ', coords: [53.902284, 27.561831]},
        {city: 'Новополоцк', title: 'Компрессор винтовой SB 15-08', video: 'nOFNSsPzEtQ', coords: [55.535289, 28.645541]},
        {city: 'Витебск', title: 'Компрессор винтовой SB 37-08', video: 'vVZzWZkj_u4', coords: [55.184217, 30.202878]},
        {city: 'Тимковичи', title: 'Компрессор винтовой MD 55-08', video: '6BiJMSivVRk', coords: [53.074023, 26.996952]},
        {city: 'Сморгонь', title: 'Компрессор винтовой LB 18.5-08/500', video: 'jX37nacgkOQ', coords: [54.481658, 26.402609]},
        {city: 'Полоцк', title: 'Винтовой компрессор Berg ВК-11РО-500 - 10 бар', video: '2WdvWsVWz5g', coords: [55.485576, 28.768349]},
        {city: 'Хильчицы', title: 'Компрессор винтовой SPINN.E 5.510-200 ST', video: '4YJ9iBjg728', coords: [52.030832, 27.640155]},
        {city: 'Могилев', title: 'Компрессор винтовой MD 45-08', video: 'g5XoP0hJHO0', coords: [53.894548, 30.330654]},
        {city: 'Дзержинск', title: 'Винтовой компрессор FROSP SC 5C-10', video: 'YgUgMvxGVZM', coords: [53.685209, 27.131502]},
        {city: 'Брест', title: 'Компрессор винтовой XB 22-10', video: 'rEaWFM34am4', coords: [52.094246, 23.684568]},
        {city: 'Лида', title: 'Компрессор винтовой SB 15-08', video: 'nOFNSsPzEtQ', coords: [53.891667, 25.302254]},
        {city: 'Чуриловичи', title: 'Винтовой компрессор FROSP SC 5C-8', video: 'YgUgMvxGVZM', coords: [53.747032, 27.569844]},
        {city: 'Боровляны', title: 'Винтовой компрессор FROSP SC 5C-8', video: 'YgUgMvxGVZM', coords: [53.994455, 27.672530]},
        {city: 'Богушевск', title: 'Компрессор винтовой XB 7,5-08', video: 'Cz775ueTcw4', coords: [54.840832, 30.211744]},
        {city: 'Гродно', title: 'Компрессор винтовой XB 18.5-10', video: 'I6krsXDkj8A', coords: [53.677839, 23.829529]},
        {city: 'Новоселье', title: 'SPINN 15E 10 400/50 TM500 CE', video: '2CegNTuGxWU', coords: [53.904854, 27.171770]},
        {city: 'Александрия', title: 'Компрессор винтовой XB 15-08', video: 'DIn9XexhBkc', coords: [54.331541, 30.282603]},
        {city: 'Новый двор', title: 'Компрессор винтовой XB 15-10', video: 'DIn9XexhBkc', coords: [53.813185, 27.659574]},
        {city: 'Лунинец', title: 'Компрессор винтовой XB 18,5-08', video: 'FllE9OhK84c', coords: [52.245833, 26.800940]},
        {city: 'Любань', title: 'Компрессор винтовой LB 22-08/500', video: 'gps_1QHNjvc', coords: [52.793028, 27.990570]},
        {city: 'Пинск', title: 'Компрессор винтовой COMARO XB 15 - 10 бар', video: 'CCWGaH78SnY', coords: [52.130427, 26.051101]},
        {city: 'Лепель', title: 'Компрессор винтовой FROSP SC 5C-10', video: 'YgUgMvxGVZM', coords: [54.886715, 28.694005]},
        {city: 'Солигорск', title: 'Компрессор винтовой COMARO LB NEW 22 / 500 - 8 бар', video: '6Ur5hWKBDs0', coords: [52.772198, 27.531182]},
        {city: 'Толочин', title: 'Компрессор винтовой COMARO XB 7,5 - 8 бар', video: 'WV50Gf4Arhg', coords: [54.407232, 29.703998]},
        {city: 'Бобруйск', title: 'Компрессор винтовой COMARO MD NEW 45 - 8 бар.', video: 'g5XoP0hJHO0', coords: [53.155332, 29.181273]},
        {city: 'Минск', title: 'Компрессор ВК-11Р(10 бар)', video: '2WdvWsVWz5g', coords: [53.889950, 27.512057]},
        {city: 'Минск', title: 'Компрессор FROSP SC 15C-8', video: '6HfIuGr3x6c', coords: [53.923314, 27.478538]},
        {city: 'Минск', title: 'Компрессор винтовой SB 11-10', video: 'wuio2tpqw-M', coords: [53.882312, 27.423949]},
        {city: 'Минск', title: 'Винтовой компрессор COMARO SB 30-10 бар', video: 'O1PMAhg86xM', coords: [53.915965, 27.586039]},
        {city: 'Минск', title: 'Компрессор винтовой GENESIS 2208-500', video: 'P3KsQoSYsaA', coords: [53.885989, 27.653556]}
      ]
    }
  }
}
</script>