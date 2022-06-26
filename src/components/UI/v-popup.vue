<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v_popup">
      <div class="v_popup_header">
        <span>{{ popupName }}</span>
        <span><i
          @click="closePopup"
          class="pi pi-times"></i></span>
      </div>
      <div class="v_popup_content">
        <slot></slot>
      </div>
      <div class="v-popup_footer">
        <button
          @click="closePopup"
          class="close btn" :class="{unactive: showButtonOk}">Ні</button>
        <button class="submit btn" :class="{unactive: showButtonOk}" @click="popupClickOk">{{ rightBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',
  methods: {
    closePopup () {
      this.$emit('closePopup')
    },
    popupClickOk () {
      this.$emit('popupClickOk')
    }
  },
  props: {
    rightBtn: {
      type: String,
      default: 'OK'
    },
    popupName: {
      type: String,
      default: 'Configuration'
    },
    showButtonOk: {
      type: Boolean
    }
  },
  mounted () {
    const vm = this
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs.popup_wrapper) {
        vm.closePopup()
      }
    })
  }
}
</script>

<style scoped>
.popup_wrapper{
  background: rgba(64,64,64,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 8;
}
.v_popup{
  background: white;
  position: fixed;
  top: 50px;
  width: 400px;
  padding: 15px;
  z-index: 10;
  border-radius: 10px;
}
.v_popup_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v_popup_content{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-popup_footer{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn{
  padding: 7px 10px;
  font-size: 16px;
}
.btn:hover{
  cursor: pointer;
}
.close{
  border: 1px solid red;
  border-radius: 5px;
  background: white;
}
.close:hover{
  background: red;
  color: white;
}
.submit{
  border: none;
  background: #FF9846;
  color: #ffffff;
  border-radius: 5px;
  margin-left: 10px;
}
.btn.unactive{
  display: none;
}
.submit:hover{
  background: #F46D40;
}
</style>
