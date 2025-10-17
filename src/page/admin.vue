<script setup>
import { ref, onMounted } from 'vue'

const pesanList = ref([])
const url = "https://script.google.com/macros/s/AKfycbxn-fc9UJSQBUgE5BKEOtVcBCQjN57yXm1sjwXe-I-3bQ5uNdoAO2ozF9xfdJzhBkwS/exec"

async function ambilPesan() {
  const res = await fetch(url)
  pesanList.value = await res.json()
}

// onMounted(ambilPesan)
const regis=ref("block")
const tampil=ref("hidden")
const tunggu=ref("hidden")
const tex  =ref("")
function login(event){
  const form = event.target // memanggil data
  const data = new FormData(form)
  const id=data.get("id")
  const pw = data.get("Password")
  if (id == "admin" && pw == "hima@123") {
    regis.value="hidden"
    tampil.value="block"
    ambilPesan()
     setTimeout(()=>{
            tunggu.value="block"
            tex.value="Tunggu Sebentar"
            
        },100);
    setTimeout(()=>{
            tunggu.value="hidden"
            tex.value=""
        },3050);
  }
  

}
</script>

<template>
  <div class="md:p-5 p-3 mt-[110px]" >
    <form class="grid justify-center" @submit.prevent="login" :class="regis">
      <h1 class="block md:text-2xl text-xl font-medium text-gray-700 mb-1">Login</h1>
      <div class="md:w-[500px] ">
         <label for="Id" class="block text-sm font-medium text-gray-700 mb-1">Nama</label>
         <input type="text" name="id" placeholder="Nama" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
      </div>
      <div class="mt-6">
         <label for="Password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
         <input type="text" name="Password" placeholder="Password" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
      </div>
      <div class="mt-6">
        <button type="submit" class="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-12 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105">
              Kirim
        </button>
        
      </div>
    </form>
    
    
    <div class="p-5 mt-[10px]" :class="tampil">
      <h2 class="text-3xl">Semua Curhatan</h2>
      
    <div role="status" :class="tunggu" class=" grid justify-center text-center mt-5">
      <svg  class="w-15 h-15 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
      </svg>
      <span class="text-black">Loading...</span>
    </div>

      
      <div v-for="(item, i) in pesanList" :key="i" class="p-2 border-b border-gray-600">
        <p class="text-gray-300">{{ item.pesan }}</p>
        <small class="text-gray-500">{{ item.waktu }}</small>
      </div>
    </div>
  </div>
</template>
