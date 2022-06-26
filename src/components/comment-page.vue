<template>
  <div class="comment_page">
    <div class="comment_page_title_wrapper">
      <p class="comment_page_title">Відгуки</p>
      <button class="add_new_coment" @click="openForm">+ Додати коментар</button>
    </div>
    <div class="new_comment_input" :class="{ open: isActive }">
      <div class="identeficator">
        <div style="margin-bottom: 10px;">
          <p class="new_comment_title_name">Ім'я</p>
          <input v-model="commentData.peopleName" type="text" class="new_comment_input_name">
        </div>
      </div>
      <p class="new_comment_title_name">Коментар</p>
      <textarea v-model="commentData.commentar" rows="5" cols="45" name="text" class="new_comment_input_name" style="display:block;"></textarea>
      <button class="add_btn" @click="addNewComment">Додати коментар</button>
    </div>
    <comment-list />
  </div>
</template>

<script>
import CommentList from '../components/comment-list'
import { mapActions } from 'vuex'

export default {
  name: 'comment-page',
  data () {
    return {
      isActive: false,
      commentData: {
        peopleName: '',
        commentar: '',
        date: ''
      }
    }
  },
  components: {
    CommentList
  },
  methods: {
    ...mapActions([
      'GET_COMMENTS_FROM_API',
      'GET_NEW_COMMENT_VALUE'
    ]),
    openForm () {
      this.isActive = !this.isActive
    },
    addNewComment () {
      if (this.commentData.peopleName === '' || this.commentData.commentar === '') {
        const inp = document.querySelectorAll('.new_comment_input_name')
        for (const item of inp) {
          item.style.border = '1px solid red'
          item.addEventListener('focus', function () {
            item.style.border = '1px solid transparent'
          })
        }
      } else {
        const now = new Date()
        this.commentData.date = now.toLocaleDateString()
        console.log(now.toLocaleDateString())
        this.GET_NEW_COMMENT_VALUE(this.commentData)
        this.commentData = {
          peopleName: '',
          commentar: '',
          date: ''
        }
        this.openForm()
      }
    }
  },
  mounted () {
    this.GET_COMMENTS_FROM_API()
  }
}
</script>

<style scoped>
.new_comment_input{
  padding: 10px 15px;
  background: #ffffff;
  border-radius: 7px;
  width: fit-content;
  margin: 0 auto;
  display: none;
}
.new_comment_input.open{
  display: block;
}
.new_comment_input_name{
  border: 1px solid darkgrey;
  padding: 5px 10px;
  border-radius: 5px;
  margin-top: 5px;
}
.new_comment_input_name:focus{
  outline:none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.new_comment_title_name{
  font-size: 18px;
  font-weight: 500;
}
.identeficator{
  gap: 20px;
  margin-bottom: 10px;
}
.comment_page_title_wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.comment_page_title{
  font-weight: 500;
  font-size: 20px;
}
.add_new_coment{
  color: white;
  padding: 7px 10px;
  background: #000;
  border-radius: 5px;
  border: 2px solid #000;
  font-size: 14px;
}
.add_new_coment:hover{
  cursor: pointer;
  border: 2px solid #ffffff;
}
.add_btn{
  background: #F46D40;
  border-radius: 5px;
  padding: 5px 20px;
  font-weight: 500;
  font-size: 16px;
  color: white;
  border: none;
  margin-top: 10px;
}
.add_btn:hover{
  background: #FF4000;
  cursor: pointer;
}
</style>
