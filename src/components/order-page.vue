<template>
  <div class="order_page">
    <v-popup
      class="popup"
      v-if="isPopupActive"
      @closePopup="closePopup"
      @popupClickOk="popupClickOk"
      :right-btn="'Підтвердити'"
      :popup-name="'Підтвердження замовлення'"
      :show-button-ok="isCustomerInfoActive"
    >
      <div v-if="CART.length">
        <div class="cart_items_to_buy">
          <p class="popup_title">Дані про товари</p>
          <div class="cart_item_to_buy" v-for="item in CART" :key="item.article">
            <img :src=" require('../assets/image/products/' + item.image)" alt="" class="cart_item_img">
            <p class="cart_item_name">{{ item.name }}</p>
          </div>
          <div class="popup_field_custom" style="justify-content: space-between;">
            <p class="custom_title" style="color: #dd3700;">Загальна сума: </p>
            <p class="custom_content"> {{ cartTotalCostAll }}грн</p>
          </div>
        </div>
        <p class="popup_title">Дані про замовника</p>
        <p v-if="isCustomerInfoActive" style="color:red; font-size: 18px;">Заповніть дані про замовника</p>
        <div v-else>
          <div class="popup_field_custom">
            <p class="custom_title">Ім'я замовника :</p>
            <p class="custom_content">{{ popupDATA.customerName }}</p>
          </div>
          <div class="popup_field_custom">
            <p class="custom_title">Номер телефону :</p>
            <p class="custom_content">{{ popupDATA.phoneNumber }}</p>
          </div>
          <div class="popup_field_custom">
            <p class="custom_title">Спосіб оплати :</p>
            <p class="custom_content">{{ popupDATA.paymentType }}</p>
          </div>
          <div class="popup_field_custom">
            <p class="custom_title">Коментар :</p>
            <p class="custom_content">{{ popupDATA.comment }}</p>
          </div>
          <div class="popup_field_custom">
            <p class="custom_title">Спосіб доставки :</p>
            <p class="custom_content">{{ popupDATA.deliveryType }}</p>
          </div>
          <div v-if="popupDATA.deliveryType === 'Курєром'" class="popup_field_custom">
            <div class="address">
              <p class="custom_title">Адреса :</p>
              <p class="custom_content">вул.{{ popupDATA.street }}, буд.{{ popupDATA.house }} , кв.{{ popupDATA.street }} </p>
            </div>
          </div>
          <div v-if="popupDATA.deliveryType === 'Самовивіз'" class="popup_field_custom">
            <div class="address">
              <p class="custom_title">Номер замовлення :</p>
              <p class="custom_content">3547815</p>
            </div>
          </div>
          <div class="popup_field_custom">
            <p class="custom_title">Час отримання :</p>
            <p class="custom_content">{{ popupDATA.deliveryTimeInterval }}</p>
          </div>
          <div v-if="popupDATA.deliveryTimeInterval === 'На час'" class="popup_field_custom">
            <div class="address">
              <p class="custom_title">Бажаний час :</p>
              <p class="custom_content">{{ popupDATA.deliveryTime }}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="cart_section_empty_cart" style="width: 300px; margin: 10px 0px;">
          <p class="cart_section_empty_cart__title">Ваш кошик порожній</p>
          <p class="cart_section_empty_cart__subtitle">Додайте скоріше що-небудь</p>
          <div class="cart_section_empty_cart__action_wrapper">
            <router-link to="/" class="cart_section_empty_cart__action">Повернутися до вибору</router-link>
          </div>
        </div>
      </div>
    </v-popup>
    <div class="order_page_main_section">
      <div class="header_wrapper">
        <router-link to="/" class="header_back_btn"><i class="pi pi-angle-left"></i> Повернутися до вибору</router-link>
        <div class="header_work_time">
          <div class="header_phone_section">
            <p class="header_phone_section_title">Наш телефон</p>
            <p class="header_phone_section_phone1 phone">+380 509 477 451</p>
            <p class="header_phone_section_phone2 phone">+380 938 541 384</p>
            <div class="header_phone_section_work_time_wrapper">
              <i class="pi pi-clock" style="font-size: 1rem"></i>
              <p class="header_phone_section_work_time">працюємо з 10:00 до 00:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="order_page_main_content">
        <delivery-form @showPopup="showPopup"
        />
      </div>
    </div>
    <div class="order_page_cart_section">
      <cart
        v-if="CART.length"
        :cart_data="CART"
      />
      <div class="cart_section_empty_cart" v-else>
        <p class="cart_section_empty_cart__title">Ваш кошик порожній</p>
        <p class="cart_section_empty_cart__subtitle">Додайте скоріше що-небудь</p>
        <div class="cart_section_empty_cart__action_wrapper">
          <router-link to="/" class="cart_section_empty_cart__action">Повернутися до вибору</router-link>
        </div>
      </div>
      <div class="result_field">
        <div class="result_field_couple_and_prise flex">
          <p class="result_field_text">{{ CART.length }} товарів</p>
          <p class="result_field_text">{{ cartTotalCost }} грн</p>
        </div>
        <div class="result_field_discount flex">
          <p class="result_field_text">Скидка</p>
          <p class="result_field_text">0 грн</p>
        </div>
        <div class="result_field_delivery flex">
          <p class="result_field_text">Доставка</p>
          <p class="result_field_text" v-if="cartTotalCost > 300">Безкоштовно</p>
          <p class="result_field_text" v-else>{{ deliveryPrise }} грн</p>
        </div>
        <div class="result_field_all_prise flex">
          <p class="result_field_text total">Разом</p>
          <p class="result_field_text total">{{ cartTotalCostAll }} грн</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '../components/cart'
import DeliveryForm from '../components/delivery-form'
import VPopup from '../components/UI/v-popup'
import { mapGetters } from 'vuex'
export default {
  name: 'order-page',
  data () {
    return {
      isPopupActive: false,
      deliveryPrise: 125,
      popupDATA: {},
      isCustomerInfoActive: true
    }
  },
  components: {
    Cart,
    DeliveryForm,
    VPopup
  },
  methods: {
    showPopup (data) {
      this.isPopupActive = true
      this.popupDATA = data
      if (data.customerName === '' || data.phoneNumber === '') {
        this.isCustomerInfoActive = true
      } else {
        this.isCustomerInfoActive = false
      }
    },
    closePopup () {
      this.isPopupActive = false
    },
    popupClickOk () {
      this.$router.push('/')
    }
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
    },
    cartTotalCostAll () {
      if (this.cartTotalCost > 300) {
        return this.cartTotalCost
      } else {
        return this.cartTotalCost + this.deliveryPrise
      }
    }
  }
}
</script>

<style scoped>
.address{
  display: flex;
  align-items: center;
}
.popup_field_custom{
  display: flex;
  align-items: center;
}
.custom_title{
  font-weight: 600;
}
.popup_title{
  margin-top: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}
.cart_item_name{
  margin-right: 10px;
  font-weight: 500;
}
.cart_item_to_buy{
  display: flex;
  align-items: center;
  margin-top: 10px;
}
.cart_item_img{
  width: 50px;
  margin-right: 10px;
}
.pi-angle-left{
  font-size: 16px;
  padding: 4px;
  background: #FF9846;
  border-radius: 50px;
  margin-left: 5px;
}
.result_field{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.total{
  color: #FF9846;
  border: none;
}
.result_field_text{
  font-size: 16px;
  font-weight: 600;
}
.flex{
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  border-bottom: 1px solid #A4ACAD;
}
.order_page{
  /*padding: 0px 30px;*/
  display: flex;
}
.order_page_main_section{
  flex: 0 1 80%;
  min-height: 100vh;
  background: #F2F2F2;
}
.order_page_cart_section{
  flex: 0 1 20%;
  padding: 20px 30px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header_wrapper{
  /*width: 100%;*/
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #A4ACAD;
  position: relative;
}
.header_back_btn{
  position: absolute;
  top: 30px;
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  z-index: 3;
}
.header_work_time{
  display:flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-self: center;
}
.header_phone_section{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
}
.header_phone_section_title{
  /*text-align: center;*/
  font-weight: 500;
  font-size: 18px;
}
.header_phone_section_phone1{
  font-weight: 500;
  color: #FF9846;
}
.header_phone_section_phone2{
  font-weight: 500;
  color: #FF9846;
}
.header_phone_section_work_time_wrapper{
  display: flex;
  align-items: center;
}
.header_phone_section_work_time{
  font-weight: 500;
  font-size: 14px;
  color: #A4ACAD;
  margin-left: 5px;
}
.pi-clock{
  color: #FF9846;
}
.order_page_main_content{
  max-width: 900px;
  margin: 0 auto;
  margin-top: 50px;
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
  text-decoration: none;
  text-align: center;
}
.cart_section_empty_cart__action_wrapper:hover{
  cursor: pointer;
  background: #F46D40;
}
</style>
