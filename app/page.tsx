import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Whipped Tallow Balm",
    subtitle: "Deep nourishment",
  },
  {
    name: "Botanical Tallow Cream",
    subtitle: "Daily moisture",
  },
  {
    name: "Tallow Lip Balm",
    subtitle: "Everyday protection",
  },
];

export default function Home() {
  return (
    <main className="bg-[#F5F0E7] text-[#343A31]">
      {/* HERO */}
      <section
        className="relative min-h-[92vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F7F1E7]/10" />

        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-[#F5F0E7]/45 to-[#F5F0E7]" />

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 pb-28 pt-36 text-center md:pt-40">
          <Image
            src="/willow-tallow-logo.PNG"
            alt="Willow & Tallow"
            width={700}
            height={700}
            priority
            className="h-auto w-full max-w-[440px] md:max-w-[540px]"
          />

          <p className="-mt-8 font-serif text-xl italic tracking-wide text-[#69715F] md:-mt-12 md:text-[1.65rem]">
            Rooted in Nature. Crafted with Tallow.
          </p>

          <p className="mx-auto mt-7 max-w-xl text-[17px] leading-8 text-[#5E6556] md:text-lg">
            Simple, nourishing skincare made with thoughtfully selected
            ingredients and a slower approach to everyday care.
          </p>

          <Link
            href="/shop"
            className="group mt-9 inline-flex items-center gap-4 border-b border-[#66705D] pb-2 text-xs uppercase tracking-[0.3em] text-[#46503F] transition duration-300 hover:border-[#343C31] hover:text-[#343C31]"
          >
            Discover the Collection

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F5F0E7] px-6 pb-28 pt-14 md:px-10 md:pb-36 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#858A78]">
            Thoughtful by nature
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1.15] text-[#363C33] md:text-5xl">
            A return to simpler skincare.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6A7064]">
            Inspired by traditional ingredients and everyday rituals, Willow &
            Tallow creates nourishing skincare designed to feel uncomplicated,
            comforting, and intentional.
          </p>

          <div className="mx-auto mt-12 h-px w-16 bg-[#A8AA99]" />
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      <section className="bg-[#E9E1D5] px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="overflow-hidden">
            <Image
              src="/tallow-balm-featured.png"
              alt="Willow & Tallow Tallow Balm"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#7D826F]">
              Featured Product
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[1.03] tracking-[-0.03em] text-[#353B32] md:text-6xl">
              Tallow Balm
            </h2>

            <p className="mt-3 font-serif text-xl italic text-[#747B68]">
              Nourish · Protect · Restore
            </p>

            <p className="mt-7 text-lg leading-8 text-[#62685D]">
              A deeply nourishing balm made for skin that needs simple,
              comforting moisture. Its rich texture melts into the skin,
              leaving it feeling soft, supple, and cared for.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8 border-y border-[#C9C1B5] py-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#8B8E7F]">
                  Texture
                </p>

                <p className="mt-2 text-sm text-[#4F574B]">
                  Rich & creamy
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#8B8E7F]">
                  Best for
                </p>

                <p className="mt-2 text-sm text-[#4F574B]">
                  Everyday nourishment
                </p>
              </div>
            </div>

            <Link
              href="/shop"
              className="group mt-8 inline-flex items-center gap-4 border-b border-[#505A4A] pb-2 text-xs uppercase tracking-[0.27em] text-[#3F493B]"
            >
              Discover Tallow Balm

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-[#D4CEC2] bg-[#EEE8DE]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="flex min-h-[430px] items-center justify-center border-b border-[#D4CEC2] px-8 py-16 text-center lg:border-b-0 lg:border-r">
            <div className="max-w-md">
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#838878]">
                Our Philosophy
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#3B4137] md:text-5xl">
                Fewer ingredients.
                <br />
                More intention.
              </h2>
            </div>
          </div>

          <div className="flex min-h-[430px] items-center px-8 py-16 md:px-14 lg:px-16">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#7C816F]">
                Thoughtfully made
              </p>

              <p className="mt-6 font-serif text-2xl leading-relaxed text-[#454C40] md:text-3xl">
                We believe skincare should feel simple, familiar, and
                beautifully uncomplicated.
              </p>

              <p className="mt-6 text-lg leading-8 text-[#666C60]">
                Our approach is rooted in traditional ingredients, gentle
                rituals, and choosing only what serves a purpose. Nothing
                excessive. Nothing added just for the sake of more.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block border-b border-[#68705E] pb-2 text-xs uppercase tracking-[0.24em] text-[#4C5547]"
              >
                Discover Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-[#F5F0E7] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#7C8270]">
              The Collection
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#363C33] md:text-5xl">
              Everyday essentials, made simply.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-[#6B7065]">
              Nourishing products designed to bring a little more ease to your
              everyday routine.
            </p>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="text-center">
                <div className="aspect-[4/5] bg-[#E5DED2]" />

                <p className="mt-7 text-[10px] uppercase tracking-[0.28em] text-[#888C7C]">
                  {product.subtitle}
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#394036]">
                  {product.name}
                </h3>

                <Link
                  href="/shop"
                  className="mt-5 inline-block border-b border-[#6B7262] pb-1 text-[10px] uppercase tracking-[0.26em] text-[#50594A]"
                >
                  Shop Product
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/shop"
              className="inline-block border border-[#747B69] px-8 py-4 text-[11px] uppercase tracking-[0.28em] text-[#4B5546] transition hover:bg-[#E9E3D8]"
            >
              View the Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* BOTANICAL STORY */}
      <section
        className="relative min-h-[620px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F4EEE4]/8" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-end px-6 pb-14 md:px-10 md:pb-20">
          <div className="max-w-xl bg-[#F4EFE6]/88 p-8 backdrop-blur-sm md:p-11">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#757C69]">
              Our Ritual
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#353C32] md:text-5xl">
              Care that feels a little slower.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#676D61]">
              Thoughtful ingredients, comforting textures, and products
              designed to make everyday skincare feel like a moment worth
              slowing down for.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#ECE6DC] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 text-center md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl text-[#3A4036]">
                Simple
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Purposeful ingredients without unnecessary complexity.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#3A4036]">
                Natural
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Inspired by traditional ingredients and botanical care.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#3A4036]">
                Intentional
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Thoughtfully created for everyday rituals and lasting use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F5F0E7] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#7B816E]">
            Willow & Tallow
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#363C33] md:text-6xl">
            Made for the moments you slow down.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#686E62]">
            Thoughtful skincare inspired by simple ingredients, traditional
            care, and the beauty of everyday rituals.
          </p>

          <Link
            href="/shop"
            className="mt-9 inline-block border border-[#5E6755] px-8 py-4 text-xs uppercase tracking-[0.27em] text-[#46503F] transition hover:bg-[#E8E2D7]"
          >
            Shop Willow & Tallow
          </Link>
        </div>
      </section>
    </main>
  );
}