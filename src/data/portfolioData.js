// Single source of truth for all portfolio content (sourced from "CV ATS LINGGA").
// Every user-visible text is bilingual: L(id, en). Plain strings (names, emails, links) are shared.
// Values left as null / '-' / '<placeholder>' are rendered gracefully by the UI and never invented.
const L = (id, en) => ({ id, en });

export const portfolioData = {
  profile: {
    name: "Zaskia Nurismi Lingga",
    university: "Universitas Muhammadiyah Malang",
    location: L("Malang, Indonesia", "Malang, Indonesia"),
    tagline: L(
      "Mahasiswa Informatika • Sistem Informasi & Data Science • Full-Stack Developer",
      "Computer Science Undergraduate • Information Systems & Data Science • Full-Stack Developer"
    ),
    about: L(
      "Mahasiswa aktif Informatika yang memiliki fokus kuat pada bidang Data Science dan Machine Learning. Memiliki pengalaman terbukti dalam mengembangkan model Explainable AI dan instrumen analitik berbasis data. Memiliki pengalaman kepemimpinan yang solid sebagai Wakil Ketua Umum Data Science Club, bertanggung jawab dalam mengelola operasional internal dan teknis komunitas.",
      "Active Informatics undergraduate with a strong focus on Data Science and Machine Learning. Proven experience in developing Explainable AI models and data-driven analytical instruments. Solid leadership experience as Deputy Chair of the Data Science Club, responsible for managing the community's internal and technical operations."
    ),
    phone: "+62 853 8500 9752",
    email: "linggazaskia@gmail.com",
    links: {
      portfolio: "https://znlingga.github.io/zaskia-lingga/",
      linkedin: "<linkedin>",
      github: "https://github.com/ZnLingga"
    }
  },

  education: [
    {
      institution: "Universitas Muhammadiyah Malang",
      location: L("Malang, Indonesia", "Malang, Indonesia"),
      period: L("Sept 2023 – Sekarang", "Sep 2023 – Present"),
      degree: L("Sarjana Komputer (S1)", "Bachelor of Computer Science (S1)"),
      gpa: "-",
      relevantCourses: [
        L("Penggalian Data", "Data Mining"),
        L("Pembelajaran Mesin", "Machine Learning"),
        L("Analisis Big Data", "Big Data Analytics")
      ]
    },
    {
      institution: "SMAN 4 Banjarbaru",
      location: L("Banjarbaru, Kalimantan Selatan", "Banjarbaru, South Kalimantan"),
      period: L("Juni 2021 – Mei 2023", "June 2021 – May 2023"),
      degree: L("Matematika dan IPA", "Mathematics and Natural Sciences"),
      gpa: null,
      relevantCourses: []
    }
  ],

  experience: [
    {
      company: "CV Han Media Tekindo",
      mode: L("On-Site", "On-Site"),
      location: L("Malang, Indonesia", "Malang, Indonesia"),
      period: L("Juni 2026 – September 2026", "June 2026 – September 2026"),
      role: L("Sistem Informasi (Magang)", "Information Systems (Intern)"),
      highlights: [
        L(
          "Mengembangkan dan mengoptimalkan sistem manajemen inventaris, logistik, dan armada operasional berbasis AppSheet yang terintegrasi langsung dengan basis data Google Sheets.",
          "Developed and optimized an AppSheet-based inventory, logistics, and operational fleet management system integrated directly with a Google Sheets database."
        ),
        L(
          "Mengonfigurasi arsitektur penyimpanan aset visual secara terpusat di Google Drive guna memastikan kelancaran sinkronisasi foto laporan dan barang lintas divisi operasional.",
          "Configured a centralized visual-asset storage architecture in Google Drive to keep report and goods photos syncing smoothly across operational divisions."
        ),
        L(
          "Merancang antarmuka pengguna (UI/UX) yang efisien dengan mengimplementasikan sistem pembatasan akses berbasis peran (RBAC) melalui Slice untuk melindungi data finansial yang sensitif.",
          "Designed an efficient user interface (UI/UX) by implementing role-based access control (RBAC) through Slices to protect sensitive financial data."
        ),
        L(
          "Melakukan peninjauan, pemeliharaan, dan perbaikan kelengkapan sistem database internal CV Han Media Tekindo secara konsisten untuk mendukung kelancaran administrasi perusahaan.",
          "Consistently reviewed, maintained, and completed CV Han Media Tekindo's internal database system to support smooth company administration."
        )
      ]
    }
  ],

  projects: [
    {
      id: "01",
      title: L("Aplikasi Kepala Gudang", "Warehouse Head App"),
      date: L("Agustus 2026", "August 2026"),
      role: L("Full-Stack Developer", "Full-Stack Developer"),
      highlights: [
        L(
          "Merancang dan membangun platform manajemen operasional end-to-end (Aplikasi Kepala Gudang) untuk merampingkan alur kerja tugas internal serta pelacakan sumber daya logistik dan inventaris secara terpusat.",
          "Designed and built an end-to-end operations management platform (Warehouse Head App) to streamline internal task workflows and centralize logistics and inventory resource tracking."
        ),
        L(
          "Mengonfigurasi arsitektur basis data relasional di Google Sheets menggunakan fitur Slices dan Virtual Columns guna mencegah penumpukan data dan menjaga stabilitas sistem operasional lintas divisi.",
          "Configured a relational database architecture in Google Sheets using Slices and Virtual Columns to prevent data buildup and keep cross-division operations stable."
        ),
        L(
          "Mengimplementasikan logika aplikasi modular dan fitur navigasi instan (Deep Linking) untuk memfasilitasi pemantauan aktivitas operasional, penugasan kru, serta pergerakan armada secara real-time.",
          "Implemented modular application logic and instant navigation (Deep Linking) to monitor operational activity, crew assignments, and fleet movement in real time."
        )
      ]
    },
    {
      id: "02",
      title: L("Aplikasi Service", "Service App"),
      date: L("Juli 2026", "July 2026"),
      role: L("Full-Stack Developer", "Full-Stack Developer"),
      highlights: [
        L(
          "Mengonfigurasi arsitektur penyimpanan cloud berbasis jalur absolut (absolute-path) di Google Drive guna mengotomatiskan perutean dan sinkronisasi dokumentasi visual (foto hasil perbaikan) secara terpusat dan presisi.",
          "Configured an absolute-path cloud storage architecture in Google Drive to automate the routing and syncing of visual documentation (repair photos) in a centralized and precise way."
        ),
        L(
          "Mengimplementasikan sistem pemrosesan data otomatis (Virtual Columns) untuk mensterilkan anomali input kontak secara dinamis dan memfasilitasi integrasi panggilan komunikasi instan (Deep Linking) bagi teknisi lapangan.",
          "Implemented an automatic data-processing system (Virtual Columns) to dynamically sanitize contact-input anomalies and enable instant call integration (Deep Linking) for field technicians."
        ),
        L(
          "Membangun antarmuka pengguna modular dengan sistem penyaringan data berbasis peran (RBAC) melalui fitur Slices guna mengamankan catatan finansial teknisi yang sensitif dan menyajikan tata letak informasi operasional yang efisien.",
          "Built a modular user interface with role-based data filtering (RBAC) through Slices to secure technicians' sensitive financial records and present operational information efficiently."
        )
      ]
    },
    {
      id: "03",
      title: L("Pembersihan Data", "Data Cleaning"),
      date: L("Juni 2026", "June 2026"),
      role: L("System Analyst", "System Analyst"),
      highlights: [
        L(
          "Merancang struktur database relasional menggunakan Google Sheets dan AppSheet untuk memisahkan data inventaris barang dan aset kendaraan secara rapi.",
          "Designed a relational database structure using Google Sheets and AppSheet to neatly separate goods inventory data from vehicle assets."
        ),
        L(
          "Mengimplementasikan kontrol kualitas data (Data Quality) dengan membangun fitur pendeteksi otomatis (Duplicate Catcher) untuk mencegah masuknya data ganda.",
          "Implemented data quality control by building an automatic detection feature (Duplicate Catcher) to prevent duplicate entries."
        ),
        L(
          "Memastikan integritas data hingga 100% dengan menerapkan aturan validasi ketat, seperti dropdown dinamis untuk mencegah salah ketik dan pemblokiran input stok bernilai minus atau nol.",
          "Ensured up to 100% data integrity by applying strict validation rules, such as dynamic dropdowns to prevent typos and blocking negative or zero stock inputs."
        )
      ]
    }
  ],

  awards: [
    {
      rank: 2,
      title: L(
        "Juara II Taekwondo POMPROV JATIM 2025",
        "2nd Place, Taekwondo POMPROV East Java 2025"
      ),
      date: L("Juni 2025", "June 2025"),
      category: L("Kategori Kyorugi Putri U-62Kg.", "Kyorugi Women's Category U-62 kg")
    },
    {
      rank: 1,
      title: L("Juara I Rector Cup UMM 2025", "1st Place, UMM Rector Cup 2025"),
      date: L("Juni 2025", "June 2025"),
      category: L("Kategori Kyorugi Putri U-57Kg.", "Kyorugi Women's Category U-57 kg")
    },
    {
      rank: 2,
      title: L(
        "Juara II QUANTUM TAEKWONDO CHAMPIONSHIP KEMENPORA RI 2021",
        "2nd Place, QUANTUM TAEKWONDO CHAMPIONSHIP KEMENPORA RI 2021"
      ),
      date: L("Agustus 2024", "August 2024"),
      category: L("Kategori Kyorugi Putri U-62Kg.", "Kyorugi Women's Category U-62 kg")
    }
  ],

  organizations: [
    {
      organization: L("Data Science Club (DSC), UMM", "Data Science Club (DSC), UMM"),
      period: L("Juni 2026 – Sekarang", "June 2026 – Present"),
      role: L("Wakil Ketua Umum", "Deputy Chair"),
      description: L(
        "Membantu Ketua Umum dalam memimpin organisasi, mengoordinasikan program kerja, dan memastikan seluruh kegiatan operasional klub berjalan dengan efektif.",
        "Assisting the Chair in leading the organization, coordinating work programs, and ensuring all club operations run effectively."
      )
    },
    {
      organization: L(
        "Pengurus PPI Kota Banjarbaru, Banjarbaru, Kalimantan Selatan",
        "PPI Banjarbaru City Board, Banjarbaru, South Kalimantan"
      ),
      period: L("Oktober 2021 – Sekarang", "October 2021 – Present"),
      role: L(
        "Anggota Bidang Sosial, Budaya, dan Agama",
        "Member, Social, Cultural, and Religious Affairs Division"
      ),
      description: L(
        "Berperan aktif dalam merencanakan dan melaksanakan berbagai program kerja yang berfokus pada pengabdian masyarakat, pelestarian budaya, serta pembinaan nilai-nilai keagamaan.",
        "Actively planning and carrying out work programs focused on community service, cultural preservation, and the nurturing of religious values."
      )
    },
    {
      organization: L(
        "Unit Kegiatan Mahasiswa (UKM) Taekwondo, UMM",
        "Taekwondo Student Activity Unit (UKM), UMM"
      ),
      period: L("Oktober 2024 – Juli 2025", "October 2024 – July 2025"),
      role: L(
        "Ketua Divisi Bimbingan Prestasi dan Perlengkapan",
        "Head of the Achievement Coaching and Equipment Division"
      ),
      description: L(
        "Sebagai ketua divisi bertanggung jawab dalam penjagaan internal divisi.",
        "As division head, responsible for looking after the division's internal affairs."
      )
    },
    {
      organization: L(
        "Himpunan Mahasiswa Informatika (HMIF), UMM",
        "Informatics Student Association (HMIF), UMM"
      ),
      period: L("September 2023 – September 2024", "September 2023 – September 2024"),
      role: L("Staf Bidang Akademik", "Academic Division Staff"),
      description: L(
        "Berpartisipasi dalam berbagai kegiatan dan acara yang diselenggarakan oleh organisasi sebagai staf bidang akademik.",
        "Participated in various activities and events organized by the association as academic division staff."
      )
    }
  ],

  skills: {
    languages: [
      { name: L("Indonesia", "Indonesian"), level: L("Mahir", "Proficient") },
      { name: L("Bahasa Daerah Minang", "Minang (regional language)"), level: L("Mahir", "Proficient") },
      { name: L("Bahasa Daerah Banjar", "Banjar (regional language)"), level: L("Mahir", "Proficient") }
    ],
    programming: ["C", "C#", "Python", "Java"],
    database: ["Google Sheets"],
    tools: [
      "Git",
      "GitHub",
      "Microsoft Office",
      "Google Colaboratory",
      "Google Gemini",
      "CHATGPT",
      "VSCode"
    ]
  }
};
