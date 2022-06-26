<template>
  <div class="cart">
    <p class="cart_title">Кошик</p>
    <cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
    :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @decrementItem="decrementItem(index)"
      @incrementItem="incrementItem(index)"
    />
  </div>
</template>

<script>
import CartItem from './cart-item'
import { mapActions } from 'vuex'
export default {
  name: 'cart',
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      required: true,
      default () {
        return []
      }

    }
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'INCREMENT_ITEM',
      'DECREMENT_ITEM'
    ]),
    deleteFromCart (index) {
      this.DELETE_FROM_CART(index)
    },
    incrementItem (index) {
      this.INCREMENT_ITEM(index)
    },
    decrementItem (index) {
      this.DECREMENT_ITEM(index)
    }
  }
}
</script>

<style scoped>
.cart_title{
  text-align: center;
  padding: 10px 0px;
  background-color: #F2F2F2;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
}
.cart{
}
</style>
