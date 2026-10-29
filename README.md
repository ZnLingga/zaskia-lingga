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

## ✏️ Mengubah Konten
Semua data CV ada di satu file: `src/data/portfolioData.js`.
Field bernilai `null.` / `-` otomatis tampil sebagai badge "documentation_pending",
dan link `<linkedin>`, `<github>`, `<portfoliolink>` akan aktif otomatis setelah diganti URL asli.

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
