<template>
  <div class="side-bar-item" @click="passCategory">
    <img :src=" require('../assets/image/Side-bar-image/' + side_bar_menu_data.image)" alt=""
         class="side_bar_menu_item_logo">
    <p class="side_bar_menu_item_category_name">{{ side_bar_menu_data.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'side-bar-menu-item',
  data () {
    return {
    }
  },
  props: {
    side_bar_menu_data: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },
  methods: {
    passCategory () {
      this.$emit('passCategory', this.side_bar_menu_data.title)
    }
  }
}
</script>

<style scoped>
.side-bar-item{
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
.side_bar_menu_item_category_name{
  font-size: 20px;
  margin-left: 10px;
}
.side_bar_menu_item_category_name:hover{
  color:#FF9846;
  cursor: pointer;
}
.side_bar_menu_item_logo{
  width: 35px;
}
</style>
