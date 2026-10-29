# Personal Portfolio

Repositori portofolio pribadi **Zaskia Nurismi Lingga**.

## 📌 Deskripsi
Proyek ini dibuat untuk menampilkan profil, proyek, keahlian, dan pencapaian profesional.

## 🧱 Tech Stack
React (Vite) · Tailwind CSS · GSAP (ScrollTrigger) · Lenis · Framer Motion · Lucide React

## 🛠️ Menjalankan Secara Lokal
```bash
npm install
npm run dev      # development
npm run build    # production build -> dist/
```

## ✨ Fitur
- Tema **dark / light** (biru tua) — pilihan tersimpan, default dark
- Bahasa **ID / EN** — pilihan tersimpan, default ID
- Curtain loader minimalis setiap load / refresh, smooth scrolling (Lenis), background bergerak

## ✏️ Mengubah Konten
- Data CV (ID + EN): `src/data/portfolioData.js` — setiap teks ditulis `L("Indonesia", "English")`.
- Teks antarmuka (menu, judul section): `src/data/ui.js`.
- Field bernilai `null` / `-` tampil sebagai badge kecil, dan link `<linkedin>` akan aktif otomatis setelah diganti URL asli.
- File CV untuk tombol "Unduh CV": `public/CV-Zaskia-Nurismi-Lingga.pdf` (ganti dengan versi terbaru bila ada).

## 🚀 Deployment (GitHub Pages)
Push ke branch `main` — workflow `.github/workflows/deploy.yml` akan build & deploy otomatis.
Pastikan di **Settings → Pages → Source** dipilih **GitHub Actions**.

## 🚀 Status
- [x] Inisialisasi Repositori
- [x] Setup Framework / Template Portofolio
- [x] Penambahan Konten & Proyek (sebagian field masih `null.`)
- [ ] Deployment

---
Dibuat dengan ❤️ oleh [ZnLingga](https://github.com/ZnLingga)
