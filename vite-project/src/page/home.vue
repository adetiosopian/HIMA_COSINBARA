
<script setup>
import { ref } from 'vue';

// animasi tommbol
var aksi=ref('bg-gray-500')
function mulai(){
    aksi.value='bg-gray-800'
}
function selesai(){
    aksi.value='bg-gray-500'
}
var aksii=ref('bg-blue-500')
function mulaii(){
    aksii.value='bg-blue-700'
}
function selesaii(){
    aksii.value='bg-blue-500'
}
</script>
<template>

    <div class="bg-[url(bg1.jpg)] w-full h-screen overflow-y-hidden overflow-x-hidden mt-20 md:mt-25 pt-5 border-gray-300 border-[1px] shadow-lg  md:shadow-xl rounded-2xl ">
        <div class=" md:grid md:grid-cols-2 grid-cols-1 p-3 pt-5">
            <!-- isi tampilan di hp -->
            <div class=" flex flex-col justify-center items-start md:px-14 px-5 ">
                <h1 class="md:text-5xl text-[20px] leading-tight font-sans font-bold tes mb-4 whitespace-normal md:whitespace-pre-line md:mt-5 text-center md:text-left uppercase">Bersama <span class="text-blue-500">Mengembangkan</span> Potensi <span class="text-blue-500">Mahasiswa</span> Ilmu <span class="text-blue-500">Komputer</span></h1>
                <p class="text-gray-700 hidden md:block md:text-xl ">HIMA COSINBARA hadir sebagai wadah resmi bagi seluruh mahasiswa Ilmu Komputer untuk menyalurkan aspirasi, mengembangkan potensi diri, serta memperkuat rasa persaudaraan dan solidaritas di antara anggotanya.</p>
            </div>
            <div class="flex flex-col justify-center items-center">
                <!-- isi tampilan di pc -->
                <div class="md:h-[250px] md:w-[350px] h-[200px] w-[90%] mt-3 rounded-2xl text-center bg-[url(./assets/gambar1.jpg)] bg-cover bg-center "></div>
                <p class="text-gray-700 md:hidden block text-[12px] p-6 text-justify font-bold">HIMA COSINBARA hadir sebagai wadah resmi bagi seluruh mahasiswa Ilmu Komputer untuk menyalurkan aspirasi, mengembangkan potensi diri, serta memperkuat rasa persaudaraan dan solidaritas di antara anggotanya.</p>
                <div class="flex gap-6 " >
                    <span class=" rounded-2xl text-white font-bold p-5 mt-5 md:hover:scale-110 md:hover:bg-gray-700"  @touchstart="mulai"  @touchend="selesai" :class="aksi"><router-link to="/profil">Mengenal Lebih</router-link></span>
                    <span class=" rounded-2xl text-white font-bold p-5 mt-5  hover:scale-110 md:hover:bg-blue-700" @touchstart="mulaii"  @touchend="selesaii" :class="aksii"><router-link to="">Daftar HIMA</router-link></span>
                </div>
            </div>
        </div>
        
    </div>
</template>


