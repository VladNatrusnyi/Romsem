<template>
<div class="cart_item">
  <div class="cart_item_lef_wrapper">
    <img :src=" require('../assets/image/products/' + cart_item_data.image)" alt="" class="cart_item_img">
    <div class="cart_item_text_wrapper">
      <p class="cart_item_name">{{ cart_item_data.name }}</p>
      <div class="cart_item_prise_wrapper">
        <div class="cart_item_couple_of_items">
          <i class="pi pi-minus"
             @click="decrementItem"
             style="font-size: 0.8rem"></i>
          {{ cart_item_data.quantity }}
          <i class="pi pi-plus"
             @click="incrementItem"
             style="font-size: 0.8rem"></i>
        </div>
        <p class="cart_item_prise">{{ cart_item_data.prise }} грн</p>
      </div>
    </div>
  </div>
  <i class="pi pi-times cart_item_delete_item"
     @click="DeleteFromCart"></i>
<!--  <button class="cart_item_delete_item" @click="DeleteFromCart">Удалить</button>-->
</div>
</template>

<script>
export default {
  name: 'cart-item',
  props: {
    cart_item_data: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  methods: {
    DeleteFromCart () {
      this.$emit('deleteFromCart', this.cart_item_data)
    },
    decrementItem () {
      this.$emit('decrementItem')
    },
    incrementItem () {
      this.$emit('incrementItem')
    }
  }
}
</script>

<style scoped>
.cart_item_lef_wrapper{
  display: flex;
  align-items: center;
}
.cart_item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 5px;
  margin-top: 15px;
}
.cart_item_img{
  width: 50px;
  margin-right: 10px;
}
.cart_item_prise_wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pi-times{
  justify-self: flex-end;
}
.pi-times:hover{
  color: red;
  cursor:pointer;
}
.cart_item_text_wrapper{
}
.cart_item_prise{
  margin-left: 20px;
}
.pi-plus{
  padding: 4px;
  font-weight: 900;
}
.pi-plus:hover {
  color: #F46D40;
  cursor:pointer;
}
.pi-minus{
  padding: 4px;
  font-weight: 900;
}
.pi-minus:hover {
  color: #F46D40;
  cursor:pointer;
}
</style>
