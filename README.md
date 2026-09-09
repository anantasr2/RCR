# RCR INDONESIA — Repair, Cleaning & Restore Atelier (Pure Front-End)

Website terpadu e-commerce & atelier **RCR Indonesia (Repair Cleaning Restore)** yang dibangun murni menggunakan teknologi **Front-End (Vite + React + Tailwind CSS)** tanpa ketergantungan backend server ataupun database.

Website ini terdiri dari 3 halaman utama yang terintegrasi secara padu:
1. **Home (`/`)**: Hero section atelier, fitur unggulan, direktori divisi (*Shoes, Bags, Luggage, Leather*), Before-After interactive comparison slider, katalog layanan teaser, program #MORNINGDROP, review autentik pelanggan, dan direktori 6 outlet Semarang beserta peta interaktif.
2. **Services & Tarifs (`/layanan`)**: Katalog tarif lengkap dengan filter kategori instan (*Semua Menu, Sepatu & Sol, Tas Mewah, Koper & Travel, Jaket & Aksesoris, Paket Bundling*), pencarian real-time, editorial sol Vibram Italia, dan konsultasi diagnosa foto gratis.
3. **Galeri Transformasi (`/galeri`)**: Portofolio studi kasus Before-After interaktif lengkap dengan diagnosa kerusakan awal (*Problem*), penanganan teknis (*Treatment*), estimasi waktu, dan tombol pemesanan treatment serupa langsung ke WhatsApp.

---

## Fitur Unggulan

- **100% Front-End Murni**: Tidak memerlukan PHP, Laravel, Node.js backend, atau SQL database. Sangat ringan, cepat, dan hemat biaya hosting.
- **Siap Deploy ke Vercel**: Dilengkapi dengan `vercel.json` rewrite configuration untuk Single Page Application (SPA) routing yang mulus.
- **Interactive Before-After Slider**: Komponen geser perbandingan foto sebelum & sesudah treatment dengan dukungan mouse drag dan touch swipe pada smartphone.
- **Konsultasi WhatsApp Otomatis**: Modal pemesanan yang otomatis memformat pesan WhatsApp lengkap dengan nama treatment, kategori barang, outlet pilihan, dan catatan kondisi.
- **Simulasi Cek Resi (Track Order)**: Modal pelacakan status nota digital dengan visual milestone progress pengerjaan.

---

## Cara Menjalankan Secara Lokal

1. Buka terminal di folder project:
   ```bash
   cd /Users/mymac/Documents/RCR-backup
   ```
2. Pasang dependensi:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan (Dev Server):
   ```bash
   npm run dev
   ```
4. Buka browser di `http://localhost:3000`.

---

## Cara Deploy ke Vercel (Tinggal Deploy)

### Cara 1: Menggunakan Vercel Dashboard (Rekomendasi)
1. Push project ini ke repositori **GitHub / GitLab / Bitbucket** Anda.
2. Buka dashboard [vercel.com](https://vercel.com) dan login ke akun Anda.
3. Klik tombol **"Add New..."** lalu pilih **"Project"**.
4. Import repositori GitHub project ini.
5. Vercel akan otomatis mendeteksi:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Klik **"Deploy"**. Dalam hitungan detik website Anda langsung online dengan domain gratis `.vercel.app` dan sertifikat SSL aktif!

### Cara 2: Menggunakan Vercel CLI langsung dari Terminal
1. Buka terminal di folder project:
   ```bash
   cd /Users/mymac/Documents/RCR-backup
   ```
2. Jalankan perintah deploy Vercel:
   ```bash
   npx vercel
   ```
3. Ikuti petunjuk di terminal (pilih *Yes* untuk set up dan deploy).
4. Untuk deploy ke production:
   ```bash
   npx vercel --prod
   ```

File `vercel.json` yang telah disediakan akan otomatis memastikan seluruh URL rute (`/`, `/layanan`, `/galeri`) dialihkan dan dibuka dengan lancar tanpa error 404 pada Vercel.
