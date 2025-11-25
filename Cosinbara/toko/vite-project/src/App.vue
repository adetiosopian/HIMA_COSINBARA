<template>
    <div>
         <!-- ===== HEADER ===== -->
    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky  z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <!-- Logo -->
            <a href="#" class="text-[30px] font-extrabold text-gray-800">
                Sin<span class="text-indigo-600">Store</span>
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
        <router-view/>
    </div>
</template>