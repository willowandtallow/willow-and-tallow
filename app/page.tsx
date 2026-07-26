import Link from "next/link";

const products = [
  {
    name: "Whipped Tallow Balm",
    note: "Deep nourishment",
    description:
      "A rich everyday balm designed to comfort dry, delicate, and weather-worn skin.",
  },
  {
    name: "Botanical Tallow Cream",
    note: "Daily moisture",
    description:
      "A soft, simple moisturizer blending nourishing tallow with thoughtfully chosen botanicals.",
  },
  {
    name: "Tallow Lip Balm",
    note: "Everyday essential",
    description:
      "Protective moisture for lips that need a little extra softness and care.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#EEE9DE] text-[#30362D]">
      {/* HERO */}
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-[#F7F0E5]/20" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 md:px-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.42em] text-[#68705C]">
              Willow & Tallow
            </p>

            <h1 className="mt-7 font-serif text-6xl leading-[0.93] tracking-[-0.045em] text-[#30382D] sm:text-7xl md:text-8xl lg:text-[7.5rem]">
              Rooted in
              <br />
              nature.
            </h1>

            <p className="mt-7 font-serif text-2xl italic text-[#5F6855] md:text-3xl">
              Crafted with tallow.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-[#50584A]">
              Thoughtful skincare made with nourishing tallow, botanical
              ingredients, and a return to simpler rituals.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <Link
                href="/shop"
                className="border-b border-[#46503E] pb-2 text-sm uppercase tracking-[0.22em] text-[#35402F] transition duration-300 hover:opacity-60"
              >
                Shop the Collection
              </Link>

              <Link
                href="/about"
                className="text-sm uppercase tracking-[0.22em] text-[#707766] transition duration-300 hover:text-[#35402F]"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 z-10 hidden text-[10px] uppercase tracking-[0.3em] text-[#747B68] md:block">
          Simple ingredients · Intentional care
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#F1ECE2] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-[#777D6B]">
              Our Approach
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.08] tracking-[-0.025em] text-[#31382E] md:text-6xl">
              Skincare made to feel quieter, simpler, and more intentional.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#64695E]">
              We believe skincare should feel grounding rather than
              overwhelming. Fewer ingredients. Familiar textures. Thoughtful
              formulas designed to support your everyday ritual.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-[#CDC7BB] bg-[#E7E1D6] px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <span className="font-serif text-5xl text-[#AAA798]">01</span>

            <h3 className="mt-5 font-serif text-3xl text-[#353C32]">
              Simple ingredients
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-[#666B60]">
              Purposeful formulas without unnecessary fillers, noise, or
              complexity.
            </p>
          </div>

          <div>
            <span className="font-serif text-5xl text-[#AAA798]">02</span>

            <h3 className="mt-5 font-serif text-3xl text-[#353C32]">
              Traditionally inspired
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-[#666B60]">
              Rooted in old-world ingredients and a slower approach to everyday
              care.
            </p>
          </div>

          <div>
            <span className="font-serif text-5xl text-[#AAA798]">03</span>

            <h3 className="mt-5 font-serif text-3xl text-[#353C32]">
              Thoughtfully made
            </h3>

            <p className="mt-4 max-w-sm leading-7 text-[#666B60]">
              Created with intention, quality ingredients, and respect for your
              skin.
            </p>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="bg-[#F4EFE6] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-[#CBC6BA] pb-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.36em] text-[#777D6B]">
                The Collection
              </p>

              <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-none tracking-[-0.035em] text-[#30372E] md:text-7xl">
                Everyday care,
                <br />
                pared back.
              </h2>
            </div>

            <Link
              href="/shop"
              className="w-fit text-sm uppercase tracking-[0.2em] text-[#46503E]"
            >
              View All →
            </Link>
          </div>

          <div className="divide-y divide-[#CBC6BA]">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="grid gap-7 py-10 md:grid-cols-[70px_1fr_1fr_auto] md:items-center md:py-12"
              >
                <span className="font-serif text-3xl text-[#929485]">
                  0{index + 1}
                </span>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-[#858978]">
                    {product.note}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-[#343B31] md:text-4xl">
                    {product.name}
                  </h3>
                </div>

                <p className="max-w-md leading-7 text-[#64695D]">
                  {product.description}
                </p>

                <Link
                  href="/shop"
                  className="text-sm uppercase tracking-[0.2em] text-[#3D4738]"
                >
                  Shop →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO BREAK */}
      <section
        className="relative min-h-[650px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#EEE7DB]/15" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-7xl items-end px-6 pb-16 md:px-10 md:pb-20">
          <div className="max-w-2xl bg-[#EEE8DC]/80 p-8 backdrop-blur-sm md:p-12">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#6F7663]">
              A slower ritual
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#31382E] md:text-6xl">
              Inspired by nature.
              <br />
              Grounded in tradition.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5F6559]">
              Willow & Tallow is inspired by a more thoughtful way of making
              things—familiar ingredients, intentional formulas, and moments of
              care that feel beautifully uncomplicated.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#3F493A] px-6 py-24 text-[#F4F0E7] md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-[#C1C9B8]">
              Willow & Tallow
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-5xl leading-[1.02] tracking-[-0.035em] md:text-7xl">
              Less noise.
              <br />
              More nourishment.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#D9DED3]">
              We created Willow & Tallow around the belief that skincare does
              not need to be complicated to feel special. Just thoughtful
              ingredients, comforting textures, and products you enjoy reaching
              for again and again.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-block border-b border-[#D7DDD0] pb-2 text-sm uppercase tracking-[0.22em] text-[#F2EEE5]"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#EFE9DF] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-[11px] uppercase tracking-[0.38em] text-[#747A68]">
            A simpler everyday ritual
          </p>

          <h2 className="mx-auto mt-6 max-w-5xl font-serif text-5xl leading-[1] tracking-[-0.04em] text-[#30372E] md:text-7xl">
            Nourish your skin.
            <br />
            Keep everything else simple.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-[#666B60]">
            Discover thoughtful tallow skincare created for slower routines and
            everyday care.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block border-b border-[#414B3C] pb-2 text-sm uppercase tracking-[0.22em] text-[#35402F]"
          >
            Shop Willow & Tallow
          </Link>
        </div>
      </section>
    </main>
  );
}