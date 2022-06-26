<template>
  <div class="tab-slider" >
    <TabView>
      <TabPanel>
        <template #header>
          <span class="tab_el">Новинки</span>
        </template>
        <Carousel :value="NEW_EL" :numVisible="3" :numScroll="1">
          <template #item="slotProps">
            <catalog-item
              class="cat_item"
              :product_data="slotProps.data"
              @addToCart="addToCart"
              @click="onClickToProductCard(slotProps.data.article)"
            />
          </template>
        </Carousel>
      </TabPanel>
      <TabPanel>
        <template #header>
          <span class="tab_el">Популярне</span>
        </template>
        <Carousel :value="POPULAR_EL" :numVisible="3" :numScroll="1">
        <template #item="slotProps">
          <catalog-item
            class="cat_item"
            :product_data="slotProps.data"
            @addToCart="addToCart"
            @click="onClickToProductCard(slotProps.data.article)"
          />
        </template>
      </Carousel>
      </TabPanel>
    </TabView>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CatalogItem from '../components/catalog-item'
export default {
  name: 'tab-slider',
  components: {
    CatalogItem
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'NEW_EL',
      'POPULAR_EL'
    ])
  },
  methods: {
    ...mapActions([
      'ADD_TO_CART',
      'NEW_OR_POPULAR'
    ]),
    addToCart (data) {
      this.ADD_TO_CART(data)
    },
    onClickToProductCard (article) {
      this.$router.push({ name: 'product', query: { product: article } })
    }
  },
  mounted () {
    this.NEW_OR_POPULAR()
  }
}
</script>

<style scoped>
/deep/.p-link{
  /*display: none;*/
  display: inline-block!important;
  border: none;
  background: none;
  font-size: 1.5rem;
}
/deep/.p-carousel-indicator{
  font-size: 25px;
  display: none;
}
/deep/.p-carousel-indicator.p-highlight::marker{
  color: #FF9846;
}
/deep/.p-carousel-indicators.p-reset{
  gap: 15px;
}
/deep/.p-tabview-title{
  /*margin-right: 10px;*/
  gap: 10px;
  margin: 0 auto;
}
/deep/.p-highlight{
  color: #A4ACAD;
  border-bottom: 2px solid #A4ACAD;
}
/deep/.p-tabview-nav-container{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
/deep/.p-tabview-nav{
  gap: 10px;
}
.tab_el{
  font-weight: 500;
  font-size: 20px;
}
</style>
