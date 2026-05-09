## ✨ Overview

Personal portfolio website yang sekaligus berfungsi sebagai digital storefront. Dibangun dengan React + Vite, terintegrasi dengan Midtrans Snap untuk pembayaran langsung tanpa redirect.

---

## 🚀 Features

- **Portfolio Showcase** — Menampilkan semua side projects dan ventures
- **Services Section** — Web development, IT support, SEO, AI chatbot
- **Digital Store** — Jual produk digital langsung di website dengan modal popup
- **Midtrans Snap Integration** — Payment gateway in-page, tanpa redirect
- **Smooth Animations** — Hero entrance, scroll effects, hover interactions
- **Fully Responsive** — Mobile-friendly di semua ukuran layar
- **Dark Editorial Design** — Custom typography dengan Syne + Instrument Serif

---

## 🛍️ Digital Products

| Produk | Kategori | Harga |
|--------|----------|-------|
| Landing Page Starter Kit | Code | Rp 249.000 |
| IT Support Template Pack | Template | Rp 149.000 |
| IT Student Survival Kit | Book Bundle | Rp 49.000 |

---

## 🏢 Ventures

| Project | Kategori | Status |
|---------|----------|--------|
| [Angkasa Code Hub](#) | Agency | Active |
| [netbase](#) | Edukasi | Active |
| [circlehub.id](#) | Komunitas | Active |
| [Gudang IT Jakarta](https://shopee.co.id/gudangitjakarta) | E-Commerce | Active |
| Thrift Studio | Fashion | Coming Soon |

---

## 🛠️ Tech Stack

- **Frontend** — React 18, Vite 5
- **Styling** — CSS-in-JS (inline styles), Google Fonts (Syne, Instrument Serif, DM Sans)
- **Payment** — Midtrans Snap
- **Backend** — Vercel Serverless Functions
- **Deployment** — Vercel
- **Version Control** — GitHub

---

## 📁 Project Structure

```
briandev/
├── api/
│   └── create-transaction.js   # Midtrans payment endpoint
├── public/
│   └── favicon.png
├── src/
│   ├── App.jsx                  # Main component
│   ├── index.css                # Global styles (minimal)
│   └── main.jsx
├── index.html                   # Midtrans Snap script loaded here
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v20+
- npm v9+
- Midtrans account (sandbox/production)

### Installation

```bash
# Clone repository
git clone https://github.com/timothy-brian/briandev.git
cd briandev

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173)

### Environment Variables

Buat file `.env` di root project:

```env
MIDTRANS_SERVER_KEY=Mid-server-xxxxxxxxxxxxxxxx
```

Atau tambahkan di **Vercel Dashboard → Settings → Environment Variables**.

---

## 💳 Payment Integration

Website ini menggunakan **Midtrans Snap** untuk payment in-page:

1. Customer klik tombol **"Peek Inside"** di produk
2. Modal muncul dengan daftar isi produk
3. Customer isi nama & email → klik **"Bayar Sekarang"**
4. Midtrans Snap popup muncul di halaman yang sama
5. Setelah pembayaran berhasil → customer dapat konfirmasi via email

### Test Payment (Sandbox)
```
Kartu: 4811 1111 1111 1114
Expiry: 01/26
CVV: 123
OTP: 112233
```

---

## 🚀 Deployment

Project ini di-deploy ke **Vercel** dengan auto-deploy dari GitHub:

```bash
# Push ke GitHub → Vercel otomatis redeploy
git add .
git commit -m "your message"
git push origin main
```

---

## 📬 Contact

- **WhatsApp** — [+62 882 1317 9608](https://wa.me/6288213179608)
- **Email** — andrieswilar@gmail.com
- **Upwork** — [timothy-brian](https://www.upwork.com/freelancers/~01ee6f9f8f506919b5)
- **LinkedIn** — [timothybrian](https://www.linkedin.com/in/timothybrian/)
- **GitHub** — [timothy-brian](https://github.com/timothy-brian)
- **Instagram** — [_timothybrian](https://www.instagram.com/_timothybrian/)

---

## 📄 License

MIT License © 2026 Brian Timothy
