import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lion Mobilindo | Dealer Mobil Bekas Berkualitas di Malang",
  description: "Beli mobil bekas impian Anda di Lion Mobilindo Malang. Melayani Cash, Kredit, dan Tukar Tambah dengan proses cepat, transparan, dan aman. Unit terjamin bebas banjir dan tabrak.",
  keywords: ["mobil bekas malang", "dealer mobil malang", "lion mobilindo", "jual beli mobil malang", "kredit mobil malang", "showroom mobil malang"],
  authors: [{ name: "Lion Mobilindo" }],
  openGraph: {
    title: "Lion Mobilindo | Dealer Mobil Bekas Berkualitas di Malang",
    description: "Cari mobil bekas berkualitas di Malang? Lion Mobilindo solusinya. Proses cepat, unit terjamin, dan harga kompetitif.",
    url: "https://lionmobilindo.com",
    siteName: "Lion Mobilindo Malang",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lion Mobilindo | Dealer Mobil Bekas Berkualitas di Malang",
    description: "Cari mobil bekas berkualitas di Malang? Lion Mobilindo solusinya.",
  },
  alternates: {
    canonical: "https://lionmobilindo.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
