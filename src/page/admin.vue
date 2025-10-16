<script setup>
import { ref, onMounted } from 'vue'

const pesanList = ref([])
const url = "https://script.google.com/macros/s/AKfycbxn-fc9UJSQBUgE5BKEOtVcBCQjN57yXm1sjwXe-I-3bQ5uNdoAO2ozF9xfdJzhBkwS/exec"

async function ambilPesan() {
  const res = await fetch(url)
  pesanList.value = await res.json()
}

onMounted(ambilPesan)
</script>

<template>
  <div class="p-5 mt-[100px]">
    <h2 class="text-3xl">Semua Pesan</h2>
    <div v-for="(item, i) in pesanList" :key="i" class="p-2 border-b border-gray-600">
      <p class="text-gray-300">{{ item.pesan }}</p>
      <small class="text-gray-500">{{ item.waktu }}</small>
    </div>
  </div>
</template>
