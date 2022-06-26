<template>
  <div class="side_bar_menu">
    <img :src=" require('../assets/image/Logo.png')" alt="" class="side_bar_menu_logo"
    @click.prevent="onClickToHome">
    <hr class="side_bar_menu_line">
    <div class="side_bar_menu_list">
      <side-bar-menu-item
        class="side_bar_items"
        v-for="item in CATEGORIES"
        :key="item.image"
        :side_bar_menu_data="item"
        @passCategory="passCategory"
      />
    </div>
  </div>
</template>

<script>
import SideBarMenuItem from '../components/side-bar-menu-item'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'SideBarMenu',
  components: {
    SideBarMenuItem
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'PASS_TO_CATEGORY'
    ]),
    onClickToHome () {
      this.$router.push('/')
    },
    // onClickToItemList () {
    //   this.$router.push('/catalog')
    //   // this.PASS_TO_CATEGORY(item)
    // },
    passCategory (data) {
      this.$router.push('/catalog')
      this.PASS_TO_CATEGORY(data)
    }
  },
  computed: {
    ...mapGetters([
      'CATEGORIES'
    ])
  }
}
</script>

<style scoped>
.side_bar_menu_logo{
  padding-bottom: 30px;
  /*border-bottom: 1px solid #A4ACAD;*/
}
.side_bar_menu{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  padding-right: 15px;
}
.side_bar_items{
  margin-top: 30px;
}
.side_bar_menu_line{
  width: 100%;
  margin-left: -20px;
}
</style>
