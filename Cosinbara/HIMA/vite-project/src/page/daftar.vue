<script setup>
import { ref, onMounted } from 'vue';
import { setSEO } from '../utils/seo.js'
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head'; // Or a similar head management library
import axios from 'axios';

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
const saya = ref("opacity-0 pointer-events-none")
const gas = ref("hidden")
const tunggu = ref("block")
const isi = ref("Sedang Diproses")
const isi1 = ref("Mohon tunggu sebentar, jangan menutup halaman sebelum proses selesai")

async function submit(event) {
    const form = event.target
    const data = new FormData(form)

    // Tampilkan overlay proses
    saya.value = "transform opacity-75 pointer-events-auto"

    // Kirim data
    const hasil = await kirim(data)

    // === Jika data berhasil tersimpan ===
    if (hasil === "berhasil") {
        tunggu.value = "hidden"
        gas.value = "block"
        isi.value = "Pendaftaran Selesai"
        isi1.value = "Terima kasih telah mendaftar. Informasi selanjutnya akan kami kirimkan melalui WhatsApp."
    } 
    // === Jika gagal ===
    else {
        tunggu.value = "hidden"
        gas.value = "block"
        isi.value = "Gagal Mengirim Data"
        isi1.value = "Silakan coba lagi dalam beberapa saat."
    }
}

function tutup() {
    saya.value = "transform opacity-0 pointer-events-none"

    setTimeout(() => {
        window.location.reload()
    }, 600)
}

const kirim = async (data) => {
    try {
        const res = await axios.post("https://api.himacosinbara.com/daftar", data, {
            headers: { "Content-Type": "multipart/form-data" }
        })

        console.log(res.data)

        // Cek pesan dari API
        if (res.data.message === "Berhasil disimpan") {
            return "berhasil"
        } else {
            return "gagal"
        }

    } catch (err) {
        console.log(err)
        return "gagal"
    }
}




onMounted(() => {
  setSEO({
    title: 'Hima Cosinbara | DAFTAR',
    description: 'Selamat datang di website resmi HIMA COSINBARA UMBARA. Dapatkan informasi terbaru seputar kegiatan, profil, dan program kerja Himpunan Mahasiswa Ilmu Komputer Umbara.',
    url: 'https://himacosinbara.com/daftar',
    image: 'https://himacosinbara.com/logohima.png',
    type: 'website',
    schema: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "HIMA COSINBARA UMBARA DAFTAR",
        "url": "https://himacosinbara.com/daftar",
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
    <div class="bg-neutral-600 flex items-center justify-center min-h-screen p-4 mt-[110px]">
    <div class="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <!-- Header Formulir -->
        <div class="text-center mb-10">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Pendaftaran Anggota Baru HIMA</h1>
            <p class="text-gray-500 mt-2">Isi data dirimu dengan lengkap dan benar untuk bergabung bersama kami.</p>
        </div>

        <!-- Formulir Pendaftaran -->
        <form id="registrationForm"  @submit.prevent="submit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Nama Lengkap -->
                <div>
                    <label for="fullName" class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input type="text" name="fullName" placeholder="Contoh: Budi Santoso" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                </div>
                <!-- NIM -->
                <div>
                    <label for="studentId" class="block text-sm font-medium text-gray-700 mb-1">NIM (Nomor Induk Mahasiswa)</label>
                    <input type="text" name="NIM" placeholder="Contoh: B421241234" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                </div>
                <!-- Nomor Telepon -->
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                    <input type="tel" name="tlp" placeholder="Contoh: 081234567890" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                </div>
                 <!-- ttl -->
                 <div>
                    <label for="previousSchool" class="block text-sm font-medium text-gray-700 mb-1">Tempat, Tanggal Lahir</label>
                    <input type="text" name="ttl" placeholder="Contoh: Bogor, 01/01/2000" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                </div>
            </div>
            
            <!-- Alamat -->
            <div class="mt-6">
                <label for="address" class="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
                <textarea name="alamat" rows="3" placeholder="Masukkan alamat lengkap domisili saat ini..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required></textarea>
            </div>
            
            <!-- Jabatan yang Diinginkan -->
            <div class="mt-6">
                <label for="desiredPosition" class="block text-sm font-medium text-gray-700 mb-1">Jabatan yang Diinginkan</label>
                <select name="jabatan" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                    <option value="" disabled selected>Pilih Jabatan</option>
                    <option value="Bidang Pengembangan Sumber Daya Manusia">Bidang Pengembangan Sumber Daya Manusia</option>
                    <option value="Bidang Advokasi">Bidang Advokasi</option>
                    <option value="Bidang Media Informasi dan Komunikasi">Bidang Media Informasi dan Komunikasi</option>
                    <option value="Bidang Kewirausahaan">Bidang Kewirausahaan</option>
                    <option value="Bidang Teknologi dan Pengembangan IT">Bidang Teknologi dan Pengembangan IT</option>
                </select>
            </div>

            <!-- Alasan Bergabung -->
            <div class="mt-6">
                <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Alasan Bergabung</label>
                <textarea name="alasan" rows="4" placeholder="Jelaskan motivasi dan harapanmu bergabung dengan HIMA..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required></textarea>
            </div>
            <!-- uploadsertifikat -->
            <div class="mt-6">
                <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Masukan Sertifikat</label>
                <input type="file" accept="image/*" name="gambar" class="border border-gray-300 rounded-lg w-full  px-2 md:px-4 py-2" required/>
            </div>
            <!-- upload bukti folowig -->
            <div class="mt-6">
                <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Masukan Bukti Follow IG COSINBARA</label>
                <input type="file" accept="image/*" name="gambar1" class="border border-gray-300 rounded-lg w-full px-2 md:px-4 py-2" required />
            </div>
            <!-- Tombol Submit -->
            <div class="mt-10 text-center">
                <button type="submit" class="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-12 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105">
                    Daftar Sekarang
                </button>
            </div>
            
        </form>
    </div>

    <!-- Modal Notifikasi Sukses -->
    <div :class="saya" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50   ">
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 grid justify-center text-center modal-content transform scale-95">
            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
                <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800">{{ isi }}</h3>
            <p class="text-gray-600 my-3">{{ isi1 }}</p>
            <button @click="tutup" :class="gas" class="mt-6 bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300">
                Tutup
            </button>
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
</template>