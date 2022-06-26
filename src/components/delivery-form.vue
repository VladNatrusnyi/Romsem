<template>
  <div class="delivery_form">
    <p class="delivery_form_title">Ваші дані</p>
    <form class="delivery_form_wrapper" style="overflow: hidden;">
      <div class="delivery_form_left_section">
        <div class="phone_and_name_area">
          <InputMask v-model="deliveryData.phoneNumber" mask="+380-999-999-999" slotChar="__" placeholder="Телефон" autoClear class="input"/>
          <input v-model="deliveryData.customerName" type="text" class="input" placeholder="Ім'я" >
        </div>
        <div class="payment_type btn_wrapper">
          <div class="cash btn"
               @click.prevent="setActive('cash')"
               :class="{active: isActive('cash')}"> <i class="pi pi-wallet"></i> Готівкою</div>
          <div class="credit_cart btn"
               @click.prevent="setActive('credit-cart')"
               :class="{active: isActive('credit-cart')}"><i class="pi  pi-credit-card "></i>Картою</div>
        </div>
        <div class="tab-content">
          <div class="tab-panel" :class="{ active: isActive('cash') }">
            <div class="cash_panel_wrapper">
              <p class="cash_panel_rest_title">
                <i class="pi pi-check"></i>
                Підготувати решту з</p>
              <input type="number" class="input" placeholder="Сума" >
            </div>
          </div>
          <div class="tab-panel" :class="{ active: isActive('credit-cart') }" >
            <card-payment />
          </div>
        </div>
        <div class="comment">
          <input v-model="deliveryData.comment" type="text" class="input-big" placeholder="Введіть коментар до замовлення" style="margin-top: 15px;">
        </div>
      </div>
      <div class="delivery_form_right_section">
        <div class="payment_type btn_wrapper" style="margin: 0;">
          <div class="cash btn"
               @click.prevent="setActive2('courier')"
               :class="{active: isActive2('courier')}">Кур'єр</div>
          <div class="credit_cart btn"
               @click.prevent="setActive2('self')"
               :class="{active: isActive2('self')}">Самовивіз</div>
        </div>
        <div class="tab-content">
          <div class="tab-panel" :class="{ active: isActive2('courier') }">
            <div class="address_wrapper">
              <div class="street">
                <input v-model="deliveryData.street" type="text" placeholder="Вулиця" class="address_input">
              </div>
              <div class="house">
                <input v-model="deliveryData.house" type="number" placeholder="Будинок" class="address_input">
              </div>
              <div class="apartment">
                <input v-model="deliveryData.apartment" type="number" placeholder="Кв №" class="address_input">
              </div>
              <div class="entrance">
                <input v-model="deliveryData.entrance" type="number" placeholder="Під'їзд" class="address_input">
              </div>
              <div class="floor">
                <input v-model="deliveryData.floor" type="number" placeholder="Поверх" class="address_input">
              </div>
              <div class="code">
                <input v-model="deliveryData.code" type="number" placeholder="Код" class="address_input">
              </div>
            </div>
          </div>
          <div class="tab-panel" :class="{ active: isActive2('self') }" >
            <div style="height: 85px; background: white; border-radius:5px">
              <p style="padding-top: 20px; text-align:center;">Ваш номер замовлення: <span style="color:#FF9846">35484596</span></p>
            </div>
          </div>
        </div>
        <div class="payment_type btn_wrapper time" >
          <div class="cash btn"
               @click.prevent="setActive3('for-now')"
               :class="{active: isActive3('for-now')}">На зараз</div>
          <div class="credit_cart btn"
               @click.prevent="setActive3('per-hour')"
               :class="{active: isActive3('per-hour')}">На час</div>
        </div>
        <div class="tab-content">
          <div class="tab-panel" :class="{ active: isActive3('for-now') }">
            <div style="height: 35px; background: white; border-radius:5px">
              <p style="text-align: center; padding-top: 5px;">Уже побігли готувати</p>
            </div>
          </div>
          <div class="tab-panel" :class="{ active: isActive3('per-hour') }" >
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <p>Оберіть зручний час :</p>
              <input v-model="deliveryData.deliveryTime" type="time" class="time_input"
                     min="10:00" max="00:00" required>
            </div>
          </div>
        </div>
      </div>
    </form>
    <button class="order_page_send_btn" @click="showPopup" >Оформити замовлення</button>
    <p class="privacy_policy">Нажимая на кнопку Оформить заказ,
      Вы подтверждаете свое согласие на обработку персональных
      данных в соответствии с <u>Публичной оффертой</u></p>
  </div>
</template>

<script>
import CardPayment from './UI/v-card-payment'
export default {
  name: 'delivery-form',
  components: {
    CardPayment
  },
  data () {
    return {
      activeItem: 'cash',
      activeItem2: 'courier',
      activeItem3: 'for-now',
      deliveryData: {
        phoneNumber: '',
        customerName: '',
        paymentType: 'Готівкою',
        comment: '',
        deliveryType: 'Кур\'єром',
        street: '',
        house: '',
        apartment: '',
        entrance: '',
        floor: '',
        code: '',
        deliveryTimeInterval: 'На зараз',
        deliveryTime: ''
      }
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
      if (this.activeItem === 'cash') {
        this.deliveryData.paymentType = 'Готівкою'
      } else if (this.activeItem === 'credit-cart') {
        this.deliveryData.paymentType = 'Картою'
      }
    },
    isActive2 (menuItem) {
      return this.activeItem2 === menuItem
    },
    setActive2 (menuItem) {
      this.activeItem2 = menuItem
      if (this.activeItem2 === 'courier') {
        this.deliveryData.deliveryType = 'Кур\'єром'
      } else if (this.activeItem2 === 'self') {
        this.deliveryData.deliveryType = 'Самовивіз'
      }
    },
    isActive3 (menuItem) {
      return this.activeItem3 === menuItem
    },
    setActive3 (menuItem) {
      this.activeItem3 = menuItem
      if (this.activeItem3 === 'for-now') {
        this.deliveryData.deliveryTimeInterval = 'На зараз'
      } else if (this.activeItem3 === 'per-hour') {
        this.deliveryData.deliveryTimeInterval = 'На час'
      }
    },
    showPopup () {
      this.$emit('showPopup', this.deliveryData)
    }
  }
}
</script>

<style scoped>
.order_page_send_btn{
  width: 100%;
  height: 40px;
  background: #F46D40;
  color: white;
  text-align: center;
  font-size: 16px;
  margin-top: 55px;
  border: none;
  border-radius: 5px;
}
.order_page_send_btn:hover{
  cursor: pointer;
  background: #dd3700;
}
.privacy_policy{
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
}
.time_input{
  width: 50%;
  height: 35px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  padding: 0px 10px;
}
.time_input:focus{
  outline:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.address_input{
  width: 100%;
  /*height: 100%;*/
  flex: 1 1 auto;
  padding: 8px 10px;
  background: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}
.address_input:focus{
  outline:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.address_wrapper{
  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-template-rows: 32px 32px;
  grid-gap: 15px 2.6%;
}
.street{
  grid-area:1/1/2/4;
  display: flex;
}
.house{
  grid-area:1/4/2/5;
  display: flex;
}
.apartment{
  grid-area:2/1/3/2;
  display: flex;
}
.entrance{
  grid-area:2/2/3/3;
  display: flex;
}
.floor{
  grid-area:2/3/3/4;
  display: flex;
}
.code{
  grid-area:2/4/3/5;
  display: flex;
}
.delivery_form_title{
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 15px;
}
.delivery_form_wrapper{
  display:flex;
  gap: 50px;
}
.delivery_form_left_section{
  flex: 1 1 50%;
  /*border: 1px solid red;*/
}
.delivery_form_right_section{
  flex: 1 1 50%;
  /*border: 1px solid blue;*/
}
.phone_and_name_area{
  display: flex;
  justify-content: space-between;
}
.input{
  width: 42%;
  padding: 8px 10px;
  background: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}
.input-big{
  flex:1 1 auto;
  padding: 8px 10px;
  background: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
}
.comment{
  display: flex;
}
.input:focus{
  outline:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.input-big:focus{
  outline:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.btn_wrapper{
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.btn{
  flex: 0 1 50%;
  padding: 8px 10px;
  background: white;
  font-size: 16px;
  border: none;
  text-align: center;
}
.btn:hover{
  cursor: pointer;
}
.btn.active{
  background: #FF9846;
  color: white;
}
.cash{
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.credit_cart{
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.tab-panel{
  display: none;
}
.tab-panel.active{
  margin-top: 15px;
  display:block;
}
.pi{
  margin-right: 10px;
}
.pi-check{
  color: white;
  background: #FF9846;
  padding: 5px;
  border-radius: 50%;
  font-size: 0.8rem;
  border: 2px solid white;
}
.cash_panel_wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
