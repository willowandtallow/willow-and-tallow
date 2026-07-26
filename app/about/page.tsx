import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#F5F0E7] text-[#343A31]">
      {/* HERO */}
      <section
        className="relative min-h-[72vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F7F1E7]/20" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#F5F0E7]/50 to-[#F5F0E7]" />

        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-center justify-center px-6 pb-20 pt-32 text-center md:px-10">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#757C69]">
              Our Story
            </p>

            <h1 className="mt-7 font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-[#343A31] md:text-7xl">
              A return to simpler care.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#60675A]">
              Willow & Tallow was created around a simple idea: skincare should
              feel nourishing, intentional, and easy to understand.
            </p>
          </div>
        </div>
      </section>

      {/* OPENING STORY */}
      <section className="px-6 pb-28 pt-12 md:px-10 md:pb-36 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#7C816F]">
              Why Willow & Tallow
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl font-serif text-4xl leading-[1.12] text-[#383E35] md:text-5xl">
              Inspired by the way skincare used to be made.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-[#686E62]">
              <p>
                Before skincare became crowded with endless steps, complicated
                routines, and ingredient lists that felt impossible to
                understand, care was simpler.
              </p>

              <p>
                Products were made from familiar ingredients and used with
                intention. Willow & Tallow draws inspiration from that slower,
                more thoughtful approach.
              </p>

              <p>
                We believe there is something beautiful about returning to the
                essentials: nourishing textures, carefully selected
                ingredients, and products that feel comforting to use every
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE + STORY */}
      <section className="bg-[#E9E1D5]">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="min-h-[520px]">
            <Image
              src="/tallow-balm-featured.png"
              alt="Willow & Tallow Tallow Balm"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center px-8 py-16 md:px-14 lg:px-16">
            <div className="max-w-xl">
              <p className="text-[10px] uppercase tracking-[0.38em] text-[#7C816F]">
                The heart of our formulas
              </p>

              <h2 className="mt-6 font-serif text-4xl leading-tight text-[#383E35] md:text-5xl">
                Traditional ingredients, thoughtfully reimagined.
              </h2>

              <p className="mt-7 text-lg leading-8 text-[#62685D]">
                Tallow has long been valued for its rich, comforting texture.
                At Willow & Tallow, it becomes the foundation for a slower kind
                of skincare—one that feels familiar, nourishing, and
                intentionally uncomplicated.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#62685D]">
                We pair that philosophy with carefully considered botanical
                ingredients and formulas designed to fit naturally into
                everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#7A806D]">
              What we believe
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#383E35] md:text-6xl">
              Fewer ingredients.
              <br />
              More intention.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 border-t border-[#D0C9BD] pt-12 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl text-[#3C4339]">
                Simplicity
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                We believe good skincare does not need to feel complicated.
                Every product should have a clear purpose.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#3C4339]">
                Thoughtfulness
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Ingredients are chosen with intention, not simply to make a
                formula longer or more impressive.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[#3C4339]">
                Ritual
              </h3>

              <p className="mt-4 leading-7 text-[#6A7064]">
                Everyday care can be simple and still feel special. We want our
                products to become part of those quieter moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTANICAL BREAK */}
      <section
        className="relative min-h-[580px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F3ECE1]/10" />

        <div className="relative z-10 mx-auto flex min-h-[580px] max-w-7xl items-end px-6 pb-14 md:px-10 md:pb-20">
          <div className="max-w-2xl bg-[#F5F0E7]/88 p-8 backdrop-blur-sm md:p-12">
            <p className="text-[10px] uppercase tracking-[0.38em] text-[#737A67]">
              Our inspiration
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#343B31] md:text-5xl">
              Nature has always known how to keep things simple.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#656B5F]">
              Willow & Tallow is inspired by natural textures, botanical
              ingredients, old-world rituals, and the idea that everyday care
              should feel grounding rather than overwhelming.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING STORY */}
      <section className="bg-[#EEE8DE] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#797F6D]">
            Willow & Tallow
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#373D34] md:text-6xl">
            Skincare made to feel like a return to something familiar.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#696F63]">
            Simple ingredients. Comforting rituals. Thoughtful care designed to
            make your routine feel a little slower and a little more
            intentional.
          </p>

          <Link
            href="/shop"
            className="mt-10 inline-block border border-[#66705D] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[#46503F] transition hover:bg-[#E3DDD2]"
          >
            Explore the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}