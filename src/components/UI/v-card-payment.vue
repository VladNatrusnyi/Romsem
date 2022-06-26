<template>
  <div class="wrapper">
    <div class="back_rect"></div>
    <div class="decor_line"></div>
    <div class="cvc">
      <p>CVC/CVV</p>
      <InputMask v-model="value" mask="999" placeholder="CVC" autoClear class="validity_input_cvc"/>
    </div>
    <div class="font_rect">
      <div class="font_rect_items">
        <div class="logo">
          <img :src="require('../../assets/image/visa-mastercard.png')" alt="" class="logo_img">
        </div>
        <div class="cart-number">
          <InputMask v-model="value" mask="9999-9999-9999-9999" placeholder="XXXX-XXXX-XXXX-XXXX" autoClear/>
        </div>
        <div class="validity">
          <p>Термін дії:</p>
          <div class="validity_wrapper">
            <InputMask v-model="value" mask="99" placeholder="ММ" autoClear class="validity_input"/>
            <p style="font-size: 20px;padding: 0px 5px">/</p>
            <InputMask v-model="value" mask="99" placeholder="ГГ" autoClear class="validity_input"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.cvc{
  position: absolute;
  top: 183px;
  left: 235px;
  z-index: 2;
  display: flex;
  align-items: center;
}
.wrapper{
  margin: 0 auto;
  width: 100%;
  height: 250px;
  position: relative;
  background: transparent;
}
.font_rect{
  width: 300px;
  height: 180px;
  background: #FF9846;
  position: absolute;
  border-radius: 15px;
  border: 2px solid white;
  z-index: 5;
  padding: 0px 10px;
}
.back_rect{
  width: 300px;
  height: 180px;
  background: #FF9846;
  position: absolute;
  top: 60px;
  left: 90px;
  border-radius: 15px;
  border: 2px solid white;
  z-index: 1;
}
.decor_line{
  position: absolute;
  width: 300px;
  height: 40px;
  background: #F46D40;
  top: 90px;
  left: 92px;
  border-right: 2px solid white;
  z-index: 2;
}
.logo{
  width: 100px;
}
.logo_img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/deep/.p-inputmask.p-inputtext.p-component{
  padding: 5px 10px 5px 10px;
  font-size: 18px;
  border: none;
  background: #F2F2F2;
  width: 230px;
}
/deep/.p-inputmask.p-inputtext.p-component:focus{
  outline:none;
}
.validity_wrapper{
  display: flex;
  align-items: center;
  margin-left: 10px;
}
.validity_input{
  width: 51px!important;
}
.validity_input_cvc{
  width: 57px!important;
  margin-left: 10px;
}
.validity{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
}
p{
  font-size: 16px;
}
</style>
