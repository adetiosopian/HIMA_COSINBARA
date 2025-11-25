<script setup>
import { ref, onMounted } from 'vue'
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

// Tombol animasi
const aksi = ref('bg-yellow-400')
function mulai() { aksi.value = 'bg-yellow-300' }
function selesai() { aksi.value = 'bg-yellow-400' }

const aksii = ref('bg-slate-700')
function mulaii() { aksii.value = 'bg-slate-600' }
function selesaii() { aksii.value = 'bg-slate-700' }

const aks = ref('bg-yellow-400')
function mula() { aks.value = 'bg-yellow-300' }
function selesa() { aks.value = 'bg-yellow-400' }

onMounted(() => {
  setSEO({
    title: 'Hima Cosinbara | UMBARA',
    description:
      'Selamat datang di website resmi HIMA COSINBARA UMBARA. Dapatkan informasi terbaru seputar kegiatan, profil, dan program kerja Himpunan Mahasiswa Ilmu Komputer Umbara.',
    url: 'https://himacosinbara.com/',
    image: 'https://himacosinbara.com/logohima.png',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'HIMA COSINBARA UMBARA',
      url: 'https://himacosinbara.com/',
      description:
        'Website resmi Himpunan Mahasiswa Ilmu Komputer Universitas Muhammadiyah Bogor Raya.',
      publisher: {
        '@type': 'CollegeOrUniversity',
        name: 'Universitas Muhammadiyah Bogor Raya',
        logo: 'https://himacosinbara.com/logohima.png'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://himacosinbara.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  })
})
</script>

<template>
  <main>
    <!-- HERO -->
    <section
      class="relative bg-cover bg-center text-white min-h-[80vh] md:min-h-screen flex items-center mt-12 md:mt-2 lg:mt-10"
      style="background-image: url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop');"
    >
      <div class="absolute inset-0 bg-slate-900/70"></div>

      <div
        class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <!-- TEKS -->
        <div class="md:w-1/2 text-center md:text-left">
          <h1
            class="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            Bersama Mengembangkan
            <span class="text-yellow-400">Potensi Mahasiswa</span> Ilmu Komputer
          </h1>
          <p
            class="text-slate-300 text-xs sm:text-sm md:text-base mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            HIMA COSINBARA atau Computer Science Universitas Muhammadiyah Bogor
            Raya adalah organisasi mahasiswa yang bernaung di bawah Program
            Studi Ilmu Komputer Fakultas Kesehatan dan Sains Universitas
            Muhammadiyah Bogor Raya hadir sebagai wadah bagi seluruh mahasiswa
            Ilmu Komputer untuk menyalurkan aspirasi, mengembangkan potensi
            diri, serta memperkuat rasa persaudaraan.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:space-x-4"
          >
            <div
              class="text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition duration-300 text-center"
              @touchstart="mulai"
              @touchend="selesai"
              :class="aksi"
            >
              <router-link to="/profil" class="block px-6">Kenali Kami</router-link>
            </div>
            <div
              class="text-white font-bold py-3 rounded-lg hover:bg-slate-600 transition duration-300 text-center"
              @touchstart="mulaii"
              @touchend="selesaii"
              :class="aksii"
            >
              <router-link to="/daftar" class="block px-6">Daftar HIMA</router-link>
            </div>
          </div>
        </div>

        <!-- ILUSTRASI -->
        <div class="md:w-1/2 w-full flex justify-center">
          <div
            class="bg-slate-800/50 p-4 sm:p-6 rounded-2xl shadow-2xl backdrop-blur-sm w-[85%] sm:w-[70%] md:w-full max-w-[400px]"
          >
            <svg
              class="w-full h-auto"
              viewBox="0 0 200 120"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop
                    offset="0%"
                    style="stop-color:#facc15;stop-opacity:1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color:#fde047;stop-opacity:1"
                  />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style="stop-color:#334155;stop-opacity:1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color:#475569;stop-opacity:1"
                  />
                </linearGradient>
              </defs>
              <rect
                x="20"
                y="20"
                width="150"
                height="70"
                rx="10"
                fill="url(#grad2)"
              />
              <circle cx="50" cy="50" r="15" fill="#f8fafc" />
              <path
                d="M 45 50 L 55 50 M 50 45 L 50 55"
                stroke="url(#grad1)"
                stroke-width="2"
              />
              <rect
                x="80"
                y="40"
                width="80"
                height="8"
                rx="4"
                fill="#f8fafc"
                opacity="0.8"
              />
              <rect
                x="80"
                y="55"
                width="60"
                height="8"
                rx="4"
                fill="#f8fafc"
                opacity="0.6"
              />
              <rect
                x="80"
                y="70"
                width="70"
                height="8"
                rx="4"
                fill="#f8fafc"
                opacity="0.4"
              />
              <path
                d="M 65 55 Q 75 65, 80 50"
                stroke="url(#grad1)"
                stroke-width="3"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-slate-900 text-white text-center px-4 sm:px-6 py-12 md:py-16">
      <h2 class="text-2xl sm:text-3xl font-bold mb-4">
        Siap Bergabung Dengan Kami?
      </h2>
      <p
        class="text-slate-300 text-xs sm:text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed"
      >
        Jadilah bagian dari Himpunan Mahasiswa Computer Science Universitas
        Muhammadiyah Bogor Raya yang solid, kreatif, dan inovatif. Daftar
        sekarang!
      </p>
      <div
        @touchstart="mula"
        @touchend="selesa"
        :class="aks"
        class="text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition duration-300 inline-block text-sm sm:text-base md:text-lg"
      >
        <router-link to="/daftar" class="block px-6 py-2">Daftar Sekarang</router-link>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-900 border-t border-slate-800 py-6">
      <div class="text-center text-slate-400 text-xs sm:text-sm">
        <p>&copy; 2025 HIMA COSINBARA.</p>
      </div>
    </footer>
  </main>
</template>
