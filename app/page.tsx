"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredCars = [
    {
      id: 1,
      name: "Toyota Fortuner 2.4 VRZ",
      year: 2021,
      km: "35.000 km",
      price: "Rp 485.000.000",
      image: "/images/car-1.png",
    },
    {
      id: 2,
      name: "Honda Civic RS 1.5 Turbo",
      year: 2022,
      km: "12.000 km",
      price: "Rp 510.000.000",
      image: "/images/car-2.png",
    },
    {
      id: 3,
      name: "Mitsubishi Pajero Sport Dakar",
      year: 2020,
      km: "45.000 km",
      price: "Rp 465.000.000",
      image: "/images/car-1.png", // Reusing placeholder for demo
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-accent-gold selection:text-black">
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-luxury border-none! ${scrolled ? "glass py-3" : "bg-transparent py-7"
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className={`font-bold tracking-tighter text-gradient-gold transition-luxury duration-500 ${scrolled ? "text-xl" : "text-2xl"
              }`}>
              LION MOBILINDO
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#home" className="hover:text-accent-gold transition-luxury">Home</a>
            <a href="#about" className="hover:text-accent-gold transition-luxury">Tentang</a>
            <a href="#cars" className="hover:text-accent-gold transition-luxury">Unit</a>
            <a href="#why" className="hover:text-accent-gold transition-luxury">Keunggulan</a>
          </div>
          <a
            href="https://wa.me/6282151140050"
            className="bg-accent-gold text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-white transition-luxury shadow-lg shadow-accent-gold/20"
          >
            HUBUNGI KAMI
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Premium Car Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Dealer Mobil Bekas <br />
              <span className="text-gradient-gold uppercase tracking-tight">Berkualitas di Malang</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl leading-relaxed">
              Temukan unit terjamin dengan kondisi prima. Kami melayani Cash, Kredit Seluruh Indonesia,
              dan Tukar Tambah dengan proses cepat, transparan, dan aman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a
                href="#cars"
                className="w-full sm:w-auto bg-accent-gold text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-luxury text-center"
              >
                LIHAT STOK MOBIL
              </a>
              <a
                href="https://wa.me/6282151140050"
                className="w-full sm:w-auto border border-white/20 hover:border-accent-gold px-10 py-4 rounded-full font-bold text-lg transition-luxury text-center flex items-center justify-center gap-3"
              >
                <span>CHATT WHATSAPP</span>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-accent-gold font-bold text-xl">100+</span>
                <span className="text-zinc-400 text-sm uppercase tracking-widest">Unit Terjual</span>
              </div>
              <div className="flex flex-col">
                <span className="text-accent-gold font-bold text-xl">PROSES CEPAT</span>
                <span className="text-zinc-400 text-sm uppercase tracking-widest">24 Jam Cair</span>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-accent-gold font-bold text-xl">CREDIT ALL INDO</span>
                <span className="text-zinc-400 text-sm uppercase tracking-widest">Layanan Nasional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-dark-surface">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/car-2.png"
                  alt="About Lion Mobilindo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl border border-accent-gold/20 max-w-[240px]">
                <div className="flex text-accent-gold mb-2">
                  {"★".repeat(4)}<span className="text-zinc-600">★</span>
                </div>
                <p className="text-sm font-medium mb-1">Google Rating 3.6/5</p>
                <p className="text-xs text-zinc-400 font-normal italic">
                  "Tempatnya strategis, harganya terjangkau, mobil berkualitas."
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">Tentang Kami</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Partner Terpercaya Kendaraan Impian Anda di Malang
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Lion Mobilindo hadir sebagai solusi kebutuhan otomotif Anda di Kota Malang. Berlokasi strategis di
                pusat kota, kami berkomitmen menyajikan unit mobil bekas berkualitas tinggi yang telah melalui
                inspeksi ketat.
              </p>
              <ul className="space-y-4 mb-10 text-zinc-300">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <span className="text-accent-gold text-xs">✔</span>
                  </div>
                  <span>Unit Bebas Banjir & Tabrak</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <span className="text-accent-gold text-xs">✔</span>
                  </div>
                  <span>Surat-surat Lengkap & Terjamin</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent-gold/10 flex items-center justify-center">
                    <span className="text-accent-gold text-xs">✔</span>
                  </div>
                  <span>Harga Paling Kompetitif di Malang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="cars" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">Stok Terbaru</h2>
              <h3 className="text-4xl font-bold capitalize">Unit Unggulan Minggu Ini</h3>
            </div>
            <a href="#" className="text-accent-gold border-b border-accent-gold/30 pb-1 hover:text-white transition-colors">
              Lihat Semua Koleksi →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <div
                key={car.id}
                className="group bg-dark-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent-gold/30 transition-luxury shadow-xl hover:shadow-accent-gold/5"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-luxury duration-700"
                  />
                  <div className="absolute top-4 right-4 glass px-3 py-1 rounded text-xs font-bold uppercase tracking-widest text-accent-gold">
                    {car.year}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">{car.name}</h4>
                  <div className="flex items-center gap-4 text-zinc-500 text-sm mb-6">
                    <span>{car.km}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                    <span>Tangan Pertama</span>
                  </div>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <span className="text-xl font-bold text-accent-gold">{car.price}</span>
                    <a
                      href={`https://wa.me/6282151140050?text=Halo%20Lion%20Mobilindo,%20saya%20tertarik%20dengan%20${car.name}`}
                      className="text-xs font-bold uppercase tracking-widest bg-zinc-800 hover:bg-accent-gold hover:text-black px-4 py-2 rounded-lg transition-luxury"
                    >
                      DETAIL
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-24 bg-dark-surface">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">Mengapa Lion Mobilindo?</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-16">Standar Pelayanan Prima</h3>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { title: "Unit Terjamin", desc: "Inspeksi ketat 100+ titik pengecekan." },
              { title: "Harga Transparan", desc: "Tanpa biaya tersembunyi, semua jelas di awal." },
              { title: "Tukar Tambah", desc: "Penawaran harga terbaik untuk mobil lama Anda." },
              { title: "Kredit Nasional", desc: "Bekerjasama dengan lising ternama se-Indonesia." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent-gold/5 border border-accent-gold/20 flex items-center justify-center mb-6 text-2xl font-bold text-accent-gold">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-zinc-900 to-black p-12 md:p-20 rounded-[3rem] border border-white/5">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Proses Mudah & Cepat</h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-zinc-800 z-0"></div>
              {[
                { step: "01", title: "Pilih Mobil", desc: "Browsing stok via web atau kunjungi showroom." },
                { step: "02", title: "Test Drive", desc: "Rasakan performa unit pilihan Anda langsung." },
                { step: "03", title: "Transaksi", desc: "Pilih skema cash atau pengajuan kredit cepat." },
                { step: "04", title: "Serah Terima", desc: "Mobil siap dibawa pulang dengan kondisi prima." },
              ].map((item, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-black border-4 border-zinc-800 flex items-center justify-center text-accent-gold font-bold mb-6 group hover:border-accent-gold transition-luxury">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-surface overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm">Bukti Kualitas Layanan Kami</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { text: "Pelayanan sangat ramah dan transparan. Unit Fortuner yang saya beli kondisinya seperti baru. Proses kreditnya benar-benar cepat!", author: "Bapak Setiawan - Malang" },
              { text: "Terima kasih Lion Mobilindo. Kirim unit ke Bali aman sampai tujuan. Tukar tambah dihargai sangat fair. Recommended seller!", author: "Ibu Maya - Denpasar" },
            ].map((item, i) => (
              <div key={i} className="glass p-12 rounded-3xl border-white/5 group hover:border-accent-gold/20 transition-luxury">
                <div className="flex text-accent-gold mb-6 text-xl">★★★★★</div>
                <p className="text-lg text-zinc-300 italic mb-8 leading-relaxed">"{item.text}"</p>
                <p className="font-bold text-accent-gold uppercase tracking-widest text-sm">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-black">
        <div className="grid md:grid-cols-2">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h2 className="text-accent-gold font-bold text-sm tracking-widest uppercase mb-4">Kunjungi Kami</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-10">Lion Mobilindo Malang</h3>
            <div className="space-y-8 text-zinc-400">
              <div className="flex gap-4">
                <span className="text-accent-gold font-bold">📍</span>
                <p>Jl. Brigjend Slamet Riadi No.175 A, Oro-oro Dowo, Kec. Klojen, Kota Malang, Jawa Timur 65112</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent-gold font-bold">⏰</span>
                <p>Buka Setiap Hari (08.00 - 18.00 WIB)</p>
              </div>
              <div className="flex gap-4">
                <span className="text-accent-gold font-bold">📞</span>
                <p>0821-5114-0050</p>
              </div>
            </div>
            <div className="mt-12">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Lion+Mobilindo+Malang+Jl.+Brigjend+Slamet+Riadi+No.175A"
                target="_blank"
                className="inline-block bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-gold transition-luxury shadow-xl"
              >
                PETUNJUK ARAH
              </a>
            </div>
          </div>
          <div className="h-[400px] md:h-auto min-h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=Lion%20Mobilindo%20Malang%20Jl.%20Brigjend%20Slamet%20Riadi%20No.175A&output=embed"
              className="w-full h-full grayscale invert opacity-70 contrast-125"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-dark-surface border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <p className="text-2xl font-bold tracking-tighter text-gradient-gold mb-6">LION MOBILINDO</p>
              <p className="text-zinc-500 max-w-sm leading-relaxed">
                Dealer mobil bekas terpercaya di Malang. Unit berkualitas, harga transparan, dan proses kredit cepat untuk seluruh Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigasi</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#home" className="hover:text-accent-gold">Beranda</a></li>
                <li><a href="#cars" className="hover:text-accent-gold">Stok Mobil</a></li>
                <li><a href="#about" className="hover:text-accent-gold">Tentang Kami</a></li>
                <li><a href="#why" className="hover:text-accent-gold">Keunggulan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Kontak</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li>0821-5114-0050</li>
                <li>lionmobilindo@gmail.com</li>
                <li>@lionmobilindo_mlg</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
            <p className="text-zinc-600 text-sm">© 2026 Lion Mobilindo Malang. All rights reserved.</p>
            <div className="flex gap-8 text-zinc-600 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WA Button */}
      <a
        href="https://wa.me/6282151140050"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-luxury group"
      >
        <div className="absolute -top-12 right-0 bg-white text-black px-4 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-luxury pointer-events-none shadow-xl">
          Butuh Bantuan? Chat Kami
        </div>
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
          <path d="M12.031 6.172c-2.135 0-3.998 1.063-5.11 2.67a7.195 7.195 0 0 0-1.012 3.659c0 1.62.535 3.111 1.442 4.305l-.946 3.456 3.551-.93c1.242.71 2.673 1.127 4.195 1.127 4.542 0 8.225-3.683 8.225-8.225s-3.683-8.225-8.225-8.225zM12.031 0C18.674 0 24 5.326 24 11.969 24 18.613 18.674 24 12.031 24c-2.091 0-4.045-.533-5.741-1.465L0 24l1.492-5.461C.535 16.829 0 14.957 0 12c0-6.643 5.326-12 12.031-12z" />
        </svg>
      </a>
    </div>
  );
}
