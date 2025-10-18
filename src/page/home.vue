
<script setup>
import { ref } from 'vue';


// animasi tommbol
var aksi=ref('bg-yellow-400')
function mulai(){
    aksi.value='bg-yellow-300'
}
function selesai(){
    aksi.value='bg-yellow-400'
}
var aksii=ref('bg-slate-700')
function mulaii(){
    aksii.value='bg-slate-600'
}
function selesaii(){
    aksii.value='bg-slate-700'
}
var aks=ref('bg-yellow-400')
function mula(){
    aks.value='bg-yellow-300'
}
function selesa(){
    aks.value='bg-yellow-400'
}
</script>
<template>
    <main>
        <!-- Hero Section -->
        <section class="relative bg-cover bg-center text-white" style="background-image: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop');">
            <!-- Overlay Gelap -->
            <div class="absolute inset-0 bg-slate-900/70"></div>
            
            <div class="container mx-auto px-6 relative z-10 pt-32 pb-20">
                <div class="flex flex-col md:flex-row items-center gap-12">
                    <!-- Kolom Teks -->
                    <div class="md:w-1/2 text-center md:text-left">
                        <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                            Bersama Mengembangkan <span class="text-yellow-400">Potensi Mahasiswa</span> Ilmu Komputer
                        </h1>
                        <p class="text-slate-300 text-[12px] md:text-[15px] mb-8 max-w-xl mx-auto md:mx-0">
                            HIMA COSINBARA hadir sebagai wadah bagi seluruh mahasiswa Ilmu Komputer untuk menyalurkan aspirasi, mengembangkan potensi diri, serta memperkuat rasa persaudaraan.
                        </p>
                        <div class="flex justify-center md:justify-start space-x-4">
                            <div class=" text-black font-bold py-3 rounded-lg  hover:bg-yellow-300 transition duration-300" @touchstart="mulai"  @touchend="selesai" :class="aksi">
                                <router-link to="/profil" class="px-6 py-3 rounded-lg">Kenali Kami</router-link>
                            </div>
                            <div href="#" class="text-white font-bold py-3 rounded-lg hover:bg-slate-600 transition duration-300"  @touchstart="mulaii"  @touchend="selesaii" :class="aksii">
                                <router-link to="/daftar" class="w-full h-full px-6 py-3  rounded-lg">Daftar HIMA</router-link>
                            </div>
                        </div>
                    </div>
                    <!-- Kolom Ilustrasi -->
                    <div class="md:w-1/2">
                        <div class="bg-slate-800/50 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
                           <svg class="w-full h-auto" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#facc15;stop-opacity:1" /> <!-- yellow-400 -->
                                        <stop offset="100%" style="stop-color:#fde047;stop-opacity:1" /> <!-- yellow-300 -->
                                    </linearGradient>
                                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style="stop-color:#334155;stop-opacity:1" /> <!-- slate-700 -->
                                        <stop offset="100%" style="stop-color:#475569;stop-opacity:1" /> <!-- slate-600 -->
                                    </linearGradient>
                                </defs>
                                <!-- Abstract shapes representing code, connection, and growth -->
                                <rect x="20" y="20" width="160" height="80" rx="10" fill="url(#grad2)" />
                                <circle cx="50" cy="50" r="15" fill="#f8fafc"/>
                                <path d="M 45 50 L 55 50 M 50 45 L 50 55" stroke="url(#grad1)" stroke-width="2" />
                                <rect x="80" y="40" width="80" height="8" rx="4" fill="#f8fafc" opacity="0.8"/>
                                <rect x="80" y="55" width="60" height="8" rx="4" fill="#f8fafc" opacity="0.6"/>
                                <rect x="80" y="70" width="70" height="8" rx="4" fill="#f8fafc" opacity="0.4"/>
                                <path d="M 65 55 Q 75 65, 80 50" stroke="url(#grad1)" stroke-width="3" fill="none" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Bagian CTA (Call to Action) -->
        <section class="bg-slate-900 text-white">
            <div class="container mx-auto px-6 py-16 text-center">
                <h2 class="text-3xl font-bold mb-4">Siap Bergabung Dengan Kami?</h2>
                <p class="text-slate-300 mb-8 text-[12px] md:text-[15px] max-w-2xl mx-auto">Jadilah bagian dari komunitas mahasiswa Ilmu Komputer yang solid, kreatif, dan inovatif. Daftar sekarang!</p>
                <div @touchstart="mula"  @touchend="selesa" :class="aks" class=" text-slate-900 font-bold px-0 py-3 rounded-lg hover:bg-yellow-300 transition duration-300 text-lg">
                    <router-link to="/daftar" class="w-full h-full px-22 py-3 rounded-lg ">Daftar Sekarang</router-link> 
                </div>
            </div>
        </section>

    </main>
    
    <!-- Footer -->
    <footer class="bg-slate-900 border-t border-slate-800">
        <div class="container mx-auto px-4 py-8">
            <div class="text-center text-slate-400">
                <p>&copy; 2025 HIMA COSINBARA.</p>
            </div>
        </div>
    </footer>
    
</template>


