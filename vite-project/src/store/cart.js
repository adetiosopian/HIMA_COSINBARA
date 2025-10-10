// src/store/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    produk: null
  }),
  actions: {
    setProduk(data) {
      this.produk = data
    }
  }
})
