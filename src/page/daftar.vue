<script setup>
import { ref } from 'vue';

    const saya=ref("opacity-0 pointer-events-none")

    function submit(event){
        saya.value="transform opacity-75 pointer-events-auto"
        const form = event.target // memanggil data
        const data = new FormData(form)
        kirim(data)
    }
    function tutup(){
        saya.value="transform opacity-0 pointer-events-none"
        window.location.reload();

    }
    // kirim ke database
    function kirim(data){
            fetch("https://script.google.com/macros/s/AKfycbxN8T0QFTJcyVaS4bqA1GI_NNIJZgnW03BiPMwWN6z_3LpcTQ4fDaKVxo7xSo-oEJBE/exec", {
                method: "POST",
                
                body: JSON.stringify({
                    nama:data.get('fullName'),
                    NIM:data.get('NIM'),
                    tlp:data.get('tlp'),
                    asal_sekolah:data.get('asal'),
                    alamat:data.get('alamat'),
                    jabatan:data.get('jabatan'),
                    alasan:data.get('alasan')
                })
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data.pesan)
                

            })
             .catch(err => {
                console.error("Gagal mengirim data:", err)
                console.log("gagal")
            })

        }
    

    

</script>
<template>
    <div class="bg-gray-100 flex items-center justify-center min-h-screen p-4 mt-[110px]">
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
                 <!-- Asal Sekolah -->
                 <div>
                    <label for="previousSchool" class="block text-sm font-medium text-gray-700 mb-1">Asal Sekolah</label>
                    <input type="text" name="asal" placeholder="Contoh: SMAN 1 Jakarta" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required>
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
                    <option value="Divisi Kaderisasi">Bidang Pengembangan Sumber Daya Manusia</option>
                    <option value="Divisi Humas">Bidang Advokasi</option>
                    <option value="Divisi Minat Bakat">Bidang Media Informasi dan Komunikasi</option>
                    <option value="Divisi Akademik">Bidang Kewirausahaan</option>
                    <option value="Anggota">Bidang Teknologi dan Pengembangan IT</option>
                </select>
            </div>

            <!-- Alasan Bergabung -->
            <div class="mt-6">
                <label for="reason" class="block text-sm font-medium text-gray-700 mb-1">Alasan Bergabung</label>
                <textarea name="alasan" rows="4" placeholder="Jelaskan motivasi dan harapanmu bergabung dengan HIMA..." class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" required></textarea>
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
    <div :class="saya" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50   ">
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 text-center modal-content transform scale-95">
            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
                <svg class="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800">Pendaftaran Berhasil!</h3>
            <p class="text-gray-600 my-3">Terima kasih telah mendaftar. Informasi selanjutnya akan kami kirimkan melalui WhatsApp.</p>
            <button @click="tutup" class="mt-6 bg-blue-600 text-white font-semibold py-2 px-8 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300">
                Tutup
            </button>
        </div>
    </div>
    </div>
</template>