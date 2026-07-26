"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Our Story", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-4 pt-4">
      <nav className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#D8D2C7] bg-[#F6F2EA]/95 shadow-[0_12px_40px_rgba(49,56,46,0.08)] backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-5 md:px-7">
          {/* BRAND */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="font-serif text-lg tracking-[0.14em] text-[#343A30]"
          >
            Willow & Tallow
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-[#697064] transition-colors duration-300 hover:text-[#343A30]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Link
              href="/shop"
              className="rounded-full bg-[#46503D] px-6 py-3 text-sm font-medium text-[#F8F5EE] transition duration-300 hover:bg-[#363F30]"
            >
              Shop Collection
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8D2C7] text-[#343A30] transition hover:bg-[#EAE6DC] lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="border-t border-[#DDD8CD] bg-[#F6F2EA] px-5 pb-6 pt-3 lg:hidden">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-[#E2DDD2] py-4 text-base text-[#4C5448] transition hover:text-[#31372E]"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-full bg-[#46503D] px-6 py-4 text-center text-sm font-medium text-[#F8F5EE]"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}