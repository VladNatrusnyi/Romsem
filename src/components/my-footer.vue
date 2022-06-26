<template>
  <div class="my_footer">
    <div class="my_footer_wrapper">
      <div class="my_footer_left_section">
        <ul>
          <li>Про компанію</li>
          <li>Доставка і оплата</li>
          <li>Стрічка матеріалів</li>
          <li>Політика повернення</li>
        </ul>
      </div>
      <div class="my_footer_center_section">
        <p style="font-weight: 700;font-size: 18px;">Введіть номер</p>
        <InputMask v-model="value" mask="+380-999-999-999" slotChar="__" placeholder="+380-(__) __ __ ___" autoClear/>
        <p style="font-weight: 500;font-size: 17px;color: #A4ACAD;">Виберіть зручний месенжер для спілкування</p>
        <div class="my_footer_center_section_messengers">
          <div class="messenger_img_wrapper">
            <img :src="require('../assets/image/messengers/whatsapp.png')" alt="" class="messenger_img">
          </div>
          <div class="messenger_img_wrapper">
            <img :src="require('../assets/image/messengers/viber.png')" alt="" class="messenger_img">
          </div>
          <div class="messenger_img_wrapper">
            <img :src="require('../assets/image/messengers/Telegram.png')" alt="" class="messenger_img">
          </div>
        </div>
      </div>
      <div class="my_footer_right_section">
        <p class="my_footer_right_section_text">Тел: +380 995 188 955 </p>
        <p class="my_footer_right_section_text">Тел: +380 935 555 188  </p>
        <p class="my_footer_right_section_text">Адрес: Бакаева 126</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-footer'
}
</script>

<style scoped>
.my_footer{
}
.my_footer_wrapper{
  border-top: 0.5px solid #A4ACAD;
  padding-top: 20px;
  margin: 0px 30px;
  display: flex;
  justify-content: space-between;
  /*align-items: flex-start;*/
}
.my_footer_left_section{
  flex: 0 1 30%;
  padding-bottom: 20px;
}
.my_footer_center_section{
  flex: 1 1 auto;
  border-right: 0.5px solid #A4ACAD;
  border-left: 0.5px solid #A4ACAD;
  padding-left: 30px;
}
.my_footer_right_section{
  flex: 0 1 30%;
  padding-left: 30px;
}
li{
  list-style: none;
  font-weight: normal;
  font-size: 17px;
  margin-bottom: 15px;
}
li:hover{
  cursor: pointer;
  text-decoration: underline;
}
/deep/.p-inputmask.p-inputtext.p-component{
  padding: 5px 10px 5px 0px;
  font-size: 18px;
  border: none;
  background: #F2F2F2;
  margin: 10px 0px;
}
/deep/.p-inputmask.p-inputtext.p-component:focus{
  outline:none;
}
.messenger_img_wrapper{
  width: 50px;
  height: 50px;
}
.messenger_img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.5;
}
.messenger_img:hover{
  cursor: pointer;
  opacity: 1;
}
.my_footer_center_section_messengers{
  margin: 20px 0px 40px 0px;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.my_footer_right_section_text{
  color: #A4ACAD;
  font-weight: normal;
  font-size: 17px;
  margin-bottom: 5px;
}
</style>
