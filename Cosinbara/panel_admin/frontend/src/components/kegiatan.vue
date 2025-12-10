<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'



    const saya=ref("opacity-0 pointer-events-none")
    const gas= ref("hidden")
    const tunggu= ref("block")
    const isi=ref("Sedang Diproses")
    const isi1=ref("Mohon tunggu sebentar, jangan menutup halaman sebelum proses selesai")

    function submit(event){
        const form = event.target // memanggil data
        const data = new FormData(form)
        kirim(data)
        setTimeout(() =>{
            saya.value="transform opacity-75 pointer-events-auto"
        },100)
        setTimeout(() =>{
            tunggu.value="hidden"
            gas.value="block"
            isi.value="Pengisian Selesai"
            isi1.value="Terima kasih telah memasukkan data kegiatan"
        },6500)

    }
    function tutup(){
        saya.value="transform opacity-0 pointer-events-none"
        
        setTimeout(()=>{
            window.location.reload();
        },600);

    }
   

    const kirim = async (data) => {
    try {
        const res = await axios.post("https://api.himacosinbara.com/kirim", data, {
          headers: { "Content-Type": "multipart/form-data" }
      })
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}
  
    


</script>
<template>
    <div class="bg-neutral-600 flex items-center justify-center min-h-screen p-4 ">
    <div class="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <!-- Header Formulir -->
        <div class="text-center mb-10">
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800">Pendaftaran Kegiatan</h1>
            <p class="text-gray-500 mt-2">Isi data kegiatan yang akan dan sesudah dilaksanakan</p>
        </div>

        <!-- Formulir Pendaftaran -->
        <form id="registrationForm"  @submit.prevent="submit">
            
                <!-- jenis kegiatan -->
                <div class="mt-6">
                    <label for="desiredPosition" class="block text-sm font-medium text-gray-700 mb-1">Jenis Kegiatan</label>
                    <select name="kegiatan" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                        <option value="" disabled selected>Pilih Jenis Kegiatan</option>
                        <option value="Internal">Internal</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Kompetisi">Kompetisi</option>
                        <option value="Kolaborasi">Kolaborasi</option>
                        <option value="UCL">UCL</option>
                    </select>
            
                <!-- Judul Kegiatan -->
                <div class="mt-2">
                    <label for="judul" class="block text-sm font-medium text-gray-700 mb-1">Judul Kegiatan</label>
                    <input type="text" name="judul" placeholder="Contoh: Pendaki FKS" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                </div>
                <!-- Tanggal -->
                <div class="mt-2">
                    <label for="tgl" class="block text-sm font-medium text-gray-700 mb-1">Tanggal di laksanakan</label>
                    <input type="text" name="Tgl" placeholder="Contoh: 17 November 2025" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                </div>
               
            </div>
 
            <!-- Keterangan-->
            <div class="mt-6">
                <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Keterangan</label>
                <textarea name="Keterangan" rows="4" placeholder="Jelaskan Seputar Kegiatan ini..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required></textarea>
            </div>
            <!-- link -->
            <div>
                <label for="link" class="block text-sm font-medium text-gray-700 mb-1">Masukkan Link</label>
                <input type="url" name="link" placeholder="Contoh: https://kepoamat.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
            </div>
            
            <!-- gambar -->
            <div class="mt-6">
                <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Masukan Gambar Kegiatan</label>
                <input type="file" accept="image/*" name="gambar" class="border border-gray-300 rounded-lg w-full px-2 md:px-4 py-2" required />
            </div>
            <div class="mt-6">
                    <label for="desiredPosition" class="block text-sm font-medium text-gray-700 mb-1">Status Kegiatan</label>
                    <select name="status" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
                        <option value="" disabled selected>Pilih Jenis Kegiatan</option>
                        <option value="Selesai">Selesai</option>
                        <option value="Akan datang">Akan Datang</option>
                    </select>
                </div>
            <!-- Tombol Submit -->
            <div class="mt-10 text-center">
                <button type="submit" class="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-12 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105">
                    Tambahkan
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