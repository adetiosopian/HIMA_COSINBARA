` `<script setup>
import { ref } from 'vue';

// animasi pemanggilan navbar di hp
var hi = ref('-translate-[700px]')
var t =1
var muncul =ref('opacity-0  -translate-x-200')
var atas=ref('translate-y-0')
var tengah1=ref('translate-y-[5px]')
var tengah2=ref('translate-y-[10px]')
var bawah= ref('translate-y-[15px]')

function tampil(){
  if(t==1){
    atas.value='origin-left transition-transform duration-800 rotate-45'
    tengah1.value='translate-x-200 transition duration-500'
    tengah2.value='-translate-x-200 transition duration-500'
    bawah.value='origin-left transition-transform duration-800 -rotate-45 translate-y-[17px]'
    hi.value='-translate-x-5 transition duration-500'
    muncul.value='opacity-70 translate-x-0 transition duration-200'
    setTimeout(() => {
      muncul.value = "translate-x-0 opacity-70 transition-opacity duration-200";
      }, 300);
    t=2
  }
  else{
    atas.value='translate-y-0 origin-left transition-transform duration-800 rotate-0'
    tengah1.value='translate-y-[5px] transition duration-500'
    tengah2.value='translate-y-[10px] transition duration-500'
    bawah.value='translate-y-[15px] origin-left transition-transform duration-800 rotate-0'
    hi.value='-translate-x-[700px] transition duration-500'
    muncul.value=' -translate-x-0 opacity-0 transition duration-200'
    setTimeout(() => {
      muncul.value = "opacity-0 -translate-x-200 transition-translate-x duration-200";
      }, 300);
    t=1
  }
}
// animasi tombol di hp ketika di tekan
var warna= ref('text-gray-600')
var wan= ref('text-gray-600')
var war= ref('text-gray-600')
var wa= ref('text-gray-600')
var w= ref('text-gray-600')
var warni= ref('text-gray-600')
function ubah(){
  w.value='text-gray-900'
}
function uba(){
  wa.value='text-gray-900'
}
function ub(){
  war.value='text-gray-900'
}
function u(){
  wan.value='text-gray-900'
}
function h(){
  warna.value='text-gray-900'
}
function hu(){
  warni.value='text-gray-900'
}

function udahan(){
  w.value='text-gray-600'
}
function udaha(){
  wa.value='text-gray-600'
}
function udah(){
  war.value='text-gray-600'
}
function uda(){
  wan.value='text-gray-600'
}
function ud(){
  warna.value='text-gray-600'
}
function udi(){
  warni.value='text-gray-600'
}

function tutup(){
    atas.value='translate-y-0 origin-left transition-transform duration-800 rotate-0'
    tengah1.value='translate-y-[5px] transition duration-500'
    tengah2.value='translate-y-[10px] transition duration-500'
    bawah.value='translate-y-[15px] origin-left transition-transform duration-800 rotate-0'
    hi.value='-translate-x-[700px] transition duration-500'
    muncul.value=' -translate-x-0 opacity-0 transition duration-200'
    setTimeout(() => {
      muncul.value = "opacity-0 -translate-x-200 transition-translate-x duration-200";
      }, 300);
}
</script>

<template>
  <!-- navbar -->
  <div class="p-0 m-0">
    <div class="bg-white fixed h-max w-full flex  gap-10 p-5 pr-30 font-bold font-sans  text-[12px] space-x-7 text-gray-600 shadow-md z-100 ">
      <div class=" size-[55px] md:size-18 flex md:gap-0 ml-0 md:ml-5 font-semibold font-serif ">
        <img src="./assets/logo hima.png"  alt="poto hima">
        <div class="ml-1 md:ml-0 md:p-4 md:-pl-1 mt-2  ">
          <h1 class="md:text-2xl text-[15px]">COSINBARA</h1>
          <h1 class="md:text-18 text-[8px]">COMPUTER SCIENCE </h1>
          <h1 class="md:text-18 text-[5px]">UNIVERSITAS MUHAMMADIYAH BOGOR RAYA</h1>
        </div>
      </div>
      <!-- tampilan pemanggilan navbar di hp (sandwid) -->
      <div class="lg:hidden fixed right-5 md:right-7 top-10 h-9 z-50 flex flex-col gap-[0.5px] cursor-pointer " @click="tampil">
        <div class="w-[30px] h-[1px] md:w-[35px] md:h-[2px] bg-black/70" :class="atas"></div>
        <div class="w-[30px] h-[1px] md:w-[35px] md:h-[2px] bg-black/70" :class="tengah1"></div>
        <div class="w-[30px] h-[1px] md:w-[35px] md:h-[2px] bg-black/70" :class="tengah2"></div>
        <div class="w-[30px] h-[1px] md:w-[35px] md:h-[2px] bg-black/70" :class="bawah"></div>
      </div>

      <!-- tampilan navbar di hp -->
      <div class="lg:hidden fixed bg-white w-full h-full -translate-y-5" :class="muncul" @click="tutup"></div>
      <div class="fixed lg:hidden bg-gray-900 rounded-r-2xl -translate-y-[30px] p-4 h-full w-2/3 text-[15px] md:text-[20px] z-100 shadow-lg border-1 " :class="hi">
        <span class="block w-full mb-1 mt-5 text-white " @touchstart="ubah" :class="w" @touchend="udahan" @click="tutup"><router-link to="/" class="w-full pr-[150px] md:pr-[400px]">HOME</router-link></span><br>
        <div class="w-full h-[1px] md:h-[2px] bg-white"></div> <br>
        <span class="block mb-1 w-full text-white" @touchstart="uba" :class="wa" @touchend="udaha" @click="tutup"><router-link to="/profil" class="w-full pr-[150px] md:pr-[400px]">PROFIL</router-link></span><br>
        <div class="w-full h-[1px] md:h-[2px] bg-white"></div> <br>
        <span class="block mb-1 w-full text-white" @touchstart="ub" :class="war" @touchend="udah" @click="tutup"><router-link to="/kegiatan" class="w-full pr-[150px] md:pr-[400px]">AGENDA</router-link></span><br>
        <div class="w-full h-[1px] md:h-[2px] bg-white"></div> <br>
        <span class="block mb-1 w-full text-white" @touchstart="u" :class="wan" @touchend="uda" @click="tutup"><router-link to="/struktur" class="w-full pr-[150px] md:pr-[400px]">STRUKTUR</router-link></span><br>
        <div class="w-full h-[1px] md:h-[2px] bg-white"></div> <br>
        <span class="block w-full mb-1 text-white" @touchstart="h" :class="warna" @touchend="ud" @click="tutup"><a href="https://sinstore.himacosinbara.com/" class="w-full pr-[150px] md:pr-[400px]">TOKO</a></span><br>
        <div class="w-full h-[1px] md:h-[2px]  bg-white"></div> <br>
        <span class="block w-full mb-1 text-white" @touchstart="hu" :class="warna" @touchend="udi" @click="tutup"><a href="https://advocare.himacosinbara.com/" class="w-full pr-[150px] md:pr-[400px] ">ADVOCARE</a></span><br>
        <div class="w-full h-[1px] md:h-[2px] bg-white"></div> <br>
      </div>
      <!-- tampilan navbar di pc atau leptop -->
      <div class="w-full h-max lg:flex md:text-[15px] md:gap-2 p-5 lg:ml-56 font-bold font-sans lg:justify-end text-[5px] sm:hidden lg:text-[18px] lg:gap-7 space-x-5 hidden  ">
        <span class="hover:scale-125 uppercase"><router-link to="/">Home</router-link></span>
        <span class="hover:scale-125 uppercase"><router-link to="/profil">Profil</router-link></span>
        <span class="hover:scale-125 uppercase"><router-link to="/kegiatan">AGENDA</router-link></span>
        <span class="hover:scale-125 uppercase"><router-link to="/struktur">Struktur</router-link></span>
        <span class="hover:scale-125 uppercase"><a href="https://sinstore.himacosinbara.com/">Toko</a></span>
        <span class="hover:scale-125 uppercase"><a href="https://advocare.himacosinbara.com/">Advocare</a></span>
      </div>
    </div>
  </div>
  <!-- memanggil page awal -->
  <router-view/>
</template>