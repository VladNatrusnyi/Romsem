<template>
  <form class="form">
    <i class="pi pi-search"
       @click="openSearch"
    ></i>
    <input type="text"
           placeholder="Пошук..."
           :class="{active: isActive}"
           class="input" v-model="searchValue" v-on:keydown.enter.prevent="search(searchValue)">
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'v-search',
  data () {
    return {
      isActive: false,
      searchValue: ''
    }
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE'
    ]),
    search (value) {
      const a = document.querySelector('.form')
      if (this.searchValue) {
        // this.isActive = !this.isActive
        this.GET_SEARCH_VALUE(value)
        this.$router.push('/catalog')
        this.searchValue = ''
        a.classList.remove('empty')
      } else {
        a.classList.add('empty')
      }
    },
    openSearch () {
      this.isActive = !this.isActive
      const form = document.querySelector('.form')
      if (this.isActive) {
        form.style.background = 'white'
      } else {
        form.style.background = ''
        this.searchValue = ''
        // document.removeEventListener('click', this.hideSearch)
      }
    }
  }
}
</script>

<style scoped>
form{
  display:flex;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  /*background-color: white;*/
}
.input{
  width: 1px;
  opacity: 0;
  transition: all 0.8s;
  border: none;
  background: #F2F2F2;
}
.input.active{
  width: 150px;
  opacity: 1;
  border: none;
  margin-left: 3px;
  background: white;
}
.input.active:focus{
  outline:none;
}
.form.empty{
  border: 2px solid red;
}
</style>
