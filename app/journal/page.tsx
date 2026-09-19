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
    <main className="overflow-x-hidden bg-[#F5F0E7] text-[#343A31]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section
        className={`
          relative
          min-h-[58vh]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
        `}
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F6F0E6]/20" />

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
            min-h-[58vh]
            max-w-7xl
            items-center
            justify-center
            px-6
            pb-16
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
                Willow & Tallow
              </span>
            </div>

            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.2s_both]">
              <h1
                className={`
                  mt-7
                  font-serif
                  text-5xl
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-[#363D33]
                  sm:text-6xl
                  md:text-7xl
                `}
              >
                The Journal
              </h1>
            </div>

            <div className="animate-[heroFade_1100ms_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
              <p
                className={`
                  mx-auto
                  mt-7
                  max-w-xl
                  font-serif
                  text-xl
                  italic
                  leading-8
                  text-[#65705D]
                  md:text-2xl
                `}
              >
                Notes on skin, ingredients, rituals, and slower living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNAL INTRO
      ===================================================== */}
      <section
        className={`
          bg-[#F5F0E7]
          px-6
          pb-20
          pt-10
          text-center
          md:px-10
          md:pb-24
          md:pt-14
        `}
      >
        <Reveal>
          <div className="mx-auto max-w-3xl">
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
                text-[#7C8270]
              `}
            >
              From the Journal
            </span>

            <h2
              className={`
                mt-7
                font-serif
                text-4xl
                leading-tight
                text-[#383E35]
                md:text-5xl
              `}
            >
              A slower place to learn and explore.
            </h2>

            <p
              className={`
                mx-auto
                mt-6
                max-w-2xl
                text-[17px]
                leading-8
                text-[#696F63]
              `}
            >
              Thoughtful notes on traditional ingredients, simple skincare,
              everyday rituals, and the philosophy behind Willow & Tallow.
            </p>

            <div className="mx-auto mt-10 h-px w-14 bg-[#A8AA99]" />
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FEATURED ARTICLE
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
            <article
              className={`
                grid
                overflow-hidden
                rounded-[38px]
                border
                border-[#D1C8BA]
                bg-[#F1EBE2]
                shadow-[0_18px_60px_rgba(71,64,53,0.07)]
                lg:grid-cols-[1.08fr_0.92fr]
              `}
            >
              {/* FEATURED IMAGE */}
              <div
                className={`
                  group
                  relative
                  min-h-[430px]
                  overflow-hidden
                  sm:min-h-[520px]
                  lg:min-h-[620px]
                `}
              >
                <Image
                  src="/whipped-tallow-balm.png"
                  alt="Willow & Tallow Whipped Tallow Balm"
                  fill
                  priority
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

              {/* FEATURED CONTENT */}
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
                      text-[#7D826F]
                    `}
                  >
                    Featured Reading
                  </span>

                  <h2
                    className={`
                      mt-7
                      font-serif
                      text-4xl
                      leading-[1.08]
                      tracking-[-0.025em]
                      text-[#353B32]
                      md:text-5xl
                    `}
                  >
                    What Is Tallow Skincare?
                  </h2>

                  <p
                    className={`
                      mt-6
                      text-[17px]
                      leading-8
                      text-[#62685D]
                    `}
                  >
                    Tallow has been used in traditional skin preparations for
                    generations. Explore what it is, why it is used, and how it
                    fits into a simpler approach to everyday skincare.
                  </p>

                  <Link
                    href="/journal/what-is-tallow-skincare"
                    className={`
                      group
                      mt-8
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      bg-[#505A4A]
                      px-7
                      py-4
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[#F7F2EA]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#414A3C]
                    `}
                  >
                    Read the Story

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
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          ARTICLES
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
            <div className="mb-14 text-center">
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
                  text-[#7B816F]
                `}
              >
                From the Journal
              </span>

              <h2
                className={`
                  mt-7
                  font-serif
                  text-4xl
                  text-[#373E34]
                  md:text-5xl
                `}
              >
                A little more to explore.
              </h2>

              <p
                className={`
                  mx-auto
                  mt-5
                  max-w-xl
                  text-[16px]
                  leading-7
                  text-[#6B7065]
                `}
              >
                Thoughtful reading for slower routines and more intentional
                everyday care.
              </p>
            </div>
          </Reveal>

          {/* ARTICLE CARDS */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal
                key={article.title}
                delay={(index % 3) * 100}
                className="h-full"
              >
                <article
                  className={`
                    group
                    flex
                    h-full
                    min-h-[390px]
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
                  <div className="flex items-center justify-between gap-4">
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
                      {article.category}
                    </span>

                    <span
                      className={`
                        font-serif
                        text-lg
                        italic
                        text-[#A0A294]
                      `}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <h3
                    className={`
                      mt-8
                      max-w-lg
                      font-serif
                      text-[1.8rem]
                      leading-[1.15]
                      text-[#3A4137]
                    `}
                  >
                    {article.title}
                  </h3>

                  <p
                    className={`
                      mt-5
                      max-w-lg
                      text-[15px]
                      leading-7
                      text-[#696F63]
                    `}
                  >
                    {article.description}
                  </p>

                  <div className="mt-auto pt-8">
                    <Link
                      href={article.href}
                      className={`
                        group/link
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-[#8A9080]
                        px-5
                        py-3
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-[#50594A]
                        transition-all
                        duration-300
                        hover:bg-[#E9E3D8]
                      `}
                    >
                      Read Article

                      <span
                        className={`
                          transition-transform
                          duration-300
                          group-hover/link:translate-x-1
                        `}
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JOURNAL PHILOSOPHY
      ===================================================== */}
      <section
        className={`
          bg-[#ECE6DC]
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
              bg-[#F5F0E7]/65
              px-7
              py-20
              text-center
              shadow-[0_15px_50px_rgba(65,60,50,0.04)]
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
                bg-[#EEE8DE]/60
                px-5
                py-2
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#7B806F]
              `}
            >
              A Slower Read
            </span>

            <h2
              className={`
                mx-auto
                mt-7
                max-w-3xl
                font-serif
                text-4xl
                leading-tight
                text-[#373E34]
                md:text-5xl
              `}
            >
              Skincare does not have to feel complicated.
            </h2>

            <p
              className={`
                mx-auto
                mt-7
                max-w-2xl
                text-[17px]
                leading-8
                text-[#676D61]
                md:text-lg
              `}
            >
              The Journal is a place to share what inspires Willow & Tallow—from
              traditional ingredients and simple rituals to thoughtful ways of
              caring for your skin.
            </p>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          CTA
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
                text-[#7C826F]
              `}
            >
              From Ritual to Routine
            </span>

            <h2
              className={`
                mx-auto
                mt-7
                max-w-3xl
                font-serif
                text-4xl
                leading-tight
                text-[#373E34]
                md:text-5xl
              `}
            >
              Discover what&apos;s coming to Willow & Tallow.
            </h2>

            <p
              className={`
                mx-auto
                mt-6
                max-w-xl
                text-[17px]
                leading-8
                text-[#686E62]
              `}
            >
              Explore the collection and get a closer look at the skincare
              essentials currently in the works.
            </p>

            <Link
              href="/shop"
              className={`
                group
                mt-9
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
              View the Collection

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