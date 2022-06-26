<template>
  <div class="product_page">
    <div class="product_wrapper">
      <div class="product_page_img_wrapper">
        <img v-if="productPageData.image" :src=" require('../assets/image/products/' + productPageData.image)" class="product_page_img">
      </div>
      <div class="product_info">
        <div>
          <p class="product_info_name">{{ productPageData.name }}</p>
          <p class="product_info_name_mass">{{ productPageData.amount }}</p>
        </div>
        <div class="product_info_composition_wrapper">
          <p class="product_info_composition_title">Склад:</p>
          <p class="product_info_composition_description">{{ productPageData.ingredient }}</p>
        </div>
        <div class="prise_section">
          <p class="cart_item_prise">{{ productPageData.prise }} грн</p>
          <button @click="addToCart" class="cart_item_prise_btn">Добавить в корзину</button>
        </div>
      </div>
    </div>
    <div class="product_page_slider">
      <p class="product_page_slider_title">Рекомендуємо до цього товару</p>
      <Carousel :value="slider_items" :numVisible="3" :numScroll="1" :circular="true">
        <template #item="slotProps">
          <div class="product_page_slider_item">
            <img :src=" require('../assets/image/product-page-slider/' + slotProps.data.image)" alt="">
            <p class="product_page_slider_item_title">{{ slotProps.data.name }}</p>
            <p class="prise">{{ slotProps.data.prise }} грн</p>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'product-page',
  data () {
    return {
      slider_items: [
        { name: 'Філадельфія', image: '1.png', prise: 140 },
        { name: 'Банзай', image: '2.png', prise: 170 },
        { name: 'Арігато', image: '3.png', prise: 180 },
        { name: 'Філадельфія 2.0', image: '4.png', prise: 145 },
        { name: 'Банзай 2.0', image: '5.png', prise: 175 },
        { name: 'Арігато 2.0', image: '6.png', prise: 185 },
        { name: 'Скумбрія 2.0', image: '5.png', prise: 175 },
        { name: 'Банзай', image: '2.png', prise: 170 },
        { name: 'Арігато', image: '3.png', prise: 180 }
      ]
    }
  },
  props: {
  },
  computed: {
    ...mapGetters([
      'ALL_PRODUCTS'
    ]),
    productPageData () {
      let result = {}
      const vm = this
      this.ALL_PRODUCTS.map(function (item) {
        if (item.article === vm.$route.query.product) {
          result = item
        }
      })
      return result
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart () {
      this.ADD_TO_CART(this.productPageData)
      // this.$emit('deleteFromCart', this.cart_item_data)
    }
  }
  // mounted () {
  //   this.GET_PRODUCTS_FROM_API()
  // }
}
</script>

<style scoped>
.product_wrapper{
  display: flex;
  margin-bottom: 30px;
}
.product_page_img_wrapper{
  width:50%;
  height: 300px;
}
.product_page_img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.product_info{
  background: white;
  width:45%;
  padding: 10px 30px 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.product_info_name{
  font-size: 38px;
  font-weight: 500;
}
.product_info_name_mass{
  font-weight: 300;
  font-size: 16px;
  color: #FF9846;
}
.product_info_composition_title{
  font-weight: 700;
  margin-bottom: 7px;
}
.product_info_composition_description{
  font-weight: 300;
  font-size: 16px;
  color: #111111;
}
.prise_section{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cart_item_prise{
  font-weight: 700;
  font-size: 20px;
  color: #111111;
}
.cart_item_prise_btn{
  background: #FF9846;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  color: white;
  font-weight: normal;
  font-size: 14px;
}
.cart_item_prise_btn:hover{
  background: #FF4000;
  cursor: pointer;
}
.product_page_slider_item{
  /*width: 30%;*/
}
.product_page_slider_item{
  display: flex;
  flex-direction: column;
  align-items: center;
}
/deep/.p-link{
  /*display: none;*/
  border: none;
  background: none;
  font-size: 1.5rem;
}
/deep/.p-carousel-indicator{
  font-size: 25px;
  display: none;
}
/deep/.p-carousel-indicator.p-highlight::marker{
  color: #FF9846;
}
/deep/.p-carousel-indicators.p-reset{
  gap: 15px;
}
.product_page_slider_item_title{
  font-weight: 500;
  font-size: 16px;
  margin: 10px 0px 5px 0px;
}
.prise{
  font-weight: bold;
  font-size: 18px;
}
.product_page_slider_title{
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  margin-bottom: 30px;
}
</style>
