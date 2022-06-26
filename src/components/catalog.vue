<template>
  <div>
<!--    <v-select-->
<!--    :options="options"-->
<!--    @select="optionSelect"-->
<!--    :selected="selected"-->
<!--    style="margin-left: 20px;"-->
<!--    />-->
    <div class="catalog">
      <div v-if="PRODUCTS.length">
        <catalog-item
          class="cat_item"
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
          @click="onClickToProductCard(product.article)"
        />
      </div>
      <p v-else class="if_unavailable">На жаль, даного товару немає в наявності</p>
    </div>
  </div>
  <br><br><br><br>
</template>

<script>
import CatalogItem from '../components/catalog-item'
// import vSelect from '../components/UI/v-select'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'catalog',
  components: {
    CatalogItem
    // vSelect
  },
  data () {
    return {
      // categories: [
      //   { name: 'Option1', value: 1 },
      //   { name: 'Option2', value: 2 }
      // ],
      // selected: 'Назва селекта'
    }
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART'
    ]),
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    onClickToProductCard (article) {
      this.$router.push({ name: 'product', query: { product: article } })
      // console.log(product.article)
    }
    // optionSelect (option) {
    //   this.selected = option.name
    // }
  },
  // mounted () {
  //   this.GET_PRODUCTS_FROM_API()
  //     .then((response) => {
  //       if (response.data) {
  //         console.log('Data arrived')
  //       }
  //     })
  // },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  }
}
</script>

<style scoped>
.catalog>div{
  display: flex;
  justify-content: flex-start;
  /*align-items: stretch;*/
  /*justify-content: space-between;*/
  flex-wrap: wrap;
  /*align-items: flex-start;*/
  /*gap: 10px;*/
}
.cat_item{
  flex: 0 0 30%;
}
.if_unavailable{
  text-align: center;
  font-size: 24px;
  margin-top: 20px;
}
</style>
