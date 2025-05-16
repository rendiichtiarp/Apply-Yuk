# Apply Yuk! 📝

Sebuah aplikasi web modern untuk membuat CV profesional dengan bantuan AI.

## 🌟 Fitur Utama

### 1. Pembuatan CV dengan AI
- Integrasi dengan Gemini AI 2.0 Flash untuk menghasilkan ringkasan profesional
- Sistem prompt yang dioptimalkan untuk menghasilkan ringkasan yang fokus dan terukur
- Fitur "Beta" untuk generasi ringkasan otomatis

### 2. Form CV yang Interaktif
- Interface yang intuitif dengan 8 bagian utama:
  - Data Pribadi 👤
  - Ringkasan Profesional 📝
  - Pengalaman Kerja 💼
  - Pendidikan 🎓
  - Keterampilan ⚡
  - Bahasa 🗣️
  - Sertifikat 🏆
  - Proyek 🚀
- Animasi halus menggunakan Framer Motion
- Progress bar interaktif
- Sistem navigasi yang mudah digunakan

### 3. Manajemen Data
- Penyimpanan draft otomatis
- Fitur ekspor ke PDF
- Konfirmasi penghapusan data dengan AlertDialog
- Validasi data yang komprehensif

### 4. UI/UX Modern
- Desain responsif dan adaptif
- Tema yang dapat disesuaikan
- Efek visual yang menarik
- Feedback interaktif untuk setiap aksi pengguna

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animasi**: Framer Motion
- **AI Integration**: Google Generative AI (Gemini 2.0)
- **UI Components**: Shadcn UI
- **State Management**: React Hooks
- **PDF Generation**: Custom PDF Generator

## 📋 Panduan Penggunaan

1. **Mulai Membuat CV**
   - Isi data pribadi Anda
   - Gunakan fitur AI untuk membuat ringkasan profesional
   - Tambahkan pengalaman kerja dan pendidikan
   - Lengkapi skills dan informasi tambahan

2. **Menggunakan Fitur AI**
   - Aktifkan toggle "Gunakan AI" pada bagian ringkasan
   - Pastikan sudah mengisi:
     - Data pribadi (minimal nama)
     - Minimal satu pengalaman kerja
     - Minimal satu pendidikan
     - Beberapa skills (hard/soft skills)

3. **Menyimpan dan Mengekspor**
   - Gunakan tombol "Simpan Draft" untuk menyimpan progress
   - Pratinjau CV sebelum mengunduh
   - Ekspor ke format PDF untuk hasil akhir

## 🚀 Memulai Pengembangan

```bash
# Install dependencies
pnpm install

# Jalankan development server
pnpm dev

# Build untuk production
pnpm build
```

## 🔑 Environment Variables

Buat file `.env.local` dan tambahkan:
```
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

## 📝 Catatan Pengembangan

- Pastikan memiliki Node.js versi terbaru
- Gunakan pnpm sebagai package manager
- Perhatikan struktur komponen dan state management
- Ikuti panduan kontribusi untuk pengembangan

## 📄 Lisensi

Aplikasi ini dilindungi oleh hak cipta dan merupakan perangkat lunak proprietary. Penggunaan, penyalinan, atau distribusi tanpa izin tertulis tidak diperbolehkan. Untuk izin penggunaan dan pertanyaan, silakan hubungi:

Email: rendiichtiarprasetyo@gmail.com

## ⚠️ Pemberitahuan Hak Cipta

Copyright © 2024 Apply Yuk. All rights reserved.

Penggunaan tidak sah atas perangkat lunak ini dapat dikenakan sanksi hukum yang berlaku.

---

Dibuat dengan ❤️ untuk membantu pencari kerja Indonesia 