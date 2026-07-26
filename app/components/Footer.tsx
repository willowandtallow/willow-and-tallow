import Link from "next/link";

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Our Story", href: "/about" },
  { name: "Journal", href: "/journal" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#31392F] text-[#F5F1E8]">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-10 md:pb-14 md:pt-24">
        <div className="grid gap-14 border-b border-[#5A6254] pb-16 md:grid-cols-[1.5fr_0.7fr_0.8fr] md:gap-10">
          
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="font-serif text-3xl tracking-[0.08em] text-[#F7F3EB] md:text-4xl"
            >
              Willow & Tallow
            </Link>

            <p className="mt-5 max-w-sm font-serif text-xl italic leading-8 text-[#C9CFBB]">
              Rooted in Nature.
              <br />
              Crafted with Tallow.
            </p>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#B9C0B1]">
              Thoughtfully crafted skincare inspired by tradition, nourishing
              ingredients, and a simpler approach to everyday care.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9FA895]">
              Explore
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-[#DDE1D6] transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#9FA895]">
              Connect
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="mailto:contact@willowandtallow.com"
                className="w-fit text-sm text-[#DDE1D6] transition-colors duration-300 hover:text-white"
              >
                Email
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-[#DDE1D6] transition-colors duration-300 hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm text-[#DDE1D6] transition-colors duration-300 hover:text-white"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 pt-8 text-xs text-[#929B8D] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Willow & Tallow. All rights reserved.
          </p>

          <p>
            Crafted by{" "}
            <a
              href="https://jovavo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#CDD3C5] transition-colors duration-300 hover:text-white"
            >
              Jovavo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}