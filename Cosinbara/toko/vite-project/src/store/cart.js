import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    produk: JSON.parse(localStorage.getItem('produk')) || null
  }),
  actions: {
    setProduk(data) {
      this.produk = data
      localStorage.setItem('produk', JSON.stringify(data))
    },
    clearProduk() {
      this.produk = null
      localStorage.removeItem('produk')
    }
  }
})
