<script setup>
import { useCartStore } from '../store/cart'
function getImage(fileName) {
    return new URL(`../assets/${fileName}`, import.meta.url).href
}
const cart = useCartStore()

function kirimWA() {
    const nomor = "+62881024690243" // nomor WA tujuan
    const pesan = "Halo, saya ingin membeli "+cart.produk.nama+" pro 1 bulan."
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`
    window.open(url, "_blank")
}

</script>
<template>
  <div class="">
    <div class="w-full h-auto  mt-[100px] md:mt-[120px] p-2 font-bold capitalize pl-5 text-[20px] md:text-3xl grid md:grid-cols-2">
      <div class="bg-gray-500 h-full w-full grid justify-center p-5 rounded-2xl">
        <img :src="getImage(cart.produk.gambar)" alt="" class=" h-[500px] w-[400px] rounded-2xl  ">
      </div>
      <div>
        <h1 class="">{{ cart.produk.nama }}</h1>
        <button class="m-5 bg-amber-700 p-2 rounded-xl w-20 " @click="kirimWA">beli</button>
      </div>
    </div>
    
    <div>h</div>
  </div>
</template>


