<script setup>
    import { useCartStore } from '../store/cart'
    import { useRouter } from 'vue-router'

    const cart = useCartStore()
    const router = useRouter()

    const netflix={
        nama:'Netflix',
        gambar:'https://placehold.co/100x100/FFFFFF/C70000?text=Netflix&font=inter',
        harga:'Rp 28.000',
        warna:'bg-red-600',
        des:'Nikmati ribuan film dan serial TV tanpa batas. Akun private anti screen limit, bisa digunakan di semua perangkat. Garansi penuh selama masa berlangganan.'
    }
    const spotify={
        nama:'Spotify',
        gambar:'https://placehold.co/100x100/FFFFFF/1DB954?text=Spotify&font=inter',
        harga:'Rp 20.000',
        warna:'bg-green-500',
        des:'Dengarkan jutaan lagu tanpa iklan, download lagu untuk didengarkan offline, dan nikmati kualitas audio terbaik. Proses cepat via invite family plan.'
    }
    const youtube={
        nama:'YouTube',
        gambar:'https://placehold.co/100x100/FFFFFF/FF0000?text=YouTube&font=inter',
        harga:'Rp 20.000',
        warna:'bg-red-500',
        des:'Tonton video tanpa gangguan iklan, putar video di latar belakang, dan akses YouTube Music Premium. Aktivasi super cepat dan legal.'
    }
    const canva={
        nama:'canva',
        gambar:'https://placehold.co/100x100/FFFFFF/002B49?text=Canva&font=inter',
        harga:'Rp 5.000',
        warna:'bg-blue-900',
        des:'Buka semua fitur desain profesional di Canva. Jutaan template, foto, dan elemen premium siap pakai. Cocok untuk pelajar, mahasiswa, dan profesional.'
    }
    const cupcat={
        nama:'Capcut',
        gambar:'https://placehold.co/100x100/FFFFFF/FFC107?text=Capcut&font=inter',
        harga:'Rp 10.000',
        warna:'bg-yellow-400',
        des:'Buka semua fitur editor dan ciptakan vidio yang kreatif dan keren. Cocok untuk pemula karena banyak alat yang bisa langsung dipakai mudah di gunakan dan juga terdapat banyak elemen yang siap pakai'
    }

    function beli(data){
        cart.setProduk(data)
        router.push('/pembelian')
    }
    function kirimWA() {
    const nomor = "+6285773731782" // nomor WA tujuan
    const pesan = "Halo admin, saya tertarik dan ingin lihat-lihat dulu koleksi aplikasi premium. Apakah ada katalog atau contoh apliksi premium yang bisa saya lihat? "
    const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`
    window.open(url, "_blank")
    }
</script>


<template>
    <div class="antialiased">

        <!-- ===== HEADER ===== -->
    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky mt-[110px] z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <!-- Logo -->
            <a href="#" class="text-2xl font-extrabold text-gray-800">
                Con<span class="text-indigo-600">Store</span>
            </a>
            
            <!-- Navigation -->
            <nav class="hidden md:flex items-center space-x-6 text-gray-600 font-medium">
                <a href="#produk" class="hover:text-indigo-600 transition">Produk</a>
                <a href="#cara-order" class="hover:text-indigo-600 transition">Cara Order</a>
                <a href="#faq" class="hover:text-indigo-600 transition">FAQ</a>
            </nav>
    
            <!-- CTA Button -->
            <a href="https://wa.me/6285773731782" target="_blank" class="bg-indigo-600 w-auto text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 flex items-center space-x-2">
                <span>Hubungi Kami</span>
            </a>
        </div>
    </header>
    
    <main class="container mx-auto px-4 py-12">
        <!-- ===== HERO SECTION ===== -->
        <section class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Akun Aplikasi Premium <br class="hidden md:block"> Terlengkap & Terpercaya
            </h1>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Nikmati fitur premium dari aplikasi favoritmu dengan harga terjangkau, proses cepat, dan garansi penuh.
            </p>
            <button @click="kirimWA" class="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 inline-block">
                Lihat Semua Produk
            </button>
        </section>
    
        <!-- ===== DAFTAR PRODUK ===== -->
        <section id="produk" class="mb-16">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Pilih Aplikasi Favoritmu</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                
                <!-- Product Card Example -->
                <div @click="beli(netflix)" class="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    
                        <div class="bg-red-600 p-6 flex justify-center items-center">
                             <img :src="netflix.gambar" alt="Netflix Logo" class="h-16 object-contain">
                        </div>
                        <div class="p-5 text-center">
                            <h3 class="text-xl font-bold text-gray-800">{{ netflix.nama }}</h3>
                            <p class="text-gray-500 text-sm mb-3">Anti Screen Limit</p>
                            <p class="text-gray-700 font-semibold">Mulai dari <span class="text-indigo-600">{{ netflix.harga }}</span></p>
                        </div>
                   
                </div>
    
                <div @click="beli(spotify)" class="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    
                        <div class="bg-green-500 p-6 flex justify-center items-center">
                            <img :src="spotify.gambar" alt="Spotify Logo" class="h-16 object-contain">
                        </div>
                        <div class="p-5 text-center">
                            <h3 class="text-xl font-bold text-gray-800">{{ spotify.nama }}</h3>
                            <p class="text-gray-500 text-sm mb-3">Family Plan Invite</p>
                            <p class="text-gray-700 font-semibold">Mulai dari <span class="text-indigo-600">{{ spotify.harga }}</span></p>
                        </div>
                    
                </div>
    
                <div @click="beli(youtube)" class="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    
                        <div class="bg-red-500 p-6 flex justify-center items-center">
                           <img :src="youtube.gambar" alt="YouTube Logo" class="h-16 object-contain">
                        </div>
                        <div class="p-5 text-center">
                            <h3 class="text-xl font-bold text-gray-800">{{ youtube.nama }}</h3>
                            <p class="text-gray-500 text-sm mb-3">Tanpa Iklan & Play BG</p>
                            <p class="text-gray-700 font-semibold">Mulai dari <span class="text-indigo-600">{{ youtube.harga }}</span></p>
                        </div>
                 
                </div>
    
                <div @click="beli(canva)" class="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="bg-blue-900 p-6 flex justify-center items-center">
                            <img :src="canva.gambar" alt="Canva Logo" class="h-16 object-contain">
                        </div>
                        <div class="p-5 text-center">
                            <h3 class="text-xl font-bold text-gray-800">{{ canva.nama }}</h3>
                            <p class="text-gray-500 text-sm mb-3">Akses Semua Fitur</p>
                            <p class="text-gray-700 font-semibold">Mulai dari <span class="text-indigo-600">{{ canva.harga }}</span></p>
                        </div>
                </div>
                
                <div @click="beli(cupcat)" class="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <div class="bg-yellow-400 p-6 flex justify-center items-center">
                             <img :src="cupcat.gambar" alt="Cupcat Logo" class="h-16 object-contain">
                        </div>
                        <div class="p-5 text-center">
                            <h3 class="text-xl font-bold text-gray-800">{{ cupcat.nama }}</h3>
                            <p class="text-gray-500 text-sm mb-3">Semua fitur terbuka</p>
                            <p class="text-gray-700 font-semibold">Mulai dari <span class="text-indigo-600">{{ cupcat.harga }}</span></p>
                        </div>
                </div>
    
            </div>
        </section>
    
        <!-- ===== CARA ORDER ===== -->
        <section id="cara-order" class="mb-16 bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">3 Langkah Mudah Berlangganan</h2>
            <div class="grid md:grid-cols-3 gap-8 text-center">
                
                <div class="flex flex-col items-center">
                    <div class="bg-indigo-100 text-indigo-600 rounded-full p-4 mb-4">
                        <i data-lucide="mouse-pointer-square" class="w-10 h-10"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">1. Pilih Akun</h3>
                    <p class="text-gray-600">Pilih aplikasi premium yang kamu inginkan dari daftar produk kami.</p>
                </div>
    
                <div class="flex flex-col items-center">
                    <div class="bg-indigo-100 text-indigo-600 rounded-full p-4 mb-4">
                        <i data-lucide="credit-card" class="w-10 h-10"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">2. Lakukan Pembayaran</h3>
                    <p class="text-gray-600">Hubungi kami via WhatsApp dan lakukan pembayaran sesuai instruksi.</p>
                </div>
    
                <div class="flex flex-col items-center">
                    <div class="bg-indigo-100 text-indigo-600 rounded-full p-4 mb-4">
                        <i data-lucide="send" class="w-10 h-10"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">3. Akun Dikirim</h3>
                    <p class="text-gray-600">Akun akan langsung kami kirimkan setelah pembayaran terkonfirmasi.</p>
                </div>
    
            </div>
        </section>
        
        <!-- ===== FAQ (Frequently Asked Questions) ===== -->
        <section id="faq" class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">Yang Sering Ditanyakan</h2>
            <div class="space-y-4">
                <details class="bg-white p-6 rounded-lg shadow-md cursor-pointer">
                    <summary class="font-semibold text-lg text-gray-800 flex justify-between items-center">
                        Apakah akun ini legal?
                        <i data-lucide="chevron-down" class="w-5 h-5 transition-transform transform"></i>
                    </summary>
                    <p class="text-gray-600 mt-4">
                        Tentu saja. Semua akun yang kami jual adalah akun legal yang dibayarkan melalui metode resmi, biasanya menggunakan skema Family Plan atau sejenisnya.
                    </p>
                </details>
                <details class="bg-white p-6 rounded-lg shadow-md cursor-pointer">
                    <summary class="font-semibold text-lg text-gray-800 flex justify-between items-center">
                        Berapa lama prosesnya?
                        <i data-lucide="chevron-down" class="w-5 h-5 transition-transform transform"></i>
                    </summary>
                    <p class="text-gray-600 mt-4">
                        Proses sangat cepat, biasanya kurang dari 5 menit setelah pembayaran Anda kami konfirmasi.
                    </p>
                </details>
                <details class="bg-white p-6 rounded-lg shadow-md cursor-pointer">
                    <summary class="font-semibold text-lg text-gray-800 flex justify-between items-center">
                        Apakah ada garansi?
                        <i data-lucide="chevron-down" class="w-5 h-5 transition-transform transform"></i>
                    </summary>
                    <p class="text-gray-600 mt-4">
                        Ya, kami memberikan garansi penuh selama masa berlangganan. Jika ada kendala dengan akun, kami akan segera menggantinya dengan yang baru.
                    </p>
                </details>
            </div>
        </section>
    
    </main>
    
    <!-- ===== FOOTER ===== -->
    <footer class="bg-gray-800 text-white mt-16">
        <div class="container mx-auto px-4 py-6 text-center">
            <p>&copy; 2025 Constore. Jual Akun Premium Terpercaya.</p>
        </div>
    </footer>
    
    </div>
</template>

