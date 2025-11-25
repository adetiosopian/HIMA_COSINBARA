<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

async function kirim(event) {
    event.preventDefault(); // cegah reload halaman
    const form = event.target;
    const email = form.email.value;   // ambil value langsung
    const password = form.password.value;

    try {
        const res = await fetch('https://api.himacosinbara.com/data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nama: email, password })
        });

        const data = await res.json();

        if (data.success) {
            localStorage.setItem('token', data.token);  // simpan token
            router.push('/login'); // redirect ke dashboard
        } else {
            alert('Username atau password salah!');
        }
    } catch (err) {
        console.error(err);
        alert('Terjadi kesalahan koneksi ke server');
    }
}

</script>
<template>

    <body class="flex items-center justify-center min-h-screen p-4 sm:p-6">
        <!-- Container Utama Kartu Login -->
        <div class="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
    
            <div class="text-center">
                <!-- Logo/Icon Placeholder (Lucide Icon: Lock) -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h2 class="mt-4 text-3xl font-extrabold text-gray-900">
                    Selamat Datang Kembali
                </h2>
                <p class="mt-2 text-sm text-gray-600">
                    Silakan masuk ke akun Anda
                </p>
            </div>
    
            <!-- Kotak Pesan Dinamis (untuk menggantikan alert) -->
            <div id="message-box" class="opacity-0 transition-opacity duration-300">
                <!-- Pesan akan muncul di sini -->
            </div>
    
            <form id="login-form" class="mt-8 space-y-6" @submit.prevent="kirim">
                
                <!-- Bidang Email/Username -->
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">
                        Alamat Email atau Nama Pengguna
                    </label>
                    <div class="mt-1">
                        <input id="email" name="email" type="text" required 
                               class="appearance-none relative block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition duration-150"
                               placeholder="contoh@email.com">
                    </div>
                </div>
    
                <!-- Bidang Kata Sandi -->
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">
                        Kata Sandi
                    </label>
                    <div class="mt-1">
                        <input id="password" name="password" type="password" required 
                               class="appearance-none relative block w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm transition duration-150"
                               placeholder="••••••••">
                    </div>
                </div>
    
                <!-- Opsi Tambahan -->
                <div class="flex items-center justify-between">
                    
                    <!-- Ingat Saya -->
                    <div class="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox"
                               class="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary">
                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                            Ingat Saya
                        </label>
                    </div>
    
                    <!-- Lupa Kata Sandi -->
                    <div class="text-sm">
                        <a href="#" class="font-medium text-primary hover:text-primary-dark transition duration-150">
                            Lupa Kata Sandi?
                        </a>
                    </div>
                </div>
    
                <!-- Tombol Login -->
                <div>
                    <button type="submit" 
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-150 ease-in-out shadow-lg transform active:scale-95">
                        Masuk
                    </button>
                </div>
            </form>
    
            <!-- Link Pendaftaran -->
            <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                    Belum punya akun?
                    <a href="#"
                     class="font-medium text-primary hover:text-primary-dark transition duration-150">
                        Daftar Sekarang
                    </a>
                </p>
            </div>
        </div>
    
    </body>

</template>