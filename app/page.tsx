import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#F5F0E7] text-[#353A31]">
    {/* HERO */}
<section
  className="relative min-h-[92vh] overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/willow-background.png')",
  }}
>
  {/* Soft overall veil */}
  <div className="absolute inset-0 bg-[#F7F1E7]/10" />

  {/* Bottom fade so the hero flows into the next section */}
  <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent via-[#F5F0E7]/45 to-[#F5F0E7]" />

  <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 pb-28 pt-36 text-center md:pt-40">
    {/* LOGO */}
    <Image
      src="/willow-tallow-logo.PNG"
      alt="Willow & Tallow"
      width={700}
      height={700}
      priority
      className="h-auto w-full max-w-[440px] md:max-w-[540px]"
    />

    {/* TAGLINE */}
    <p className="-mt-8 font-serif text-xl italic tracking-wide text-[#69715F] md:-mt-12 md:text-[1.65rem]">
      Rooted in Nature. Crafted with Tallow.
    </p>

    {/* DESCRIPTION */}
    <p className="mx-auto mt-7 max-w-xl text-[17px] leading-8 text-[#5E6556] md:text-lg">
      Simple, nourishing skincare made with thoughtfully selected ingredients
      and a slower approach to everyday care.
    </p>

    {/* CTA */}
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
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#7A806E]">
            Thoughtful by nature
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#353B31] md:text-6xl">
            Skincare, the way nature intended.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#696E62]">
            Willow & Tallow is inspired by traditional ingredients, simple
            rituals, and the belief that skincare can feel both beautiful and
            uncomplicated.
          </p>
        </div>
      </section>

      {/* INGREDIENT STORY */}
      <section className="border-y border-[#D6D0C4] bg-[#ECE5DA]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="min-h-[500px] bg-[#D9D4C6]">
            <div className="flex h-full items-center justify-center p-10 text-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-[#858878]">
                  Ingredient spotlight
                </p>

                <p className="mt-6 font-serif text-5xl text-[#A6A596]">
                  Tallow
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center px-8 py-16 md:px-14 lg:px-16">
            <div className="max-w-xl">
              <p className="text-[11px] uppercase tracking-[0.34em] text-[#777D69]">
                The foundation
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
                Nourishment rooted in tradition.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#656B5F]">
                Tallow has long been used in traditional skin care for its rich,
                comforting texture. We pair it with carefully chosen botanical
                ingredients to create products made for simple everyday rituals.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-block border-b border-[#68705E] pb-2 text-xs uppercase tracking-[0.24em] text-[#4C5547]"
              >
                Learn Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-[0.35em] text-[#7C8270]">
              The collection
            </p>

            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
              Essentials for slower routines.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {[
              {
                name: "Whipped Tallow Balm",
                subtitle: "Rich, comforting moisture",
              },
              {
                name: "Botanical Tallow Cream",
                subtitle: "Everyday nourishment",
              },
              {
                name: "Tallow Lip Balm",
                subtitle: "Simple daily protection",
              },
            ].map((product) => (
              <article key={product.name} className="text-center">
                <div className="aspect-[4/5] bg-[#E5DED2]" />

                <h3 className="mt-7 font-serif text-2xl text-[#384036]">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-[#777C70]">
                  {product.subtitle}
                </p>

                <Link
                  href="/shop"
                  className="mt-5 inline-block text-[11px] uppercase tracking-[0.25em] text-[#50594A]"
                >
                  Shop Product
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTANICAL BREAK */}
      <section
        className="relative min-h-[560px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F4EEE4]/10" />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl items-end px-6 pb-12 md:px-10 md:pb-16">
          <div className="max-w-xl bg-[#F4EFE6]/85 p-8 backdrop-blur-sm md:p-10">
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#757C69]">
              Our ritual
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#353C32] md:text-5xl">
              A little quieter.
              <br />
              A little simpler.
            </h2>

            <p className="mt-5 leading-7 text-[#676D61]">
              Thoughtful formulas designed to feel familiar, comforting, and
              easy to return to every day.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND VALUES */}
      <section className="bg-[#F1EBE1] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-14 text-center md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl">Simple</h3>
              <p className="mt-4 leading-7 text-[#6A7064]">
                Purposeful ingredients without unnecessary complexity.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl">Natural</h3>
              <p className="mt-4 leading-7 text-[#6A7064]">
                Inspired by traditional ingredients and botanical care.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl">Intentional</h3>
              <p className="mt-4 leading-7 text-[#6A7064]">
                Thoughtfully created for everyday rituals and lasting use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL STORY */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[0.36em] text-[#777D6A]">
            Willow & Tallow
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight md:text-6xl">
            Made for the moments you slow down.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#686E62]">
            A collection inspired by simpler ingredients, traditional care, and
            the beauty of everyday rituals.
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