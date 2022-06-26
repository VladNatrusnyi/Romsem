<template>
  <div class="main-wrapper">
    <div class="side_bar_catalog">
      <side-bar-menu />
    </div>
    <div class="main_content">
      <my-header />
      <div class="main_content_wrap">
        <router-view></router-view>
      </div>
      <my-footer />
    </div>
    <div class="cart_section">
      <div v-if="CART.length" style="width: 90%;">
        <cart
          :cart_data="CART"
        />
        <div class="cart_total">
          <p class="cart_total_prise">{{ cartTotalCost }} грн</p>
          <router-link to="/order">
            <button class="cart_total_btn">Оформити замовлення</button>
          </router-link>
        </div>
      </div>
      <div class="cart_section_empty_cart" v-else>
        <p class="cart_section_empty_cart__title">Ваш кошик порожній</p>
        <p class="cart_section_empty_cart__subtitle">Додайте скоріше що-небудь</p>
        <div class="cart_section_empty_cart__action_wrapper">
          <p class="cart_section_empty_cart__action">Безкоштовна доставка від 300грн</p>
        </div>
      </div>
      <br><br><br><br><br><br><br><br>
    </div>
  </div>
</template>

<script>
import Cart from '../components/cart'
import SideBarMenu from '../components/side-bar-menu'
import MyHeader from './my-header'
import MyFooter from './my-footer'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'main-wrapper',
  components: {
    Cart,
    SideBarMenu,
    MyHeader,
    MyFooter
  },
  methods: {
    ...mapActions([
      'GET_CATEGORY_FROM_API',
      'NEW_OR_POPULAR'
    ])
  },
  mounted () {
    this.GET_CATEGORY_FROM_API()
    this.NEW_OR_POPULAR()
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    cartTotalCost () {
      let result = []
      if (this.CART.length) {
        for (const item of this.CART) {
          result.push(item.prise * item.quantity)
        }
        result = result.reduce(function (sum, el) {
          return sum + el
        })
      } else {
        return 0
      }
      return result
    }
  }
}
</script>

<style>
.main-wrapper{
  margin: 0 auto;
  /*max-width: 1600px;*/
  padding: 0px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.side_bar_catalog{
  width: 20%;
  /*border: 1px solid red;*/
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.main_content{
  width: 60%;
  background-color: #F2F2F2;
}
.main_content_wrap{
  padding: 30px 30px;
  margin: 0 auto;
}
.cart_section{
  width: 20%;
  /*border: 1px solid blue;*/
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart_section_empty_cart{
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F2F2F2;
  border-radius: 10px;
}
.cart_section_empty_cart__title{
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  padding: 12px 0px;
}
.cart_section_empty_cart__subtitle{
  font-size: 15px;
  color: #A4ACAD;
  text-align: center;
  margin-bottom: 15px;
}
.cart_section_empty_cart__action{
  color: #F2F2F2;
  font-weight: normal;
  font-size: 14px;
  text-align: center;
}
.cart_section_empty_cart__action_wrapper {
  width: 100%;
  padding: 10px 0px;
  background-color: #FF9846;
  border-bottom-right-radius: 10px ;
  border-bottom-left-radius: 10px ;
}
.cart_total{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0px 5px;
}
.cart_total_prise{
  font-size: 18px;
  font-weight: bold;
}
.cart_total_btn{
  background: #FF9846;
  border-radius: 5px;
  border: none;
  padding: 10px 15px;
  color: white;
  font-weight: normal;
  font-size: 14px;
}
.cart_total_btn:hover{
  background: #FF4000;
  cursor: pointer;
}
</style>
