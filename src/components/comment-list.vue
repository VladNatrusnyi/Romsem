<template>
  <div class="comment_list">
    <comment-item
      class="comment_item"
    v-for="item in COMMENTS"
    :key="item.date"
    :comment_item_data="item"
    />
    <div>
    </div>
  </div>
</template>

<script>
import CommentItem from '../components/comment-item'
import { mapGetters } from 'vuex'

export default {
  name: 'comment-list',
  components: {
    CommentItem
  },
  computed: {
    ...mapGetters([
      'COMMENTS'
    ])
  }
}
</script>

<style scoped>
.comment_item{
  margin-bottom: 20px;
}
.comment_list{
  margin-top: 30px;
}
</style>
