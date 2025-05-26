# Video Streaming Platform

Platform streaming video modern yang mendukung berbagai provider video dengan antarmuka yang responsif dan user-friendly.

## 🚀 Fitur Utama

- 🎥 Dukungan multiple video provider (Fidey, Videy, Doodstream, ViralTrend)
- 🔍 Pencarian video yang cepat dan akurat
- 🌓 Mode gelap/terang
- 📱 Responsif di semua perangkat
- ⚡ Performa tinggi dengan Next.js 14
- 🎨 UI/UX modern dengan animasi smooth

## 🛠️ Teknologi yang Digunakan

- Next.js 14 dengan App Router
- TypeScript
- Tailwind CSS
- Framer Motion untuk animasi
- MDX untuk konten
- Next Themes untuk dark mode

## 📋 Cara Penggunaan

### 1. Menonton Video

- Buka halaman utama untuk melihat daftar video
- Klik pada video yang ingin ditonton
- Video akan diputar di halaman baru dengan player yang optimal
- Gunakan kontrol player untuk:
  - Play/Pause
  - Atur volume
  - Mode layar penuh
  - Atur kualitas video (jika tersedia)

### 2. Mencari Video

- Gunakan kotak pencarian di bagian atas halaman
- Ketik kata kunci yang ingin dicari
- Hasil pencarian akan muncul secara real-time
- Pencarian mencakup:
  - Judul video
  - Deskripsi
  - Kategori
  - Tags

### 3. Filter dan Kategori

- Video dikelompokkan berdasarkan kategori
- Setiap video memiliki badge provider yang berbeda warna:
  - 🟣 Ungu: Fidey
  - 🔵 Biru: Videy
  - 🟢 Hijau: Doodstream
  - 🔴 Merah: ViralTrend

### 4. Dark Mode

- Toggle dark mode melalui tombol di navbar
- Mode akan mengikuti preferensi sistem
- Tersimpan di browser untuk kunjungan berikutnya

## 🎯 Provider yang Didukung

### Fidey
- Format: Embed URL
- Contoh: `https://fidey.online/v/?id=XXXXX`
- Fitur: Streaming berkualitas tinggi

### Videy
- Format: MP4 langsung atau Embed
- Contoh: `https://cdn.videy.co/XXXXX.mp4`
- Fitur: Pemutaran video native

### Doodstream
- Format: Embed URL
- Contoh: `https://doodstream.com/e/XXXXX`
- Fitur: Streaming dengan berbagai kualitas

### ViralTrend
- Format: Embed URL
- Contoh: `https://viraltren.live/v/?id=XXXXX`
- Fitur: Streaming viral content

## 💻 Pengembangan

### Prasyarat
- Node.js 18.17 atau lebih baru
- npm atau yarn

### Instalasi
```bash
# Clone repository
git clone [repository-url]

# Masuk ke direktori project
cd video-streaming-platform

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

### Menambahkan Video Baru
1. Buat file MDX baru di `content/videos/`
2. Isi metadata video:
   ```mdx
   ---
   title: "Judul Video"
   description: "Deskripsi video"
   thumbnail: "URL thumbnail"
   duration: "MM:SS"
   category: "Kategori"
   provider: "nama_provider"
   embedUrl: "URL video"
   date: "YYYY-MM-DD"
   tags: ["tag1", "tag2"]
   ---
   ```
3. Tambahkan konten MDX sesuai kebutuhan

### Build untuk Production
```bash
# Build project
npm run build

# Jalankan production server
npm start
```

## 📝 Catatan Penting

- Pastikan URL video dan thumbnail valid
- Gunakan format durasi yang konsisten (MM:SS)
- Pilih provider yang sesuai dengan URL video
- Optimalkan ukuran thumbnail untuk performa
- Tambahkan tags yang relevan untuk pencarian

## 🤝 Kontribusi

Kontribusi selalu diterima! Beberapa cara untuk berkontribusi:
1. Laporkan bug
2. Usulkan fitur baru
3. Kirim pull request
4. Perbaiki dokumentasi

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE). 