import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import viteImagemin from 'vite-plugin-imagemin'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss(),
    viteImagemin({
      // Fungsi filter untuk menentukan file mana yang boleh diproses
      filter: (file) => {
        // Abaikan file .ico
        if (file.endsWith('.ico')) return false

        // Abaikan satu gambar tertentu
        if (file.includes('logohima.png')) return false

        // Selain itu semua boleh dikompresi
        return true
      },
      gifsicle: {
        optimizationLevel: 7,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.7, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          { name: 'removeViewBox' },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
      webp: {
        quality: 85,
      },
      avif: {
        quality: 80,
      },
    }),

  ],
  
   server: {
    host: true,       // aktifkan host
    port: 5174        // bisa ganti kalau mau
  }
})



