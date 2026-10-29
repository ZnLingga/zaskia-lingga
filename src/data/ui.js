// Static UI strings (ID / EN). Portfolio content itself lives in portfolioData.js.
const L = (id, en) => ({ id, en });

export const ui = {
  siteTitle: L('Zaskia Nurismi Lingga — Portofolio', 'Zaskia Nurismi Lingga — Portfolio'),
  siteDescription: L(
    'Portofolio Zaskia Nurismi Lingga — mahasiswa Informatika, Data Science & Machine Learning, Full-Stack Developer, dan peraih medali Taekwondo.',
    'Portfolio of Zaskia Nurismi Lingga — Informatics undergraduate, Data Science & Machine Learning, Full-Stack Developer, and Taekwondo medalist.'
  ),
  nav: {
    about: L('Tentang', 'About'),
    experience: L('Pengalaman', 'Experience'),
    projects: L('Proyek', 'Projects'),
    awards: L('Penghargaan', 'Awards'),
    organizations: L('Organisasi', 'Organizations'),
    skills: L('Keahlian', 'Skills'),
    contact: L('Kontak', 'Contact'),
  },
  controls: {
    toTop: L('Kembali ke atas', 'Back to top'),
    menu: L('Menu', 'Menu'),
    theme: L('Ganti tema', 'Toggle theme'),
    language: L('Bahasa', 'Language'),
    light: L('Mode terang', 'Light mode'),
    dark: L('Mode gelap', 'Dark mode'),
  },
  hero: {
    greeting: L('Halo, saya', "Hello, I'm"),
    projects: L('Lihat Proyek', 'View Projects'),
    cv: L('Unduh CV', 'Download CV'),
    contact: L('Hubungi Saya', 'Get in Touch'),
    photoAlt: L('Foto Zaskia Nurismi Lingga', 'Photo of Zaskia Nurismi Lingga'),
  },
  about: {
    title: L('Tentang Saya', 'About Me'),
    university: L('Universitas', 'University'),
    location: L('Lokasi', 'Location'),
    email: L('Email', 'Email'),
    phone: L('Telepon', 'Phone'),
  },
  education: {
    title: L('Pendidikan', 'Education'),
    gpa: L('IPK', 'GPA'),
    courses: L('Mata Kuliah Terkait', 'Relevant Courses'),
  },
  experience: { title: L('Pengalaman Kerja', 'Work Experience') },
  projects: { title: L('Proyek', 'Projects') },
  awards: {
    title: L('Penghargaan', 'Awards'),
    place: {
      1: L('Juara I', '1st Place'),
      2: L('Juara II', '2nd Place'),
      3: L('Juara III', '3rd Place'),
    },
  },
  organizations: {
    title: L('Pengalaman Organisasi', 'Organizational Experience'),
    active: L('Aktif', 'Active'),
    done: L('Selesai', 'Completed'),
  },
  skills: {
    title: L('Bahasa & Keahlian', 'Languages & Skills'),
    languages: L('Bahasa', 'Languages'),
    programming: L('Pemrograman', 'Programming'),
    database: L('Database', 'Database'),
    tools: L('Tools', 'Tools'),
  },
  contact: {
    title: L('Kontak', 'Contact'),
    cta: L('Mari berkolaborasi.', "Let's collaborate."),
    soon: L('segera', 'soon'),
    built: L('Dibuat dengan React, Vite & Tailwind', 'Built with React, Vite & Tailwind'),
  },
  loading: L('Memuat portofolio', 'Loading portfolio'),
};

