<script setup>
import { ref, onMounted } from 'vue';
import { setSEO } from '../utils/seo.js'
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head'; // Or a similar head management library

const route = useRoute();
const domain = 'https://himacosinbara.com'; // Replace with your actual domain

useHead({
  link: [
    {
      rel: 'canonical',
      href: domain + route.path,
    },
  ],
});
onMounted(() => {
  setSEO({
    title: 'Hima Cosinbara | STRUKTUR',
    description: 'Selamat datang di website resmi HIMA COSINBARA UMBARA. Dapatkan informasi terbaru seputar kegiatan, profil, dan program kerja Himpunan Mahasiswa Ilmu Komputer Umbara.',
    url: 'https://himacosinbara.com/struktur',
    image: 'https://himacosinbara.com/logohima.png',
    type: 'website',
    schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HIMA COSINBARA UMBARA STRUKTUR",
        "url": "https://himacosinbara.com/struktur",
        "description": "Website resmi Himpunan Mahasiswa Ilmu Komputer Universitas Muhammadiyah Bogor Raya.",
        "publisher": {
        "@type": "CollegeOrUniversity",
        "name": "Universitas Muhammadiyah Bogor Raya",
        "logo": "https://himacosinbara.com/logohima.png"
        },
        "potentialAction": {
        "@type": "SearchAction",
        "target": "https://himacosinbara.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
        }
    }
  })
  // Tambahkan schema JSON-LD ke halaman
  fetch('/data/struktur.json')
  .then(res => res.text())
  .then(jsonText => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = jsonText
    document.head.appendChild(script)
  })
  .catch(err => console.error('Gagal memuat JSON schema:', err))

})
import bg from '../assets/bg1.jpg'

</script>
<template>
    
    <div class="mt-26 md:mt-30 text-center " :style="{ backgroundImage: `url(${bg})` }">
        <div class="bg-white/75 ">

            <h1 class="md:text-4xl text-[22px] font-extrabold text-gray-900 mb-2">Kepengurusan HIMA COSINBARA</h1>
            <p class="md:text-lg text-[10px] text-gray-600">Periode Kepengurusan 2025/2026</p>
            <div class="md:h-10 h-7 w-full"></div>
            <div>
                <h2 class="md:text-3xl text-[15px] font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 pb-3">Badan Pengurus Harian <br> (BPH)</h2>
                
                <!-- BPH -->
                <div class="flex justify-center mb-10 px-10 ">
                    <div class=" text-white w-full h-auto md:w-[300px] md:h-[350px] rounded-2xl border-[10px]">
                        <img src="../assets/foto/3.jpg" class="rounded-2xl md:h-full md:w-full" alt="Ketua hima">
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10 ">
                    <div class="text-white lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px] w-full h-auto  "> 
                        <img src="../assets/foto/4.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="Wakil Ketua">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/5.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="Sekretaris">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/6.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="Bendahara"></img>
                    </div>
                </div>
                <div class="flex justify-center mx-7 my-5 md:my-12">
                    <div class="w-[100%] h-[2px] bg-gray-200 my-4 "></div>
                </div>
            </div>
            <!-- psdm -->
            <div>
                <h2 class="md:text-3xl text-[15px] font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 pb-3">Bidang Pengembangan Sumber Daya Manusia <br> (PSDM)</h2>
                
    
                <div class="flex justify-center mb-10 px-10 ">
                    <div class=" text-white w-full h-auto md:w-[300px] md:h-[350px] rounded-2xl border-[10px]">
                        <img src="../assets/foto/8.jpg" class="rounded-2xl md:h-full md:w-full" alt="">
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10 mb-10">
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px]  rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/9.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/10.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/11.jpg" class="rounded-2xl lg:h-full lg:w-full" alt=""></img>
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center justify-center md:space-x-3 lg:space-x-5  px-10 mb-10">
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/12.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/13.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px] ">  
                        <img src="../assets/foto/14.jpg" class="rounded-2xl lg:h-full lg:w-full" alt=""></img>
                    </div>
                    
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center justify-center md:space-x-3 lg:space-x-5 px-10 md:px-[150px] ">
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/15.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/16.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    
                    
                </div>
                <div class="flex justify-center mx-7 my-5 md:my-12">
                    <div class="w-[100%] h-[2px] bg-gray-200 my-4 "></div>
                </div>
            </div>
            <!-- advokasi -->
            <div>
                <h2 class="md:text-3xl text-[15px] font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 pb-3">Bidang Advokasi <br>(ADVO) </h2>
                
    
                <div class="flex justify-center mb-10 px-10 ">
                    <div class=" text-white w-full h-auto md:w-[300px] md:h-[350px] rounded-2xl border-[10px]">
                        <img src="../assets/foto/18.jpg" class="rounded-2xl md:h-full md:w-full" alt="">
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10 mb-10 ">
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/19.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/20.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/21.jpg" class="rounded-2xl lg:h-full lg:w-full" alt=""></img>
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10 md:px-[150px]">
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/22.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/23.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div> 
                </div>
                <div class="flex justify-center mx-7 my-5 md:my-12">
                    <div class="w-[100%] h-[2px] bg-gray-200 my-4 "></div>
                </div>
            </div>
            <!-- medkom -->
            <div>
                <h2 class="md:text-3xl text-[15px] font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 pb-3">Bidang Media Informasi dan Komunikasi <br> (MEDINKOM)</h2>
                
    
                <div class="flex justify-center mb-10 px-10 ">
                    <div class=" text-white w-full h-auto md:w-[300px] md:h-[350px] rounded-2xl border-[10px]">
                        <img src="../assets/foto/25.jpg" class="rounded-2xl md:h-full md:w-full" alt="">
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10 mb-10 ">
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/26.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/27.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/28.jpg" class="rounded-2xl lg:h-full lg:w-full" alt=""></img>
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10 ">
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/29.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/30.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/31.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                </div>
                <div class="flex justify-center mx-7 my-5 md:my-12">
                    <div class="w-[100%] h-[2px] bg-gray-200 my-4 "></div>
                </div>
            </div>
            <!-- kwu -->
            <div>
                <h2 class="md:text-3xl text-[15px] font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 pb-3">Bidang Kewirausahaan <br> (KWU)</h2>
                
    
                <div class="flex justify-center mb-10 px-10 ">
                    <div class=" text-white w-full h-auto md:w-[300px] md:h-[350px] rounded-2xl border-[10px]">
                        <img src="../assets/foto/33.jpg" class="rounded-2xl md:h-full md:w-full" alt="">
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10">
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/34.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/35.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/36.jpg" class="rounded-2xl lg:h-full lg:w-full" alt=""></img>
                    </div>
                </div>
                
                <div class="flex justify-center mx-7 my-5 md:my-12">
                    <div class="w-[100%] h-[2px] bg-gray-200 my-4 "></div>
                </div>
            </div>
            <!-- TPIT -->
            <div>
                <h2 class="md:text-3xl text-[15px] font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-500 pb-3">Bidang Teknologi dan Pengembangan IT <br> (TPIT)</h2>
                
    
                <div class="flex justify-center mb-10 px-10 ">
                    <div class=" text-white w-full h-auto md:w-[300px] md:h-[350px] rounded-2xl border-[10px]">
                        <img src="../assets/foto/38.jpg" class="rounded-2xl md:h-full md:w-full" alt="">
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10 mb-10">
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/39.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/40.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class=" text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/41.jpg" class="rounded-2xl lg:h-full lg:w-full" alt=""></img>
                    </div>
                </div>
                <div class="md:flex grid grid-cols-1 gap-10 justify-items-center md:justify-center md:space-x-3 lg:space-x-5 px-10">
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]"> 
                        <img src="../assets/foto/42.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/43.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                    <div class="text-white w-full h-auto lg:w-[300px] lg:h-[350px] rounded-2xl border-[10px]">  
                        <img src="../assets/foto/44.jpg" class="rounded-2xl lg:h-full lg:w-full" alt="">
                    </div>
                </div>
                <div class="flex justify-center mx-7 my-5 md:my-12">
                    <div class="w-[100%] h-[2px] bg-gray-200 my-4 "></div>
                </div>
            </div>
        </div>
    </div>
    
</template>
