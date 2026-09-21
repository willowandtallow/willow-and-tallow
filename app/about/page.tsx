"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

const values = [
  {
    number: "01",
    title: "Simplicity",
    description:
      "Good skincare does not need to feel complicated. Every product should have a clear purpose.",
  },
  {
    number: "02",
    title: "Thoughtfulness",
    description:
      "Ingredients are chosen with intention, with a focus on what belongs in the formula.",
  },
  {
    number: "03",
    title: "Ritual",
    description:
      "Everyday care can be simple and still feel special — a quieter moment built into your routine.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-[#FAF9F5] text-[#343A31]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#E3E2DC] bg-[#FAF9F5] px-6 pb-14 pt-32 sm:px-10 sm:pt-36 lg:px-14 lg:pb-16 lg:pt-36 xl:px-20">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="mx-auto max-w-[950px] text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-7 bg-[#A4AA9C]" />

                <span className="text-[7px] font-medium uppercase tracking-[0.42em] text-[#777E72]">
                  Our Story
                </span>

                <span className="h-px w-7 bg-[#A4AA9C]" />
              </div>

              <h1 className="mt-5 font-serif text-[3.4rem] font-normal leading-[0.94] tracking-[-0.05em] text-[#333933] sm:text-[4.2rem] lg:text-[5rem]">
                Rooted in simplicity.
                <br />
                <span className="italic text-[#747C6A]">
                  Made with intention.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-[570px] text-[13px] leading-6 text-[#686F66] sm:text-[14px]">
                Willow &amp; Tallow is a return to a more thoughtful kind of
                skincare — uncomplicated formulas, purposeful ingredients,
                and everyday care that feels good to come back to.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="bg-[#F5F3ED] px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <Reveal>
            <div>
              <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#7C8377]">
                Why Willow &amp; Tallow
              </p>

              <div className="mt-4 h-px w-12 bg-[#AEB3A6]" />
            </div>
          </Reveal>

          <Reveal>
            <div className="max-w-[780px]">
              <h2 className="font-serif text-[2.7rem] leading-[1.04] tracking-[-0.04em] text-[#383E38] sm:text-[3.3rem] lg:text-[3.8rem]">
                Skincare became complicated.
                <br />
                <span className="italic text-[#747C6A]">
                  We wanted to simplify it.
                </span>
              </h2>

              <div className="mt-7 grid gap-5 text-[14px] leading-7 text-[#686E65] sm:text-[15px] md:grid-cols-2 md:gap-10">
                <p>
                  Before endless routines and overwhelming ingredient lists,
                  everyday care was simpler. Products had a purpose, familiar
                  ingredients, and a place in daily life.
                </p>

                <p>
                  Willow &amp; Tallow draws from that philosophy — creating
                  thoughtful essentials that feel nourishing, comforting, and
                  easy to understand.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PRODUCT / FORMULA STORY
      ===================================================== */}

      <section className="bg-[#FAF9F5] px-5 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="grid overflow-hidden rounded-[30px] bg-[#ECEBE4] lg:grid-cols-[1.08fr_0.92fr]">
              {/* IMAGE */}

              <div className="group relative min-h-[390px] overflow-hidden sm:min-h-[500px] lg:min-h-[600px]">
                <Image
                  src="/whipped-tallow-balm.png"
                  alt="Willow & Tallow Whipped Tallow Balm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                />

                <div className="absolute bottom-5 left-5 rounded-full bg-[#FAF9F5]/90 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[7px] font-medium uppercase tracking-[0.3em] text-[#6E756A]">
                    Thoughtfully Made
                  </span>
                </div>
              </div>

              {/* COPY */}

              <div className="flex items-center px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
                <div className="max-w-[470px]">
                  <p className="text-[8px] font-medium uppercase tracking-[0.36em] text-[#7B8276]">
                    The Heart of Our Formulas
                  </p>

                  <h2 className="mt-6 font-serif text-[2.6rem] leading-[1.04] tracking-[-0.04em] text-[#383E38] sm:text-[3.1rem]">
                    Familiar ingredients,
                    <br />
                    <span className="italic text-[#747C6A]">
                      thoughtfully considered.
                    </span>
                  </h2>

                  <p className="mt-6 text-[14px] leading-7 text-[#666D64] sm:text-[15px]">
                    Tallow has long been valued for its rich, comforting
                    texture. For us, it represents something even simpler:
                    returning to ingredients with a clear purpose.
                  </p>

                  <div className="my-6 h-px w-full bg-[#D1D1C8]" />

                  <p className="text-[14px] leading-7 text-[#666D64] sm:text-[15px]">
                    We pair that philosophy with carefully considered
                    botanicals to create formulas designed to fit naturally
                    into everyday routines.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="bg-[#F5F3ED] px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="grid gap-8 border-b border-[#D4D5CD] pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
              <div>
                <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#7B8276]">
                  What We Believe
                </p>
              </div>

              <div>
                <h2 className="font-serif text-[2.8rem] leading-[1] tracking-[-0.045em] text-[#383E38] sm:text-[3.5rem] lg:text-[4rem]">
                  Fewer ingredients.
                  <br />
                  <span className="italic text-[#747C6A]">
                    More intention.
                  </span>
                </h2>
              </div>
            </div>
          </Reveal>

          {/* VALUES */}

          <div className="grid md:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="border-b border-[#D4D5CD] py-9 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              >
                <Reveal delay={index * 100}>
                  <div className="flex min-h-[220px] flex-col">
                    <span className="font-serif text-[14px] italic text-[#969D91]">
                      {value.number}
                    </span>

                    <h3 className="mt-8 font-serif text-[2rem] tracking-[-0.03em] text-[#3B423B]">
                      {value.title}
                    </h3>

                    <p className="mt-4 max-w-[320px] text-[13px] leading-6 text-[#6B7169] sm:text-[14px]">
                      {value.description}
                    </p>

                    <div className="mt-auto pt-7">
                      <div className="h-px w-8 bg-[#92998D]" />
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BRAND STATEMENT
      ===================================================== */}

      <section className="bg-[#FAF9F5] px-5 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto max-w-[1280px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[34px] bg-[#747C69] px-8 py-16 sm:px-12 lg:px-16 lg:py-20">
              {/* DECORATIVE CIRCLES */}

              <div className="pointer-events-none absolute -right-28 -top-40 h-[390px] w-[390px] rounded-full border border-[#A3AA99]/45" />

              <div className="pointer-events-none absolute -bottom-44 -right-10 h-[340px] w-[340px] rounded-full bg-[#818978]/45" />

              <div className="relative z-10 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
                <div>
                  <p className="text-[8px] font-medium uppercase tracking-[0.38em] text-[#DDE1D7]">
                    Our Approach
                  </p>

                  <div className="mt-4 h-px w-10 bg-[#D4D9CE]/70" />
                </div>

                <div className="max-w-[720px]">
                  <h2 className="font-serif text-[2.8rem] leading-[1.02] tracking-[-0.04em] text-[#FAF9F5] sm:text-[3.5rem] lg:text-[4.1rem]">
                    Care should feel
                    <br />
                    <span className="italic text-[#E4E7DF]">
                      grounding, not overwhelming.
                    </span>
                  </h2>

                  <p className="mt-6 max-w-[560px] text-[14px] leading-7 text-[#E2E5DD] sm:text-[15px]">
                    We are inspired by natural textures, botanical ingredients,
                    familiar rituals, and a slower approach to everyday care.
                    Nothing excessive. Nothing complicated. Just thoughtful
                    skincare designed to belong in your routine.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="border-t border-[#E1E1DA] bg-[#F5F3ED] px-6 py-16 sm:px-10 lg:px-14 lg:py-20 xl:px-20">
        <Reveal>
          <div className="mx-auto max-w-[950px] text-center">
            <p className="text-[8px] font-medium uppercase tracking-[0.4em] text-[#7C8377]">
              Willow &amp; Tallow
            </p>

            <h2 className="mx-auto mt-6 max-w-[850px] font-serif text-[2.8rem] leading-[1.02] tracking-[-0.045em] text-[#373D37] sm:text-[3.6rem] lg:text-[4.2rem]">
              Simple ingredients.
              <br />
              <span className="italic text-[#747C6A]">
                Thoughtful everyday care.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[540px] text-[14px] leading-7 text-[#696F67]">
              Essentials designed to make skincare feel a little simpler,
              slower, and more intentional.
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