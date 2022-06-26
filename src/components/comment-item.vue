<template>
  <div class="comment_item">
    <div class="comment_item_title_wrapper">
      <p class="comment_item_title">{{ comment_item_data.peopleName }}</p>
      <p class="comment_item_date">{{ comment_item_data.date }}</p>
    </div>
    <p class="comment_item_text">{{ comment_item_data.commentar }}</p>
  </div>
</template>

<script>
export default {
  name: 'comment-item',
  props: {
    comment_item_data: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.comment_item{
  padding: 10px 15px;
  background: #ffffff;
  border-radius: 7px;
}
.comment_item_title_wrapper{
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.comment_item_title{
  font-size: 18px;
  font-weight: 600;
}
.comment_item_date{
  font-size: 14px;
  font-weight: 500;
  color: #A4ACAD;
}
</style>
