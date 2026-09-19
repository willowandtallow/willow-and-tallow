"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";

const products = [
  {
    name: "Whipped Tallow Balm",
    subtitle: "Deep Nourishment",
    description:
      "A rich, comforting balm created for simple everyday moisture and nourishing care.",
    image: "/whipped-tallow-balm.png",
  },
  {
    name: "Tallow Lip Balm",
    subtitle: "Everyday Protection",
    description:
      "A simple everyday essential designed to keep lips feeling soft, smooth, and protected.",
    image: "/tallow-lip-balm.png",
  },
  {
    name: "Tallow Soap",
    subtitle: "Gentle Cleansing",
    description:
      "A thoughtfully made cleansing bar inspired by traditional ingredients and simple routines.",
    image: "/tallow-soap.png",
  },
];

const values = [
  {
    number: "01",
    title: "Simple",
    description:
      "Purposeful ingredients without unnecessary complexity.",
  },
  {
    number: "02",
    title: "Natural",
    description:
      "Inspired by traditional ingredients, botanical elements, and simple care.",
  },
  {
    number: "03",
    title: "Intentional",
    description:
      "Thoughtfully created for everyday rituals and lasting use.",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F5F0E7] text-[#343A31]">
      {/* HERO */}
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
          <div
            className={`
              hero-logo
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

          <div className="hero-tagline">
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

          <div className="hero-description">
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

          <div className="hero-button">
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
                bg-[#F7F1E7]/55
                px-7
                py-3.5
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-[#46503F]
                backdrop-blur-md
                transition-colors
                duration-500
                hover:bg-[#E9E3D8]/90
              `}
            >
              Discover the Collection

              <span
                className={`
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-1
                `}
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
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

      {/* FEATURED PRODUCT */}
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
                lg:grid-cols-[1.08fr_0.92fr]
              `}
            >
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
                    duration-[1600ms]
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:scale-[1.02]
                  `}
                />
              </div>

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
                    Featured Essential
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
                        rounded-[22px]
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

                      <p className="mt-2 font-serif text-lg text-[#4F574B]">
                        Soft & whipped
                      </p>
                    </div>

                    <div
                      className={`
                        rounded-[22px]
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

                      <p className="mt-2 font-serif text-lg text-[#4F574B]">
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
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-[#F7F2EA]
                      transition-colors
                      duration-500
                      hover:bg-[#414A3C]
                    `}
                  >
                    Explore the Collection

                    <span
                      className={`
                        transition-transform
                        duration-500
                        ease-out
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

      {/* PHILOSOPHY */}
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
          <Reveal className="h-full">
            <div
              className={`
                flex
                h-full
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
                shadow-[0_12px_40px_rgba(70,64,55,0.035)]
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

          <Reveal delay={25} className="h-full">
            <div
              className={`
                flex
                h-full
                min-h-[430px]
                items-center
                rounded-[34px]
                border
                border-[#D7D0C4]
                bg-[#E8E1D6]
                px-8
                py-16
                shadow-[0_12px_40px_rgba(70,64,55,0.035)]
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
                    text-[9px]
                    uppercase
                    tracking-[0.24em]
                    text-[#4C5547]
                    transition-colors
                    duration-500
                    hover:bg-[#F5F0E7]/70
                  `}
                >
                  Discover Our Approach

                  <span
                    className={`
                      transition-transform
                      duration-500
                      ease-out
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

      {/* COLLECTION */}
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

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <Reveal
                key={product.name}
                delay={index * 25}
                className="h-full"
              >
                <article
                  className={`
                    group
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-[#D5CEC2]
                    bg-[#F8F4EC]
                    p-3
                    shadow-[0_12px_40px_rgba(70,64,55,0.04)]
                    transition-shadow
                    duration-700
                    ease-out
                    hover:shadow-[0_22px_60px_rgba(70,64,55,0.085)]
                  `}
                >
                  <div
                    className={`
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      rounded-[25px]
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
                        duration-[1600ms]
                        ease-[cubic-bezier(0.16,1,0.3,1)]
                        group-hover:scale-[1.02]
                      `}
                    />
                  </div>

                  <div
                    className={`
                      flex
                      flex-1
                      flex-col
                      px-5
                      pb-7
                      pt-7
                    `}
                  >
                    <p
                      className={`
                        text-[9px]
                        uppercase
                        tracking-[0.3em]
                        text-[#888C7C]
                      `}
                    >
                      {product.subtitle}
                    </p>

                    <h3
                      className={`
                        mt-3
                        font-serif
                        text-[1.9rem]
                        leading-tight
                        text-[#394036]
                      `}
                    >
                      {product.name}
                    </h3>

                    <p
                      className={`
                        mt-4
                        text-[15px]
                        leading-7
                        text-[#696F63]
                      `}
                    >
                      {product.description}
                    </p>

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
                          px-5
                          py-3
                          text-[9px]
                          uppercase
                          tracking-[0.25em]
                          text-[#50594A]
                          transition-colors
                          duration-500
                          hover:bg-[#E9E3D8]
                        `}
                      >
                        Explore

                        <span
                          className={`
                            transition-transform
                            duration-500
                            ease-out
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

          <Reveal>
            <div className="mt-14 text-center">
              <Link
                href="/shop"
                className={`
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#596251]
                  px-8
                  py-4
                  text-[9px]
                  uppercase
                  tracking-[0.27em]
                  text-[#F7F2EA]
                  transition-colors
                  duration-500
                  hover:bg-[#485143]
                `}
              >
                View the Collection

                <span
                  className={`
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-x-1
                  `}
                >
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BRAND STORY */}
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
                  rounded-[30px]
                  border
                  border-white/30
                  bg-[#F4EFE6]/88
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
                    bg-[#F5F0E7]/30
                    px-6
                    py-3
                    text-[9px]
                    uppercase
                    tracking-[0.24em]
                    text-[#4C5547]
                    transition-colors
                    duration-500
                    hover:bg-[#F5F0E7]/70
                  `}
                >
                  Our Story

                  <span
                    className={`
                      transition-transform
                      duration-500
                      ease-out
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
      </section>

      {/* VALUES */}
      <section
        className={`
          bg-[#ECE6DC]
          px-5
          py-24
          md:px-10
          md:py-28
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
                  bg-[#F5F0E7]/60
                  px-5
                  py-2
                  text-[9px]
                  uppercase
                  tracking-[0.36em]
                  text-[#7C8270]
                `}
              >
                At Our Core
              </span>

              <h2
                className={`
                  mt-7
                  font-serif
                  text-4xl
                  leading-tight
                  text-[#373E34]
                  md:text-5xl
                `}
              >
                Made with intention.
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
                A few simple ideas guide the way we think about skincare.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal
                key={value.title}
                delay={index * 25}
                className="h-full"
              >
                <div
                  className={`
                    group
                    flex
                    h-full
                    min-h-[300px]
                    flex-col
                    rounded-[30px]
                    border
                    border-[#D2CBC0]
                    bg-[#F5F0E7]/70
                    p-8
                    shadow-[0_10px_35px_rgba(70,64,55,0.035)]
                    transition-shadow
                    duration-700
                    ease-out
                    hover:shadow-[0_20px_50px_rgba(70,64,55,0.075)]
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

                    <span className="font-serif text-lg italic text-[#A0A294]">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-10 font-serif text-3xl text-[#3A4036]">
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

                  <div className="mt-auto pt-9">
                    <div
                      className={`
                        h-px
                        w-10
                        bg-[#AEB0A0]
                        transition-[width]
                        duration-700
                        ease-out
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

      {/* JOURNAL */}
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
              grid
              max-w-6xl
              overflow-hidden
              rounded-[38px]
              border
              border-[#D5CEC2]
              bg-[#EEE8DE]
              shadow-[0_15px_50px_rgba(65,60,50,0.05)]
              lg:grid-cols-[0.85fr_1.15fr]
            `}
          >
            <div
              className={`
                flex
                items-center
                justify-center
                bg-[#E7E0D5]
                px-8
                py-16
                text-center
                md:px-12
                md:py-20
              `}
            >
              <div>
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
                  The Journal
                </span>

                <p
                  className={`
                    mt-7
                    font-serif
                    text-2xl
                    italic
                    leading-relaxed
                    text-[#586052]
                  `}
                >
                  Notes on skin, ingredients, rituals, and slower living.
                </p>
              </div>
            </div>

            <div
              className={`
                flex
                items-center
                px-8
                py-16
                md:px-14
                md:py-20
              `}
            >
              <div className="max-w-xl">
                <h2
                  className={`
                    font-serif
                    text-4xl
                    leading-tight
                    text-[#373D34]
                    md:text-5xl
                  `}
                >
                  A little more to explore.
                </h2>

                <p
                  className={`
                    mt-6
                    text-[17px]
                    leading-8
                    text-[#686E62]
                  `}
                >
                  Explore thoughtful reading on traditional ingredients,
                  simple skincare, everyday rituals, and the ideas that inspire
                  Willow & Tallow.
                </p>

                <Link
                  href="/journal"
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
                    text-[9px]
                    uppercase
                    tracking-[0.24em]
                    text-[#4C5547]
                    transition-colors
                    duration-500
                    hover:bg-[#F5F0E7]/70
                  `}
                >
                  Read the Journal

                  <span
                    className={`
                      transition-transform
                      duration-500
                      ease-out
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
      </section>

      {/* FINAL CTA */}
      <section
        className={`
          bg-[#F5F0E7]
          px-5
          pb-28
          pt-4
          md:px-10
          md:pb-32
          md:pt-8
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
              Thoughtful skincare inspired by simple ingredients, traditional
              care, and the beauty of everyday rituals.
            </p>

            <div
              className={`
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              `}
            >
              <Link
                href="/shop"
                className={`
                  group
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
                  transition-colors
                  duration-500
                  hover:bg-[#454E40]
                `}
              >
                View the Collection

                <span
                  className={`
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-x-1
                  `}
                >
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className={`
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-[#68705E]
                  px-8
                  py-4
                  text-[9px]
                  uppercase
                  tracking-[0.27em]
                  text-[#46503F]
                  transition-colors
                  duration-500
                  hover:bg-[#F5F0E7]/70
                `}
              >
                Our Story

                <span
                  className={`
                    transition-transform
                    duration-500
                    ease-out
                    group-hover:translate-x-1
                  `}
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HERO ANIMATION */}
      <style jsx global>{`
        @keyframes willowHeroReveal {
          0% {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
            filter: blur(2px);
          }

          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            filter: blur(0);
          }
        }

        .hero-logo {
          opacity: 0;
          animation: willowHeroReveal 1.4s
            cubic-bezier(0.16, 1, 0.3, 1) 0.05s forwards;
        }

        .hero-tagline {
          opacity: 0;
          animation: willowHeroReveal 1.35s
            cubic-bezier(0.16, 1, 0.3, 1) 0.16s forwards;
        }

        .hero-description {
          opacity: 0;
          animation: willowHeroReveal 1.35s
            cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;
        }

        .hero-button {
          opacity: 0;
          animation: willowHeroReveal 1.35s
            cubic-bezier(0.16, 1, 0.3, 1) 0.34s forwards;
        }

        html {
          scroll-behavior: smooth;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-logo,
          .hero-tagline,
          .hero-description,
          .hero-button {
            opacity: 1;
            animation: none !important;
            transform: none !important;
            filter: none !important;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}