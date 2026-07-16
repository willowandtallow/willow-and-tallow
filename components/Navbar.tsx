"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Our Story", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="mx-auto max-w-7xl rounded-full border border-[#d9d0c6] bg-[#f8f5f1]/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between px-6 h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#322d28] tracking-[0.35em] uppercase text-sm font-light"
          >
            Willow & Tallow
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide text-[#6f665d] hover:text-[#2f2a25] transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="rounded-full bg-[#2f2a25] px-5 py-2 text-sm text-[#f8f5f1] hover:bg-[#1d1a18] transition"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#2f2a25]"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-[#e8dfd5] bg-[#faf7f2] rounded-b-[2rem]">
            <div className="flex flex-col px-6 py-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-[#4a433d] text-base border-b border-[#ece5dd] last:border-none"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full bg-[#2f2a25] py-3 text-center text-white"
              >
                Inquire
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}