<script setup>
import { useRouter } from 'vue-router'

import { useCartStore } from '../store/cart'
import { ref } from 'vue'

const jml= ref('1')
const pilihan = ref('hari')

const cart = useCartStore()

function kirimWA() {
    const nomor = "+6285773731782" // nomor WA tujuan
    const pesan = "Halo, saya ingin membeli "+cart.produk.nama+" pro "+jml.value+" "+pilihan.value
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`
    window.open(url, "_blank")
}

const art = useCartStore()
const router = useRouter()

// Kalau produk kosong (belum pilih dari halaman sebelumnya), arahkan ke halaman utama
if (!art.produk) {
  router.push('/')
}



</script>
<template>
  <div class="mt-7">
     <div class="container mx-auto px-4 py-12">
        <button id="back-button" class="mb-8 text-indigo-600 font-semibold flex items-center space-x-2 hover:underline">
            <i data-lucide="arrow-left"></i>
            <span>Kembali ke Produk</span>
        </button>
        <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- Left Column: Product Card -->
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                 <div :class="cart.produk.warna" class="p-6 flex justify-center items-center">
                     <img :src="cart.produk.gambar" alt="Product Logo" class="h-24 object-contain">
                </div>
                <div class="p-5 text-center">
                    <h3  class="text-2xl font-bold text-gray-800">{{ cart.produk.nama }}</h3>
                    <p id="order-product-short-desc" class="text-gray-500 text-sm mb-3"></p>
                    <p class="text-gray-700 font-semibold">Mulai dari <span  class="text-indigo-600">{{ cart.produk.harga }}</span></p>
                </div>
            </div>
    
            <!-- Right Column: Order Details -->
            <div>
                <h1 class="text-4xl font-extrabold text-gray-900 mb-4">{{ cart.produk.nama }}</h1>
                <p class="text-gray-600 mb-6 text-lg">{{ cart.produk.des }}</p>
                <div class="bg-white p-6 rounded-lg shadow-md mb-6">
                    <p class="text-xl font-bold">Harga Mulai Dari</p>
                    <p class="text-5xl font-extrabold text-indigo-600 mb-6">{{ cart.produk.harga }}</p>
                    <label for="no" class="mt-6">Jumlah pembelian</label><br>
                    <input type="number" name="no" id="" placeholder="Masukan angka" min="1" value="1" class="w-15 my-4" v-model="jml"><br>
                    <label for="bulan" class="mt-2">perbulan/hari/tahun</label><br>
                    <form class="my-2" >
                        <label>
                          <input type="radio" name="per" v-model="pilihan" value="hari" checked>
                          Hari
                        </label>
                    
                        <label>
                          <input type="radio" name="per" v-model="pilihan" value="bulan">
                          Bulan
                        </label>
                    
                        <label>
                          <input type="radio" name="per" v-model="pilihan" value="tahun">
                          Tahun
                        </label>
                    </form>
                    <a @click="kirimWA" class="w-full text-center bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-indigo-700 transition flex items-center justify-center space-x-3">
                        <span>Beli via WhatsApp</span>
                    </a>
                </div>
                <p class="text-sm text-gray-500 text-center">Anda akan diarahkan ke WhatsApp untuk melanjutkan pemesanan.</p>
            </div>
        </div>
      </div>
      <footer class="bg-gray-800 text-white mt-16">
        <div class="container mx-auto px-4 py-6 text-center">
            <p>&copy; 2025 Constore. Jual Akun Premium Terpercaya.</p>
        </div>
    </footer>
  </div>
</template>


