"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";

const values = [
  {
    number: "01",
    title: "Simplicity",
    description:
      "We believe good skincare does not need to feel complicated. Every product should have a clear purpose.",
  },
  {
    number: "02",
    title: "Thoughtfulness",
    description:
      "Ingredients are chosen with intention, not simply to make a formula longer or more impressive.",
  },
  {
    number: "03",
    title: "Ritual",
    description:
      "Everyday care can be simple and still feel special. We want our products to become part of those quieter moments.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden bg-[#F5F0E7] text-[#343A31]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className={`
          relative
          min-h-[68vh]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
        `}
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F7F1E7]/20" />

        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            h-48
            bg-gradient-to-b
            from-transparent
            via-[#F5F0E7]/45
            to-[#F5F0E7]
          `}
        />

        <div
          className={`
            relative
            z-10
            mx-auto
            flex
            min-h-[68vh]
            max-w-7xl
            items-center
            justify-center
            px-6
            pb-20
            pt-32
            text-center
            md:px-10
          `}
        >
          <div className="max-w-4xl">
            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  border-[#B9B8A8]/70
                  bg-[#F5F0E7]/55
                  px-5
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#747B68]
                  backdrop-blur-sm
                `}
              >
                Our Story
              </span>
            </div>

            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
              <h1
                className={`
                  mt-7
                  font-serif
                  text-5xl
                  leading-[1.02]
                  tracking-[-0.035em]
                  text-[#343A31]
                  sm:text-6xl
                  md:text-7xl
                `}
              >
                A return to
                <br />
                simpler care.
              </h1>
            </div>

            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
              <p
                className={`
                  mx-auto
                  mt-7
                  max-w-2xl
                  text-[17px]
                  leading-8
                  text-[#60675A]
                  md:text-lg
                `}
              >
                Willow & Tallow was created around a simple idea: skincare
                should feel nourishing, intentional, and easy to understand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OPENING STORY
      ===================================================== */}
      <section
        className={`
          bg-[#F5F0E7]
          px-6
          pb-24
          pt-12
          md:px-10
          md:pb-32
          md:pt-20
        `}
      >
        <div
          className={`
            mx-auto
            grid
            max-w-7xl
            gap-10
            lg:grid-cols-[0.65fr_1.35fr]
            lg:gap-20
          `}
        >
          <Reveal>
            <div>
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  border-[#C7C2B6]
                  bg-[#EEE8DE]/70
                  px-5
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#7C816F]
                `}
              >
                Why Willow & Tallow
              </span>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h2
                className={`
                  max-w-4xl
                  font-serif
                  text-4xl
                  leading-[1.12]
                  text-[#383E35]
                  md:text-5xl
                `}
              >
                Inspired by the way skincare used to be made.
              </h2>

              <div
                className={`
                  mt-8
                  max-w-3xl
                  space-y-6
                  text-[17px]
                  leading-8
                  text-[#686E62]
                  md:text-lg
                `}
              >
                <p>
                  Before skincare became crowded with endless steps,
                  complicated routines, and ingredient lists that felt
                  impossible to understand, care was simpler.
                </p>

                <p>
                  Products were made from familiar ingredients and used with
                  intention. Willow & Tallow draws inspiration from that slower,
                  more thoughtful approach.
                </p>

                <p>
                  We believe there is something beautiful about returning to
                  the essentials: nourishing textures, carefully selected
                  ingredients, and products that feel comforting to use every
                  day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          IMAGE + STORY
      ===================================================== */}
      <section
        className={`
          bg-[#E9E1D5]
          px-5
          py-20
          md:px-10
          md:py-28
        `}
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div
              className={`
                grid
                overflow-hidden
                rounded-[38px]
                border
                border-[#D1C8BA]
                bg-[#F1EBE2]
                shadow-[0_18px_60px_rgba(71,64,53,0.07)]
                lg:grid-cols-[1.05fr_0.95fr]
              `}
            >
              {/* IMAGE */}
              <div
                className={`
                  group
                  relative
                  min-h-[430px]
                  overflow-hidden
                  sm:min-h-[520px]
                  lg:min-h-[650px]
                `}
              >
                <Image
                  src="/whipped-tallow-balm.png"
                  alt="Willow & Tallow Whipped Tallow Balm"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={`
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-[1.035]
                  `}
                />
              </div>

              {/* STORY */}
              <div
                className={`
                  flex
                  items-center
                  px-7
                  py-14
                  sm:px-10
                  md:px-14
                  lg:px-16
                `}
              >
                <div className="max-w-xl">
                  <span
                    className={`
                      inline-flex
                      rounded-full
                      border
                      border-[#B8B3A6]
                      bg-[#F7F2EA]/70
                      px-4
                      py-2
                      text-[9px]
                      uppercase
                      tracking-[0.32em]
                      text-[#7C816F]
                    `}
                  >
                    The Heart of Our Formulas
                  </span>

                  <h2
                    className={`
                      mt-7
                      font-serif
                      text-4xl
                      leading-[1.1]
                      text-[#383E35]
                      md:text-5xl
                    `}
                  >
                    Traditional ingredients, thoughtfully reimagined.
                  </h2>

                  <p
                    className={`
                      mt-7
                      text-[17px]
                      leading-8
                      text-[#62685D]
                    `}
                  >
                    Tallow has long been valued for its rich, comforting
                    texture. At Willow & Tallow, it becomes the foundation for
                    a slower kind of skincare—one that feels familiar,
                    nourishing, and intentionally uncomplicated.
                  </p>

                  <p
                    className={`
                      mt-5
                      text-[17px]
                      leading-8
                      text-[#62685D]
                    `}
                  >
                    We pair that philosophy with carefully considered
                    botanical ingredients and formulas designed to fit
                    naturally into everyday life.
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
      <section
        className={`
          bg-[#F5F0E7]
          px-5
          py-24
          md:px-10
          md:py-32
        `}
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  border-[#C7C2B6]
                  bg-[#EEE8DE]/70
                  px-5
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#7A806D]
                `}
              >
                What We Believe
              </span>

              <h2
                className={`
                  mt-7
                  font-serif
                  text-4xl
                  leading-tight
                  text-[#383E35]
                  md:text-6xl
                `}
              >
                Fewer ingredients.
                <br />
                More intention.
              </h2>

              <p
                className={`
                  mx-auto
                  mt-6
                  max-w-xl
                  text-[17px]
                  leading-8
                  text-[#696F63]
                `}
              >
                A simpler philosophy guides everything we create.
              </p>
            </div>
          </Reveal>

          {/* VALUE CARDS */}
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 100}
                className="h-full"
              >
                <div
                  className={`
                    group
                    flex
                    h-full
                    min-h-[320px]
                    flex-col
                    rounded-[30px]
                    border
                    border-[#D5CEC2]
                    bg-[#F8F4EC]
                    p-8
                    shadow-[0_12px_40px_rgba(70,64,55,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_22px_60px_rgba(70,64,55,0.09)]
                    sm:p-9
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        border
                        border-[#D0C9BD]
                        bg-[#EEE8DE]/70
                        px-4
                        py-2
                        text-[8px]
                        uppercase
                        tracking-[0.28em]
                        text-[#7C8270]
                      `}
                    >
                      Our Values
                    </span>

                    <span
                      className={`
                        font-serif
                        text-lg
                        italic
                        text-[#A0A294]
                      `}
                    >
                      {value.number}
                    </span>
                  </div>

                  <h3
                    className={`
                      mt-10
                      font-serif
                      text-3xl
                      text-[#3C4339]
                    `}
                  >
                    {value.title}
                  </h3>

                  <p
                    className={`
                      mt-5
                      text-[15px]
                      leading-7
                      text-[#6A7064]
                    `}
                  >
                    {value.description}
                  </p>

                  <div
                    className={`
                      mt-auto
                      pt-9
                    `}
                  >
                    <div
                      className={`
                        h-px
                        w-10
                        bg-[#AEB0A0]
                        transition-all
                        duration-500
                        group-hover:w-16
                      `}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTANICAL BREAK
      ===================================================== */}
      <section
        className={`
          relative
          min-h-[620px]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
        `}
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F3ECE1]/10" />

        <div
          className={`
            relative
            z-10
            mx-auto
            flex
            min-h-[620px]
            max-w-7xl
            items-end
            px-5
            pb-10
            md:px-10
            md:pb-14
          `}
        >
          <Reveal className="w-full">
            <div
              className={`
                max-w-2xl
                rounded-[34px]
                border
                border-white/35
                bg-[#F5F0E7]/88
                p-8
                shadow-[0_18px_55px_rgba(65,60,50,0.08)]
                backdrop-blur-md
                md:p-12
              `}
            >
              <span
                className={`
                  inline-flex
                  rounded-full
                  border
                  border-[#BEB9AC]
                  bg-[#EEE8DE]/60
                  px-4
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.34em]
                  text-[#737A67]
                `}
              >
                Our Inspiration
              </span>

              <h2
                className={`
                  mt-7
                  font-serif
                  text-4xl
                  leading-tight
                  text-[#343B31]
                  md:text-5xl
                `}
              >
                Nature has always known how to keep things simple.
              </h2>

              <p
                className={`
                  mt-6
                  text-[17px]
                  leading-8
                  text-[#656B5F]
                  md:text-lg
                `}
              >
                Willow & Tallow is inspired by natural textures, botanical
                ingredients, old-world rituals, and the idea that everyday care
                should feel grounding rather than overwhelming.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          CLOSING STORY
      ===================================================== */}
      <section
        className={`
          bg-[#F5F0E7]
          px-5
          py-20
          md:px-10
          md:py-28
        `}
      >
        <Reveal>
          <div
            className={`
              mx-auto
              max-w-6xl
              rounded-[38px]
              border
              border-[#D5CEC2]
              bg-[#EEE8DE]
              px-7
              py-20
              text-center
              shadow-[0_15px_50px_rgba(65,60,50,0.05)]
              md:px-12
              md:py-24
            `}
          >
            <span
              className={`
                inline-flex
                rounded-full
                border
                border-[#C6C1B4]
                bg-[#F5F0E7]/60
                px-5
                py-2
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#797F6D]
              `}
            >
              Willow & Tallow
            </span>

            <h2
              className={`
                mx-auto
                mt-7
                max-w-4xl
                font-serif
                text-4xl
                leading-tight
                text-[#373D34]
                md:text-6xl
              `}
            >
              Skincare made to feel like a return to something familiar.
            </h2>

            <p
              className={`
                mx-auto
                mt-7
                max-w-2xl
                text-[17px]
                leading-8
                text-[#696F63]
                md:text-lg
              `}
            >
              Simple ingredients. Comforting rituals. Thoughtful care designed
              to make your routine feel a little slower and a little more
              intentional.
            </p>

            <Link
              href="/shop"
              className={`
                group
                mt-10
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#56604E]
                px-8
                py-4
                text-[9px]
                uppercase
                tracking-[0.27em]
                text-[#F7F2EA]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#454E40]
              `}
            >
              Explore the Collection

              <span
                className={`
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                `}
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          HERO ANIMATION
      ===================================================== */}
      <style jsx global>{`
        @keyframes heroFade {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}