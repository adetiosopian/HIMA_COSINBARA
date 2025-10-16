<script setup>
import { ref } from 'vue';
// animasi perpindahan ke sukses
    const pesan1=ref("block opacity-100 ease-in-out")
    const sukses=ref("hidden opacity-0 ease-in-out")
    const masage=ref("")
    function submit(){
        pesan1.value="opacity-0 transform duration-500 ease-in-out"
         setTimeout(() => {
            pesan1.value = "opacity-0 hidden ease-in-out";
            sukses.value = "block"
        }, 500);
        setTimeout(()=>{
            sukses.value="block opacity-100 transform duration-500 ease-in-out"
        },600);

        fetch("https://script.google.com/macros/s/AKfycbxn-fc9UJSQBUgE5BKEOtVcBCQjN57yXm1sjwXe-I-3bQ5uNdoAO2ozF9xfdJzhBkwS/exec", {
                method: "POST",
                
                body: JSON.stringify({
                    pesan:masage.value
                    
                })
            })
            
    }
    // animasi perpindahan ke tulis ulang pesan
    function ulangi(){
        sukses.value="opacity-0 transform duration-500 ease-in-out"
        window.location.reload()
         setTimeout(() => {
            sukses.value = "opacity-0 hidden ease-in-out";
            pesan1.value = "block"
        }, 500);
        setTimeout(()=>{
            pesan1.value="block opacity-100 transform duration-500 ease-in-out"
        },600);
        
    }   



</script>
<template>
    <div class="bg-gray-900 flex items-center justify-center min-h-screen p-4 text-white overflow-hidden mt-[100px]">
    <!-- Latar belakang gradien -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900 via-gray-900 to-slate-900 opacity-80"></div>

    <div id="confession-box" class="relative w-full max-w-lg mx-auto bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
        
        <!-- Tampilan Awal untuk Menulis Pesan -->
        <div id="send-view" :class="pesan1">
            <div class="text-center mb-8">
                <h1 class="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Kotak Curhat Anonim</h1>
                <p class="text-gray-400 mt-2">Tuliskan apa saja yang kamu rasakan. Semuanya aman di sini.</p>
            </div>

            <form @submit.prevent="submit">
                <div>
                    <label for="message" class="sr-only">Pesanmu</label>
                    <textarea v-model="masage" name="message" rows="6" placeholder="Tulis ceritamu di sini..." class="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition duration-200 text-gray-200 placeholder-gray-500 resize-none" required></textarea>
                </div>
                <div class="mt-6 text-center">
                    <button type="submit" class="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 px-12 rounded-lg hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
                        Kirim Pesan
                    </button>
                </div>
            </form>
        </div>

        <!-- Tampilan Sukses Setelah Mengirim Pesan -->
        <div id="success-view" :class="sukses">
            <div class="text-center py-8">
                 <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-teal-500 to-green-500 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>
                <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Pesan Terkirim!</h2>
                <p class="text-gray-400 mt-3">Terima kasih sudah berbagi. Semoga kamu merasa lebih baik.</p>
                <button @click="ulangi" class="mt-8 bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300">
                    Tulis Lagi
                </button>
            </div>
        </div>
    </div>
</div>
</template>