import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Local lightweight fallbacks for Navbar and Footer to avoid import errors
const Navbar: React.FC = () => (
  <header className="w-full bg-transparent">
    <nav className="max-w-7xl mx-auto px-4 py-4">{/* placeholder navbar */}</nav>
  </header>
);

const Footer: React.FC = () => (
  <footer className="w-full bg-transparent">
    <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-center">{/* placeholder footer */}</div>
  </footer>
);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Willow & Tallow",
  description:
    "Premium tallow skincare, lip balms, soaps and natural body care products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F6F2EA]">
        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <div className="flex-1">{children}</div>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}