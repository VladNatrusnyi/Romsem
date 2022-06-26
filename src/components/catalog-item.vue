<template>
  <div class="catalog_item">
    <div class="catalog_item_img_wrapper">
      <img :src=" require('../assets/image/products/' + product_data.image)" alt="" class="catalog_item_img">
    </div>
    <div class="catalog_item_title_wrapper">
      <p class="catalog_item_title">{{ product_data.name }}</p>
    </div>
    <p class="catalog_item_mass">{{ product_data.amount }}</p>
    <div class="catalog_item_buy_wrapper">
      <p class="catalog_item_prise">{{ product_data.prise }} грн</p>
      <button class="catalog_item_buy_btn" @click.stop="addToCart">Хочу!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style scoped>
.catalog_item{
  display: flex;
  flex-direction: column;
  /*border: 1px solid black;*/
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
}
.catalog_item:hover{
  /*padding: 0px;*/
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.25);
}
.catalog_item_title_wrapper{
  margin: 10px 0px;
  width: 90%;
}
.catalog_item_img_wrapper{
  width: 90%;
  height: 200px;
  margin-top: 7px;
}
.catalog_item_img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  /*align-self: center;*/
}
.catalog_item_title_wrapper{
  flex: 1 0 auto;
}
.catalog_item_title{
  font-weight: 500;
  font-size: 20px;
}
.catalog_item_mass{
  width: 90%;
  font-weight: normal;
  font-size: 16px;
  color: #A4ACAD;
  justify-self: flex-start;
}
.catalog_item_buy_wrapper{
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #A4ACAD;
  padding: 10px 0px 5px 0px;
}
.catalog_item_prise{
  font-weight: bold;
  font-size: 20px;
}
.catalog_item_buy_btn{
  background: #F46D40;
  border-radius: 5px;
  padding: 5px 30px;
  font-weight: 500;
  font-size: 18px;
  color: white;
  border: none;
}
.catalog_item_buy_btn:hover{
  background: #FF4000;
  cursor: pointer;
}
</style>
