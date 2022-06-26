<template>
<div class="main_page">
  <Carousel :value="BIG_SLIDER_IMAGES" :numVisible="1" :numScroll="1" :circular="true" :autoplayInterval="3000">
    <template #item='slotProps'>
<!--      <p style="margin: 0 auto;">{{slotProps.data.name}}</p>-->
      <div class="slider_wrapper">
        <img :src=" require('../assets/image/big-slider/' + slotProps.data.image)" alt="" class="img">
      </div>
    </template>
  </Carousel>
  <div class="panel_wrapper">
    <div class="panel_item1 wrap" id="WOK" @click="toCategory('WOK')">
      <p class="img_text">WOK</p>
      <img :src=" require('../assets/image/grid-panel/1.png')" alt="" class="image-panel">
    </div>
    <div class="panel_item2">
      <div class="panel_item2_sub_item1 wrap" id="Суші" @click="toCategory('Суші')">
        <p class="img_text">Суші</p>
        <img :src=" require('../assets/image/grid-panel/2.png')" alt="" class="image-panel">
      </div>
      <div class="panel_item2_sub_item2 wrap" id="Корн дог" @click="toCategory('Корн доги')">
        <p class="img_text">Корн дог</p>
        <img :src=" require('../assets/image/grid-panel/3.png')" alt="" class="image-panel">
      </div>
    </div>
    <div class="panel_item3 wrap" id="Піца" @click="toCategory('Піца')">
      <p class="img_text">Піца</p>
      <img :src=" require('../assets/image/grid-panel/4.png')" alt="" class="image-panel">
    </div>
    <div class="panel_item4 wrap" id="Акції" @click="toCategory('Акції')">
      <p class="img_text">Акції</p>
      <img :src=" require('../assets/image/grid-panel/5.png')" alt="" class="image-panel">
    </div>
  </div>
  <tab-slider />
  <about-us />
</div>
  <br><br>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TabSlider from '../components/tab-slider'
import AboutUs from '../components/about-us'

export default {
  name: 'main-page',
  components: {
    TabSlider,
    AboutUs
  },
  data () {
    return {
      // bigSliderItems: [
      //   { id: 1, name: 'car1', image: 'Rectangle-1.png' },
      //   { id: 2, name: 'car2', image: 'Rectangle-2.png' },
      //   { id: 3, name: 'car3', image: 'Rectangle-3.png' }
      // ]
    }
  },
  methods: {
    opp () {
      // this.NEW_OR_POPULAR()
    },
    ...mapActions([
      'GET_BIG_SLIDER_IMG_FROM_API',
      'PASS_TO_CATEGORY'
    ]),
    toCategory (id) {
      this.$router.push('/catalog')
      this.PASS_TO_CATEGORY(id)
      // this.data = ''
      console.log(id)
    }
  },
  mounted () {
    this.GET_BIG_SLIDER_IMG_FROM_API()
  },
  computed: {
    ...mapGetters([
      'BIG_SLIDER_IMAGES'
    ])
  }
}
</script>

<style scoped>
.slider_wrapper{
  width: 100%;
}
.img{
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
/deep/.p-link{
  display: none;
}
/deep/.p-carousel-indicator{
  font-size: 25px;
}
/deep/.p-carousel-indicator.p-highlight::marker{
  color: #FF9846;
}
/deep/.p-carousel-indicators.p-reset{
  gap: 15px;
}
.panel_wrapper{
  margin: 25px 0px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 170px 170px;
  gap: 20px;
}
.panel_item1{
  grid-area: 1/1/2/2;
}
.panel_item2{
  grid-area: 1/2/2/3;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 170px;
  gap: 10px;
}
.panel_item2_sub_item1{
  grid-area: 1/1/2/2;
}
.panel_item2_sub_item2{
  grid-area: 1/2/2/2;
}
.panel_item3{
  grid-area: 2/1/3/2;
}
.panel_item4{
  grid-area: 2/2/2/3;
}
.image-panel{
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  /*z-index: 1;*/
}
.wrap{
  opacity:1;
  position: relative;
}
.wrap:hover{
  opacity: 0.5;
  cursor: pointer;
}
.img_text{
  position:absolute;
  color: white;
  left: 10px;
  bottom: 10px;
  z-index: 5;
  font-size: 20px;
}
</style>
