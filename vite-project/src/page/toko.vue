<script setup>

    import { useCartStore } from '../store/cart'
    import { useRouter } from 'vue-router'

    const cart = useCartStore()
    const router = useRouter()

    const produk={
        nama:'canva',
        gambar:'canva.png',
    }
    const produk1={
        nama:'cupcat',
        gambar:'cupcat.png'
    }
function getImage(fileName) {
    return new URL(`../assets/${fileName}`, import.meta.url).href
}
    function beli(){
        cart.setProduk(produk)
        router.push('/pembelian')
    }
    function beli1(){
        cart.setProduk(produk1)
        router.push('/pembelian')
    }
</script>

    
<template>
    <div>
        <div class=" md:mt-[130px] block mt-[90px] m-2 p-5">
            <h1 class="bg-blue-950 text-white p-[4px] text-[10px] rounded-lg text-center md:text-xl">Belanja Dulu Yuk</h1>
        </div>
        <div class="grid md:grid-cols-4 grid-cols-2 mx-10 gap-2 place-items-center">
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] rounded-xl" @click="beli">
                <img :src="getImage(produk.gambar)" alt="" class="h-full w-full rounded-xl border-2 bg-cover">
                <h1 class="hidden">{{ produk.nama }}</h1>
            </div>
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] bg-blue-600 rounded-xl" @click="beli1">
                <img :src="getImage(produk1.gambar)" alt="" class="rounded-xl border-2 w-full h-full bg-cover">
                <h1 class="hidden">{{ produk1.nama }}</h1>
            </div>
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] bg-blue-600 rounded-xl">netfik</div>
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] bg-blue-600 rounded-xl">disni+</div>
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] bg-blue-600 rounded-xl">vidio</div>
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] bg-blue-600 rounded-xl"></div>
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] bg-blue-600 rounded-xl"></div>
            <div class="h-[150px] w-[110px] md:h-[300px] md:w-[260px] bg-blue-600 rounded-xl"></div>
            
        </div>
    </div>
</template>