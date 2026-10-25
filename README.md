# Portofolio Muhammad Wildan

Situs portofolio statis (HTML, CSS, JavaScript), tanpa proses build.

## Struktur folder

```
portfolio/
├── index.html          # isi halaman (teks, bagian-bagian)
├── css/
│   └── style.css       # tampilan: warna, font, tata letak, animasi
├── js/
│   └── script.js       # efek mengetik, muncul saat scroll, menu aktif
├── images/
│   └── projects/       # tangkapan layar proyek (nama file ada di index.html)
├── sertifikat/
│   └── sertifikat-bnsp.pdf   # PDF sertifikat untuk tombol "Lihat sertifikat"
├── foto.png            # foto profil (rasio 4:5)
├── cv.pdf              # CV untuk tombol Unduh CV
└── README.md
```

Nama file gambar proyek yang dicari:

- `images/projects/dashboard-monitoring-sales.png`
- `images/projects/pencatatan-event-sales.png`
- `images/projects/artikel-ilmiah.png`

Kalau file gambar belum ada, bagian gambarnya otomatis tidak ditampilkan.

## Menjalankan di komputer

Buka folder di VS Code, lalu jalankan `index.html` dengan ekstensi Live Server.

## Deploy

Repo ini bisa di-deploy ke Vercel: import repo dari GitHub, biarkan Framework Preset di "Other", lalu Deploy.
