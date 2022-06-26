<template>
  <div class="v-select">
    <p class="tittle"
    @click="areOptionsVisible = !areOptionsVisible">{{selected}}</p>
    <div class="options"
    v-if="areOptionsVisible">
      <p
      v-for="option in options"
      :key="option.value"
      @click="selectOption(option)">
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-select',
  data () {
    return {
      areOptionsVisible: false
    }
  },
  props: {
    options: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectOption (option) {
      this.$emit('select', option)
      this.areOptionsVisible = false
    },
    hideSelect () {
      this.areOptionsVisible = false
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeUnmount () {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style scoped>
.v-select{
  position: relative;
  width: 200px;
  cursor: pointer;
}
.tittle{
border: 2px solid blueviolet;
}
.v-select p{
  margin: 0;
}
.options{
  border: 1px solid red;
  position: absolute;
  top: 20px;
  right: 0;
  width: 100%;
}
.options p:hover{
  background-color: #A4ACAD;
}
</style>
