import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    searchValue: [],
    products: [],
    cart: [],
    categoriesOfProducts: [],
    filteredProducts: [],
    bigSliderItems: [],
    newEL: [],
    popularEL: [],
    comments: []
  },
  mutations: {
    SET_COMMENTS_TO_STATE: (state, comments) => {
      state.comments = comments
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CATEGORY_TO_STATE: (state, categoriesOfProducts) => {
      state.categoriesOfProducts = categoriesOfProducts
    },
    SET_BIG_SLIDER_IMG_TO_STATE: (state, bigSliderItem) => {
      state.bigSliderItems = bigSliderItem
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExist = false
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExist = true
            item.quantity++
          }
        })
        if (!isProductExist) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    DELETE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREMENT_ITEM: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT_ITEM: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    },
    PASS_TO_CATEGORY: (state, data) => {
      // state.filteredProducts.push(data)
      state.filteredProducts = []
      state.products.map(function (item) {
        if (item.type === data) {
          state.filteredProducts.push(item)
        }
      })
    },
    SET_SEARCH_VALUE: (state, value) => {
      // state.searchValue = value
      state.filteredProducts = []
      if (value) {
        state.products.filter(function (item) {
          if (item.name.toLowerCase().includes(value.toLowerCase())) {
            state.filteredProducts.push(item)
          }
        })
      } else {
        console.log('введіть шось')
      }
    },
    NEW_OR_POPULAR: (state) => {
      state.products.map(function (item) {
        if (item.feature === 'new') {
          state.newEL.push(item)
        }
        if (item.feature === 'popular') {
          state.popularEL.push(item)
        }
      })
    },
    SET_NEW_COMMENT_VALUE: (state, commentData) => {
      state.comments.unshift(commentData)
    }
  },
  actions: {
    GET_COMMENTS_FROM_API ({ commit }) {
      return axios('http://localhost:3000/comments', {
        method: 'GET'
      })
        .then((comments) => {
          commit('SET_COMMENTS_TO_STATE', comments.data)
          return comments
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    GET_PRODUCTS_FROM_API ({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    GET_CATEGORY_FROM_API ({ commit }) {
      return axios('http://localhost:3000/categoriesOfProducts', {
        method: 'GET'
      })
        .then((categoriesOfProducts) => {
          commit('SET_CATEGORY_TO_STATE', categoriesOfProducts.data)
          return categoriesOfProducts
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    GET_BIG_SLIDER_IMG_FROM_API ({ commit }) {
      return axios('http://localhost:3000/bigSliderItems', {
        method: 'GET'
      })
        .then((bigSliderItems) => {
          commit('SET_BIG_SLIDER_IMG_TO_STATE', bigSliderItems.data)
          return bigSliderItems
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART ({ commit }, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART ({ commit }, index) {
      commit('DELETE_FROM_CART', index)
    },
    INCREMENT_ITEM ({ commit }, index) {
      commit('INCREMENT_ITEM', index)
    },
    DECREMENT_ITEM ({ commit }, index) {
      commit('DECREMENT_ITEM', index)
    },
    PASS_TO_CATEGORY ({ commit }, data) {
      commit('PASS_TO_CATEGORY', data)
    },
    GET_SEARCH_VALUE ({ commit }, value) {
      commit('SET_SEARCH_VALUE', value)
    },
    NEW_OR_POPULAR ({ commit }) {
      commit('NEW_OR_POPULAR')
    },
    GET_NEW_COMMENT_VALUE ({ commit }, commentData) {
      commit('SET_NEW_COMMENT_VALUE', commentData)
    }
  },
  getters: {
    ALL_PRODUCTS (state) {
      return state.products
    },
    PRODUCTS (state) {
      return state.filteredProducts
    },
    CART (state) {
      return state.cart
    },
    CATEGORIES (state) {
      return state.categoriesOfProducts
    },
    SEARCH_VALUE (state) {
      return state.searchValue
    },
    BIG_SLIDER_IMAGES (state) {
      return state.bigSliderItems
    },
    NEW_EL (state) {
      return state.newEL
    },
    POPULAR_EL (state) {
      return state.popularEL
    },
    COMMENTS (state) {
      return state.comments
    }
  }
})
