<script setup>
import router from '../router';

function logut(){
    localStorage.removeItem('token');
    router.push('/');
}
</script>
<template>
    <div class="bg-gray-950 w-screen h-screen overflow-x-hidden">
        <h1 class="text-white md:text-[50px] text-[30px] text-center md:my-4 my-5 font-bold w-full h-auto"> Dasbord HIMA COSINBARA</h1>
        <hr class="border-t border-gray-300 mx-4">
        <div class="text-white text-center md:text-4xl text-2xl font-bold items-center md:grid-rows-3 grid gap-5 md:gap-10 justify-center mt-10 ">
            <div class="bg-gray-600 w-300 h-50  rounded-2xl  ">
                <router-link to="/Kegiatan" class="h-full w-auto items-center flex justify-center"><h1>Masukkan Kegiatan</h1></router-link>
            </div>
            <div class="bg-gray-600 w-300 h-50 rounded-2xl ">
                <router-link to="/curhat" class="h-full w-auto items-center flex justify-center"><h1>Liat Curhatan</h1></router-link>
            </div>
            <div class="bg-gray-600 w-300 h-50 rounded-2xl ">
                <router-link to="/anggota_baru" class="h-full w-auto items-center flex justify-center"><h1>Daftar Calon Anggota HIMA</h1></router-link>
            </div>
            <div class="bg-gray-600 w-300 h-50 rounded-2xl" @click="logut">
                <router-link to="/" class="h-full w-auto items-center flex justify-center"><h1 >logout</h1></router-link>
                
            </div>
        </div>
        <br>


        
    </div>
</template>