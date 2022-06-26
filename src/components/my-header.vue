<template>
  <div class="header">
    <div class="header_phone_section">
      <p class="header_phone_section_title">Наш телефон</p>
      <p class="header_phone_section_phone1 phone">+380 509 477 451</p>
      <p class="header_phone_section_phone2 phone">+380 938 541 384</p>
      <div class="header_phone_section_work_time_wrapper">
        <i class="pi pi-clock" style="font-size: 1rem"></i>
        <p class="header_phone_section_work_time">працюємо з 10:00 до 00:00</p>
      </div>
    </div>
    <div class="header_nav_section">
      <div class="header_nav_section_city">
        <p class="header_nav_section_city_tittle">Місто:</p>
        <p class="header_nav_section_city_name">Полтава</p>
      </div>
      <div class="header_nav_section_search">
        <div class="header_nav_section_search_menu">
          <router-link to="/commentaries" class="header_nav_section_search_menu_revues">Відгуки</router-link>
          <router-link to="" class="header_nav_section_search_menu_delivery">Доставка і оплата</router-link>
        </div>
        <search />
      </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/UI/v-search'
export default {
  name: 'header',
  components: {
    Search
  }
}
</script>

<style scoped>
.header{
  height: 90px;
  padding: 0px 10px;
  border-bottom: 1px solid #A4ACAD;
  display: flex;
  align-items: center;
  /*justify-content: space-between;*/
}
.header_phone_section{
  flex:0 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
}
.header_phone_section_title{
  text-align: center;
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

.header_nav_section{
  padding-left: 10px;
  height: 100%;
  flex:1 1 auto;
  border-left: 1px solid #A4ACAD;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_nav_section_city{
}
.header_nav_section_city_tittle{
  font-weight: 300;
  font-size: 14px;
  color: #A4ACAD;
}
.header_nav_section_city_name{
  font-weight: normal;
  font-size: 16px;
  margin-top: 2px;
}

.header_nav_section_search{
  display: flex;
  align-items: center;
}
.header_nav_section_search_menu{
  margin-right: 30px;
}
.header_nav_section_search_menu_revues{
  margin-right: 10px;
  text-decoration: none;
  font-weight: normal;
  font-size: 16px;
  color: #111111;
}
.header_nav_section_search_menu_revues:hover{
  color: #FF9846;
}
.header_nav_section_search_menu_delivery{
  text-decoration: none;
  font-weight: normal;
  font-size: 16px;
  color: #111111;
}
.header_nav_section_search_menu_delivery:hover{
  color: #FF9846;
}

</style>
