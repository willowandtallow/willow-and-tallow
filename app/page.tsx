"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  {
    name: "Whipped Tallow Balm",
    subtitle: "Deep Nourishment",
    image: "/whipped-tallow-balm.png",
  },
  {
    name: "Tallow Lip Balm",
    subtitle: "Everyday Protection",
    image: "/tallow-lip-balm.png",
  },
  {
    name: "Tallow Soap",
    subtitle: "Gentle Cleansing",
    image: "/tallow-soap.png",
  },
];

/* =========================================================
   SCROLL REVEAL
========================================================= */

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F5F0E7] text-[#343A31]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className={`
          relative
          min-h-[90vh]
          overflow-hidden
          bg-cover
          bg-center
          bg-no-repeat
        `}
        style={{
          backgroundImage: "url('/willow-background.png')",
        }}
      >
        <div className="absolute inset-0 bg-[#F7F1E7]/10" />

        <div
          className={`
            absolute
            inset-x-0
            bottom-0
            h-56
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
            min-h-[90vh]
            w-full
            max-w-[1500px]
            flex-col
            items-center
            justify-center
            px-5
            pb-24
            pt-28
            text-center
            sm:px-6
            md:pb-28
          `}
        >

          {/* LOGO */}
          <div
            className={`
              relative
              h-[230px]
              w-full
              sm:h-[270px]
              md:h-[310px]
              lg:h-[340px]
              xl:h-[365px]
            `}
          >
            <Image
              src="/willow-tallow-logo.PNG"
              alt="Willow & Tallow"
              fill
              priority
              sizes="100vw"
              className={`
                object-contain
                scale-[1.22]
                sm:scale-[1.35]
                md:scale-[1.48]
                lg:scale-[1.58]
                xl:scale-[1.68]
              `}
            />
          </div>

          <div className="animate-[heroFade_1000ms_cubic-bezier(0.16,1,0.3,1)_0.10s_both]">
            <p
              className={`
                font-serif
                text-xl
                italic
                tracking-[0.025em]
                text-[#69715F]
                sm:text-2xl
                md:text-[1.7rem]
              `}
            >
              Rooted in Nature. Crafted with Tallow.
            </p>
          </div>

          <div className="animate-[heroFade_1000ms_cubic-bezier(0.16,1,0.3,1)_0.20s_both]">
            <p
              className={`
                mx-auto
                mt-6
                max-w-2xl
                text-[16px]
                leading-7
                text-[#5E6556]
                sm:text-[17px]
                sm:leading-8
                md:text-lg
              `}
            >
              Simple, nourishing skincare made with thoughtfully selected
              ingredients and a slower approach to everyday care.
            </p>
          </div>

          <div className="animate-[heroFade_1000ms_cubic-bezier(0.16,1,0.3,1)_0.30s_both]">
            <Link
              href="/shop"
              className={`
                group
                mt-9
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-[#69715F]/60
                bg-[#F7F1E7]/50
                px-7
                py-3.5
                text-[10px]
                uppercase
                tracking-[0.28em]
                text-[#46503F]
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E9E3D8]/90
              `}
            >
              Discover the Collection

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
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className={`
          bg-[#F5F0E7]
          px-5
          pb-28
          pt-16
          md:px-10
          md:pb-36
          md:pt-20
        `}
      >
        <Reveal>
          <div className="mx-auto max-w-4xl text-center">

            <span
              className={`
                inline-flex
                rounded-full
                border
                border-[#B9B8A8]/70
                bg-[#EEE8DE]/70
                px-5
                py-2
                text-[9px]
                uppercase
                tracking-[0.36em]
                text-[#7A806E]
              `}
            >
              Thoughtful by Nature
            </span>

            <h2
              className={`
                mx-auto
                mt-7
                max-w-3xl
                font-serif
                text-4xl
                leading-[1.12]
                text-[#363C33]
                md:text-5xl
                lg:text-[3.4rem]
              `}
            >
              A return to simpler skincare.
            </h2>

            <p
              className={`
                mx-auto
                mt-7
                max-w-2xl
                text-[17px]
                leading-8
                text-[#6A7064]
                md:text-lg
              `}
            >
              Inspired by traditional ingredients and everyday rituals,
              Willow & Tallow creates nourishing skincare designed to feel
              uncomplicated, comforting, and intentional.
            </p>

            <div className="mx-auto mt-11 h-px w-14 bg-[#A8AA99]" />
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          FEATURED PRODUCT
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
                rounded-[36px]
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

              {/* FEATURED CONTENT */}
              <div
                className={`
                  flex
                  items-center
                  px-7
                  py-12
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
                    Featured Product
                  </span>

                  <h2
                    className={`
                      mt-7
                      font-serif
                      text-5xl
                      leading-[1.02]
                      tracking-[-0.03em]
                      text-[#353B32]
                      md:text-6xl
                    `}
                  >
                    Whipped Tallow Balm
                  </h2>

                  <p
                    className={`
                      mt-4
                      font-serif
                      text-xl
                      italic
                      text-[#747B68]
                    `}
                  >
                    Nourish · Protect · Restore
                  </p>

                  <p
                    className={`
                      mt-7
                      text-[17px]
                      leading-8
                      text-[#62685D]
                    `}
                  >
                    A rich, comforting balm created to deeply nourish and
                    soften the skin. Its whipped texture melts effortlessly
                    into the skin for simple, everyday moisture.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div
                      className={`
                        rounded-[20px]
                        border
                        border-[#D3CBC0]
                        bg-[#F8F3EB]/65
                        p-5
                      `}
                    >
                      <p
                        className={`
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#8B8E7F]
                        `}
                      >
                        Texture
                      </p>

                      <p
                        className={`
                          mt-2
                          font-serif
                          text-lg
                          text-[#4F574B]
                        `}
                      >
                        Soft & whipped
                      </p>
                    </div>

                    <div
                      className={`
                        rounded-[20px]
                        border
                        border-[#D3CBC0]
                        bg-[#F8F3EB]/65
                        p-5
                      `}
                    >
                      <p
                        className={`
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#8B8E7F]
                        `}
                      >
                        Ritual
                      </p>

                      <p
                        className={`
                          mt-2
                          font-serif
                          text-lg
                          text-[#4F574B]
                        `}
                      >
                        Deep nourishment
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/shop"
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
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#F7F2EA]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#414A3C]
                    `}
                  >
                    Shop Whipped Tallow Balm

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
          py-20
          md:px-10
          md:py-28
        `}
      >
        <div
          className={`
            mx-auto
            grid
            max-w-7xl
            gap-5
            lg:grid-cols-2
          `}
        >

          <Reveal>
            <div
              className={`
                flex
                min-h-[430px]
                items-center
                justify-center
                rounded-[34px]
                border
                border-[#D7D0C4]
                bg-[#EEE8DE]
                px-8
                py-16
                text-center
              `}
            >
              <div className="max-w-md">

                <span
                  className={`
                    inline-flex
                    rounded-full
                    border
                    border-[#C8C3B6]
                    bg-[#F5F0E7]/60
                    px-4
                    py-2
                    text-[9px]
                    uppercase
                    tracking-[0.34em]
                    text-[#838878]
                  `}
                >
                  Our Philosophy
                </span>

                <h2
                  className={`
                    mt-7
                    font-serif
                    text-4xl
                    leading-[1.12]
                    text-[#3B4137]
                    md:text-5xl
                  `}
                >
                  Fewer ingredients.
                  <br />
                  More intention.
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal delay={130}>
            <div
              className={`
                flex
                min-h-[430px]
                items-center
                rounded-[34px]
                border
                border-[#D7D0C4]
                bg-[#E8E1D6]
                px-8
                py-16
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
                    border-[#C5BFB2]
                    bg-[#F5F0E7]/50
                    px-4
                    py-2
                    text-[9px]
                    uppercase
                    tracking-[0.34em]
                    text-[#7C816F]
                  `}
                >
                  Thoughtfully Made
                </span>

                <p
                  className={`
                    mt-7
                    font-serif
                    text-2xl
                    leading-relaxed
                    text-[#454C40]
                    md:text-3xl
                  `}
                >
                  We believe skincare should feel simple, familiar, and
                  beautifully uncomplicated.
                </p>

                <p
                  className={`
                    mt-6
                    text-[17px]
                    leading-8
                    text-[#666C60]
                  `}
                >
                  Our approach is rooted in traditional ingredients, gentle
                  rituals, and choosing only what serves a purpose. Nothing
                  excessive. Nothing added simply for the sake of more.
                </p>

                <Link
                  href="/about"
                  className={`
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-[#68705E]
                    px-6
                    py-3
                    text-[10px]
                    uppercase
                    tracking-[0.24em]
                    text-[#4C5547]
                    transition-all
                    duration-300
                    hover:bg-[#F5F0E7]/70
                  `}
                >
                  Discover Our Approach

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
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section
        className={`
          bg-[#EEE8DE]
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
                  bg-[#F5F0E7]/60
                  px-5
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#7C8270]
                `}
              >
                The Collection
              </span>

              <h2
                className={`
                  mt-7
                  font-serif
                  text-4xl
                  leading-tight
                  text-[#363C33]
                  md:text-5xl
                `}
              >
                Everyday essentials, made simply.
              </h2>

              <p
                className={`
                  mx-auto
                  mt-5
                  max-w-xl
                  text-[17px]
                  leading-7
                  text-[#6B7065]
                `}
              >
                A small collection of nourishing essentials created for
                simple, intentional everyday care.
              </p>
            </div>
          </Reveal>

          {/* PRODUCT CARDS */}

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.name}
                delay={index * 100}
                className="h-full"
              >
                <article
                  className={`
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-[#D5CEC2]
                    bg-[#F8F4EC]
                    p-3
                    shadow-[0_12px_40px_rgba(70,64,55,0.04)]
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-[0_22px_60px_rgba(70,64,55,0.10)]
                  `}
                >

                  {/* IMAGE */}
                  <div
                    className={`
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      rounded-[24px]
                      bg-[#E5DED2]
                    `}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={`
                        object-cover
                        transition-transform
                        duration-[1000ms]
                        ease-out
                        group-hover:scale-[1.04]
                      `}
                    />
                  </div>

                  {/* PRODUCT INFO */}
                  <div
                    className={`
                      flex
                      flex-1
                      flex-col
                      items-center
                      px-4
                      pb-7
                      pt-7
                      text-center
                    `}
                  >
                    <p
                      className={`
                        text-[9px]
                        uppercase
                        tracking-[0.32em]
                        text-[#888C7C]
                      `}
                    >
                      {product.subtitle}
                    </p>

                    <h3
                      className={`
                        mt-4
                        font-serif
                        text-[1.8rem]
                        leading-tight
                        text-[#394036]
                      `}
                    >
                      {product.name}
                    </h3>

                    <div className="mt-auto pt-7">
                      <Link
                        href="/shop"
                        className={`
                          group/button
                          inline-flex
                          items-center
                          gap-3
                          rounded-full
                          border
                          border-[#8A9080]
                          px-6
                          py-3
                          text-[9px]
                          uppercase
                          tracking-[0.27em]
                          text-[#50594A]
                          transition-all
                          duration-300
                          hover:bg-[#E9E3D8]
                        `}
                      >
                        Shop Product

                        <span
                          className={`
                            transition-transform
                            duration-300
                            group-hover/button:translate-x-1
                          `}
                        >
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-14 text-center">
              <Link
                href="/shop"
                className={`
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#596251]
                  px-8
                  py-4
                  text-[10px]
                  uppercase
                  tracking-[0.27em]
                  text-[#F7F2EA]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#485143]
                `}
              >
                View the Full Collection
                <span>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          BOTANICAL / BRAND STORY
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
              relative
              mx-auto
              min-h-[620px]
              max-w-7xl
              overflow-hidden
              rounded-[38px]
              bg-cover
              bg-center
              bg-no-repeat
              shadow-[0_20px_60px_rgba(65,59,50,0.08)]
            `}
            style={{
              backgroundImage: "url('/willow-background.png')",
            }}
          >
            <div className="absolute inset-0 bg-[#F4EEE4]/5" />

            <div
              className={`
                relative
                z-10
                flex
                min-h-[620px]
                items-end
                p-5
                sm:p-8
                md:p-12
              `}
            >
              <div
                className={`
                  max-w-xl
                  rounded-[28px]
                  border
                  border-white/30
                  bg-[#F4EFE6]/85
                  p-8
                  shadow-[0_15px_45px_rgba(60,55,48,0.08)]
                  backdrop-blur-md
                  md:p-11
                `}
              >

                <span
                  className={`
                    inline-flex
                    rounded-full
                    border
                    border-[#BFC0B0]
                    bg-[#F7F2EA]/50
                    px-4
                    py-2
                    text-[9px]
                    uppercase
                    tracking-[0.34em]
                    text-[#757C69]
                  `}
                >
                  Our Ritual
                </span>

                <h2
                  className={`
                    mt-6
                    font-serif
                    text-4xl
                    leading-tight
                    text-[#353C32]
                    md:text-5xl
                  `}
                >
                  Care that feels a little slower.
                </h2>

                <p
                  className={`
                    mt-5
                    text-[17px]
                    leading-8
                    text-[#676D61]
                  `}
                >
                  Thoughtful ingredients, comforting textures, and products
                  designed to make everyday skincare feel like a moment worth
                  slowing down for.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}

      <section
        className={`
          bg-[#ECE6DC]
          px-5
          py-24
          md:px-10
          md:py-28
        `}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">

            <Reveal>
              <div
                className={`
                  rounded-[28px]
                  border
                  border-[#D2CBC0]
                  bg-[#F5F0E7]/65
                  px-8
                  py-10
                  text-center
                `}
              >
                <div
                  className={`
                    mx-auto
                    mb-6
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#727866]
                  `}
                />

                <h3 className="font-serif text-2xl text-[#3A4036]">
                  Simple
                </h3>

                <p className="mt-4 leading-7 text-[#6A7064]">
                  Purposeful ingredients without unnecessary complexity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div
                className={`
                  rounded-[28px]
                  border
                  border-[#D2CBC0]
                  bg-[#F5F0E7]/65
                  px-8
                  py-10
                  text-center
                `}
              >
                <div
                  className={`
                    mx-auto
                    mb-6
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#727866]
                  `}
                />

                <h3 className="font-serif text-2xl text-[#3A4036]">
                  Natural
                </h3>

                <p className="mt-4 leading-7 text-[#6A7064]">
                  Inspired by traditional ingredients and simple care.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div
                className={`
                  rounded-[28px]
                  border
                  border-[#D2CBC0]
                  bg-[#F5F0E7]/65
                  px-8
                  py-10
                  text-center
                `}
              >
                <div
                  className={`
                    mx-auto
                    mb-6
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#727866]
                  `}
                />

                <h3 className="font-serif text-2xl text-[#3A4036]">
                  Intentional
                </h3>

                <p className="mt-4 leading-7 text-[#6A7064]">
                  Thoughtfully created for everyday rituals and lasting use.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
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
                text-[#7B816E]
              `}
            >
              Willow & Tallow
            </span>

            <h2
              className={`
                mx-auto
                mt-7
                max-w-3xl
                font-serif
                text-4xl
                leading-tight
                text-[#363C33]
                md:text-6xl
              `}
            >
              Made for the moments you slow down.
            </h2>

            <p
              className={`
                mx-auto
                mt-7
                max-w-2xl
                text-[17px]
                leading-8
                text-[#686E62]
                md:text-lg
              `}
            >
              Thoughtful skincare inspired by simple ingredients,
              traditional care, and the beauty of everyday rituals.
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
                text-[10px]
                uppercase
                tracking-[0.27em]
                text-[#F7F2EA]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#454E40]
              `}
            >
              Shop Willow & Tallow

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
          ANIMATIONS
      ===================================================== */}

      <style jsx global>{`
        @keyframes heroFade {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}