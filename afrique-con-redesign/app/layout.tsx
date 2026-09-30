import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afrique-con | Voyagez à travers l'Afrique dans le confort",
  description: "Service de transport inter-urbain premium connectant le Cameroun, le Nigeria, le Bénin, le Togo, le Ghana et la Côte d'Ivoire. WiFi gratuit, divertissement à bord, confort exceptionnel.",
  keywords: "transport Afrique, bus Cameroun Nigeria, voyage confortable Afrique, Afrique-con, transport inter-urbain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
