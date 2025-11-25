 <script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';


const listanggota=ref([
    // {nama : "saya",
    // NIM:"B12344556",
    // tlp:"09783646587364",
    // ttl:"bogor 23 juni 2020",
    // alamat: "hegarsarai",
    // jabatan:"ketua",
    // alasan:"iseng",
    // gambar:"shhshsh.jpg",
    // gambar1:"hshshh.jpg"
    // }
])
onMounted(async () => {
  try {
    const res = await axios.get('https://api.himacosinbara.com/anggota')
    listanggota.value = res.data
  } catch (err) {
    console.error(err)
  }
  console.log(listanggota)
})

</script>

<template>
    <div>
        <h1>Nama Nama anggota Baru</h1>
        <hr>
        <div v-for="anggota in listanggota" class="my-4 mx-4">
            <h1>Nama : {{ anggota.nama }}</h1>
            <hr>
            <h2>NIM : {{ anggota.NIM }}</h2>
            <hr>
            <h2>No Telpon : {{ anggota.tlp }}</h2>
            <hr>
            <h2>Tempat tanggal lahir : {{ anggota.ttl }}</h2>
            <hr>
            <h2>Alamat : {{ anggota.alamat }}</h2>
            <hr>
            <h2>Alasan Bergabung : {{ anggota.alasan }}</h2>
            <hr>
            <h2>Jabatan yang diinginkan : {{ anggota.jabatan }}</h2>
            <hr>
            <a :href="`https://api.himacosinbara.com/sertif/${anggota.gambar}`">gambar sertif</a><br>
            <hr>
            <a :href="`https://api.himacosinbara.com/sertif/${anggota.gambar1}`" >gambar ss ig</a>
            <hr>
            <br><br>

        </div>
    </div>
</template>