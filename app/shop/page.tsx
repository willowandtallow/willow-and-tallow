import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Tallow Balm",
    description:
      "A rich, nourishing balm made for simple everyday moisture and comforting care.",
    image: "/tallow-balm-featured.png",
    status: "available",
    href: "/shop/tallow-balm",
  },
  {
    name: "Tallow Lip Balm",
    description:
      "A simple everyday essential designed to keep lips feeling soft, smooth, and protected.",
    image: null,
    status: "coming-soon",
    href: "#",
  },
  {
    name: "Tallow Soap",
    description:
      "A gentle, thoughtfully made cleansing bar inspired by traditional ingredients and simple routines.",
    image: null,
    status: "coming-soon",
    href: "#",
  },
];

export default function ShopPage() {
  return (
    <main className="bg-[#F5F0E7] text-[#343A31]">
      {/* HERO */}
      <section
        className="relative min-h-[55vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F6F0E6]/20" />

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-[#F5F0E7]/45 to-[#F5F0E7]" />

        <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-7xl items-center justify-center px-6 pb-14 pt-32 text-center md:px-10">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#747B68]">
              Willow & Tallow
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] text-[#363D33] md:text-7xl">
              The Collection
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#60675A]">
              Thoughtful skincare made simply, with nourishing ingredients and
              an intentional approach to everyday care.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 pb-14 pt-8 text-center md:px-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#858A78]">
            Shop Willow & Tallow
          </p>

          <h2 className="mt-5 font-serif text-3xl text-[#383E35] md:text-4xl">
            Simple essentials for slower routines.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#696F63]">
            Our collection is growing slowly and intentionally, one thoughtful
            product at a time.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 pb-28 md:px-10 md:pb-36">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group">
              {/* PRODUCT IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E4DDD1]">
                {product.image ? (
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center px-8 text-center">
                    <div>
                      <p className="font-serif text-4xl text-[#A7A596]">
                        {product.name}
                      </p>

                      <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-[#858878]">
                        Coming Soon
                      </p>
                    </div>
                  </div>
                )}

                {product.status === "coming-soon" && (
                  <div className="absolute left-5 top-5 bg-[#F3EEE5]/90 px-4 py-2 text-[9px] uppercase tracking-[0.28em] text-[#5E6657] backdrop-blur-sm">
                    Coming Soon
                  </div>
                )}
              </div>

              {/* PRODUCT CONTENT */}
              <div className="pt-6">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="font-serif text-3xl text-[#383F35]">
                    {product.name}
                  </h3>

                  {product.status === "available" && (
                    <span className="pt-2 text-[9px] uppercase tracking-[0.25em] text-[#7C816F]">
                      Available
                    </span>
                  )}
                </div>

                <p className="mt-4 leading-7 text-[#696F63]">
                  {product.description}
                </p>

                {product.status === "available" ? (
                  <Link
                    href={product.href}
                    className="mt-6 inline-block border-b border-[#66705D] pb-2 text-[10px] uppercase tracking-[0.26em] text-[#46503F]"
                  >
                    View Product →
                  </Link>
                ) : (
                  <p className="mt-6 text-[10px] uppercase tracking-[0.26em] text-[#989B8B]">
                    Coming soon
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COMING SOON NOTE */}
      <section className="border-y border-[#D2CBC0] bg-[#ECE6DC] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#7B816E]">
            More is on the way
          </p>

          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#373D34] md:text-5xl">
            Growing slowly.
            <br />
            Making thoughtfully.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#686E62]">
            Lip balm, soap, and more Willow & Tallow essentials are currently
            in the works.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-block border border-[#65705C] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[#46503F] transition hover:bg-[#E3DDD2]"
          >
            Stay in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}