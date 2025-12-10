<script setup>
import { ref, onMounted } from 'vue'
import { setSEO } from '../utils/seo.js'
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head'; // Or a similar head management library
import axios from 'axios'

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



const kegiatanList = ref([])
const kegiatanlistc = ref([])
onMounted(async () => {
  try {
    const res = await axios.get('https://api.himacosinbara.com/kegiatan')
    kegiatanList.value = res.data
    kegiatanlistc.value = res.data 
  } catch (err) {
    console.error(err)
  }
  console.log(kegiatanList)
})

const semua =ref("bg-blue-600")
const belum = ref("bg-white")
const selesai = ref("bg-white")

function selesai1(){
  kegiatanlistc.value = kegiatanList.value.filter(item => item.status === "Selesai");
  semua.value="bg-white"
  belum.value="bg-white"
  selesai.value="bg-blue-600"
}
function belum1(){
  kegiatanlistc.value = kegiatanList.value.filter(item => item.status != "Selesai");
  semua.value="bg-white"
  selesai.value="bg-white"
  belum.value="bg-blue-600"
}
function semua1(){
  kegiatanlistc.value = kegiatanList.value
  selesai.value="bg-white"
  belum.value="bg-white"
  semua.value="bg-blue-600"
}

onMounted(() => {
  setSEO({
    title: 'Hima Cosinbara | KEGIATAN',
    description: 'Selamat datang di website resmi HIMA COSINBARA UMBARA. Dapatkan informasi terbaru seputar kegiatan, profil, dan program kerja Himpunan Mahasiswa Ilmu Komputer Umbara.',
    url: 'https://himacosinbara.com/kegiatan',
    image: 'https://himacosinbara.com/logohima.png',
    type: 'website',
    schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HIMA COSINBARA UMBARA KEGIATAN",
        "url": "https://himacosinbara.com/kegiatan",
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
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-[70px] lg:mt-[100px]">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
        Daftar <span class="text-blue-600">Kegiatan</span> Kami
      </h1>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
        Lihat semua agenda, acara, dan project yang telah dan akan kami lakukan.
      </p>
    </div>

    <!-- Opsi Filter Sederhana -->
    <div class="flex justify-center mb-10 space-x-4">
      <button class="px-5 py-2 text-sm font-medium rounded-full border-[1px] border-gray-300 shadow-lg transition duration-300 " :class="semua" @click="semua1">Semua</button>
      <button class="px-5 py-2 text-sm font-medium rounded-full border-[1px] border-gray-300 shadow-lg transition duration-300 " :class="belum" @click="belum1">Yang Akan Datang</button>
      <button class="px-5 py-2 text-sm font-medium rounded-full border-[1px] border-gray-300 shadow-lg transition duration-300 " :class="selesai" @click="selesai1">Telah Terlaksana</button>
    </div>

    <!-- Grid Kartu Kegiatan -->
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(item) in kegiatanlistc"
        :key="item.id"
        class="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
        <a :href="item.link">
        <div class="h-[200px] bg-gray-300 flex items-center justify-center overflow-hidden text-gray-500 font-semibold">
          <img :src="`https://api.himacosinbara.com/gambar/${item.gambar}`" :alt="item.judul"  class="object-cover w-full h-full" />
        </div>
        <div class="p-6">
          <span class="text-sm font-semibold text-indigo-600 uppercase">{{ item.kegiatan }}</span>
          <h2 class="mt-2 text-xl font-bold text-gray-900">{{ item.judul }}</h2>
          <p class="mt-2 text-gray-500 text-sm">{{ item.keterangan }}</p>
          <div class="mt-4 flex justify-between items-center text-sm font-medium">
            <span class="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

              <span :class="item.status === 'selesai' ? 'line-through' : ''">
                {{ item.tgl }}
              </span>
            </span>
            <a
              :href="item.link"
              :class="item.status === 'Selesai' ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:underline'"
            >
              {{ item.status === 'Selesai' ? 'Telah Selesai' : 'Akan Datang' }}
            </a>
          </div>
        </div>
        </a>
      </div>
    </div>
  </div>
</template>
