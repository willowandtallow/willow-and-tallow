import Link from "next/link";

const articles = [
  {
    category: "Ingredients",
    title: "What Is Tallow Skincare?",
    description:
      "A closer look at the traditional ingredient behind Willow & Tallow and why it has found its way back into modern skincare.",
    href: "/journal/what-is-tallow-skincare",
  },
  {
    category: "Rituals",
    title: "How to Use Tallow Balm in Your Everyday Routine",
    description:
      "A simple approach to incorporating a rich balm into your daily skincare ritual without overcomplicating your routine.",
    href: "/journal/how-to-use-tallow-balm",
  },
  {
    category: "Skin",
    title: "Why Simple Skincare Can Feel So Refreshing",
    description:
      "A thoughtful look at stepping away from crowded routines and choosing products with intention.",
    href: "/journal/simple-skincare",
  },
  {
    category: "Ingredients",
    title: "A Guide to Botanical Oils",
    description:
      "Understanding the role botanical ingredients can play in creating comforting, nourishing skincare.",
    href: "/journal/botanical-oils",
  },
  {
    category: "Seasonal Care",
    title: "A Slower Winter Skincare Ritual",
    description:
      "Simple ways to give dry, weather-worn skin a little extra care during colder months.",
    href: "/journal/winter-skincare",
  },
  {
    category: "Willow & Tallow",
    title: "Why We Believe in Fewer, Better Things",
    description:
      "The philosophy behind Willow & Tallow and our approach to creating skincare that feels beautifully uncomplicated.",
    href: "/journal/fewer-better-things",
  },
];

export default function JournalPage() {
  return (
    <main className="bg-[#F5F0E7] text-[#343A31]">
      {/* HERO */}
      <section
        className="relative min-h-[58vh] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F6F0E6]/25" />

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#F5F0E7]" />

        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-7xl items-center justify-center px-6 pb-16 pt-32 text-center md:px-10">
          <div className="max-w-4xl">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#747B68]">
              Willow & Tallow
            </p>

            <h1 className="mt-6 font-serif text-5xl tracking-[-0.035em] text-[#363D33] md:text-7xl">
              The Journal
            </h1>

            <p className="mx-auto mt-7 max-w-xl font-serif text-xl italic leading-8 text-[#65705D] md:text-2xl">
              Notes on skin, ingredients, rituals, and slower living.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      <section className="px-6 pb-24 pt-12 md:px-10 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden border border-[#D2CBC0] lg:grid-cols-[1.1fr_0.9fr]">
            <div
              className="min-h-[480px] bg-cover bg-center"
              style={{
                backgroundImage: "url('/tallow-balm-featured.png')",
              }}
            />

            <div className="flex items-center bg-[#ECE6DC] px-8 py-14 md:px-14 lg:px-16">
              <div>
                <p className="text-[10px] uppercase tracking-[0.38em] text-[#7C816F]">
                  Featured Reading
                </p>

                <h2 className="mt-6 font-serif text-4xl leading-tight text-[#373E34] md:text-5xl">
                  What Is Tallow Skincare?
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#666C60]">
                  Tallow has been used in traditional skin preparations for
                  generations. Explore what it is, why it is used, and how it
                  fits into a simpler approach to everyday skincare.
                </p>

                <Link
                  href="/journal/what-is-tallow-skincare"
                  className="mt-8 inline-block border-b border-[#68705E] pb-2 text-xs uppercase tracking-[0.25em] text-[#4C5547]"
                >
                  Read the Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="border-t border-[#D3CDC1] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#7B816F]">
              From the Journal
            </p>

            <h2 className="mt-5 font-serif text-4xl text-[#373E34] md:text-5xl">
              A little more to explore.
            </h2>
          </div>

          <div className="grid border-t border-[#CEC8BC] md:grid-cols-2">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className={`border-b border-[#CEC8BC] py-10 md:p-10 ${
                  index % 2 === 0 ? "md:border-r" : ""
                }`}
              >
                <p className="text-[10px] uppercase tracking-[0.32em] text-[#858A79]">
                  {article.category}
                </p>

                <h3 className="mt-5 max-w-lg font-serif text-3xl leading-tight text-[#3A4137]">
                  {article.title}
                </h3>

                <p className="mt-5 max-w-lg leading-7 text-[#696F63]">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-7 inline-block text-[10px] uppercase tracking-[0.26em] text-[#4D5748]"
                >
                  Read Article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNAL PHILOSOPHY */}
      <section className="bg-[#E7E1D6] px-6 py-24 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#7B806F]">
            A slower read
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-tight text-[#373E34] md:text-5xl">
            Skincare does not have to feel complicated.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#676D61]">
            The Journal is a place to share what inspires Willow & Tallow—from
            traditional ingredients and simple rituals to thoughtful ways of
            caring for your skin.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#7C826F]">
            From ritual to routine
          </p>

          <h2 className="mt-6 font-serif text-4xl text-[#373E34] md:text-5xl">
            Ready to discover the collection?
          </h2>

          <Link
            href="/shop"
            className="mt-9 inline-block border border-[#65705C] px-8 py-4 text-xs uppercase tracking-[0.28em] text-[#46503F] transition hover:bg-[#E8E2D7]"
          >
            Shop Willow & Tallow
          </Link>
        </div>
      </section>
    </main>
  );
}