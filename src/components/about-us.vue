<template>
  <div class="about_us">
    <div class="about_us_wrapper" :class="{active: isActive}">
      <h2 class="about_us_title">Заказать суши в Бишкеке</h2>
      <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с
        доставкой на дом, приготовленные по классическим и адаптированным к европейской
        аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время
        наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.</p>
      <p>В нашем меню более 20 видов суши:</p>
      <ul>
        <li>Классические с сырым лососем, тунцом, окунем.</li>
        <li>Экзотические с тигровой креветкой, морским гребешком.</li>
        <li> Пикантные с копченым лососем, угрем.</li>
      </ul>
      <p>В меню также представлены гунканы: с начинкой из красной икры и тобико,
        а также феликсы, где японский майонез сочетается с рыбой, морепродуктами,
        угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные
        начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
      <p>Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с
        доставкой на дом, приготовленные по классическим и адаптированным к европейской
        аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время
        наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.</p>
      <p>В нашем меню более 20 видов суши:</p>
      <ul>
        <li>Классические с сырым лососем, тунцом, окунем.</li>
        <li>Экзотические с тигровой креветкой, морским гребешком.</li>
        <li> Пикантные с копченым лососем, угрем.</li>
      </ul>
      <p>В меню также представлены гунканы: с начинкой из красной икры и тобико,
        а также феликсы, где японский майонез сочетается с рыбой, морепродуктами,
        угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные
        начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
    </div>
    <div @click="isActive = !isActive" class="detail_btn_wrapper">
        <p  v-if="isActive" class="detail_btn">Згорнути</p>
        <p v-else class="detail_btn">Подробніше</p>
        <i v-if="isActive" class="pi pi-chevron-up"></i>
        <i v-else class="pi pi-chevron-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-us',
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>
.about_us_title{
  font-weight: bold;
  font-size: 24px;
  color: #A4ACAD;
  margin-bottom: 12px;
}
.about_us_wrapper{
  color: #A4ACAD;
  max-height: 250px;
  overflow: hidden;
  position: relative;
  /*transition: all 3s;*/
  /*transition: 5s ease;*/
  transition: max-height 1s ease-out;
}
.about_us_wrapper.active{
  max-height: 800px;
  transition: max-height 1s ease-in;
}
.about_us_wrapper.active:after{
  height: 0em;
  background: transparent;
}
.about_us_wrapper:after{
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 4.5em;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), white 100%);
  pointer-events: none;
  transition: 0.5s;
}
p{
  margin-bottom: 7px;
}
ul{
  margin-bottom: 7px;
  padding-left: 40px;
}
.detail_btn_wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
}
.detail_btn{
  color: #F46D40;
  font-weight: normal;
  font-size: 20px;
  text-align: center;
  margin-top: 5px;
  padding-right: 5px;
}
.detail_btn:hover{
  cursor:pointer;
}
.pi{
  color: #F46D40;
  font-weight: normal;
  font-size: 20px;
}
</style>
