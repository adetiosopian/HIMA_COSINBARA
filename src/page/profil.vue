
<script setup>
import { ref } from 'vue';
// aksi tombol ketika di klik akan scrole otomatis
    const tentang=ref('null')
    const hubungi=ref('null')
    function pindah(){
        tentang.value.scrollIntoView({ behavior: 'smooth' })
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
var conten=ref('Himpunan Mahasiswa Computer Sains Umbara (COSINBARA) adalah organisasi mahasiswa yang bernaung di bawah Program Studi Ilmu Komputer, Fakultas Kesehatan dan Sains, Universitas Muhammadiyah Bogor Raya. COSINBARA hadir sebagai wadah bagi mahasiswa untuk menyalurkan aspirasi, mengembangkan potensi, serta memperkuat kompetensi dalam bidang teknologi dan ilmu komputer yang terus berkembang pesat. Didirikan pada 10 Oktober 2022, COSINBARA dibentuk dengan semangat kebersamaan dan visi untuk menciptakan mahasiswa yang unggul, kreatif, serta berkarakter Islami. Sejak awal berdirinya, COSINBARA berkomitmen menjadi motor penggerak dalam membangun lingkungan akademik yang dinamis dan berorientasi pada inovasi, riset, serta pengabdian kepada masyarakat. Berlokasi di Leuwiliang, Kabupaten Bogor, COSINBARA menjadi pusat kegiatan bagi mahasiswa Ilmu Komputer Universitas Muhammadiyah Bogor Raya. Melalui berbagai program kerja, seminar, pelatihan, dan kegiatan sosial, COSINBARA terus mendorong anggotanya untuk berkembang, berkontribusi nyata, dan siap menghadapi tantangan era digital serta revolusi industri 4.0.')

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


</script>
<template>
    <div class=" w-full h-auto ">
        <div class="md:grid md:grid-cols-2 md:mt-[130px] block  mt-26 p-2 py-3  border-gray-300 border-[1px] shadow-lg  md:shadow-xl mx-5 rounded-2xl ">
            <div class="md:mt-5 p-4 mt-0">
                <!-- sekilas tentang hima -->
                <h1 class="md:text-4xl font-semibold text-[20px] text-center md:text-left  font-sans mb-5">Grow, Lead, and Innovate with COSINBARA</h1>
                <p class="opacity-60 md:text-[16px] text-[12px]  text-justify md:pr-3 mb-5">HIMA COSINBARA hadir sebagai wadah resmi bagi seluruh mahasiswa Ilmu Komputer untuk menyalurkan aspirasi, mengembangkan potensi diri, serta memperkuat rasa persaudaraan dan solidaritas di antara anggotanya.</p>
                <span class="h-auto w-full text-[12px] md:w-auto">
                    <button class=" hover:bg-black text-white p-2 rounded-xl w-full md:w-[200px] inline mb-3 md:mb-0 md:mr-5" @touchstart="aksi" @touchend="selesai" @click="pindah" :class="ubah">
                        Tentang Hima <div class="inline pl-3">-></div>
                    </button>
                    <button class="hover:bg-black text-white p-2 rounded-xl w-full md:w-[200px] inline" @touchstart="aksi1" @touchend="selesai1" :class="ubah1" @click="pindah1">Hubungi Kami</button>
                </span>
                <!-- gambar icon  -->
                <div class="md:space-x-5 space-x-[10px] text-gray-500 md:text-20 text-15 p-1 mt-4 md:mt-2">
                    <span><img src="../assets/kelompok.jpg" alt="" class="inline size-9 bg-cover bg-center object-center">Cooperation </span>
                    <span><img src="../assets/memimpin.jpg" alt="" class="inline size-9 bg-cover ">Leadership</span>
                    <span class="ml-20 md:m-0"><img src="../assets/creatif.jpg" alt="" class="inline size-9 bg-cover ">Creativity</span>
                </div>
            </div>
            <!-- gambar bersama atau utama-->
            <div><img src="../assets/gambar-bersama.jpg" class="rounded-2xl object-cover" alt=""></div>
        </div>
        <div class="hidden md:block  h-1 w-screen mt-5"></div>
        <div class="md:grid md:grid-cols-2 md:mt-[70px] block mt-[20px] m-2 p-2 border-gray-200 border-[1px] md:shadow-xl shadow-lg mx-5 rounded-2xl ">
            <!-- tampilan gambar logo di pc -->
            <div class="justify-center items-center md:flex md:flex-col hidden ">
                <img src="../assets/logo hima.png" alt="" class="size-100">
            </div>
            <!-- isi konten tentang hima -->
            <div class="md:mt-5 p-4 mt-0 ">
                <h1 class="md:text-4xl font-semibold text-[20px] text-center md:text-left  font-sans mb-5" ref="tentang">Tentang COSINBARA</h1>
                <p class="opacity-60 md:text-[16px] text-[12px]  text-justify md:pr-3 mb-5">{{ conten }}
                </p>
            </div>
            <!-- tampilan gambar logo di hp -->
            <div class="md:hidden block h-auto w-auto">
                <img src="../assets/logo hima.png" alt="" class="">
            </div>
        </div>

        <div class="hidden md:block  h-1 w-screen mt-5 "></div>
        <div class="md:mt-[70px] block mt-[20px] m-2 p-2 border-gray-200 border-[1px] md:shadow-xl shadow-lg mx-5 rounded-2xl">
            <!-- gambar dan link agenda atau kegiatan hima -->
            <div class="md:mt-5 p-4 mt-0 ">
                <h1 class="md:text-4xl font-semibold text-[20px] text-center font-sans mb-5">Agenda HIMA</h1>
                <div class="grid md:grid-cols-3 grid-cols-1 gap-5  rounded-xl md:p-5 ">
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-[270px] h-[170px] text-center place-content-center"><div class=" w-full h-full"><img src="../assets/day4,1.png" alt="" class="w-full h-full object-cover rounded-xl"></div></div>
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-[270px] h-[170px] text-center place-content-center"><div class=" w-full h-full"><img src="../assets/day3.png" alt="" class="w-full h-full object-cover rounded-xl"></div></div>
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-[270px] h-[170px] text-center place-content-center"><div class=" w-full h-full"><img src="../assets/day2.jpg" alt="" class="w-full h-full object-cover rounded-xl"></div></div>
                    <div class="md:w-full md:h-[280px] border-2 rounded-xl w-[270px] h-[170px] md:col-2 text-center place-content-center"><div class=" w-full h-full"><img src="../assets/day1.jpg" alt="" class="w-full h-full object-cover rounded-xl"></div></div>
                </div>
            </div>
            <div class="w-full md:col-span-4 text-center font-bold z-50" @touchstart="tex3" @touchend="tex2" :class="hai1"><router-link to="/kegiatan" class="w-full hover:text-sky-700" >Lihat secara detail...</router-link></div>
        </div>
        <div class="hidden md:block h-1 w-screen mt-5"></div>
        <!-- gambar dan link bph dan struktur organigram -->
        <div class="  md:mt-[70px] block mt-[20px] m-2 p-2 mb-5 border-gray-200 md:shadow-xl border-[1px] shadow-lg mx-5 rounded-2xl ">
            <h1 class="md:text-4xl font-semibold text-[20px] text-center font-sans mb-2">Badan Pengurus Harian</h1>
            <div class="h-40 md:h-[600px] overflow-y-hidden overflow-auto p-3">
                <div class="grid md:grid-cols-4 grid-cols-4 md:gap-10 gap-16 rounded-xl md:p-10 h-50 w-full ">
                    <div class=" md:w-full md:h-[350px]  rounded-xl w-full  text-center  transition-transform duration-300" :class="kedepan" @click="fokus">
                        <div class=" text-white w-30 h-50  md:w-[400px] md:h-[450px] rounded-2xl"> 
                        <img src="../assets/foto/3.jpg" class="rounded-xl" alt="">
                        </div>
                    </div>
                    <div class=" md:w-full md:h-[350px]  rounded-xl w-full h-auto text-center  transition-transform duration-300" :class="kedepan1" @click="fokus1">
                        <div class=" text-white w-30 h-50 md:w-[400px] md:h-[450px] rounded-2xl "> 
                        <img src="../assets/foto/4.jpg" class="rounded-xl" alt="">
                        </div>
                    </div>
                    <div class="md:w-full md:h-[350px]  rounded-xl w-full h-auto text-center  transition-transform duration-300" :class="kedepan2" @click="fokus2">
                        <div class=" text-white w-30 h-50 md:w-[400px] md:h-[450px] rounded-2xl"> 
                        <img src="../assets/foto/5.jpg" class="rounded-xl" alt="">
                        </div>
                    </div>
                    <div class="md:w-full md:h-[350px] rounded-xl w-full h-auto text-center  transition-transform duration-300" :class="kedepan3" @click="fokus3">
                        <div class=" text-white w-30 h-50 md:w-[400px] md:h-[450px] rounded-2xl"> 
                        <img src="../assets/foto/6.jpg" class="rounded-xl" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full md:col-span-4 text-center font-bold z-50" @touchstart="tex" @touchend="tex1" :class="hai"><router-link to="/struktur" class="w-full hover:text-sky-700" >Lihat secara detail...</router-link></div>
            
        </div>

        <!-- contak dan alamat hima -->
        <div class="w-full h-auto md:h-[400px] bg-linear-to-br from-blue-500 to-blue-900 pt-4  ">
            <h1 class="font-semibold text-[20px] text-center font-sans mb-5 pt-3 text-black" ref="hubungi">Dapat menghubungi</h1>
            <div class="md:grid md:grid-cols-2 md:mt-[70px] block mt-[20px] m-2 p-5">
                <div>
                    <div class="grid grid-cols-[30px_auto] mb-2 ">
                        <img src="../assets/gmail.png" alt="" class="inline w-[25px] h-[20px] p-[2px] bg-top bg-cover rounded-[7px] mr-2">
                        <h6 class="inline">Email <br>himacosinbara.gmail.com</h6>
                    </div>
                    <div class="grid grid-cols-[30px_auto] mb-2">
                        <img src="../assets/tlp.png" alt="" class="inline w-[25px] h-[20px] p-[2px] bg-top bg-cover rounded-[7px] mr-2">
                        <h6 class="inline">Telepon <br>+62123456789</h6>
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
            <h1 class="text-center mt-4 md:mt-20">© 2025 COSINBARA.</h1>
        </div>
    </div>
</template>