"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

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
    <main className="overflow-x-hidden bg-[#FAF9F5] text-[#343A31]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#E1E2DB] bg-[#FAF9F5] px-6 pb-14 pt-32 sm:px-10 sm:pt-36 lg:px-14 lg:pb-16 lg:pt-36 xl:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mx-auto max-w-[950px] text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-[#A4AA9C]" />

                <span className="text-[7px] font-medium uppercase tracking-[0.42em] text-[#777E72]">
                  The Journal
                </span>

                <span className="h-px w-7 bg-[#A4AA9C]" />
              </div>

              <h1 className="mt-5 font-serif text-[3.4rem] font-normal leading-[0.94] tracking-[-0.05em] text-[#333933] sm:text-[4.2rem] lg:text-[5rem]">
                Notes for a
                <br />
                <span className="italic text-[#747C6A]">
                  slower kind of care.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[570px] text-[13px] leading-6 text-[#686F66] sm:text-[14px]">
                Thoughtful reading on ingredients, skin, everyday rituals,
                and the ideas that shape Willow &amp; Tallow.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-0 left-1/2 h-[3px] w-20 -translate-x-1/2 bg-[#B7BDAE]" />
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-[#F5F3ED] px-6 py-14 sm:px-10 lg:px-14 lg:py-16 xl:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#7C8377]">
                From Willow &amp; Tallow
              </p>

              <div className="mt-4 h-px w-12 bg-[#AEB3A6]" />
            </div>
          </Reveal>

          <Reveal>
            <div className="max-w-[760px]">
              <h2 className="font-serif text-[2.6rem] leading-[1.04] tracking-[-0.04em] text-[#383E38] sm:text-[3.2rem] lg:text-[3.6rem]">
                A place to learn,
                <br />
                <span className="italic text-[#747C6A]">
                  without the noise.
                </span>
              </h2>

              <p className="mt-6 max-w-[590px] text-[14px] leading-7 text-[#686E65] sm:text-[15px]">
                Explore traditional ingredients, uncomplicated skincare,
                everyday rituals, and a more considered approach to caring
                for your skin.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      <section className="bg-[#FAF9F5] px-5 py-14 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <article className="relative overflow-hidden border-y border-[#D9DAD2] py-7 sm:py-9 lg:py-12">
              <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
                {/* IMAGE */}

                <Link
                  href="/journal/what-is-tallow-skincare"
                  className="group relative block"
                >
                  <div className="relative aspect-[1.25/1] overflow-hidden rounded-[22px] bg-[#EEECE5] sm:aspect-[1.35/1] lg:aspect-[1.2/1]">
                    <Image
                      src="/journal-tallow-feature.png"
                      alt="Natural tallow skincare texture with botanical ingredients"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                    />

                    <div className="absolute inset-0 bg-[#4D554A]/[0.03]" />

                    <div className="absolute left-5 top-5">
                      <div className="rounded-full border border-white/40 bg-[#F9F7F1]/90 px-4 py-2 backdrop-blur-md">
                        <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#60685D]">
                          Featured Reading
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* CONTENT */}

                <div className="relative lg:pr-5">
                  <div className="flex items-center justify-between border-b border-[#D5D7CE] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-[#9FA698]" />

                      <span className="text-[8px] font-medium uppercase tracking-[0.34em] text-[#747C70]">
                        Ingredients
                      </span>
                    </div>

                    <span className="font-serif text-[13px] italic text-[#A0A59A]">
                      01
                    </span>
                  </div>

                  <h2 className="mt-8 max-w-[500px] font-serif text-[2.8rem] leading-[0.98] tracking-[-0.045em] text-[#373D37] sm:text-[3.3rem] lg:text-[3.7rem]">
                    What is
                    <br />
                    <span className="italic text-[#747C6A]">
                      tallow skincare?
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[480px] text-[14px] leading-7 text-[#686F66] sm:text-[15px]">
                    Tallow has been used in traditional skin preparations for
                    generations. Explore what it is, why it is used, and how it
                    fits into a simpler approach to everyday skincare.
                  </p>

                  <div className="mt-7 flex items-center gap-5 border-t border-[#D5D7CE] pt-5">
                    <div>
                      <p className="text-[7px] uppercase tracking-[0.28em] text-[#989E94]">
                        Topic
                      </p>

                      <p className="mt-1 font-serif text-[14px] italic text-[#555D53]">
                        Ingredients &amp; Formulas
                      </p>
                    </div>

                    <span className="h-7 w-px bg-[#D2D4CC]" />

                    <div>
                      <p className="text-[7px] uppercase tracking-[0.28em] text-[#989E94]">
                        Reading
                      </p>

                      <p className="mt-1 font-serif text-[14px] italic text-[#555D53]">
                        4 min
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/journal/what-is-tallow-skincare"
                    className="group mt-8 inline-flex items-center gap-4"
                  >
                    <span className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#515A50]">
                      Read the Story
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#9CA396] text-[#596158] transition-all duration-300 group-hover:bg-[#747C69] group-hover:text-[#FAF9F5]">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          JOURNAL INDEX
      ===================================================== */}

      <section className="bg-[#F5F3ED] px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="grid gap-7 border-b border-[#D4D5CD] pb-9 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#7B8276]">
                  From the Journal
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[2.7rem] leading-[1] tracking-[-0.045em] text-[#383E38] sm:text-[3.4rem] lg:text-[3.8rem]">
                  More to{" "}
                  <span className="italic text-[#747C6A]">
                    explore.
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div>
            {articles.map((article, index) => (
              <div
                key={article.title}
                className="border-b border-[#D4D5CD]"
              >
                <Reveal delay={(index % 3) * 70}>
                  <Link
                    href={article.href}
                    className="group grid gap-5 py-8 transition-colors duration-300 hover:bg-[#EFEEE8] sm:px-3 lg:grid-cols-[80px_150px_1fr_44px] lg:items-center lg:gap-8 lg:py-9"
                  >
                    {/* NUMBER */}

                    <span className="font-serif text-[14px] italic text-[#9A9F94]">
                      0{index + 1}
                    </span>

                    {/* CATEGORY */}

                    <p className="text-[8px] font-medium uppercase tracking-[0.28em] text-[#7A8175]">
                      {article.category}
                    </p>

                    {/* ARTICLE CONTENT */}

                    <div className="max-w-[720px]">
                      <h3 className="font-serif text-[1.7rem] leading-[1.08] tracking-[-0.025em] text-[#3A413A] sm:text-[1.9rem]">
                        {article.title}
                      </h3>

                      <p className="mt-3 max-w-[620px] text-[13px] leading-6 text-[#6B7169]">
                        {article.description}
                      </p>
                    </div>

                    {/* ARROW */}

                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A6AC9F] text-[#5D655A] transition-all duration-300 group-hover:border-[#747C69] group-hover:bg-[#747C69] group-hover:text-[#FAF9F5]">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL STATEMENT
      ===================================================== */}

      <section className="bg-[#FAF9F5] px-5 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[34px] bg-[#747C69] px-8 py-14 sm:px-12 lg:px-16 lg:py-18">
              {/* DECORATIVE DETAILS */}

              <div className="pointer-events-none absolute -right-28 -top-40 h-[390px] w-[390px] rounded-full border border-[#A3AA99]/45" />

              <div className="pointer-events-none absolute -bottom-44 -right-10 h-[340px] w-[340px] rounded-full bg-[#818978]/45" />

              <div className="pointer-events-none absolute right-[17%] top-[20%] h-20 w-20 rounded-full border border-[#A7AE9E]/30" />

              <div className="relative z-10 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#DDE1D7]">
                    A Slower Read
                  </p>

                  <div className="mt-4 h-px w-10 bg-[#D4D9CE]/70" />
                </div>

                <div className="max-w-[720px]">
                  <h2 className="font-serif text-[2.7rem] leading-[1.02] tracking-[-0.04em] text-[#FAF9F5] sm:text-[3.4rem] lg:text-[3.9rem]">
                    Skincare does not have to
                    <br />
                    <span className="italic text-[#E4E7DF]">
                      feel complicated.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[560px] text-[14px] leading-7 text-[#E2E5DD] sm:text-[15px]">
                    The Journal is a place to share what inspires Willow &amp;
                    Tallow — from traditional ingredients and simple rituals
                    to thoughtful ways of caring for your skin.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="border-t border-[#E1E1DA] bg-[#F5F3ED] px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <Reveal>
          <div className="mx-auto max-w-[900px] text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-7 bg-[#A4AA9C]" />

              <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#7C8377]">
                From Ritual to Routine
              </p>

              <span className="h-px w-7 bg-[#A4AA9C]" />
            </div>

            <h2 className="mx-auto mt-6 max-w-[800px] font-serif text-[2.8rem] leading-[1.02] tracking-[-0.045em] text-[#373D37] sm:text-[3.5rem] lg:text-[4rem]">
              Thoughtful reading.
              <br />
              <span className="italic text-[#747C6A]">
                Simpler everyday care.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[520px] text-[14px] leading-7 text-[#696F67] sm:text-[15px]">
              Discover the skincare essentials behind the rituals,
              ingredients, and ideas shared in the Journal.
            </p>

            <Link
              href="/shop"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#596252] px-7 py-3.5 text-[8px] font-medium uppercase tracking-[0.28em] text-[#FAF9F5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#485143]"
            >
              Explore the Collection

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}