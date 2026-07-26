import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Whipped Tallow Balm",
    eyebrow: "Deep Moisture",
    description:
      "A rich, comforting balm made to nourish dry, sensitive, and weather-worn skin.",
  },
  {
    name: "Botanical Tallow Cream",
    eyebrow: "Daily Ritual",
    description:
      "A soft everyday moisturizer combining nourishing tallow with thoughtfully chosen botanicals.",
  },
  {
    name: "Tallow Lip Balm",
    eyebrow: "Everyday Essential",
    description:
      "Simple protective moisture designed to keep lips soft, smooth, and comfortable.",
  },
];

const values = [
  {
    number: "01",
    title: "Simple Ingredients",
    text: "Purposeful formulas made without unnecessary fillers or complicated routines.",
  },
  {
    number: "02",
    title: "Traditionally Inspired",
    text: "Rooted in old-world skincare rituals and a slower, more intentional approach.",
  },
  {
    number: "03",
    title: "Thoughtfully Crafted",
    text: "Created with care, quality ingredients, and respect for the skin’s natural balance.",
  },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#F6F2EA] text-[#31362D]">
      {/* HERO */}
      <section className="relative min-h-[88vh] px-6 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
        <div className="absolute left-[-110px] top-[180px] h-[320px] w-[320px] rounded-full bg-[#DDE1D2]/50 blur-3xl" />
        <div className="absolute right-[-140px] top-[60px] h-[380px] w-[380px] rounded-full bg-[#E9DFCF]/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <p className="mb-7 text-xs uppercase tracking-[0.38em] text-[#7C826D]">
              Rooted in nature · Crafted with tallow
            </p>

            <h1 className="font-serif text-[3.6rem] leading-[0.98] tracking-[-0.04em] text-[#30362C] sm:text-6xl md:text-7xl lg:text-[5.6rem]">
              Skincare,
              <br />
              returned to
              <br />
              something simpler.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#676C60] md:text-xl">
              Nourishing skincare inspired by tradition, crafted with tallow,
              botanical ingredients, and a belief that less can be more.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-[#46503D] px-8 py-4 text-sm font-medium tracking-wide text-[#FBF8F2] transition duration-300 hover:-translate-y-0.5 hover:bg-[#363F30]"
              >
                Shop the Collection
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-[#A8AA9B] px-8 py-4 text-sm font-medium tracking-wide text-[#46503D] transition duration-300 hover:bg-[#ECE8DE]"
              >
                Discover Our Story
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[570px] items-center justify-center">
            <div className="absolute h-[78%] w-[78%] rounded-full border border-[#CBCABC]" />

            <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[3rem] bg-[#E9E4D8] shadow-[0_30px_80px_rgba(70,80,61,0.10)]">
              <div className="absolute inset-x-12 top-12 h-px bg-[#D3CEC2]" />

              <Image
                src="/willow-tallow-logo.PNG"
                alt="Willow & Tallow"
                width={720}
                height={720}
                priority
                className="relative z-10 h-auto w-[82%] object-contain"
              />

              <p className="absolute bottom-10 left-0 right-0 text-center text-[11px] uppercase tracking-[0.34em] text-[#878B7A]">
                Nature · Tradition · Simplicity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL BRAND STRIP */}
      <section className="border-y border-[#D9D4C9] bg-[#EFEAE1] px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 text-center text-[11px] uppercase tracking-[0.3em] text-[#747967] md:justify-between">
          <span>Tallow Based</span>
          <span>Botanical Ingredients</span>
          <span>Small-Batch Inspired</span>
          <span>Intentional Skincare</span>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#818672]">
              A return to simplicity
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#343A30] md:text-6xl">
              Thoughtful skincare inspired by the way things used to be made.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#686D61]">
              Before skincare became complicated, ingredients were chosen with
              intention. Willow & Tallow brings that philosophy into a modern
              daily ritual—simple formulas, nourishing ingredients, and care
              without the excess.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl border-y border-[#D6D2C7]">
          <div className="grid md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`px-2 py-10 md:px-8 md:py-14 ${
                  index !== values.length - 1
                    ? "border-b border-[#D6D2C7] md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <p className="text-xs tracking-[0.26em] text-[#989B8A]">
                  {value.number}
                </p>

                <h3 className="mt-7 font-serif text-3xl text-[#384035]">
                  {value.title}
                </h3>

                <p className="mt-5 max-w-sm leading-7 text-[#6B7064]">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-[#EAE6DC] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-[#7B816D]">
                The collection
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl tracking-[-0.03em] text-[#31372E] md:text-6xl">
                Everyday nourishment, intentionally made.
              </h2>
            </div>

            <Link
              href="/shop"
              className="group flex w-fit items-center gap-3 border-b border-[#626A59] pb-2 text-sm font-medium uppercase tracking-[0.18em] text-[#4B5445]"
            >
              Explore all
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="group rounded-[2.2rem] border border-[#D2CDC1] bg-[#F4F0E8] p-5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(70,80,61,0.10)]"
              >
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[1.7rem] bg-[#DED9CC]">
                  <div className="absolute left-6 top-6 text-[11px] uppercase tracking-[0.28em] text-[#747968]">
                    {product.eyebrow}
                  </div>

                  <span className="font-serif text-7xl text-[#C1BEAF]">
                    0{index + 1}
                  </span>

                  <div className="absolute bottom-6 right-6 h-12 w-12 rounded-full border border-[#BBB8AA]" />
                </div>

                <div className="px-2 pb-3 pt-7">
                  <h3 className="font-serif text-3xl tracking-[-0.02em] text-[#333A30]">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-7 text-[#696E62]">
                    {product.description}
                  </p>

                  <Link
                    href="/shop"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#50594A]"
                  >
                    Shop Product
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="bg-[#414A3B] px-6 py-24 text-[#F6F2EA] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative mx-auto aspect-square w-full max-w-[540px] rounded-full border border-[#697260]">
            <div className="absolute inset-8 flex items-center justify-center rounded-full bg-[#4B5543]">
              <Image
                src="/willow-tallow-logo.PNG"
                alt="Willow & Tallow"
                width={600}
                height={600}
                className="h-auto w-[70%] brightness-[1.2]"
              />
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#C9CFBB]">
              Willow & Tallow
            </p>

            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.03em] md:text-6xl">
              Less noise.
              <br />
              More nourishment.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#DEE2D7]">
              We believe skincare should feel grounding rather than
              overwhelming. Our approach is rooted in simplicity, traditional
              ingredients, and formulas designed to work beautifully within
              everyday life.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-3 border-b border-[#D9DDCF] pb-2 text-sm uppercase tracking-[0.2em]"
            >
              Read Our Story
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 text-center md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.38em] text-[#7D826F]">
            Your everyday ritual
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#31382E] md:text-6xl">
            Give your skin a little less to think about.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#6C7065]">
            Explore nourishing, uncomplicated skincare designed for slower,
            simpler routines.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block rounded-full bg-[#46503D] px-9 py-4 text-sm font-medium tracking-wide text-[#F9F6F0] transition hover:bg-[#373F31]"
          >
            Shop Willow & Tallow
          </Link>
        </div>
      </section>
    </main>
  );
}