
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
// aksi tombol ketika di klik akan scrole otomatis
    const tentang=ref('null')
    const hubungi=ref('null')
    function pindah(){
        tentang.value.scrollIntoView({behavior: 'smooth'})
    }
    function pindah1(){
        hubungi.value.scrollIntoView({behavior:'smooth'})
    }
// aksi tombol ketika di tekan akan berubah warna
    var ubah= ref('bg-black/85')
    var ubah1 = ref('bg-black/85')
    function aksi(){
        ubah.value='bg-black'
    }
    function aksi1(){
        ubah1.value='bg-black'
    }
    function selesai(){
        ubah.value='bg-black/85'
    }
    function selesai1(){
        ubah1.value='bg-black/85'
    }

// fungsi untuk ketika  text liat secara detail di tekan dan di lepas akan berubah warna di hp
var hai=ref('text-black')
function tex(){
    hai.value='text-sky-700'
}
function tex1(){
    hai.value='text-black'
}

var hai1=ref('text-black')
function tex3(){
    hai1.value='text-sky-700'
}
function tex2(){
    hai1.value='text-black'
}

// variabel yang beriisi isi konten tentang hima
var conten=ref('Himpunan Mahasiswa Computer Science Universitas Muhammadiyah Bogor Raya (COSINBARA) adalah organisasi mahasiswa yang bernaung di bawah Program Studi Ilmu Komputer Fakultas Kesehatan dan Sains Universitas Muhammadiyah Bogor Raya. COSINBARA hadir sebagai wadah bagi mahasiswa untuk menyalurkan aspirasi, mengembangkan potensi, serta memperkuat kompetensi dalam bidang teknologi dan Ilmu Komputer yang terus berkembang pesat. COSINBARA ini didirikan pada tanggal 10 Oktober 2022 di Universitas Muhammadiyah Bogor Raya (UMBARA), COSINBARA dibentuk dengan semangat kebersamaan dan visi untuk menciptakan mahasiswa yang unggul, kreatif, Inclusif, serta berkarakter Islami. Sejak awal berdirinya, COSINBARA berkomitmen menjadi penggerak dalam membangun lingkungan akademik yang dinamis dan berorientasi pada inovasi, riset, serta pengabdian kepada masyarakat. COSINBARA menjadi pusat kegiatan bagi mahasiswa Ilmu Komputer Universitas Muhammadiyah Bogor Raya. Melalui berbagai Program Kerja, Seminar, Pelatihan, dan Kegiatan Sosial. COSINBARA terus mendorong anggotanya untuk berkembang, berkontribusi nyata, dan siap menghadapi tantangan era digital serta revolusi industri 4.0. COSINBARA juga memiliki program unggulan bernama TECHVERSE, yaitu rangkaian kegiatan yang mencakup Cosinbara Goes to School, Umbara Champions League (UCL) Mobile Legends, Lomba Desain Grafis, serta Seminar Teknologi dan Kreativitas. Selain itu, COSINBARA juga menjalankan berbagai program kerja lainnya seperti Advocare, Sinstore, dan Weekend Mahasiswa Ilmu Komputer (WMI), serta berbagai kegiatan inovatif lainnya yang bertujuan untuk mengembangkan potensi dan kreativitas mahasiswa di bidang teknologi informasi.')

// fungsi fokus di  bph
var kedepan =ref(" ")
var kedepan1 =ref(" ")
var kedepan2 =ref(" ")
var kedepan3 =ref(" ")

function fokus(){
    kedepan.value="z-50 scale-105"
    kedepan1.value="z-0 scale-100"
    kedepan2.value="z-0 scale-100"
    kedepan3.value="z-0 scale-100"
}
function fokus1(){
    kedepan1.value="z-50 scale-105"
    kedepan.value="z-0 scale-100"
    kedepan2.value="z-0 scale-100"
    kedepan3.value="z-0 scale-100"
}
function fokus2(){
    kedepan2.value="z-50 scale-105"
    kedepan1.value="z-0 scale-100"
    kedepan.value="z-0 scale-100"
    kedepan3.value="z-0 scale-100"
}
function fokus3(){
    kedepan3.value="z-50 scale-105"
    kedepan1.value="z-0 scale-100"
    kedepan2.value="z-0 scale-100"
    kedepan.value="z-0 scale-100"
}
const a = ref("scale-100")
const b= ref("scale-100")
const c= ref("scale-100")
const d = ref("scale-100")
function e(){
    a.value="scale-110"
    b.value="scale-100"
    c.value="scale-100"
    d.value="scale-100"
}
function f(){
    a.value="scale-100"
    b.value="scale-110"
    c.value="scale-100"
    d.value="scale-100"
}
function g(){
    a.value="scale-100"
    b.value="scale-100"
    c.value="scale-110"
    d.value="scale-100"
}
function h(){
    a.value="scale-100"
    b.value="scale-100"
    c.value="scale-100"
    d.value="scale-110"
}
onMounted(() => {
  setSEO({
    title: 'Hima Cosinbara | PROFIL',
    description: 'Selamat datang di website resmi HIMA COSINBARA UMBARA. Dapatkan informasi terbaru seputar kegiatan, profil, dan program kerja Himpunan Mahasiswa Ilmu Komputer Umbara.',
    url: 'https://himacosinbara.com/profil',
    image: 'https://himacosinbara.com/logohima.png',
    type: 'website',
    schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HIMA UMBARA PROFIL",
        "url": "https://himacosinbara.com/profil",
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
})
</script>
<template>
    <div class=" w-full h-auto ">
        <div class="lg:grid lg:grid-cols-2 lg:mt-[130px] block  mt-26 p-2 py-3  border-gray-300 border-[1px] shadow-lg  lg:shadow-xl mx-5 rounded-2xl ">
            <div class="md:mt-5 p-4 mt-0">
                <!-- sekilas tentang hima -->
                <h1 class="lg:text-[40px] md:text-[35px] font-bold text-[25px] text-center lg:text-left font-sans mb-5 md:hidden lg:block block ">Bangun Solusi Wujudkan Revolusi</h1>
                <h1 class="lg:text-[40px] md:text-[35px] font-bold text-[25px] text-center lg:text-left font-sans mb-5 hidden md:block lg:hidden">Bangun Solusi Wujudkan Revolusi</h1>
                <p class="opacity-60 lg:text-[15px] md:text-[15px] text-[10px] md:text-center lg:text-justify text-justify md:pr-3 mb-5"> HIMA COSINBARA atau Computer Science Universitas Muhammadiyah Bogor Raya adalah organisasi mahasiswa yang bernaung di bawah Program Studi Ilmu komputer Fakultas Kesehatan dan Sains Universitas Muhammadiyah Bogor Raya hadir sebagai wadah bagi seluruh mahasiswa Ilmu Komputer untuk menyalurkan aspirasi, mengembangkan potensi diri, serta memperkuat rasa persaudaraan.</p>
                <span class="h-auto w-full text-[12px] lg:w-auto md:flex md:justify-center lg:justify-start ">
                    <button class=" hover:bg-black text-white p-2 rounded-xl w-full md:w-[200px] inline mb-3 md:mb-0 md:mr-5" @touchstart="aksi" @touchend="selesai" @click="pindah" :class="ubah">
                        Tentang Hima <div class="inline pl-3">-></div>
                    </button>
                    <button class="hover:bg-black text-white p-2 rounded-xl w-full md:w-[200px] inline" @touchstart="aksi1" @touchend="selesai1" :class="ubah1" @click="pindah1">Hubungi Kami</button>
                </span>
                <!-- gambar icon  -->
                <div class="md:space-x-5 space-x-[5px] text-gray-500 md:text-20 text-15 sm:text-sm p-1 mt-4 md:mt-2 flex justify-center md:flex md:justify-center lg:justify-start  ">
                    <span><img src="../assets/kelompok.jpg" alt="" class="inline size-9 bg-cover object-center rounded-2xl">Cooperation </span>
                    <span><img src="../assets/memimpin.jpg" alt="" class="inline size-9 bg-cover object-center rounded-2xl">Leadership</span>
                    <span class="hidden md:block"><img src="../assets/creatif.jpg" alt="" class="inline size-9 bg-cover object-center rounded-2xl">Creativity</span>
                </div>
                <div class="flex justify-center p-1 md:hidden">
                    <span class="text-15 text-gray-500 "><img src="../assets/creatif.jpg" alt="" class="inline size-9 bg-cover object-center">Creativity</span>
                </div>
                <!-- gambar bersama atau utama-->
                </div>
            <div><img src="../assets/gambar-bersama.jpg" class="rounded-2xl object-cover" alt="gambar anggota hima" ref="tentang"></div>
        </div>
        <div class="hidden md:block  h-1 w-screen mt-5" ></div>
        <div class="md:grid md:grid-cols-2 md:mt-[70px] block mt-[20px] m-2 p-2 border-gray-200 border-[1px] md:shadow-xl shadow-lg mx-5 rounded-2xl" >
            <!-- tampilan gambar logo di pc -->
            <div class="justify-center items-center md:flex md:flex-col hidden ">
                <img src="../assets/logo hima.png" alt="logo hima" class="size-100">
            </div>
             <!-- tampilan gambar logo di hp -->
            <h1 class="md:text-4xl font-semibold text-[20px] text-center md:text-left md:hidden block font-sans mb-5 mt-5" >Tentang COSINBARA</h1>
            <div class="md:hidden h-auto w-auto flex justify-center">
                <img src="../assets/logo hima.png" alt="logo hima" class="h-1/2 w-1/2" >
            </div>
            <!-- isi konten tentang hima --> 
            <div class="md:mt-5 p-4 mt-0 ">
                <h1 class="md:text-4xl font-semibold text-[20px] text-center md:text-left  font-sans mb-5 hidden md:block" >Tentang COSINBARA</h1>
                <p class="opacity-60 md:text-[15px] text-[10px]  text-justify md:pr-3 mb-5">{{ conten }}
                </p>
            </div>
           
        </div>

        <div class="hidden md:block  h-1 w-screen mt-5 "></div>
        <div class="md:mt-[70px] block mt-[20px] m-2 p-2 border-gray-200 border-[1px] md:shadow-xl shadow-lg mx-5 rounded-2xl">
            <!-- gambar dan link agenda atau kegiatan hima -->
            <div class="md:mt-5 p-4 mt-0 ">
                <h1 class="md:text-4xl font-semibold text-[20px] text-center font-sans mb-5">Agenda HIMA</h1>
                <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-items-center bg-amber-50 rounded-xl md:p-5 ">
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-full h-full text-center place-content-center" :class="a" @click="e"><div class=" w-full h-full"><img src="../assets/day4,1.png" alt="" class="w-full h-full object-cover rounded-xl hover:scale-110"></div></div>
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-full h-full text-center place-content-center" :class="b" @click="f"><div class=" w-full h-full"><img src="../assets/day3.png" alt="" class="w-full h-full object-cover rounded-xl hover:scale-110"></div></div>
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-full h-full text-center place-content-center" :class="c" @click="g"><div class=" w-full h-full"><img src="../assets/day2.jpg" alt="" class="w-full h-full object-cover rounded-xl hover:scale-110"></div></div>
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-full h-full md:col-2 text-center place-content-center" @click="h" :class="d"><div class=" w-full h-full"><img src="../assets/day1.jpg" alt="" class="w-full h-full object-cover rounded-xl hover:scale-110"></div></div>
                </div>
            </div>
            <div class="w-full md:col-span-4 text-center font-bold z-50" @touchstart="tex3" @touchend="tex2" :class="hai1"><router-link to="/kegiatan" class="w-full hover:text-sky-700" >Lihat secara detail...</router-link></div>
        </div>
        <div class="hidden md:block h-1 w-screen mt-5"></div>
        <!-- gambar dan link bph dan struktur organigram -->
        <div class="  md:mt-[70px] block mt-[20px] m-2 p-2 mb-5 border-gray-200 md:shadow-xl border-[1px] shadow-lg mx-5 rounded-2xl ">
            <h1 class="md:text-4xl font-semibold text-[20px] text-center font-sans mb-2">Badan Pengurus Harian</h1>
            <div class="h-40 lg:h-[600px] md:h-[500px] overflow-y-hidden overflow-auto p-3">
                <div class="grid md:grid-cols-4 grid-cols-4 md:gap-16 md:space-x-7 gap-16 rounded-xl md:p-10 h-50 w-full ">
                    <div class=" md:w-full lg:h-[350px] md:h-[250px] rounded-xl w-full h-auto text-center  transition-transform duration-300" :class="kedepan" @click="fokus">
                        <div class=" text-white w-30 h-50 md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] rounded-2xl"> 
                            <img src="../assets/foto/3.jpg" class="rounded-xl " alt="">
                            <h1 class="relative z-0">ketua adam priatna</h1>
                        </div>
                    </div>
                    <div class=" md:w-full lg:h-[350px] md:h-[250px] rounded-xl w-full h-auto text-center  transition-transform duration-300" :class="kedepan1" @click="fokus1">
                        <div class=" text-white w-30 h-50 md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] rounded-2xl "> 
                        <img src="../assets/foto/4.jpg" class="rounded-xl" alt="">
                        <h1 class="relative z-0">Wakil Ketua Fitrah Averoes</h1>
                        </div>
                    </div>
                    <div class="md:w-full lg:h-[350px] md:h-[250px] rounded-xl w-full h-auto text-center  transition-transform duration-300" :class="kedepan2" @click="fokus2">
                        <div class=" text-white w-30 h-50 md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] rounded-2xl"> 
                        <img src="../assets/foto/5.jpg" class="rounded-xl" alt="">
                        <h1 class="relative z-0">Sekretaris Agnes Anggraeni</h1>
                        </div>
                    </div>
                    <div class="md:w-full lg:h-[350px] md:h-[250px] rounded-xl w-full h-auto text-center  transition-transform duration-300" :class="kedepan3" @click="fokus3">
                        <div class=" text-white w-30 h-50 md:w-[300px] md:h-[350px] lg:w-[400px] lg:h-[450px] rounded-2xl"> 
                        <img src="../assets/foto/6.jpg" class="rounded-xl" alt="">
                        <h1 class="relative z-0">Bendahara Mutia Hapi Agisti</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:col-span-4 text-center font-bold z-50" @touchstart="tex" @touchend="tex1" :class="hai"><router-link to="/struktur" class="w-full hover:text-sky-700" >Lihat secara detail...</router-link></div>
            
        </div>

        <!-- contak dan alamat hima -->
        <div class="w-full h-auto md:h-[400px] bg-linear-to-br bg-gray-600 pt-4 text-white ">
            <h1 class="font-semibold text-[15px] text-center font-sans mb-5 pt-3" ref="hubungi">Dapat Menghubungi</h1>
            <div class="md:grid md:grid-cols-2 md:mt-[70px] block mt-[20px] m-2 p-5">
                <div>
                    <div class="grid grid-cols-[30px_auto] mb-2 ">
                        <img src="../assets/gmail.png" alt="" class="inline w-[25px] h-[20px] p-[2px] bg-top bg-cover rounded-[7px] mr-2">
                        <h6 class="inline">Email <br>himacosinbara@gmail.com</h6>
                    </div>
                    <div class="grid grid-cols-[30px_auto] mb-2">
                        <img src="../assets/tlp.png" alt="" class="inline w-[25px] h-[20px] p-[2px] bg-top bg-cover rounded-[7px] mr-2">
                        <h6 class="inline">Telepon <br>0813-1669-2304</h6>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-[30px_auto] mb-2">
                        <img src="../assets/ig.png" alt="" class="inline w-[25px] h-[20px] p-[2px] bg-top bg-cover rounded-[7px] mr-2">
                        <h6 class="inline">Instagram <br>@himacosinbara</h6>
                    </div>
                    <div class="grid grid-cols-[30px_auto]">
                        <img src="../assets/lc.png" alt="" class="inline w-[25px] h-[20px] p-[2px] bg-top bg-cover rounded-[7px] mr-2">
                        <h6 class="inline">Lokasi <br>Jl. Raya Leuwiliang No.106, Leuwimekar, Kec Leuwiliang, Kabupaten Bogor, Jawa Barat 16640</h6>
                    </div>
                </div>
            </div>
            <p class="text-center mt-4 md:mt-20">&copy; 2025 HIMA COSINBARA.</p>
            
        </div>
    </div>
</template>