<script setup>
import { ref, onMounted } from 'vue';
import { setSEO } from './utils/seo.js'
// animasi perpindahan ke sukses
    const pesan1=ref("block opacity-100 ease-in-out")
    const sukses=ref("hidden opacity-0 ease-in-out")
    const masage=ref("")
    const sukses1=ref("hidden")
    const tunggu=ref("block")
    function submit(){
        fetch("https://script.google.com/macros/s/AKfycbxn-fc9UJSQBUgE5BKEOtVcBCQjN57yXm1sjwXe-I-3bQ5uNdoAO2ozF9xfdJzhBkwS/exec", {
                method: "POST",
                
                body: JSON.stringify({
                    pesan:masage.value
                    
                })
            })
        pesan1.value="opacity-0 transform duration-500 ease-in-out"
         setTimeout(() => {
            pesan1.value = "opacity-0 hidden ease-in-out";
            sukses.value = "block"
        }, 500);
        setTimeout(()=>{
            sukses.value="block opacity-100 transform duration-500 ease-in-out"
        },600);
        setTimeout(() => {
            sukses1.value="block"
            tunggu.value="hidden"
        },2500);

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

onMounted(() => {
  setSEO({
    title: 'Advocare | Hima Cosinbara ',
    description: 'Selamat datang di website resmi advokasi hima cosinbara.',
    url: 'https://advocare.himacosinbara.com',
    image: 'https://advocare.himacosinbara.com/logohima.png',
    type: 'website',
    schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Advocare",
        "url": "https://advocare.himacosinbara.com",
        "description": "Website resmi Himpunan Mahasiswa Ilmu Komputer Universitas Muhammadiyah Bogor Raya.",
        "publisher": {
        "@type": "CollegeOrUniversity",
        "name": "Hima Cosinbara",
        "logo": "https://advocare.himacosinbara.com/logohima.png"
        },
        "potentialAction": {
        "@type": "SearchAction",
        "target": "https://advocare.himacosinbara.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
        }
    }
  })
})

</script>
<template>
    <div class="fixed lg:text-3xl md:text-3xl text-3xl text-white left-3 top-3">Advocare</div>
    <div class="bg-gray-900 flex items-center justify-center min-h-screen p-4 text-white overflow-hidden">
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
                <div :class="sukses1">
                    <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Pesan Terkirim!</h2>
                    <p class="text-gray-400 mt-3">Terima kasih sudah berbagi. Semoga kamu merasa lebih baik.</p>
                    <button @click="ulangi" class="mt-8 bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 transition duration-300">
                        Tulis Lagi
                    </button>
                </div>
                <div :class="tunggu">
                    <h2 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-400">Pesan sedang di proses!</h2>
                    <p class="text-gray-400 mt-3">Tunggu Sebentar</p>
                    <div role="status" :class="tunggu" class=" grid justify-center text-center mt-5">
                        <svg  class="w-15 h-15 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span class="text-black">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>